import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";
import { CONTACT_EMAILS } from "@/config/site";

const contactPayloadSchema = z.object({
  fullName: z.string().trim().min(2),
  company: z.string().trim().optional().default(""),
  email: z.string().trim().email(),
  phone: z.string().trim().optional().default(""),
  subject: z.string().trim().min(1),
  message: z.string().trim().min(10),
  submittedFrom: z.string().trim().min(1),
  honeypot: z.string().optional().default(""),
});

export type ContactPayload = z.infer<typeof contactPayloadSchema>;

type EnvConfig = {
  SMTP_HOST: string;
  SMTP_PORT: number;
  SMTP_SECURE: boolean;
  SMTP_USER: string;
  SMTP_PASS: string;
  SMTP_FROM: string;
};

function readEnv(): EnvConfig {
  const get = (k: string) => {
    const v = process.env[k];
    if (!v) throw new Error(`Missing required env var: ${k}`);
    return v;
  };

  const portRaw = get("SMTP_PORT");
  const port = Number(portRaw);
  if (!Number.isFinite(port)) throw new Error("SMTP_PORT must be a number");

  const secure = (process.env.SMTP_SECURE ?? "").toLowerCase() === "true";

  return {
    SMTP_HOST: get("SMTP_HOST"),
    SMTP_PORT: port,
    SMTP_SECURE: secure,
    SMTP_USER: get("SMTP_USER"),
    SMTP_PASS: get("SMTP_PASS"),
    SMTP_FROM: get("SMTP_FROM"),
  };
}

let cachedTransporter: Transporter | null = null;
function getTransporter(): Transporter {
  if (cachedTransporter) return cachedTransporter;
  const env = readEnv();
  cachedTransporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    secure: env.SMTP_SECURE,
    auth: { user: env.SMTP_USER, pass: env.SMTP_PASS },
  });
  return cachedTransporter;
}

type RateLimitKey = string;
type RateLimitEntry = { count: number; resetAtMs: number };
const rateLimitMap = new Map<RateLimitKey, RateLimitEntry>();

function nowMs() {
  return Date.now();
}

function rateLimitOrThrow(key: RateLimitKey, max: number, windowMs: number) {
  const t = nowMs();
  const existing = rateLimitMap.get(key);
  if (!existing || existing.resetAtMs <= t) {
    rateLimitMap.set(key, { count: 1, resetAtMs: t + windowMs });
    return;
  }
  if (existing.count >= max) {
    throw new Error("Too many requests. Please wait a few minutes and try again.");
  }
  existing.count += 1;
}

function formatAdminEmail(payload: ContactPayload, submittedAt: Date) {
  const lines = [
    "New Website Enquiry",
    "",
    `Name: ${payload.fullName}`,
    `Company: ${payload.company ?? ""}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone ?? ""}`,
    `Subject: ${payload.subject}`,
    "Message:",
    payload.message,
    "",
    `Submitted From: ${payload.submittedFrom}`,
    `Submitted At: ${submittedAt.toISOString()}`,
    "",
    "Website: Niaga Prestasi",
    "",
  ];
  return lines.join("\n");
}

function formatAutoReply() {
  return [
    "Thank you for contacting Niaga Prestasi.",
    "",
    "We have successfully received your enquiry.",
    "",
    "Our team will review your request and get back to you as soon as possible.",
    "",
    "Regards,",
    "Niaga Prestasi Sdn Bhd",
    "",
  ].join("\n");
}

async function recordInternalEnquiry(_payload: ContactPayload) {
  // Intentionally a no-op for now.
  // This is an extension point for a future admin panel integration.
}

export const submitContactEnquiry = createServerFn({ method: "POST" })
  .validator((input: unknown) => contactPayloadSchema.parse(input))
  .handler(async ({ data }) => {
    // Honeypot spam check
    if (data.honeypot && data.honeypot.trim().length > 0) {
      return { ok: true as const };
    }

    // Rate limit (IP not available here reliably; use email + subject as key)
    rateLimitOrThrow(`contact:${data.email.toLowerCase()}`, 5, 10 * 60 * 1000);

    const submittedAt = new Date();
    const env = readEnv();
    const transporter = getTransporter();

    // Admin email (To + CC)
    await transporter.sendMail({
      from: env.SMTP_FROM,
      to: CONTACT_EMAILS.primary,
      cc: CONTACT_EMAILS.secondary,
      replyTo: data.email,
      subject: `New Website Enquiry — ${data.subject}`,
      text: formatAdminEmail(data, submittedAt),
    });

    // Customer auto-reply
    await transporter.sendMail({
      from: env.SMTP_FROM,
      to: data.email,
      subject: "Thank you for contacting Niaga Prestasi",
      text: formatAutoReply(),
    });

    await recordInternalEnquiry(data);

    return { ok: true as const };
  });

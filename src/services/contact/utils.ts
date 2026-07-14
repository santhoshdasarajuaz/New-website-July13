import { CONTACT_CONFIG } from "@/config/contact";
import type { ContactEnquiry, ContactSubmitFailure, ContactSubmitResult } from "../types";

const isDev = import.meta.env.DEV;

export function buildMailtoFallback(enquiry: ContactEnquiry): string {
  const { primary, secondary } = CONTACT_CONFIG.recipients;
  const body = [
    enquiry.message,
    "",
    "---",
    `Name: ${enquiry.fullName}`,
    enquiry.company ? `Company: ${enquiry.company}` : null,
    `Email: ${enquiry.email}`,
    enquiry.phone ? `Phone: ${enquiry.phone}` : null,
    enquiry.submittedFrom ? `Page: ${enquiry.submittedFrom}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  return `mailto:${primary}?cc=${encodeURIComponent(secondary)}&subject=${encodeURIComponent(
    `${CONTACT_CONFIG.subjectPrefix} ${enquiry.subject}`,
  )}&body=${encodeURIComponent(body)}`;
}

export function failure(
  code: ContactSubmitFailure["code"],
  message: string,
  enquiry: ContactEnquiry,
  extras?: Partial<Pick<ContactSubmitFailure, "details" | "provider" | "httpStatus">>,
): ContactSubmitResult {
  if (isDev && extras?.details) {
    console.error("[contact]", extras.provider ?? "provider", code, extras.details);
  }
  return {
    ok: false,
    code,
    message,
    mailtoHref: buildMailtoFallback(enquiry),
    ...extras,
  };
}

/** fetch with AbortController timeout */
export async function fetchWithTimeout(
  input: RequestInfo | URL,
  init: RequestInit | undefined,
  timeoutMs: number,
): Promise<Response> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    return await fetch(input, { ...init, signal: ctrl.signal });
  } finally {
    clearTimeout(timer);
  }
}

export function sanitizePlainText(value: string, max = 5000): string {
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim().slice(0, max);
}

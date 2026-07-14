import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { CONTACT_CONFIG } from "@/config/contact";
import { submitContactEnquiry } from "@/services/contact";

const subjects = [
  "IT Services",
  "Training Programs",
  "Courses",
  "Talent & Staffing",
  "Banking / Insurance Technology",
  "General Inquiry",
];

const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name"),
  company: z.string().trim().optional(),
  email: z.string().trim().email("Please enter a valid email"),
  phone: z.string().trim().optional(),
  subject: z.string().trim().min(1, "Please select a subject"),
  message: z.string().trim().min(10, "Please enter a message (at least 10 characters)"),
});

/**
 * Contact / Get Started form.
 * Calls `submitContactEnquiry` only — provider is chosen in `src/config/contact.ts`.
 */
export function ContactForm({ defaultSubject }: { defaultSubject?: string }) {
  const [subject, setSubject] = useState(defaultSubject || "");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMessage, setErrorMessage] = useState("");
  const [mailtoHref, setMailtoHref] = useState<string | undefined>();

  const { primary, secondary } = CONTACT_CONFIG.recipients;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const parsed = contactSchema.safeParse({
      fullName: fd.get("fullName"),
      company: fd.get("company"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      subject: fd.get("subject"),
      message: fd.get("message"),
    });

    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !errs[key]) errs[key] = issue.message;
      }
      setErrors(errs);
      return;
    }

    setErrors({});
    setErrorMessage("");
    setMailtoHref(undefined);
    setStatus("sending");

    const result = await submitContactEnquiry({
      ...parsed.data,
      company: parsed.data.company ? String(parsed.data.company) : "",
      phone: parsed.data.phone ? String(parsed.data.phone) : "",
      submittedFrom: window.location.pathname,
      honeypot: String(fd.get("website") ?? ""),
    });

    if (result.ok) {
      setStatus("sent");
      form.reset();
      setSubject("");
      return;
    }

    setStatus("error");
    setErrorMessage(result.message);
    setMailtoHref(result.mailtoHref);
  };

  if (status === "sent") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-xl border border-border bg-white p-10 text-center"
      >
        <CheckCircle2 className="h-12 w-12 text-royal mx-auto" />
        <h3 className="mt-4 font-display text-2xl font-bold text-ink">Thank you</h3>
        <p className="mt-2 text-ink-soft max-w-md mx-auto">
          Your enquiry has been sent to the Niaga Prestasi team. We aim to reply within one
          business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-royal hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative rounded-xl border border-border bg-white p-6 lg:p-8 space-y-5"
      noValidate
    >
      {/* Client honeypot — must stay empty; never use autocomplete */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field
          label="Full name"
          name="fullName"
          required
          autoComplete="name"
          error={errors.fullName}
          placeholder="Your full name"
        />
        <Field
          label="Company"
          name="company"
          autoComplete="organization"
          placeholder="Company name (optional)"
        />
        <Field
          label="Email address"
          name="email"
          required
          type="email"
          autoComplete="email"
          error={errors.email}
          placeholder="you@email.com"
        />
        <Field label="Phone number" name="phone" autoComplete="tel" placeholder="+60 ..." />
        <div>
          <label
            htmlFor="subject"
            className="block text-xs font-semibold uppercase tracking-wider text-ink-soft mb-2"
          >
            Subject <span className="text-red-cta">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            className="w-full h-11 rounded-md border border-border bg-white px-3 text-sm text-ink focus:border-royal focus:outline-none focus:ring-2 focus:ring-royal/20"
          >
            <option value="">Select a subject</option>
            {subjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
            {defaultSubject && !subjects.includes(defaultSubject) ? (
              <option value={defaultSubject}>{defaultSubject}</option>
            ) : null}
          </select>
          {errors.subject ? (
            <p id="subject-error" className="mt-1.5 text-xs text-red-cta">
              {errors.subject}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold uppercase tracking-wider text-ink-soft mb-2"
        >
          Message <span className="text-red-cta">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your project, training needs or inquiry..."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm text-ink focus:border-royal focus:outline-none focus:ring-2 focus:ring-royal/20"
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-xs text-red-cta">
            {errors.message}
          </p>
        ) : null}
      </div>

      {status === "error" ? (
        <div
          role="alert"
          className="rounded-md border border-red-cta/20 bg-red-cta/5 px-4 py-3 text-sm text-red-cta space-y-2"
        >
          <p>{errorMessage || "Something went wrong. Please try again."}</p>
          {mailtoHref ? (
            <p>
              <a href={mailtoHref} className="font-semibold underline">
                Open email to {primary}
              </a>
              <span className="text-ink-soft"> (CC {secondary})</span>
            </p>
          ) : null}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-royal px-6 py-3.5 text-white font-semibold hover:bg-royal-dark transition-colors disabled:opacity-70"
      >
        {status === "sending" ? (
          "Sending..."
        ) : (
          <>
            <Send className="h-4 w-4" /> Send Message
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  required,
  type = "text",
  placeholder,
  error,
  autoComplete,
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  error?: string;
  autoComplete?: string;
}) {
  const inputId = `field-${name}`;
  const errorId = `${inputId}-error`;
  return (
    <div>
      <label
        htmlFor={inputId}
        className="block text-xs font-semibold uppercase tracking-wider text-ink-soft mb-2"
      >
        {label} {required ? <span className="text-red-cta">*</span> : null}
      </label>
      <input
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="w-full h-11 rounded-md border border-border bg-white px-3 text-sm text-ink placeholder:text-ink-soft/60 focus:border-royal focus:outline-none focus:ring-2 focus:ring-royal/20"
      />
      {error ? (
        <p id={errorId} className="mt-1.5 text-xs text-red-cta">
          {error}
        </p>
      ) : null}
    </div>
  );
}

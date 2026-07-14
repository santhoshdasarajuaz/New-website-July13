import { CONTACT_CONFIG } from "@/config/contact";
import type { ContactEnquiry, ContactProvider, ContactSubmitResult } from "../types";
import { failure, fetchWithTimeout, sanitizePlainText } from "../utils";

const TIMEOUT_MS = 15_000;

/**
 * FormSubmit provider — kept as optional fallback.
 * Note (2026-07): FormSubmit origin frequently returns Cloudflare 522/525/500
 * and hangs from browsers; do not rely on it as the only path.
 */
export const formSubmitProvider: ContactProvider = {
  id: "formsubmit",

  isConfigured() {
    return true;
  },

  async submit(enquiry: ContactEnquiry): Promise<ContactSubmitResult> {
    const { primary, secondary } = CONTACT_CONFIG.recipients;

    if (enquiry.honeypot?.trim()) {
      return { ok: true, suppressed: true, provider: "formsubmit" };
    }

    const endpoint = CONTACT_CONFIG.formsubmit.useAjax
      ? `https://formsubmit.co/ajax/${encodeURIComponent(primary)}`
      : `https://formsubmit.co/${encodeURIComponent(primary)}`;

    let response: Response;
    try {
      response = await fetchWithTimeout(
        endpoint,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: sanitizePlainText(enquiry.fullName, 200),
            email: sanitizePlainText(enquiry.email, 320),
            company: sanitizePlainText(enquiry.company || "—", 200),
            phone: sanitizePlainText(enquiry.phone || "—", 80),
            subject: sanitizePlainText(enquiry.subject, 200),
            message: sanitizePlainText(enquiry.message, 5000),
            page: sanitizePlainText(enquiry.submittedFrom || "/", 300),
            _replyto: sanitizePlainText(enquiry.email, 320),
            _subject: `${CONTACT_CONFIG.subjectPrefix} ${sanitizePlainText(enquiry.subject, 200)}`,
            _cc: secondary,
            _template: "table",
            _honey: "",
            _captcha: "false",
          }),
        },
        TIMEOUT_MS,
      );
    } catch (err) {
      const aborted = err instanceof DOMException && err.name === "AbortError";
      return failure(
        aborted ? "timeout" : "network",
        aborted
          ? `The email service timed out. Please try again or email ${primary}.`
          : `We could not reach the email service. Please try again or email ${primary}.`,
        enquiry,
        {
          provider: "formsubmit",
          details: err instanceof Error ? err.message : String(err),
        },
      );
    }

    const raw = await response.text();
    let result: { success?: string | boolean; message?: string } | null = null;
    try {
      result = JSON.parse(raw) as { success?: string | boolean; message?: string };
    } catch {
      // Cloudflare error pages (522/525) often return HTML
      if (response.status === 522 || response.status === 525 || response.status >= 500) {
        return failure(
          "service_unavailable",
          `The email relay is temporarily down. Please email ${primary} or ${secondary} directly.`,
          enquiry,
          {
            provider: "formsubmit",
            httpStatus: response.status,
            details: raw.slice(0, 200),
          },
        );
      }
      return failure(
        "invalid_response",
        `Unexpected response from the email service. Please email ${primary} directly.`,
        enquiry,
        { provider: "formsubmit", httpStatus: response.status, details: raw.slice(0, 200) },
      );
    }

    const msg = String(result.message || "").toLowerCase();
    if (msg.includes("activate") || msg.includes("confirm your email")) {
      return failure(
        "activation_pending",
        `Email delivery is awaiting activation. Please check ${primary} for a confirmation link, then try again.`,
        enquiry,
        { provider: "formsubmit", httpStatus: response.status, details: result.message },
      );
    }

    const succeeded =
      response.ok && result.success !== false && result.success !== "false";

    if (!succeeded) {
      return failure(
        response.status >= 500 ? "service_unavailable" : "provider_rejected",
        result.message ||
          `Unable to send right now. Please email ${primary} or ${secondary} directly.`,
        enquiry,
        { provider: "formsubmit", httpStatus: response.status, details: raw.slice(0, 200) },
      );
    }

    return { ok: true, provider: "formsubmit" };
  },
};

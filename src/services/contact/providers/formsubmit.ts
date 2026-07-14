import { CONTACT_CONFIG } from "@/config/contact";
import type { ContactEnquiry, ContactProvider, ContactSubmitResult } from "../types";

/**
 * FormSubmit provider — browser → FormSubmit AJAX → Zoho inboxes.
 * No API keys. Compatible with Azure Static Web Apps Free.
 *
 * - Reply-To: visitor email (`_replyto`)
 * - To: primary, CC: secondary
 * - Spam: FormSubmit `_honey` + client honeypot
 * - AJAX: no FormSubmit confirmation page in the browser
 */
export const formSubmitProvider: ContactProvider = {
  id: "formsubmit",

  async submit(enquiry: ContactEnquiry): Promise<ContactSubmitResult> {
    const { primary, secondary } = CONTACT_CONFIG.recipients;

    if (enquiry.honeypot?.trim()) {
      return { ok: true, suppressed: true };
    }

    const endpoint = CONTACT_CONFIG.formsubmit.useAjax
      ? `https://formsubmit.co/ajax/${encodeURIComponent(primary)}`
      : `https://formsubmit.co/${encodeURIComponent(primary)}`;

    let response: Response;
    try {
      response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: enquiry.fullName,
          email: enquiry.email,
          company: enquiry.company || "—",
          phone: enquiry.phone || "—",
          subject: enquiry.subject,
          message: enquiry.message,
          page: enquiry.submittedFrom || "/",
          // Reply-To = visitor
          _replyto: enquiry.email,
          _subject: `${CONTACT_CONFIG.subjectPrefix} ${enquiry.subject}`,
          // Both Zoho inboxes
          _cc: secondary,
          _template: "table",
          // FormSubmit honeypot (must stay empty for humans)
          _honey: "",
          // AJAX path — captcha would interrupt brand UI; honeypot used instead
          _captcha: "false",
        }),
      });
    } catch {
      return failure(
        `Our email service is temporarily unavailable. Please email ${primary} or ${secondary} directly.`,
        primary,
        secondary,
        enquiry,
      );
    }

    const result = (await response.json().catch(() => null)) as {
      success?: string | boolean;
      message?: string;
    } | null;

    const succeeded =
      response.ok &&
      result != null &&
      result.success !== false &&
      result.success !== "false";

    if (!succeeded) {
      return failure(
        result?.message ||
          `Unable to send right now. Please email ${primary} or ${secondary} directly.`,
        primary,
        secondary,
        enquiry,
      );
    }

    return { ok: true };
  },
};

function failure(
  message: string,
  primary: string,
  secondary: string,
  enquiry: ContactEnquiry,
): ContactSubmitResult {
  const body = [
    enquiry.message,
    "",
    "---",
    `Name: ${enquiry.fullName}`,
    enquiry.company ? `Company: ${enquiry.company}` : null,
    `Email: ${enquiry.email}`,
    enquiry.phone ? `Phone: ${enquiry.phone}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const mailtoHref = `mailto:${primary}?cc=${encodeURIComponent(secondary)}&subject=${encodeURIComponent(
    `${CONTACT_CONFIG.subjectPrefix} ${enquiry.subject}`,
  )}&body=${encodeURIComponent(body)}`;

  return { ok: false, message, mailtoHref };
}

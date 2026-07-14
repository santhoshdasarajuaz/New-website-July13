import { CONTACT_CONFIG } from "@/config/contact";
import type { ContactEnquiry, ContactProvider, ContactSubmitResult } from "../types";
import { failure, fetchWithTimeout, sanitizePlainText } from "../utils";

const ENDPOINT = "https://api.web3forms.com/submit";
const TIMEOUT_MS = 20_000;

/**
 * Web3Forms provider — reliable static-site email API (AWS-backed).
 * Access key is public by design (alias to the inbox). Set via VITE_WEB3FORMS_ACCESS_KEY.
 *
 * Delivers To: key owner email + CC: secondary (Zoho).
 * Reply-To: visitor email.
 */
export const web3FormsProvider: ContactProvider = {
  id: "web3forms",

  isConfigured() {
    return Boolean(CONTACT_CONFIG.web3forms.accessKey?.trim());
  },

  async submit(enquiry: ContactEnquiry): Promise<ContactSubmitResult> {
    const { primary, secondary } = CONTACT_CONFIG.recipients;
    const accessKey = CONTACT_CONFIG.web3forms.accessKey.trim();

    if (enquiry.honeypot?.trim()) {
      return { ok: true, suppressed: true, provider: "web3forms" };
    }

    if (!accessKey) {
      return failure(
        "config_missing",
        `Contact email is not configured yet. Please email ${primary} or ${secondary} directly.`,
        enquiry,
        { provider: "web3forms", details: "VITE_WEB3FORMS_ACCESS_KEY is empty" },
      );
    }

    let response: Response;
    try {
      response = await fetchWithTimeout(
        ENDPOINT,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `${CONTACT_CONFIG.subjectPrefix} ${sanitizePlainText(enquiry.subject, 200)}`,
            from_name: "Niaga Prestasi Website",
            name: sanitizePlainText(enquiry.fullName, 200),
            email: sanitizePlainText(enquiry.email, 320),
            replyto: sanitizePlainText(enquiry.email, 320),
            ccemail: secondary,
            company: sanitizePlainText(enquiry.company || "—", 200),
            phone: sanitizePlainText(enquiry.phone || "—", 80),
            message: sanitizePlainText(enquiry.message, 5000),
            page: sanitizePlainText(enquiry.submittedFrom || "/", 300),
            // Web3Forms honeypot (must stay false / empty)
            botcheck: false,
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
          provider: "web3forms",
          details: err instanceof Error ? err.message : String(err),
        },
      );
    }

    const raw = await response.text();
    let parsed: { success?: boolean; message?: string } | null = null;
    try {
      parsed = JSON.parse(raw) as { success?: boolean; message?: string };
    } catch {
      return failure(
        "invalid_response",
        `Unexpected response from the email service. Please email ${primary} directly.`,
        enquiry,
        {
          provider: "web3forms",
          httpStatus: response.status,
          details: raw.slice(0, 300),
        },
      );
    }

    if (!response.ok || parsed.success !== true) {
      const msg = (parsed.message || "").toLowerCase();
      const code =
        response.status >= 500
          ? "service_unavailable"
          : msg.includes("access") || msg.includes("key")
            ? "config_missing"
            : "provider_rejected";

      return failure(
        code,
        parsed.message ||
          `Unable to send right now. Please email ${primary} or ${secondary} directly.`,
        enquiry,
        {
          provider: "web3forms",
          httpStatus: response.status,
          details: raw.slice(0, 300),
        },
      );
    }

    return { ok: true, provider: "web3forms" };
  },
};

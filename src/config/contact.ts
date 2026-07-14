/**
 * Central contact / email configuration.
 * Switch providers here — the UI never imports a provider directly.
 *
 * See docs/CONTACT_PROVIDERS.md for how to change providers.
 */

export type ContactProviderId =
  | "formsubmit"
  | "emailjs"
  | "web3forms"
  | "zoho"
  | "gmail"
  | "cloudflare-workers"
  | "azure-functions"
  | "custom-api";

export const CONTACT_CONFIG = {
  /**
   * Active delivery provider.
   * Change this value (and fill that provider’s settings below) to switch.
   */
  provider: "formsubmit" as ContactProviderId,

  /** Zoho Mail inboxes that must receive every enquiry */
  recipients: {
    primary: "info@niagaprestasi.com",
    secondary: "elill@niagaprestasi.com",
  },

  /** Prefix for outbound email subject lines */
  subjectPrefix: "[Niaga Website]",

  /** ---------- FormSubmit (current — Azure SWA Free friendly, no secrets) ---------- */
  formsubmit: {
    /**
     * AJAX endpoint avoids FormSubmit’s confirmation/thank-you page.
     * First live submit requires clicking the activation email sent to `recipients.primary`.
     */
    useAjax: true,
  },

  /** ---------- EmailJS (future) — public keys only via Vite env ---------- */
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "",
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "",
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "",
  },

  /** ---------- Web3Forms (future) ---------- */
  web3forms: {
    accessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "",
  },

  /** ---------- Zoho Mail API / Gmail API / Workers / Azure / Custom (future) ---------- */
  zoho: {
    endpoint: import.meta.env.VITE_ZOHO_MAIL_ENDPOINT ?? "",
  },
  gmail: {
    endpoint: import.meta.env.VITE_GMAIL_API_ENDPOINT ?? "",
  },
  cloudflareWorkers: {
    endpoint: import.meta.env.VITE_CONTACT_WORKER_URL ?? "",
  },
  azureFunctions: {
    endpoint: import.meta.env.VITE_CONTACT_FUNCTION_URL ?? "",
  },
  customApi: {
    endpoint: import.meta.env.VITE_CONTACT_API_URL ?? "",
  },
} as const;

/** @deprecated Prefer CONTACT_CONFIG.recipients */
export const CONTACT_RECIPIENTS = CONTACT_CONFIG.recipients;

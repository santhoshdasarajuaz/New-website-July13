/**
 * Central contact / email configuration.
 * Switch providers here — the UI never imports a provider directly.
 *
 * See docs/CONTACT_PROVIDERS.md for how to change providers.
 *
 * PRODUCTION NOTE (2026-07): FormSubmit.co origin is unreliable
 * (Cloudflare 522/525/500 / browser timeouts). Prefer Web3Forms.
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
   * Web3Forms requires VITE_WEB3FORMS_ACCESS_KEY (public access key from web3forms.com).
   */
  provider: "web3forms" as ContactProviderId,

  /**
   * Optional fallbacks tried when the primary fails with network/timeout/5xx.
   * FormSubmit is last-resort only (often offline).
   */
  fallbackProviders: ["formsubmit"] as ContactProviderId[],

  /** Zoho Mail inboxes that must receive every enquiry */
  recipients: {
    primary: "info@niagaprestasi.com",
    secondary: "elill@niagaprestasi.com",
  },

  /** Prefix for outbound email subject lines */
  subjectPrefix: "[Niaga Website]",

  /** ---------- FormSubmit (fallback) ---------- */
  formsubmit: {
    useAjax: true,
  },

  /** ---------- EmailJS ---------- */
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "",
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "",
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "",
  },

  /**
   * Web3Forms — create key at https://web3forms.com for info@niagaprestasi.com
   * Public by design; safe in frontend. CC secondary via provider payload.
   */
  web3forms: {
    accessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "",
  },

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

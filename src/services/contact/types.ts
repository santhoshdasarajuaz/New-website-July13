export type ContactEnquiry = {
  fullName: string;
  company?: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  /** Page path where the form was submitted */
  submittedFrom?: string;
  /**
   * Honeypot value from a hidden field bots fill.
   * If non-empty, providers must not send email and should report success.
   */
  honeypot?: string;
};

export type ContactErrorCode =
  | "network"
  | "timeout"
  | "invalid_response"
  | "activation_pending"
  | "service_unavailable"
  | "config_missing"
  | "provider_rejected"
  | "unknown";

export type ContactSubmitSuccess = {
  ok: true;
  /** True when honeypot blocked a bot without calling the provider */
  suppressed?: boolean;
  provider?: string;
};

export type ContactSubmitFailure = {
  ok: false;
  code: ContactErrorCode;
  message: string;
  /** Suggested mailto fallback for the visitor */
  mailtoHref?: string;
  /** Dev-only diagnostics (stripped from UI copy) */
  details?: string;
  provider?: string;
  httpStatus?: number;
};

export type ContactSubmitResult = ContactSubmitSuccess | ContactSubmitFailure;

export interface ContactProvider {
  readonly id: string;
  /** Return false to skip this provider (e.g. missing access key). */
  isConfigured(): boolean;
  submit(enquiry: ContactEnquiry): Promise<ContactSubmitResult>;
}

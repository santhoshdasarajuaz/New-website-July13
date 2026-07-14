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

export type ContactSubmitSuccess = {
  ok: true;
  /** True when honeypot blocked a bot without calling the provider */
  suppressed?: boolean;
};

export type ContactSubmitFailure = {
  ok: false;
  message: string;
  /** Suggested mailto fallback for the visitor */
  mailtoHref?: string;
};

export type ContactSubmitResult = ContactSubmitSuccess | ContactSubmitFailure;

export interface ContactProvider {
  readonly id: string;
  submit(enquiry: ContactEnquiry): Promise<ContactSubmitResult>;
}

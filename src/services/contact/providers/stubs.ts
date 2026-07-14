import { CONTACT_CONFIG } from "@/config/contact";
import type { ContactEnquiry, ContactProvider, ContactSubmitResult } from "../types";

function notConfigured(id: string): ContactProvider {
  return {
    id,
    async submit(_enquiry: ContactEnquiry): Promise<ContactSubmitResult> {
      const { primary, secondary } = CONTACT_CONFIG.recipients;
      return {
        ok: false,
        message: `Contact provider "${id}" is not configured yet. Please email ${primary} or ${secondary}.`,
        mailtoHref: `mailto:${primary}?cc=${encodeURIComponent(secondary)}`,
      };
    },
  };
}

/** Stubs — implement when switching away from FormSubmit (see docs/CONTACT_PROVIDERS.md). */
export const emailJsProvider = notConfigured("emailjs");
export const web3FormsProvider = notConfigured("web3forms");
export const zohoProvider = notConfigured("zoho");
export const gmailProvider = notConfigured("gmail");
export const cloudflareWorkersProvider = notConfigured("cloudflare-workers");
export const azureFunctionsProvider = notConfigured("azure-functions");
export const customApiProvider = notConfigured("custom-api");

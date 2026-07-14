import { CONTACT_CONFIG } from "@/config/contact";
import type { ContactEnquiry, ContactProvider, ContactSubmitResult } from "../types";
import { failure } from "../utils";

function notConfigured(id: string): ContactProvider {
  return {
    id,
    isConfigured: () => false,
    async submit(enquiry: ContactEnquiry): Promise<ContactSubmitResult> {
      const { primary, secondary } = CONTACT_CONFIG.recipients;
      return failure(
        "config_missing",
        `Contact provider "${id}" is not configured yet. Please email ${primary} or ${secondary}.`,
        enquiry,
        { provider: id },
      );
    },
  };
}

/** Stubs — implement when switching (see docs/CONTACT_PROVIDERS.md). */
export const emailJsProvider = notConfigured("emailjs");
export const zohoProvider = notConfigured("zoho");
export const gmailProvider = notConfigured("gmail");
export const cloudflareWorkersProvider = notConfigured("cloudflare-workers");
export const azureFunctionsProvider = notConfigured("azure-functions");
export const customApiProvider = notConfigured("custom-api");

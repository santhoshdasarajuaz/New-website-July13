import { CONTACT_CONFIG, type ContactProviderId } from "@/config/contact";
import type { ContactEnquiry, ContactProvider, ContactSubmitResult } from "./types";
import { formSubmitProvider } from "./providers/formsubmit";
import {
  azureFunctionsProvider,
  cloudflareWorkersProvider,
  customApiProvider,
  emailJsProvider,
  gmailProvider,
  web3FormsProvider,
  zohoProvider,
} from "./providers/stubs";

const providers: Record<ContactProviderId, ContactProvider> = {
  formsubmit: formSubmitProvider,
  emailjs: emailJsProvider,
  web3forms: web3FormsProvider,
  zoho: zohoProvider,
  gmail: gmailProvider,
  "cloudflare-workers": cloudflareWorkersProvider,
  "azure-functions": azureFunctionsProvider,
  "custom-api": customApiProvider,
};

function getActiveProvider(): ContactProvider {
  return providers[CONTACT_CONFIG.provider] ?? formSubmitProvider;
}

/**
 * Single entry point for the UI.
 * Provider is selected in `src/config/contact.ts` — never in the form component.
 */
export async function submitContactEnquiry(
  enquiry: ContactEnquiry,
): Promise<ContactSubmitResult> {
  return getActiveProvider().submit(enquiry);
}

export type { ContactEnquiry, ContactSubmitResult } from "./types";

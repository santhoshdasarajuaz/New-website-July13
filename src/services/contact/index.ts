import { CONTACT_CONFIG, type ContactProviderId } from "@/config/contact";
import type { ContactEnquiry, ContactProvider, ContactSubmitResult } from "./types";
import { formSubmitProvider } from "./providers/formsubmit";
import { web3FormsProvider } from "./providers/web3forms";
import {
  azureFunctionsProvider,
  cloudflareWorkersProvider,
  customApiProvider,
  emailJsProvider,
  gmailProvider,
  zohoProvider,
} from "./providers/stubs";
import { failure } from "./utils";

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

function resolveChain(): ContactProvider[] {
  const primary = providers[CONTACT_CONFIG.provider];
  const fallbacks = CONTACT_CONFIG.fallbackProviders
    .map((id) => providers[id])
    .filter(Boolean);
  const ordered = [primary, ...fallbacks].filter(
    (p, i, arr): p is ContactProvider => Boolean(p) && arr.indexOf(p) === i,
  );
  return ordered.filter((p) => p.isConfigured());
}

/**
 * Single entry point for the UI.
 * Tries the active provider, then configured fallbacks (e.g. when FormSubmit is down).
 */
export async function submitContactEnquiry(
  enquiry: ContactEnquiry,
): Promise<ContactSubmitResult> {
  const chain = resolveChain();
  const { primary, secondary } = CONTACT_CONFIG.recipients;

  if (chain.length === 0) {
    return failure(
      "config_missing",
      `Contact email is not configured. Please email ${primary} or ${secondary} directly.`,
      enquiry,
      {
        details:
          "No provider is configured. Set VITE_WEB3FORMS_ACCESS_KEY and provider=web3forms.",
      },
    );
  }

  let last: ContactSubmitResult | undefined;
  for (const provider of chain) {
    last = await provider.submit(enquiry);
    if (last.ok) return last;
    // Try next provider for transport/outage errors only
    if (
      last.code === "network" ||
      last.code === "timeout" ||
      last.code === "service_unavailable" ||
      last.code === "invalid_response"
    ) {
      continue;
    }
    return last;
  }

  return (
    last ??
    failure(
      "unknown",
      `Unable to send. Please email ${primary} or ${secondary} directly.`,
      enquiry,
    )
  );
}

export type { ContactEnquiry, ContactSubmitResult, ContactErrorCode } from "./types";

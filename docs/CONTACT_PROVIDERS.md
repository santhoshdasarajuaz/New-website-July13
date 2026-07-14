# Contact enquiry providers

The contact form UI (`ContactForm`) **never** talks to FormSubmit, EmailJS, or any other vendor directly.

It only calls:

```ts
import { submitContactEnquiry } from "@/services/contact";
```

Provider selection and email settings live in **one file**:

`src/config/contact.ts`

## Current production setup (Azure Static Web Apps Free)

| Setting | Value |
|---------|--------|
| Provider | `formsubmit` |
| To | `info@niagaprestasi.com` |
| CC | `elill@niagaprestasi.com` |
| Reply-To | visitor’s email |
| Spam | client honeypot + FormSubmit `_honey` |
| UI thank-you | branded in-app success (AJAX — no FormSubmit page) |
| Secrets | none (FormSubmit uses the destination email only) |

**One-time:** first live submit sends an activation email to `info@niagaprestasi.com`. Confirm it in Zoho Mail.

## How to switch providers later

1. Open `src/config/contact.ts`.
2. Set `provider` to one of:
   - `formsubmit` (default)
   - `emailjs`
   - `web3forms`
   - `zoho`
   - `gmail`
   - `cloudflare-workers`
   - `azure-functions`
   - `custom-api`
3. Fill that provider’s block (or the matching `VITE_*` env vars).
4. Implement the provider module under `src/services/contact/providers/` if it is still a stub.
5. Register it in `src/services/contact/index.ts` (already wired to stubs).
6. **Do not change** `ContactForm.tsx` unless the shared `ContactEnquiry` shape changes.

### Example: switch to Web3Forms

```ts
// src/config/contact.ts
provider: "web3forms",
web3forms: {
  accessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "",
},
```

```env
# .env.local / Azure SWA app settings (as build-time Vite env)
VITE_WEB3FORMS_ACCESS_KEY=your_public_access_key
```

Then replace the stub in `providers/` with a real Web3Forms `fetch` implementation that still returns `ContactSubmitResult`.

### Example: switch to Azure Functions / Cloudflare Worker

Point `CONTACT_CONFIG.provider` at `azure-functions` or `cloudflare-workers`, set the endpoint URL env var, and implement that provider to `POST` JSON `{ fullName, email, subject, message, ... }` to your function. The function can then use Zoho SMTP or another secure secret store—secrets stay off the static frontend.

## Architecture

```
ContactForm (UI)
    ↓
submitContactEnquiry()          ← src/services/contact/index.ts
    ↓
Active ContactProvider          ← selected by CONTACT_CONFIG.provider
    ↓
FormSubmit / EmailJS / …        ← src/services/contact/providers/*
    ↓
Zoho Mail (info@ + elill@)
```

## Error behaviour

If the active provider is down or returns an error, the service returns `{ ok: false, message, mailtoHref }`. The UI shows the message and a **mailto** fallback prefilled to both Zoho addresses so the visitor can still reach the team.

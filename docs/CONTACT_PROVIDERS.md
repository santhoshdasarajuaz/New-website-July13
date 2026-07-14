# Contact enquiry providers

The contact form UI (`ContactForm`) **never** talks to a vendor directly.
It only calls `submitContactEnquiry()` from `@/services/contact`.

All settings live in `src/config/contact.ts`.

## Root cause (2026-07 production failure)

FormSubmit AJAX (`https://formsubmit.co/ajax/...`) failed in production:

| Probe | Result |
|-------|--------|
| PowerShell POST | **HTTP 525** then **500** / **522** (Cloudflare origin SSL / timeout) |
| Browser fetch from Azure SWA origin | **Abort after 25s** (`Failed to fetch` / timeout) |
| FormSubmit homepage GET | 200 (CDN page up, API origin unhealthy) |

This is **not a Zoho Mail issue**. FormSubmit’s API origin behind Cloudflare was down/unreachable.

## Current production setup

| Setting | Value |
|---------|--------|
| Primary provider | **Web3Forms** |
| Fallback | FormSubmit (only if Web3Forms fails with network/timeout/5xx) |
| To | Access-key inbox → `info@niagaprestasi.com` |
| CC | `elill@niagaprestasi.com` (`ccemail`) |
| Reply-To | visitor email (`replyto`) |
| Spam | client honeypot + Web3Forms `botcheck` |
| Secrets | `VITE_WEB3FORMS_ACCESS_KEY` (public access key by design) |

### Required one-time setup (client / admin)

1. Open https://web3forms.com → **Create your Form**
2. Enter **`info@niagaprestasi.com`** and verify via the email Zoho receives
3. Copy the **Access Key**
4. Add GitHub secret: `VITE_WEB3FORMS_ACCESS_KEY` = that key  
   (Repo → Settings → Secrets and variables → Actions)
5. Re-run the Azure Static Web Apps workflow (or push a commit)

Without this secret, the form correctly shows a config error + mailto fallback.

## How to switch providers

1. Edit `src/config/contact.ts` → `provider`
2. Fill that provider’s config / `VITE_*` env
3. Implement stub under `src/services/contact/providers/` if needed
4. Do **not** change `ContactForm.tsx`

## Error codes

| Code | Meaning |
|------|---------|
| `network` | fetch failed (offline / DNS / CORS block) |
| `timeout` | no response within timeout |
| `service_unavailable` | HTTP 5xx / Cloudflare 522–525 |
| `invalid_response` | non-JSON body |
| `activation_pending` | FormSubmit activation email not confirmed |
| `config_missing` | missing access key / provider not wired |
| `provider_rejected` | 4xx / success:false from provider |
| `unknown` | catch-all |

Dev builds log `details` to the console; production UI shows clean messages + mailto.

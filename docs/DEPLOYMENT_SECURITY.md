# Deployment Security Headers (Recommended)

This project is a TanStack Start (Vite) web application. Security headers are typically configured at the hosting/CDN layer (e.g., Nginx, Cloudflare, Vercel, Netlify, AWS CloudFront).

The exact values depend on your deployment environment and any external services you choose to use. The guidance below is a safe baseline for a modern production website.

## Baseline headers

- **X-Content-Type-Options**: `nosniff`
- **Referrer-Policy**: `strict-origin-when-cross-origin`
- **Permissions-Policy**: `geolocation=(), microphone=(), camera=(), payment=()`

## Clickjacking protection

Choose one (CSP is preferred):

- **X-Frame-Options**: `SAMEORIGIN`
- Or via CSP: `frame-ancestors 'self'`

## Content Security Policy (CSP)

A strict CSP must be tuned to your environment. Start with `Report-Only` in production, review reports, then enforce.

Suggested starting point (adjust domains as needed):

```
Content-Security-Policy-Report-Only:
  default-src 'self';
  base-uri 'self';
  object-src 'none';
  frame-ancestors 'self';
  form-action 'self';
  img-src 'self' data: blob:;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com data:;
  script-src 'self';
  connect-src 'self';
  upgrade-insecure-requests;
```

Notes:

- This project loads Google Fonts via `<link>`. If you self-host fonts later, remove `fonts.googleapis.com`/`fonts.gstatic.com` from the CSP.
- If you add analytics, maps, or external chat widgets, update `script-src`/`connect-src` accordingly.

## HTTPS

- Redirect all HTTP traffic to HTTPS.
- Consider **HSTS** once you are confident HTTPS is stable:
  - `Strict-Transport-Security: max-age=15552000; includeSubDomains`
  - Add `preload` only after verifying requirements.

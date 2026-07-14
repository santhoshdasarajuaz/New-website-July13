# Niaga Prestasi Website

Marketing website for **Niaga Prestasi Sdn Bhd** — IT services, HRDC-aligned training, and talent solutions for Malaysia.

**Stack:** React 19 + **TanStack Start** (Vite) + TanStack Router + Tailwind CSS v4 + Motion.  
Not a plain Vite SPA, Remix, or React Router v6 app — it is a TanStack Start full-stack app configured with **static prerender** for Azure Static Web Apps Free.

## Prerequisites

- Node.js **22.12.0+** (Vite 8 requires `^20.19.0 || >=22.12.0`; this repo pins **22.12.0**)
- npm 10+

Pin files: `.nvmrc`, `.node-version`, and `engines` in `package.json`.

## Local development

```bash
npm ci
cp .env.example .env.local   # optional
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build + static prerender → `dist/client/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |

## Azure Static Web Apps (Free tier)

Deploy the **prerendered static site** from `dist/client` (includes `index.html` and `staticwebapp.config.json`).

### Exact portal / workflow settings

| Setting | Value |
|---------|--------|
| **App location** | `/` (repo root) — *or* when using this repo’s GitHub Action with `skip_app_build`: deploy folder is `dist/client` |
| **API location** | *(empty — no API)* |
| **Output location** | `dist/client` |
| **Node version** | `22.12.0` (from `.nvmrc`) |
| **Build command** | `npm ci && npm run build` |

Recommended: use the included workflow [`.github/workflows/azure-static-web-apps.yml`](.github/workflows/azure-static-web-apps.yml), which builds with Node from `.nvmrc`, then uploads `dist/client` with `skip_app_build: true`.

After creating the Static Web App in Azure (GitHub connected), add the deployment token as a GitHub secret named:

`AZURE_STATIC_WEB_APPS_API_TOKEN`

### Custom domain (GoDaddy)

1. Azure SWA → **Custom domains** → add domain  
2. Add the DNS records Azure shows in GoDaddy DNS  
3. Wait for validation + HTTPS certificate  

### Contact form

Works on Free tier via **mailto** (opens the visitor’s email app). No SMTP / Node server required.

## Environment variables

| Variable | Description |
|----------|-------------|
| `VITE_PUBLIC_SITE_URL` | Optional public site URL |

Do not commit `.env` or `.env.local`.

## Security

See [`docs/DEPLOYMENT_SECURITY.md`](docs/DEPLOYMENT_SECURITY.md).

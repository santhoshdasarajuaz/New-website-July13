# Niaga Prestasi Website

Marketing website for **Niaga Prestasi Sdn Bhd** — IT services, HRDC-aligned training, and talent solutions for Malaysia.

Built with React 19, TanStack Router/Start, Tailwind CSS v4, and Motion.

## Prerequisites

- Node.js **22.12+** (required by Vite 8 — Node 16/18/20.18 will fail CI/Azure builds)
- npm 10+

Pin files for hosts/CI: `.nvmrc`, `.node-version`, and `engines` in `package.json`.

## Local development

```bash
npm install
cp .env.example .env.local   # optional; set VITE_PUBLIC_SITE_URL for local dev
npm run dev
```

Open the URL shown in the terminal (default Vite port).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |

## Environment variables

Copy [`.env.example`](.env.example) to `.env.local` for local development.

| Variable | Description |
|----------|-------------|
| `VITE_PUBLIC_SITE_URL` | Public site URL (optional; for canonical URLs if extended) |

Do not commit `.env`, `.env.local`, or any file containing secrets.

## Deployment

1. Run `npm run build`
2. Static assets are in `dist/client/` (not `dist/` root). Server bundle is in `dist/server/`
3. Set production environment variables on the host
4. Configure security headers — see [`docs/DEPLOYMENT_SECURITY.md`](docs/DEPLOYMENT_SECURITY.md)

### GitHub + Azure Static Web Apps (common client setup)

**Repo root must contain this project’s `package.json`** (upload `niaga-elevate-hub-main` contents, not the parent folder).

In the Azure SWA GitHub workflow (or Azure portal build settings), use:

| Setting | Value |
|---------|--------|
| App location | `/` |
| Output location | `dist/client` |
| App build command | `npm ci && npm run build` |
| Node version | `22` (set `NODE_VERSION=22` or rely on `.nvmrc`) |

If the workflow still fails, open **GitHub → Actions → failed run** and check for:

- `Unsupported engine` / Vite requiring Node `>=22.12.0` → Node version too old
- `Could not find index.html` / empty site → wrong **Output location** (must be `dist/client`)
- `npm ci` lockfile errors → run `npm install` locally and commit `package-lock.json`

Contact form email needs SMTP env vars on the host (see `.env.example`). Pure static hosting serves the marketing pages; server/SMTP features need a Node-capable host (Azure App Service / SWA API).

## Project structure

```
src/
  components/   # UI, layout, sections, cards
  data/         # Navigation, services, courses, company copy
  routes/       # TanStack file-based routes (do not rename casually)
  styles/       # Global CSS and design tokens
  lib/          # Utilities and error reporting
  utils/        # SEO, validation, route helpers
```

## Security

See [`docs/DEPLOYMENT_SECURITY.md`](docs/DEPLOYMENT_SECURITY.md) for recommended production headers and CSP guidance.

# Niaga Prestasi Website

Marketing website for **Niaga Prestasi Sdn Bhd** — IT services, HRDC-aligned training, and talent solutions for Malaysia.

Built with React 19, TanStack Router/Start, Tailwind CSS v4, and Motion.

## Prerequisites

- Node.js 20+ (LTS recommended)
- npm 10+

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
2. Deploy the `dist/` output to your static host or Node adapter (TanStack Start)
3. Set production environment variables on the host
4. Configure security headers — see [`docs/DEPLOYMENT_SECURITY.md`](docs/DEPLOYMENT_SECURITY.md)

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

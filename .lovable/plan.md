# Niaga Prestasi — Enterprise Redesign Plan

Rebuild the site as a premium, multi-page enterprise IT services website inspired by Accenture-level polish (spacing, typography, confidence) — original design, no copying.

## 1. Design System

**Palette (added to `src/styles.css` as tokens):**
- `--navy: oklch(0.18 0.05 260)` — midnight foundation
- `--navy-deep: oklch(0.12 0.04 260)` — hero/footer
- `--royal: oklch(0.48 0.18 260)` — primary blue
- `--cyan: oklch(0.72 0.14 220)` — accent highlight
- `--red: oklch(0.60 0.22 25)` — controlled CTA red (from logo)
- `--surface: oklch(0.985 0.005 260)`, `--border-soft`, gradients & soft shadows

**Typography:** Plus Jakarta Sans (headings) + Inter (body), loaded via `<link>` in `__root.tsx` head.

**Layout:** Global container `max-w-[1280px] px-6 lg:px-10 mx-auto`. Section vertical rhythm `py-20 lg:py-28`. Card grid consistent heights via `h-full` + flex.

**Reusable primitives:** `Container`, `SectionHeader` (eyebrow + heading + underline accent), `Button` (primary red / secondary royal / ghost), `Card`, `AnimatedReveal` (fade-up on scroll, respects reduced-motion), `StatCounter`, `IconTile`.

## 2. Routing (TanStack Start file-based)

All routes as real pages under `src/routes/`, each with proper `head()` metadata (title, description, og:title/description). Layout route `_site.tsx` wraps Header + Footer with `<Outlet />`.

```
_site.tsx                          → shared header/footer layout
_site.index.tsx                    → /
_site.about.tsx                    → /about
_site.services.index.tsx           → /services
_site.services.$slug.tsx           → 8 service detail pages (data-driven)
_site.expertise.index.tsx          → /expertise
_site.expertise.$slug.tsx          → insurance-technology, banking-it, ai-python
_site.training.tsx                 → /training
_site.courses.index.tsx            → /courses
_site.courses.$slug.tsx            → htd-model-courses, upskill-training, ai-ml,
                                     data-engineering-cloud, software-testing-qa,
                                     azure-engineer, dba, agile, cloud-computing,
                                     cybersecurity, data-analytics
_site.talent-staffing.tsx          → /talent-staffing
_site.contact.tsx                  → /contact (reads ?subject= query)
```

Dynamic `$slug` routes render from data files → one component, many pages, distinct content per slug. `notFound` returns to parent index.

## 3. Data Layer (`src/data/`)

- `navigation.ts` — nav tree with dropdowns for Services / Expertise / Courses
- `services.ts` — 8 services: slug, title, subtitle, overview, whatWeDeliver[], useCases[], approach[], benefits[], related[]
- `expertise.ts` — 3 domains with capability lists (insurance, banking, AI)
- `courses.ts` — HTD + Upskill catalogs with modules, duration, format, outcomes, audience, prerequisites, topics
- `company.ts` — contact info, stats, trust badges (HRDC etc.)

Every page reads from data; no duplicated hardcoded content.

## 4. Components

```
src/components/
  layout/
    Header.tsx          — sticky, top contact strip (desktop), logo, nav w/ dropdowns,
                          animated active/hover underline, red "Get Started" → /contact
    MobileMenu.tsx      — full-screen slide-in menu, keyboard accessible
    DropdownMenu.tsx    — Radix-based, animated, accessible
    Footer.tsx          — rich 4-column: Company / IT Services / Training / Contact
                          + social + HRDC badge
    SiteLayout.tsx      — Header + Outlet + Footer + scroll-restoration
  sections/
    Hero.tsx            — dark navy w/ subtle grid/data pattern, headline, pills,
                          dual CTA, trust stats row
    ServiceGrid.tsx     — icon cards → link to service detail
    ExpertiseSplit.tsx  — banking/insurance split panel
    AICapabilities.tsx  — AI/Python bento
    TrainingBand.tsx    — HRDC + programs
    TalentBand.tsx      — staffing summary
    WhyChoose.tsx       — 4-up value props
    DeliveryModel.tsx   — how-we-work timeline
    CTASection.tsx      — dark panel w/ red CTA
    ContactForm.tsx     — validated form, loading + success state, prefill subject
  ui/
    Container, SectionHeader, Button, Card, IconTile,
    AnimatedReveal, StatCounter, Pill, Breadcrumbs
```

Framer Motion for reveals, dropdown transitions, hover lift, hero background drift, stat counters. All motion gated on `prefers-reduced-motion`.

## 5. Page Composition

- **Home:** Hero → Trusted partner → Services grid → Banking/Insurance split → AI capabilities → Training band → Talent band → Why choose → Delivery model → CTA
- **About:** Hero → Company story → Malaysia presence → 4 value cards → How-we-work timeline → HRDC/domain trust → CTA
- **Services index:** Hero + grid of 8 services
- **Service detail:** Hero → Overview → What we deliver → Use cases → Approach → Benefits → Related services → CTA
- **Expertise detail:** Hero → Domain intro → Capability grid (from spec: insurance/banking/AI lists) → Case examples → CTA
- **Training:** HRDC hero → Audience cards (University / Corporate / Government / HRDC) → 3 program cards → Topics pills
- **Courses index:** Two columns (HTD vs Upskill) with all courses linking to detail
- **Course detail:** Title, duration, modules, format, overview, topics, prerequisites, outcomes, audience, Enroll Now → `/contact?subject={CourseName}`
- **Talent & Staffing:** Hero → Partner-with-us panel → 8 service tiles → CTA
- **Contact:** Two-column: left contact cards + hours, right form (Full name, Email, Phone, Subject dropdown w/ specified options, Message), map placeholder, CTA band

## 6. Interactions

Fade-up reveal, card hover lift, animated nav underline, button arrow slide, hero subtle drift, stat counters, dropdown fade/slide, smooth scroll, scroll-restoration on route change. All respect `prefers-reduced-motion`.

## 7. Assets

- Logo: use Niaga Prestasi red triangle mark (SVG recreation from reference — original, no copyrighted files)
- Hero background: generate an abstract enterprise data-grid/finance visual (navy + cyan accents) with `imagegen`
- About + banking/insurance section imagery: generated originals
- No "Made with Manus" or builder badges anywhere

## 8. SEO & Accessibility

- Per-route `head()` with unique title/description/og
- `og:image` only on leaf routes where meaningful
- Semantic HTML, proper heading hierarchy, alt text, labeled inputs, focus states, keyboard-nav dropdowns, WCAG AA contrast

## 9. Deliverables

- ~40 route files + shared layout
- ~25 components
- 5 data files
- Updated `styles.css` with full token system, Inter/Jakarta loaded via root `<link>`
- Home `og:image` generated
- Zero console errors, all links routed correctly, responsive at mobile/tablet/desktop, build passes

## Out of Scope (unless asked)

Backend/form submission (form will show success state client-side), CMS, i18n, real Google Maps API (placeholder block), auth. These can be added later via Lovable Cloud.

---

This is a large build (~50+ files). I'll implement in one pass and report the route map + file summary at the end.
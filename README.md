# HokiDev

Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + TypeScript.

## Getting started

```bash
cp .env.example .env.local
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Scripts

| Script           | Purpose                    |
| ---------------- | -------------------------- |
| `pnpm dev`       | Dev server                 |
| `pnpm build`     | Production build           |
| `pnpm start`     | Serve the production build |
| `pnpm lint`      | ESLint                     |
| `pnpm typecheck` | `tsc --noEmit`             |
| `pnpm format`    | Prettier write             |

## Structure

```
src/
  app/                        routing only — layouts, pages, route handlers
    (marketing)/              the site shell (header, footer, WhatsApp button)
      page.tsx                "/" — composes the landing sections
    not-found.tsx             404
    api/health/route.ts
  components/
    ui/                       shadcn/ui primitives, vendored as generated
    layout/                   logo, site header, site footer, floating CTA
    providers.tsx             TanStack Query + Tooltip + Toaster
    error-boundary.tsx
    routed-error-boundary.tsx resets the boundary on route change
  features/
    marketing/
      components/             one file per landing section
      data.ts                 section copy and sample data
  hooks/                      use-mobile, use-toast
  lib/                        cn, env, whatsapp helper
  config/site.ts              site metadata and nav
  styles/globals.css          Tailwind entry + design tokens
  types/
public/                       favicon.svg, robots.txt
Artifacts/                    original Vite design reference, excluded from build/lint
```

## Relationship to `Artifacts/`

`Artifacts/` is the original Vite + wouter single-page app. Its content has been
ported into `src/` and is kept byte-for-byte where possible:

- `src/components/ui/**`, `src/hooks/use-*`, `src/styles/globals.css`,
  `src/lib/utils.ts` and `src/app/not-found.tsx` are verbatim copies. The only
  edit is a `'use client'` directive where the App Router needs one.
- `Artifacts/src/App.tsx` was split along its existing function boundaries into
  `src/features/marketing/components/` and `src/components/layout/`. The function
  bodies were copied unchanged.
- These paths are listed in `.prettierignore` so formatting never silently
  diverges from the reference.

Vite-specific plumbing (`main.tsx`, `index.html`, `vite.config.ts`, `wouter`) was
replaced by the App Router equivalents and is not used.
"# HokiDev" 

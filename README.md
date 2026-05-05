# KumarX Website

A React + TypeScript marketing website for **KumarX**, focused on academic and digital support services in Nigeria, with WhatsApp-first lead capture.

## What this project includes
- Service landing page with sections: hero, services, process, testimonials, trust highlights, CTA, and footer.
- WhatsApp quick-contact flow used across the UI.
- Responsive UI built with Tailwind CSS and shadcn/ui primitives.
- Basic routing with a custom 404 page.
- Starter test setup with Vitest + Testing Library.

## Tech stack
- React 18 + TypeScript
- Vite 5
- Tailwind CSS + shadcn/ui + Radix UI
- React Router
- TanStack Query
- Vitest + Testing Library

## Getting started
### Prerequisites
- Node.js 18+
- npm 9+

### Install and run
```bash
npm install
npm run dev
```
App runs on the Vite dev server (default: `http://localhost:8080`).

## Available scripts
- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run build:dev` - Development-mode build
- `npm run preview` - Preview built app
- `npm run lint` - Run ESLint
- `npm run test` - Run tests once
- `npm run test:watch` - Run tests in watch mode

## Project structure
```text
src/
  components/
    site/        # Page sections (Hero, Services, CTA, etc.)
    ui/          # Reusable UI primitives
  hooks/         # Custom React hooks
  lib/           # Utilities (e.g., WhatsApp link helpers)
  pages/         # Route-level pages
  test/          # Test setup and sample tests
```

## Key customization points
- Brand/title/SEO metadata: `index.html`
- Route page composition: `src/pages/Index.tsx`
- WhatsApp number and default message: `src/lib/whatsapp.ts`
- Theme and global styles: `src/index.css`, `src/App.css`

## Quality checks
Before deploying:
```bash
npm run lint
npm run test
npm run build
```

## Deployment
This is a static frontend app. Deploy the generated `dist/` folder to any static host (e.g., Vercel, Netlify, Cloudflare Pages, or Nginx).

# José M. Salcido — Personal Site

Stoic, single-page site built with **React 19**, **Vite 7**, **TypeScript**, and **Tailwind CSS 4**.  
Features bilingual content (EN/ES), Carta Stoica newsletter signup via Ghost, PostHog analytics, and n8n-powered lead capture.

## Requirements

- Node 20+
- npm 10+

## Setup

```bash
cp env.example .env   # fill values below
npm install
npm run dev           # start dev server
```

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Vite dev server with React Fast Refresh |
| `npm run build` | Type-check + production build (Vite) |
| `npm run preview` | Preview the production bundle |
| `npm run lint` | ESLint (flat config) |

## Environment variables

| Variable | Purpose |
| --- | --- |
| `VITE_PUBLIC_POSTHOG_KEY` | PostHog project key (optional) |
| `VITE_PUBLIC_POSTHOG_HOST` | PostHog host URL |
| `VITE_GHOST_SITE` | Base URL of Ghost blog (`https://blog.example.com`) used for newsletter signups |
| `VITE_CONTACT_WEBHOOK` | n8n webhook that receives `{ full_name, email, focus, description }` |

## Project structure

```
src/
├── components/
│   ├── common/        # shared UI utilities
│   ├── layout/        # header/footer
│   ├── sections/      # hero, expertise, ventures, timeline, newsletter, contact
│   └── pages/         # NotFound
├── i18n/              # locale provider + translation strings
├── lib/               # small helpers (e.g., smooth scroll)
├── main.tsx           # PostHog provider + app bootstrap
└── App.tsx            # renders home sections or 404 based on path
```

`legacy/` contains the previous Next.js implementation and is ignored by the linter.

## Styling & content

- Tailwind 4 utilities imported via `src/index.css`.
- Custom base styles in `src/App.css`.
- Content copy (EN/ES) lives in `src/i18n/translations.ts` so components just consume translated strings.

## Integrations

- **PostHog**: wired through `PostHogProvider` in `src/main.tsx`.
- **Newsletter**: frontend POST to Ghost’s `/members/api/send-magic-link/`.
- **Contact**: POST to configurable webhook with a honeypot field to reduce spam.

## Deployment

```
npm run build
```

Deploy the generated `dist/` folder to your static host (Vercel, Netlify, etc.), ensuring environment variables are provided at build/runtime.  
Optional: keep `.env` synced with your hosting provider for analytics/newsletter/lead capture to function.

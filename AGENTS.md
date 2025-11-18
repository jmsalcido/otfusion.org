# Agent Notes

This repository powers José M. Salcido’s personal site (React + Vite + Tailwind).  
Use this doc to get oriented quickly.

## Key Commands

```bash
npm install           # install deps
npm run dev           # local dev server
npm run build         # type-check + production bundle
npm run preview       # preview production build
npm run lint          # eslint (flat config)
```

## Environment Variables

Copy `env.example` to `.env` and fill:

- `VITE_PUBLIC_POSTHOG_KEY`
- `VITE_PUBLIC_POSTHOG_HOST`
- `VITE_GHOST_SITE` – Ghost blog URL for newsletter magic-link signup
- `VITE_CONTACT_WEBHOOK` – n8n webhook receiving `{ full_name, email, focus, description }`

## Code Structure

- `src/components/layout` – Header/Footer
- `src/components/sections` – Hero, Expertise, Ventures, Timeline, Newsletter, Contact
- `src/components/pages/NotFound` – custom 404 w/ CTA
- `src/i18n` – locale provider + translations (English/Spanish)
- `src/lib/scrollToSection.ts` – smooth scrolling helper
- `legacy/` – previous Next.js app (ignored by ESLint); leave untouched unless asked

## Integrations

- **PostHog**: configured in `src/main.tsx`.
- **Newsletter**: hits Ghost `/members/api/send-magic-link/` using `VITE_GHOST_SITE`.
- **Contact form**: posts to `VITE_CONTACT_WEBHOOK` and includes a honeypot (`context` input).

## Linting / Formatting

- ESLint flat config (`eslint.config.js`), React hooks plugin uses flat preset.
- Tailwind 4 utilities imported globally via `src/index.css`; base styles in `src/App.css`.

## Deployment

`npm run build` outputs `dist/` for deployment on any static host (Vercel/Netlify/etc).  
Ensure environment vars are configured wherever the build runs.

## Misc

- No router; `App.tsx` conditionally renders 404 based on `window.location.pathname`.
- When adding content, update both EN/ES strings in `src/i18n/translations.ts`.
- Images currently use external placeholders; feel free to swap URLs with brand assets.

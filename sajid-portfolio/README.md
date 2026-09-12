# Sajid Ali — Portfolio (Next.js)

Dark, ember/orange-gradient redesign of the original portfolio, rebuilt in Next.js 14 (App Router) + TypeScript + Tailwind CSS. All copy, stats, project names, and case-study data are unchanged from the original — only the visual design and the framework changed.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Requires internet access on first build so Next.js can fetch the Google Fonts (Fraunces, IBM Plex Sans, IBM Plex Mono).

## Project structure

- `app/layout.tsx` — fonts + global `<html>/<body>` shell
- `app/page.tsx` — assembles every section
- `app/globals.css` — dark theme tokens, gradient text, buttons, timeline, grain texture
- `components/` — one component per section (Nav, Hero, About, Ecosystem, Timeline, Results, CaseStudies, Tools, Contact) plus `MouseGlow.tsx` for the cursor-tracking ember glow
- `lib/data.ts` — every piece of copy and every stat from the original site, in one typed file. Edit this file to change any text/numbers without touching design code.

## Notes

- The evidence images referenced in the original (`assets/*.png`) weren't part of the upload, so each case study currently shows a labelled placeholder box instead of a broken `<img>`. Drop real screenshots into `public/assets/` and swap the placeholder `div` in `components/CaseStudies.tsx` for a real `<Image>`/`<img>` when you have them.
- Case studies are an interactive accordion (client component) — case 01 is open by default, same as the original.

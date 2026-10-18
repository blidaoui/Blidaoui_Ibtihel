# Ibtihel Blidaoui — Portfolio (Next.js)

Software-engineer portfolio built with Next.js 14 (App Router) and Tailwind CSS.

- **Three languages:** English, French and Arabic (full right-to-left layout), with a switcher in the navbar. The choice is remembered and defaults to the browser language.
- **Dark and light themes**, remembered and defaulting to the system setting.
- Colors, type and the "interface → API → AI service" diagram match the LinkedIn banner.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where things are

```
app/
  layout.js         → fonts (self-hosted via @fontsource), metadata, theme/language init script
  page.js           → composes the sections
  globals.css       → theme tokens (dark/light), RTL typography, flow animation
components/         → Navbar, Hero, About, Skills, Experience, Projects, Resume, Contact, Footer
lib/
  translations.js   → ALL visible text, in en / fr / ar  <- edit your content here
  content.js        → links, project tags, repo URLs, hero diagram layers
  LanguageProvider.jsx → language state, <html lang/dir> handling
public/
  BlidaouiCv.pdf    → CV linked from the buttons (file name is case-sensitive on Vercel)
  PhotoBlidaoui.jpg → profile photo
```

## Customizing

- **Text / translations:** `lib/translations.js`. Each language has the same structure; keep the keys identical.
- **Project links:** `lib/content.js` → `projectsMeta`. Replace the `repoUrl` values marked `TODO` with your real repositories (a card without `repoUrl` simply shows no link).
- **Colors:** theme tokens at the top of `app/globals.css`; the amber accent is in `tailwind.config.js`.
- **CV:** replace `public/BlidaouiCv.pdf` (keep the same file name).

## Deploying

Push to the repository connected to Vercel; it deploys with zero config.

```bash
git add .
git commit -m "Redesign portfolio: EN/FR/AR, dark/light"
git push
```

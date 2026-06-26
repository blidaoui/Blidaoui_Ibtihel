# Ibtihel Blidaoui — Portfolio (Next.js)

A soft, pastel, glassmorphism-styled portfolio built with Next.js 14 (App Router) and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project structure

```
app/
  layout.js      → fonts (Poppins + Nunito via next/font), global metadata
  page.js        → composes all sections
  globals.css    → Tailwind + glassmorphism/gradient-text utilities
components/
  Navbar.jsx     → sticky frosted-glass nav, mobile menu
  Hero.jsx       → gradient hero with headline + CTAs
  About.jsx      → bio card with circular avatar frame
  Skills.jsx     → pastel skill cards grid
  Projects.jsx   → HAOR feature card + two secondary project cards
  Resume.jsx     → CV download card
  Contact.jsx    → contact form (mailto-based) + direct links
  Footer.jsx
public/
  Ibtihel_Blidaoui_CV.pdf → linked from the Resume section's download button
```

## Customizing

- **Colors**: edit the `lavender` / `blossom` / `skyblue` palettes in `tailwind.config.js`.
- **Fonts**: change the Google Fonts imports in `app/layout.js` (currently Poppins for display, Nunito for body).
- **Profile photo**: replace the "IB" initials block in `components/About.jsx` with:
  ```jsx
  <img src="/avatar.jpg" alt="Ibtihel Blidaoui" className="w-full h-full object-cover rounded-full" />
  ```
  and add your photo to `/public/avatar.jpg`.
- **Projects**: edit the `projects` array in `components/Projects.jsx` — add real repo links per project if you'd like the "View on GitHub" links to point to specific repos instead of your profile.
- **Contact form**: currently opens the visitor's email client via a `mailto:` link (no backend required). To collect submissions directly, wire it up to a service like Formspree, EmailJS, or a custom API route.

## Deploying

The fastest path is [Vercel](https://vercel.com/new) — import the project (or run `vercel` from this folder) and it deploys with zero config. Netlify and any other Next.js-compatible host work too.

## Build

```bash
npm run build
npm run start
```

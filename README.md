# Ashikul Islam — Portfolio

A dark-mode portfolio website with Apple-inspired UI, scroll animations, and sections tailored for a QA Automation Engineer.

## Features

- **Dark mode** — Always-on dark theme with accent gradients and glass surfaces
- **Scroll effects** — Lenis smooth scrolling + Framer Motion reveal animations
- **Interactive Projects** — Expandable project cards with category filters
- **Skills section** — Animated proficiency bars with category tabs
- **Blog** — Dedicated `/blog` page with individual post routes

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lenis](https://lenis.darkroom.engineering/) — smooth scroll
- [Lucide Icons](https://lucide.dev)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — no extra config needed
4. Deploy

Or use the CLI:

```bash
npx vercel
```

## Project Structure

```
src/
├── app/              # Next.js pages (home, blog)
├── components/       # UI components
├── data/resume.ts    # All portfolio content from resume
└── lib/utils.ts      # Utilities
```

## Customization

Edit `src/data/resume.ts` to update experience, projects, skills, and blog posts. Replace blog placeholder content in `src/app/blog/[slug]/page.tsx` with MDX or a CMS when ready.

## Resume

Resume PDF is served from `/Ashikul_Resume.pdf` (also in project root).

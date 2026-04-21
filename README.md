# Bestmann & Schmidt

Corporate website for **Bestmann & Schmidt** — Specialists for Mediation & Management Consulting.

An editorial, consulting-style site with restrained typography, a strict 12-column grid, and deliberate use of motion. Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.

---

## Stack

- [Next.js 16](https://nextjs.org/) · App Router, Turbopack
- [React 19](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) · `@theme inline` tokens
- [Framer Motion](https://motion.dev/) · reveal animations
- [GSAP ScrollTrigger](https://greensock.com/scrolltrigger/) · subtle image parallax
- [Lenis](https://lenis.darkroom.engineering/) · dampened smooth scroll
- [Lucide Icons](https://lucide.dev/)

## Requirements

- Node.js `>= 20.0.0` (see [`.nvmrc`](.nvmrc))
- npm 10+

## Quickstart

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command             | Purpose                                         |
| ------------------- | ----------------------------------------------- |
| `npm run dev`       | Start the development server (Turbopack)        |
| `npm run build`     | Build the production bundle                     |
| `npm run start`     | Serve the production build                      |
| `npm run lint`      | Lint with `eslint-config-next`                  |
| `npm run typecheck` | Run `tsc --noEmit` against the project          |

## Project layout

```
src/
├── app/                     # Next.js App Router — one folder per route
│   ├── page.tsx             # Home
│   ├── mediation/
│   ├── coaching/
│   ├── beratung/            # Management Consulting
│   ├── about/
│   ├── kontakt/
│   ├── impressum/
│   ├── datenschutz/
│   ├── layout.tsx           # Root layout: fonts, Navbar, Footer, SmoothScroll
│   └── globals.css          # Design tokens, typography, utilities
├── components/
│   ├── Hero.tsx             # Top section with optional <Image>
│   ├── ContentSection.tsx   # Swappable image-left / image-right block
│   ├── EditorialGrid.tsx    # Four-across service grid
│   ├── ServiceCard.tsx
│   ├── Accordion.tsx
│   ├── StatStrip.tsx        # Metric ribbon
│   ├── CTASection.tsx
│   ├── Navbar.tsx           # Glassmorphic, sticky
│   ├── Footer.tsx
│   ├── SmoothScrollWrapper.tsx  # Lenis integration
│   ├── MagneticButton.tsx
│   ├── Reveal.tsx
│   └── ImageFallback.tsx    # Gradient + grain placeholder
└── lib/
    └── utils.ts             # `cn()` — clsx + tailwind-merge
public/
├── logo.svg
├── Bild_Hamburg.jpg
└── karenbestmann.jpg
```

## Design system

Defined in [`src/app/globals.css`](src/app/globals.css).

**Colours**

| Token          | Hex       | Role                             |
| -------------- | --------- | -------------------------------- |
| `navy`         | `#0d1b2b` | Primary brand                    |
| `slate-detail` | `#1e293b` | Secondary text / navy tone       |
| `ivory`        | `#f8fafc` | Default background               |
| `paper`        | `#f1efe9` | Warm alternate surface           |

**Typography**

- **Playfair Display** — reserved for the largest, most deliberate moments (`.display-1`): hero headlines, page titles, closing CTAs. Rhymes with the logo.
- **Inter** — body + all secondary display sizes (`.display-2`, `.display-3`, `.lede`). Tight negative tracking for a consulting feel.
- **Source Serif 4** — loaded as an optional editorial accent (`.serif-display`), used sparingly.

**Motion**

- Reveals: staggered fade-in, `y: 16 → 0`, `opacity: 0 → 1`, `cubic-bezier(0.4, 0, 0.2, 1)`, ~0.6s.
- Parallax: GSAP ScrollTrigger, `0.04` intensity on images in `ContentSection`.
- Smooth scroll: Lenis `duration: 0.7`. Automatically disabled for `prefers-reduced-motion`.

## Deployment

Optimised for Vercel. `npm run build` produces a fully static output (11 pages, all `○ Static` at the time of writing).

```bash
vercel           # preview
vercel --prod    # production
```

## License

UNLICENSED — proprietary, all rights reserved by Bestmann & Schmidt.

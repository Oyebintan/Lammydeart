# Lammydeart

Portfolio site for Olamide (Lammy) — graphic and web designer. React 19 + Vite 6
+ Tailwind CSS v4, deployed on Vercel at
[thelammydeart.vercel.app](https://thelammydeart.vercel.app).

## Commands

```bash
npm install
npm run dev      # dev server with HMR
npm run build    # production build to dist/
npm run preview  # serve the production build locally
npm run lint     # eslint
```

## Structure

```
src/
  App.jsx                  routes
  main.jsx                 entry
  index.css                Tailwind import + the few global rules
  lib/
    motion.js              shared framer-motion variants (fadeUp, stagger, viewportOnce)
    decor.js               shared background/hover class tokens (gridBg, boxTint)
  components/
    layout/                MainLayout, Navbar, Footer — the app shell
    home/                  one file per home-page section, in page order
    decor/                 CornerMarks, LineBox — ambient background accents
    ProjectCard.jsx        grid tile, opens the lightbox
    ProjectLightbox.jsx    full-size artwork view with keyboard nav
    CategoryFilter.jsx     shared by the home grid and the projects page
  pages/                   one per route
  hooks/                   usePageTitle, useTypewriter
  data/projects.js         the project list — single source of truth
  assets/images/           see assets/images/README.md
```

Home-page sections render in the order listed in `pages/HomePage.jsx`, and their
`( 01 )`–`( 05 )` labels follow that order — renumber them together if you
reorder sections.

## Adding or changing a project

`src/data/projects.js` is the only file to edit. Each entry needs `id`, `slug`,
`title`, `category`, `img` and `description`. Images live at
`src/assets/images/projects/<slug>/preview.jpg` — drop a replacement
`preview.jpg` into a folder and nothing else changes. Full conventions and
sizing guidance are in `src/assets/images/README.md`.

`category` must be one of the values in `projectCategories` or the filter won't
reach it.

**Cards are portrait 4:5**, matching how most of the work is designed. If a piece
is landscape, set `wide: true` on it and the grid gives it a 16:9 card spanning
two columns instead of cropping it to portrait.

**Export images at roughly 1200px on the long edge, JPEG quality ~80.** The
originals were 1360-1700px and up to 600KB each, which is far more than they
render at — the grid shows them around 420px wide and the lightbox is capped at
65vh. Oversized files are the main thing that makes the work look slow to
appear on mobile data. Re-encoding the set at 1200px/q80 cut the payload from
6.11MB to 2.73MB with no visible loss.

## Notes worth knowing before editing

- **Tailwind v4, no config file.** Colours are inline arbitrary values, not theme
  tokens. Match the existing values rather than introducing new ones. The palette:

  | role | value |
  |---|---|
  | page | `#000000` |
  | raised panel | `#0A0A0A` |
  | card / section gradient | `#101010`, `#141414` |
  | hairline / fill | `rgba(255,255,255,0.03–0.18)` |
  | heading | `#FAFAFA` |
  | body text | `rgba(255,255,255,0.70)` |
  | muted text | `rgba(255,255,255,0.55)` — the floor; below ~0.50 fails AA on black |
  | accent | `#1D4ED8 → #60A5FA` (the only colour on the site) |
- **Fonts.** Manrope is set on `body` so it inherits; `.font-display`
  (Clash Display) then cascades into nested elements. Do not move the base
  font-family onto `*` — a universal selector beats inheritance and silently
  overrides `.font-display` on every child.
- **The nav is frosted glass** (`bg-[rgba(3,5,10,0.88)]` + `backdrop-blur-xl`),
  with a solid `@supports` fallback. The alpha is deliberately high; lower it and
  page content becomes readable through the bar.
- **`viewport-fit=cover` in `index.html` is required**, along with the
  `env(safe-area-inset-*)` padding on the nav, hero, page headers and footer.
  Removing either half puts content behind the iOS status bar.
- **Avoid full-screen `position: fixed` layers with `mix-blend-mode`.** One of
  those sitting above the nav caused stale page content to paint over it on iOS
  Safari.
- **Internal links use `Link` / `MotionLink`**, never `<a href="/...">`, which
  triggers a full document reload.
- Motion respects `prefers-reduced-motion` via `MotionConfig reducedMotion="user"`
  plus a CSS media query; the testimonial autoplay checks it directly.

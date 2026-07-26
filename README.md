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

## Notes worth knowing before editing

- **Tailwind v4, no config file.** Colours are inline arbitrary values
  (`bg-[#03050a]`), not theme tokens. Match the existing values rather than
  introducing new ones.
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

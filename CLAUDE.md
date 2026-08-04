# CLAUDE.md — orientation for a new session

Read this first. It is the fastest path from cold start to useful work on this
repo, and it records decisions whose reasons are not visible in the code.

`README.md` is the human-facing doc (setup, commands, how to add a project).
This file is the one to read when *changing* things.

---

## What this is

**Lammydeart** — the portfolio of Olamide ("Lammy", GitHub `Oyebintan`), a
graphic and web designer based in Lagos, Nigeria. It exists to win freelance
clients. Every decision should be read through that lens: the artwork is the
product, and anything that crops it, slows it down, or makes it look broken on a
phone is a real defect, not a nitpick.

- **Live:** https://thelammydeart.vercel.app
- **Repo:** `github.com/Oyebintan/Lammydeart`, default branch `main`
- **Host:** Vercel, auto-deploys on push to `main`
- **Audience:** prospective clients, mostly on a phone, mostly on Nigerian
  mobile data. Mobile is the primary target, not the fallback.

## Stack

| | |
|---|---|
| React | 19 (automatic JSX transform — `import React` is only needed for `React.memo`) |
| Vite | 6 |
| Tailwind | **v4, CSS-first, no config file.** All colours are inline arbitrary values |
| Router | React Router v7 (`createBrowserRouter`) |
| Motion | framer-motion v12 |
| Icons | `lucide-react` (UI glyphs) + `react-icons` (brand marks only — lucide has no Instagram/X/WhatsApp/Photoshop/CorelDraw) |

```bash
npm install
npm run dev      # HMR dev server
npm run build    # production build to dist/
npm run preview  # serve the production build
npm run lint     # eslint — nothing runs this automatically
```

There is **no test suite and no CI.** `vite build` does not run ESLint, so a
lint error ships. Run `npx eslint .` and `npm run build` by hand before pushing.

---

## Map

```
src/
  App.jsx                  routes (all eager — no code splitting)
  main.jsx                 entry
  index.css                Tailwind import + ~10 global rules, heavily commented
  lib/
    motion.js              fadeUp, stagger(), viewportOnce
    decor.js               gridBg, boxTint class tokens
  hooks/
    usePageTitle.js        document.title per route
    useTypewriter.js       hero headline typing effect
  data/projects.js         THE project catalogue — single source of truth
  components/
    layout/                MainLayout, Navbar, Footer
    home/                  one file per home section, in page order
    decor/                 CornerMarks, LineBox — ambient accents
    ProjectCard.jsx        grid tile → opens the lightbox
    ProjectLightbox.jsx    full-size artwork view, keyboard nav
    CategoryFilter.jsx     shared by the home grid and the projects page
  pages/                   one per route
  assets/images/           see assets/images/README.md (NOTE: partly stale)
```

Routes: `/` · `/project` (singular — `/projects` redirects to it) · `/about` ·
`/contact` · `*` → 404. All nest inside `MainLayout`, so the 404 keeps nav and
footer. `vercel.json` rewrites everything to `/` so deep links work.

Home sections render in the order listed in `pages/HomePage.jsx` and their
`( 01 )`–`( 05 )` labels follow that order — renumber them together.

## Data flow

`src/data/projects.js` is the only place project data lives. 16 entries:

```js
{ id, slug, title, category, img, wide?, description }
```

- `category` must be one of `projectCategories` (same file) or the filter can't
  reach it. That array is hand-maintained and can drift from the data.
- `wide: true` marks landscape work (2 of 16). See card ratios below.
- Images live at `src/assets/images/projects/<slug>/preview.jpg` — drop in a
  replacement `preview.jpg` and nothing else changes.
- The hero and the Services panel pull their images **by slug** via
  `projects.find(...)`. Those lookups are unguarded, so renaming a slug throws
  at module scope and blanks the entire app. Slugs currently depended on:
  `relish-locals-opening`, `transactx-sub-accounts`.

---

## Hard constraints — do not regress these

Each one is a bug that shipped, was diagnosed, and cost real time. The code
comments at these sites explain them; keep the comments with the code.

**1. Never put a full-viewport `position: fixed` layer with `mix-blend-mode`
above the nav.** A blended noise overlay at `z-index: 999` painted stale page
content over the nav on iOS Safari, which looked like content bleeding into the
status bar. It survived several wrong fixes. The noise layer is now
`position: absolute; z-index: 0`, unblended (`index.css`).

**2. `viewport-fit=cover` in `index.html` and the `env(safe-area-inset-*)`
padding are a matched pair.** Remove either half and content goes behind the iOS
status bar. `viewport-fit=cover` was removed once as a "fix" and made it worse.

**3. The nav is a floating capsule, not a bar** (`h-14 max-w-5xl rounded-full`,
inset from the edges). Because it floats, content is visible above and beside
it — that is the intended look. The 112px top-edge scrim in `Navbar.jsx`
(`z-40`, below the nav's `z-50`) is what stops artwork reading as broken at the
screen edge. Measured: mean brightness under 1/255 through the top 70px.

**4. Nav glass alpha is measured, not chosen.** `rgba(0,0,0,0.72)` at rest,
`0.9` scrolled, behind `backdrop-blur-xl`, with a solid `@supports` fallback in
`index.css`. At 0.72 the channel spread is 12; at lower alpha, text passing
underneath becomes readable. Do not lower it.

**5. Base font goes on `body`, never on `*`.** A universal selector beats
inheritance and silently overrode `.font-display` on every nested element — the
entire hero headline and half the logo rendered in the wrong typeface for a
while without anyone noticing.

**6. `React.memo` on `HeroFrame` and `HeroVisual` is load-bearing, not an
optimisation.** The role typewriter re-renders `Hero` about every 50ms; each
re-render handed framer a fresh `animate` array and restarted the float loops
from scratch. Measured before the fix: 0.98px of a 5–7px travel, and the two
delayed frames never moved at all. Remove the memo and the collage freezes.

**7. `useTypewriter`'s `words` argument must be a stable reference.** Inline
array literals restart the effect every render, so the typewriter never types.
`greetingWords` and `roles` are hoisted to module scope in `Hero.jsx` for this
reason. The hook does not defend itself — the next caller can hit this.

**8. Cards are portrait 4:5.** The artwork is almost all 4:5; the grid used to
be square/4:3 with `object-cover` and cropped 40% off most pieces (worst case
51%). Landscape work opts out with `wide: true` and gets a 16:9 card spanning
two columns **at every breakpoint** (`col-span-2`, not `sm:col-span-2` — the
responsive form left a hole in the mobile grid).

**9. `overscroll-behavior-y` must stay `auto`.** Setting it to `none` disables
pull-to-refresh, which was reported as a bug.

**10. Internal links use `Link` / `MotionLink`, never `<a href="/...">`.** Six
raw anchors were triggering full document reloads and re-downloading the bundle.

---

## Conventions

**Palette** — pure black page, panels lifted slightly above it. Accent blue is
the only colour on the site.

| role | value |
|---|---|
| page | `#000000` |
| raised panel | `#050506` |
| card / section gradient | `#090A0B`, `#0D0E0F` |
| hairline / fill | `rgba(255,255,255,0.03–0.18)` |
| heading | `#FAFAFA` |
| body text | `rgba(255,255,255,0.70)` |
| muted text | `rgba(255,255,255,0.55)` — the floor; below ~0.50 fails AA on black |
| accent | `#1D4ED8 → #60A5FA` |

There is **no `@theme` block**, so these are inline literals repeated across
~70 distinct values. Match existing values rather than inventing new ones.

**Motion** — the shared ease is `cubic-bezier(0.16, 1, 0.3, 1)`, hand-typed in
12 places. Taps use `{ type: "spring", stiffness: 400, damping: 18|20 }`.
`prefers-reduced-motion` is honoured three ways: `MotionConfig reducedMotion="user"`
in `App.jsx`, a CSS media query in `index.css`, and an explicit check in the
testimonial autoplay (framer's config doesn't govern a raw `setInterval`).

**Accessibility floor already met** — global `:focus-visible` ring, WCAG 2.5.8
(24×24) tap targets on primary controls, AA contrast. Don't drop below it.

**Images** — export at ~1200px on the long edge, JPEG q80. The catalogue was
re-encoded from 6.11MB to 2.73MB at that setting with no visible loss. There is
no `srcset`, so a phone downloads the same file a desktop does.

---

## Standing instructions from Olamide

- **Leave the placeholders alone.** The testimonial quote wording
  (`components/home/Testimonial.jsx`) and the two-revisions figure on the
  Contact page are his to write. The client *names* are real (Miss Teniola,
  DomStack, Zook Fabrics); the words attributed to them are not. Do not invent
  quotes for named people.
- **Do the work now, don't schedule it.** He has hit usage limits before and
  does not want work deferred to a timer.
- Verify claims by measuring, not by eyeballing. Past sessions reported things
  as fixed from API state alone and were wrong.

## Deploying and verifying

Push to `main` and Vercel builds automatically. To confirm a change is actually
live — not just deployed:

1. `grep -o 'index-[A-Za-z0-9_-]*\.js' dist/index.html` for the local bundle hash.
2. Fetch the live page **with a cache-busting query string** and compare the
   hash. Without one you will get a cached copy of the previous build and
   wrongly conclude nothing shipped.
3. Plain `curl` to `thelammydeart.vercel.app` is blocked by the sandbox proxy
   (403 on CONNECT). Use the Vercel MCP fetch tool instead.

For visual checks, Chromium is at `/opt/pw-browsers/chromium`; install
playwright with `npm install --no-save playwright` and remove it afterwards.
Test at 390px first — that is the real audience.

## Known open issues

A full audit was carried out; findings are summarised in the session that
produced this file. The significant open items:

- `ProjectLightbox`'s effect re-runs on every parent render (inline `onClose`
  and a re-created `step` in the deps), which re-steals focus to the close
  button mid-view.
- `Navbar` and `ProjectLightbox` implement the body scroll lock differently;
  the nav's version clobbers rather than restores, so closing the menu can
  break an open lightbox's lock.
- No scroll restoration on route change — navigating from the bottom of one
  page lands you scrolled down on the next.
- `import React` is dead in 20 of 21 components; the ESLint
  `varsIgnorePattern` masks it.
- `vite.config.js` has an `optimizeDeps` entry for a package that is not
  installed and not imported.
- No `<main>` landmark, no skip link, no focus trap on the mobile menu.
- Single 492KB bundle, no route-level code splitting.
- `src/assets/images/README.md` contradicts `README.md` on image sizing and
  card ratios — trust `README.md`.

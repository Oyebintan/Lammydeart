# Images

Every image on the site lives in its own folder here, and the main image in each
folder is always called `preview.jpg`.

```
images/
  profile/preview.jpg                        <- the photo of you on the About page
  projects/
    zook-fabrics/preview.jpg                 <- flagship brand board: shown big on
                                                 the Home hero AND in the Branding
                                                 service tab — not part of the
                                                 projects catalog below
    zook-fabrics-new-month/preview.jpg
    relish-locals-opening/preview.jpg        <- also used by the Home hero
    honey-pot-back-to-school/preview.jpg
    after-it-hangout/preview.jpg
    asson-week-novelty-cup/preview.jpg
    campus-mirror-easter/preview.jpg
    ooutech-good-energy/preview.jpg
    ojude-nimelssa-banner/preview.jpg
    east-side-vendor/preview.jpg
    eat-with-ade-valentine/preview.jpg
    regina-birthday-bash/preview.jpg
    ambassador-eri-ife-rate-card/preview.jpg
    idpay-airdrop-tip/preview.jpg
    transactx-new-year/preview.jpg
    transactx-eid-mubarak/preview.jpg
    transactx-sub-accounts/preview.jpg       <- also used by the Social Ads tab
                                                 AND the Home hero
```

## Replacing an image

Drop your new file in as `preview.jpg`, replacing the old one. Keep the filename
and the folder exactly as they are — no code changes needed for the title,
category or description to stay right, since those live in `data/projects.js`
and never in a component file. The one exception is the Home hero and the
Service tabs, which point at specific slugs by name (see below) — if you
replace one of those folders with a different design, either accept the new
title, or edit that slug's `title`/`category` in `data/projects.js` to match
what you dropped in.

```bash
# example: new photo of you
cp ~/Downloads/new-headshot.jpg src/assets/images/profile/preview.jpg
```

Then commit and push, and Vercel rebuilds automatically.

## Adding a brand new project

1. Make a folder: `projects/your-project-name/` and put `preview.jpg` in it.
2. Add an entry to `src/data/projects.js` — import the new `preview.jpg` and add
   an object with `id`, `slug` (same as the folder name), `title`, `category`,
   `img`, and `description`.

`category` must be one of the values in `projectCategories` in that same file,
otherwise the project won't show under any filter.

## Featuring a project on the Home hero

`src/components/home/Hero.jsx` picks two of its three collage frames by slug —
look for `featuredProject("...")` near the top of the file and pass a different
slug to feature a different project. The title and category shown on that
frame are read from `data/projects.js` automatically; only the tinted accent
colour is set by hand alongside it, so it's worth picking one that matches the
new artwork's own palette.

## Sizing guidance

- **Project previews** — around 1400–1700px on the long edge is plenty. They're
  displayed in 4:3 and square-ish cards, so anything close to those ratios crops
  best; very tall or very wide images lose their edges.
- **Your photo** — crop to roughly 4:3 (landscape) *before* dropping it in. The
  frame on the About page is 4:3, so a tall portrait gets its top and bottom cut
  off and ends up looking zoomed in.
- Save as JPEG at ~80–85% quality. Every image here ships to visitors, so keeping
  each one under about 400–600KB keeps the site quick to load. The catalog
  swapped in mid-2026 arrived at 2–8MB per file straight from the design
  software — resized to a 1700px long edge and re-encoded, they landed at
  200–600KB with no visible quality loss.

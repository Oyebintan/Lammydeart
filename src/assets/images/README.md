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
                                                 AND the Social Ads service tab
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
    transactx-sub-accounts/preview.jpg       <- also used by the Home hero
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

**Do not rename a folder without updating its `slug`.** The hero and the Social
Ads tab look their artwork up by slug through `getProject()`, which throws a
named error if the slug is missing. That is deliberate — it used to be an
unguarded lookup that took the whole site down with a bare `TypeError`.

## Adding a brand new project

1. Make a folder: `projects/your-project-name/` and put `preview.jpg` in it.
2. Add an entry to `src/data/projects.js` — import the new `preview.jpg` and add
   an object with `id`, `slug` (same as the folder name), `title`, `category`,
   `img`, and `description`.

`category` can be any string; the filter list is derived from the data, so a new
category creates its own filter chip automatically.

Two optional fields:

- `wide: true` — for landscape artwork. Gives it a 16:9 card spanning the full
  grid width instead of cropping it into a portrait card.
- `featured: true` — puts the "Featured" badge on that card in the Home grid.

## Featuring a project on the Home hero

`src/components/home/Hero.jsx` picks two of its three collage frames by slug —
look for `featuredProject("...")` near the top of the file and pass a different
slug to feature a different project. The title and category shown on that
frame are read from `data/projects.js` automatically; only the tinted accent
colour is set by hand alongside it, so it's worth picking one that matches the
new artwork's own palette.

## Sizing guidance

**Export at roughly 1200px on the long edge, JPEG quality ~80.** That is the
whole rule, and the root `README.md` states the same thing — if these two ever
disagree, the root README is correct.

- **Project previews** — cards are **portrait 4:5**, which is how most of this
  work is designed, so 4:5 crops best. Genuinely landscape pieces should set
  `wide: true` in `data/projects.js` rather than being squeezed into portrait.
- **Your photo** — crop to **4:5 (portrait)** before dropping it in. The frame
  on the About page is 4:5, so a landscape crop loses its sides.
- The current set runs 73–270KB per file, 2.73MB for all 18. They arrived from
  the design software at 2–8MB each; re-encoding at 1200px/q80 cut the total
  from 6.11MB to 2.73MB with no visible loss at display size. Oversized files
  are the main thing that makes the work look slow to appear on mobile data, so
  please do not raise these numbers — the grid shows images around 420px wide
  on desktop and ~170px on a phone, and the lightbox caps at 65vh.

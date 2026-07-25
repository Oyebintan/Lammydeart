# Images

Every image on the site lives in its own folder here, and the main image in each
folder is always called `preview.jpg`.

```
images/
  profile/preview.jpg                 <- the photo of you on the About page
  projects/
    zook-fabrics/preview.jpg          <- flagship work: shown big on the Home
                                         hero AND in the Branding service tab
    campus-election-campaign/preview.jpg
    event-promotion/preview.jpg
    rexona-giveaway-campaign/preview.jpg
    cultural-festival-poster/preview.jpg   <- also used by the Social Ads tab
    laundry-service-flyer/preview.jpg
    eid-mubarak-greeting/preview.jpg
    gadget-store-promo/preview.jpg
    perfume-skincare-flyer/preview.jpg
    happy-new-month-poster/preview.jpg
```

## Replacing an image

Drop your new file in as `preview.jpg`, replacing the old one. Keep the filename
and the folder exactly as they are — no code changes needed.

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

## Sizing guidance

- **Project previews** — around 1400–1600px on the long edge is plenty. They're
  displayed in 4:3 and square-ish cards, so anything close to those ratios crops
  best; very tall or very wide images lose their edges.
- **Your photo** — crop to roughly 4:3 (landscape) *before* dropping it in. The
  frame on the About page is 4:3, so a tall portrait gets its top and bottom cut
  off and ends up looking zoomed in.
- Save as JPEG at ~80–85% quality. Every image here ships to visitors, so keeping
  each one under about 400KB keeps the site quick to load.

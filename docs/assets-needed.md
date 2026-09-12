# Assets needed

The nine image slots the deck declares, what belongs in each, and how to add one. The deck
builds and deploys with every slot empty — `ImageSlot` renders a dashed placeholder — so nothing
here blocks a release. It blocks the talk being good.

**All nine slots are filled** as of 2026-09-12; see *What was delivered* below for the measured
crop on each, which is the only thing still worth improving.

Slot ids are defined in `deck/src/content/images.ts` and are type-checked: `SlotId` is a closed
union and `images` is a `Record<SlotId, string | null>`, so a missing key is a build error.

## Where files go

`deck/src/assets/images/`. **Not `deck/public/`** — Vite rewrites the URL of an imported asset for
the `/models-in-the-wild/` Pages base path, and a file in `public/` would keep a root-absolute URL
and 404 on the deployed site.

Naming convention is `<slot-id>.<ext>`. Nothing enforces it; it just makes the registry readable.
`.webp`, `.png`, `.jpg`, `.avif` and `.svg` all work through the same pipeline. The nine in the
repo are `.webp` — see *Why these are WebP* below — so a replacement dropped in as `.png` needs the
extension changed in the `images.ts` import too, or it will not be picked up.

Dropping the file in is **not** sufficient. Each image needs two lines in `images.ts`:

```ts
import atlasOverview from "../assets/images/atlas-overview.webp";
// ...
  "atlas-overview": atlasOverview,
```

No slide file ever changes — slides reference slots by id.

## The nine slots

| File | Slot id | Slide | Target shape | Suggested capture |
| --- | --- | --- | --- | --- |
| `art-family-docs.png` | `art-family-docs` | 2, card 01 | 1.44:1 landscape | 1280 × 880 |
| `art-cv-atlas.png` | `art-cv-atlas` | 2, card 02 | 1.44:1 landscape | 1280 × 880 |
| `art-radar.png` | `art-radar` | 2, card 03 | 1.44:1 landscape | 1280 × 880 |
| `art-deutsch.png` | `art-deutsch` | 2, card 04 | 1.44:1 landscape | 1280 × 880 |
| `art-scorequant.png` | `art-scorequant` | 2, card 05 | 1.44:1 landscape | 1280 × 880 |
| `atlas-overview.png` | `atlas-overview` | 12, right half | 0.88:1 **portrait** | 1600 × 1800 |
| `atlas-narrative.png` | `atlas-narrative` | 14, right pane | 1.04:1 **near-square** | 1870 × 1790 |
| `radar-digest.png` | `radar-digest` | 17, right pane | 1.04:1 **near-square** | 1870 × 1790 |
| `deutsch-app.png` | `deutsch-app` | 22, right pane | 1.04:1 **near-square** | 1870 × 1790 |

### What was delivered

Measured in the browser at a 1920x1080 viewport, comparing each file's natural ratio against the
box the layout gives it. `cover` crops the difference; the column says how much and off which
edge. Nothing here is broken — it is the list to work from if a slot is ever re-shot.

| Slot | In the repo | Ratio | Slot ratio | Cropped |
| --- | --- | --- | --- | --- |
| `art-family-docs` | 1000 x 594 | 1.69 | 1.43 | 15% off the sides |
| `art-cv-atlas` | 1000 x 654 | 1.53 | 1.43 | 7% off the sides |
| `art-radar` | 1000 x 593 | 1.69 | 1.43 | 15% off the sides |
| `art-deutsch` | 1000 x 691 | 1.45 | 1.43 | 1% — effectively exact |
| `art-scorequant` | 1000 x 604 | 1.66 | 1.43 | 14% off the sides |
| `atlas-overview` | 1900 x 1559 | 1.22 | 0.88 | **27% off the sides** |
| `atlas-narrative` | 1900 x 1559 | 1.22 | 1.04 | 15% off the sides |
| `radar-digest` | 1794 x 1900 | 0.94 | 1.04 | 9% off top and bottom |
| `deutsch-app` | 1900 x 1599 | 1.19 | 1.04 | 12% off the sides |

`atlas-overview` is the one that costs something: slide 12's right half is portrait, the shot is
landscape, and the quarter that goes is the right-hand detail panel, which gets cut mid-sentence.
A re-shoot in a tall window, or switching that slot to a portrait region of the same page, is the
fix.

### Why these are WebP

The originals were 2-3x larger than anything renders them — the montage cards display at 315 x 220
canvas pixels and arrived as 3000-pixel captures — and `dist/` came to 13 MB, which is a slow
first paint on conference wifi. They are stored downscaled to roughly 2x their rendered size and
encoded as **lossless** WebP: 2.3 MB for all nine against 12 MB of PNG, with the pixels
bit-identical at that size. Lossy would have been smaller again and was not worth the risk of
artefacts on small text in a deck whose argument is that the screenshots are legible evidence.

The full-resolution PNG originals are in git, in commit `3619e83`, if a slot ever needs re-cropping
rather than re-shooting.

To add another, or redo one of these:

```bash
# landscape; use -resize 0 1900 for a portrait shot, and 1000 for a slide-2 montage card
cwebp -lossless -z 9 -resize 1900 0 shot.png -o deck/src/assets/images/<slot-id>.webp
```

### Aspect ratio matters more than resolution

`.slot` is `object-fit: cover`: an image is **cropped to fill** its box, never letterboxed. A
default 16:9 browser screenshot dropped into the near-square slots on slides 14, 17 and 22 loses
roughly a third of its width off both sides. Resize the browser window to roughly the target
shape before capturing. On a Retina display `⌘⇧4` already captures at 2×.

The five montage cards on slide 2 should come from the same capture setup — same browser, same
zoom, same chrome or none. Five shots at five different window sizes read as five different
projects, which is the opposite of what that slide is for.

### What each one shows

- **`atlas-overview`** — the Atlas entry surface: concept, algorithm and model pages with their
  relationships visible. It sits opposite copy that claims exactly that.
- **`atlas-narrative`** — `vitavision.dev/atlas/narratives/foundation-models-for-vision`, the page
  the live demo traces back to its primary papers.
- **`radar-digest`** — a rendered daily digest with rings and reasons legible, so the funnel on
  the left has a visible output.
- **`deutsch-app`** — `deutsch.vitavision.dev`: a unit or its word cards.

### `art-family-docs` — redaction required

`docs/projects/family-documents-organizer.md` is explicit: local only, sensitive data, never
screenshotted without redaction. Before this file exists, remove or obscure:

- person names, including in category labels;
- document titles in the register list;
- any number — tax, insurance, account, identity;
- native file names.

The card renders at roughly 317 × 220 canvas pixels, so a viewer screenshot at that size shows
structure and almost no legible text. Blurring the list column is likely sufficient. If you would
rather not ship a screenshot at all, say so and the card becomes a rendered graphic built from the
same archive tree slide 9 already uses.

## Not an asset, but also yours

Two live demos are scripted in the speaker notes and depend on the sites being reachable from the
venue: slide 14 (CV Atlas narrative) and slide 22 (Deutsch-Atlas). The screenshots in those slots
are the fallback if the network is not cooperative.

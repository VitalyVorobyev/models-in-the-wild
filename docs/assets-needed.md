# Assets needed

The nine image slots the deck declares, what belongs in each, and how to add one. The deck
builds and deploys with every slot empty — `ImageSlot` renders a dashed placeholder — so nothing
here blocks a release. It blocks the talk being good.

Slot ids are defined in `deck/src/content/images.ts` and are type-checked: `SlotId` is a closed
union and `images` is a `Record<SlotId, string | null>`, so a missing key is a build error.

## Where files go

`deck/src/assets/images/`. **Not `deck/public/`** — Vite rewrites the URL of an imported asset for
the `/models-in-the-wild/` Pages base path, and a file in `public/` would keep a root-absolute URL
and 404 on the deployed site.

Naming convention is `<slot-id>.png`. Nothing enforces it; it just makes the registry readable.
`.webp`, `.jpg`, `.avif` and `.svg` all work through the same pipeline.

Dropping the file in is **not** sufficient. Each image needs two lines in `images.ts`:

```ts
import atlasOverview from "../assets/images/atlas-overview.png";
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

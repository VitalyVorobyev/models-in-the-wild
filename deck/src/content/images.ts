/*
 * Every picture in the deck, in one place.
 *
 * To add art: drop the file in src/assets/images/, import it at the top of this
 * file, and swap the matching `null` for the import. Nothing else changes — the
 * slides already reference these slots by id, and <ImageSlot> renders a dashed
 * placeholder for any slot that is still null.
 *
 *   import atlasOverview from "../assets/images/atlas-overview.png";
 *   ...
 *   "atlas-overview": atlasOverview,
 *
 * Imported assets (rather than files in public/) matter here: Vite rewrites
 * their URLs for the /models-in-the-wild/ base path automatically, so the deck
 * keeps working both locally and on GitHub Pages.
 */

export type SlotId =
  | "art-cv-atlas"
  | "art-family-docs"
  | "art-deutsch"
  | "art-radar"
  | "art-scorequant"
  | "atlas-overview"
  | "atlas-narrative";

export const images: Record<SlotId, string | null> = {
  "art-cv-atlas": null,
  "art-family-docs": null,
  "art-deutsch": null,
  "art-radar": null,
  "art-scorequant": null,
  "atlas-overview": null,
  "atlas-narrative": null,
};

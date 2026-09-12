/*
 * Every picture in the deck, in one place.
 *
 * To add or replace art: drop the file in src/assets/images/, import it at the
 * top of this file, and point the matching slot at the import. Nothing else
 * changes — the slides reference these slots by id, and <ImageSlot> renders a
 * dashed placeholder for any slot set back to null.
 *
 * Every slot is `object-fit: cover` against a slot whose shape the layout
 * decides, so an image far off its slot's aspect ratio loses the difference off
 * the sides. docs/assets-needed.md records the target shape for each.
 *
 * Imported assets (rather than files in public/) matter here: Vite rewrites
 * their URLs for the /models-in-the-wild/ base path automatically, so the deck
 * keeps working both locally and on GitHub Pages.
 *
 * There is deliberately no slot for the Family Documents Organizer beyond the
 * montage card: the data is sensitive, and slide 9 shows the archive's shape
 * as a tree instead.
 */

import artCvAtlas from "../assets/images/art-cv-atlas.webp";
import artDeutsch from "../assets/images/art-deutsch.webp";
import artFamilyDocs from "../assets/images/art-family-docs.webp";
import artRadar from "../assets/images/art-radar.webp";
import artScorequant from "../assets/images/art-scorequant.webp";
import atlasNarrative from "../assets/images/atlas-narrative.webp";
import atlasOverview from "../assets/images/atlas-overview.webp";
import deutschApp from "../assets/images/deutsch-app.webp";
import radarDigest from "../assets/images/radar-digest.webp";

export type SlotId =
  | "art-cv-atlas"
  | "art-family-docs"
  | "art-deutsch"
  | "art-radar"
  | "art-scorequant"
  | "atlas-overview"
  | "atlas-narrative"
  | "radar-digest"
  | "deutsch-app";

export const images: Record<SlotId, string | null> = {
  "art-cv-atlas": artCvAtlas,
  "art-family-docs": artFamilyDocs,
  "art-deutsch": artDeutsch,
  "art-radar": artRadar,
  "art-scorequant": artScorequant,
  "atlas-overview": atlasOverview,
  "atlas-narrative": atlasNarrative,
  "radar-digest": radarDigest,
  "deutsch-app": deutschApp,
};

import artAtlas from "../assets/images/art-cv-atlas.webp";
import artDeutsch from "../assets/images/art-deutsch.webp";
import artFamily from "../assets/images/art-family-docs.webp";
import artRadar from "../assets/images/art-radar.webp";
import artScorequant from "../assets/images/art-scorequant.webp";
import atlasNarrative from "../assets/images/atlas-narrative-new.png";
import atlasOverview from "../assets/images/atlas-overview.webp";
import familyLetter from "../assets/images/family-letter.webp";
import redaktion from "../assets/images/redaktion.png";
export const images = {
  "art-family-docs": artFamily,
  "family-letter": familyLetter,
  "art-cv-atlas": artAtlas,
  "art-radar": artRadar,
  "art-deutsch": artDeutsch,
  "art-scorequant": artScorequant,
  "atlas-overview": atlasOverview,
  "atlas-narrative": atlasNarrative,
  redaktion,
} satisfies Record<string, string | null>;
export type SlotId = keyof typeof images;

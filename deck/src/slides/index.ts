import type { ComponentType } from "react";
import S1 from "./01-title";
import S2 from "./02-artifacts";
import S3 from "./03-the-claim";
import S4 from "./04-the-workflow";
import S5 from "./05-the-memory";
import S6 from "./06-constrain-intent";
import S7 from "./07-family";
import S8 from "./08-one-folder";
import S9 from "./09-implication-01";
import S10 from "./10-atlas";
import S11 from "./11-atlas-workflow";
import S12 from "./12-implication-02";
import S13 from "./13-radar";
import S14 from "./14-radar-routine";
import S15 from "./15-implication-03";
// v0.5 slides, kept under their old numbers until each section is redone.
import V14 from "./v05-14-deutsch-ecosystem";
import V15 from "./v05-15-redaktion";
import V16 from "./v05-16-tonwerk";
import V17 from "./v05-17-learner";
import V18 from "./v05-18-score-space";
import V19 from "./v05-19-optimization";
import V20 from "./v05-20-research-timeline";
import V21 from "./v05-21-verification";
import V22 from "./v05-22-counterexample";
import V23 from "./v05-23-departments";
import V24 from "./v05-24-question";

export interface DeckSection {
  id: string;
  number: string | null;
  title: string;
  slides: ComponentType[];
}

export const sections: DeckSection[] = [
  { id: "opening", number: null, title: "Opening", slides: [S1, S2, S3, S4, S5, S6] },
  { id: "family-docs", number: "01", title: "Family Documents Organizer", slides: [S7, S8, S9] },
  { id: "cv-atlas", number: "02", title: "CV Atlas", slides: [S10, S11, S12] },
  { id: "cv-tech-radar", number: "03", title: "CV Tech Radar", slides: [S13, S14, S15] },
  { id: "deutsch-atlas", number: "04", title: "Deutsch-Atlas", slides: [V14, V15, V16, V17] },
  { id: "scorequant", number: "05", title: "ScoreQuant", slides: [V18, V19, V20, V21, V22] },
  { id: "synthesis", number: null, title: "Synthesis", slides: [V23, V24] },
];

export const slides = sections.flatMap((s) => s.slides);
export const sectionOfSlide = sections.flatMap((s) => s.slides.map(() => s));
export const sectionStart = sections.map((_, i) =>
  sections.slice(0, i).reduce((sum, s) => sum + s.slides.length, 0),
);

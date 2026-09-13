import type { ComponentType } from "react";
import S1 from "./01-title";
import S2 from "./02-artifacts";
import S3 from "./03-workflow";
import S4 from "./04-memory";
import S5 from "./05-constraints";
import S6 from "./06-family-viewer";
import S7 from "./07-family-flow";
import S8 from "./08-atlas";
import S9 from "./09-atlas-graph";
import S10 from "./10-atlas-demo";
import S11 from "./11-accumulate-filter";
import S12 from "./12-radar-funnel";
import S13 from "./13-radar-feedback";
import S14 from "./14-deutsch-ecosystem";
import S15 from "./15-redaktion";
import S16 from "./16-tonwerk";
import S17 from "./17-learner";
import S18 from "./18-score-space";
import S19 from "./19-optimization";
import S20 from "./20-research-timeline";
import S21 from "./21-verification";
import S22 from "./22-counterexample";
import S23 from "./23-departments";
import S24 from "./24-question";
export interface DeckSection {
  id: string;
  number: string | null;
  title: string;
  slides: ComponentType[];
}
export const sections: DeckSection[] = [
  { id: "opening", number: null, title: "Opening", slides: [S1, S2, S3, S4, S5] },
  { id: "family-docs", number: "01", title: "Family Documents Organizer", slides: [S6, S7] },
  { id: "cv-atlas", number: "02", title: "CV Atlas", slides: [S8, S9, S10] },
  { id: "cv-tech-radar", number: "03", title: "CV Tech Radar", slides: [S11, S12, S13] },
  { id: "deutsch-atlas", number: "04", title: "Deutsch-Atlas", slides: [S14, S15, S16, S17] },
  { id: "scorequant", number: "05", title: "ScoreQuant", slides: [S18, S19, S20, S21, S22] },
  { id: "synthesis", number: null, title: "Synthesis", slides: [S23, S24] },
];
export const slides = sections.flatMap((s) => s.slides);
export const sectionOfSlide = sections.flatMap((s) => s.slides.map(() => s));
export const sectionStart = sections.map((_, i) =>
  sections.slice(0, i).reduce((sum, s) => sum + s.slides.length, 0),
);

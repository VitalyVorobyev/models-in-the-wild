/*
 * The deck sequence, grouped into the seven sections the talk actually has.
 *
 * `sections` is the contract: its order and the slide numbering it implies must
 * match docs/slide-map.md, and adding or moving a slide means updating that file
 * in the same change. `slides` is derived from it rather than maintained
 * alongside it, so the flat sequence and the grouping can never disagree.
 *
 * The section registry is not decoration: DeckChrome reads it for the footer
 * label and SectionMap renders it directly, so a new slide appears in both
 * navigators with no further edit.
 */
import type { ComponentType } from "react";
import { project } from "../content/projects";
import Title from "./01-title";
import FiveArtifacts from "./02-five-artifacts";
import TheClaim from "./03-the-claim";
import TheQuestion from "./04-the-question";
import TheWorkflow from "./05-the-workflow";
import ContextBackbone from "./06-context-backbone";
import RigidVsFlexible from "./07-rigid-vs-flexible";
import FamilyDocsOpener from "./08-family-docs-opener";
import FamilyDocsSystem from "./09-family-docs-system";
import FamilyDocsImplication from "./10-family-docs-implication";
import CvAtlasOpener from "./11-cv-atlas-opener";
import CvAtlasWhy from "./12-cv-atlas-why";
import CvAtlasPipeline from "./13-cv-atlas-pipeline";
import CvAtlasDemo from "./14-cv-atlas-demo";
import CvAtlasImplication from "./15-cv-atlas-implication";
import CvTechRadarOpener from "./16-cv-tech-radar-opener";
import CvTechRadarFunnel from "./17-cv-tech-radar-funnel";
import AtlasVsRadar from "./18-atlas-vs-radar";
import CvTechRadarImplication from "./19-cv-tech-radar-implication";
import DeutschAtlasOpener from "./20-deutsch-atlas-opener";
import DeutschAtlasProgression from "./21-deutsch-atlas-progression";
import DeutschAtlasDemo from "./22-deutsch-atlas-demo";
import DeutschAtlasImplication from "./23-deutsch-atlas-implication";
import ScoreQuantOpener from "./24-scorequant-opener";
import ScoreQuantEscalation from "./25-scorequant-escalation";
import ScoreQuantVerification from "./26-scorequant-verification";
import ScoreQuantImplication from "./27-scorequant-implication";
import FiveCapabilities from "./28-five-capabilities";
import BeyondCoding from "./29-beyond-coding";
import TheQuestionAgain from "./30-the-question-again";
import Closing from "./31-closing";

export interface DeckSection {
  /** Stable id, used as a React key and in the section map. */
  id: string;
  /** "01"–"05" for the project sections; null for the framing and the synthesis. */
  number: string | null;
  title: string;
  slides: ComponentType[];
}

/*
 * Project titles come from content/projects.ts rather than being retyped here,
 * so a renamed project changes in exactly one place.
 */
export const sections: DeckSection[] = [
  {
    id: "opening",
    number: null,
    title: "Opening",
    slides: [
      Title,
      FiveArtifacts,
      TheClaim,
      TheQuestion,
      TheWorkflow,
      ContextBackbone,
      RigidVsFlexible,
    ],
  },
  {
    id: "family-docs",
    number: "01",
    title: project("01").name,
    slides: [FamilyDocsOpener, FamilyDocsSystem, FamilyDocsImplication],
  },
  {
    id: "cv-atlas",
    number: "02",
    title: project("02").name,
    slides: [CvAtlasOpener, CvAtlasWhy, CvAtlasPipeline, CvAtlasDemo, CvAtlasImplication],
  },
  {
    id: "cv-tech-radar",
    number: "03",
    title: project("03").name,
    slides: [CvTechRadarOpener, CvTechRadarFunnel, AtlasVsRadar, CvTechRadarImplication],
  },
  {
    id: "deutsch-atlas",
    number: "04",
    title: project("04").name,
    slides: [
      DeutschAtlasOpener,
      DeutschAtlasProgression,
      DeutschAtlasDemo,
      DeutschAtlasImplication,
    ],
  },
  {
    id: "scorequant",
    number: "05",
    title: project("05").name,
    slides: [ScoreQuantOpener, ScoreQuantEscalation, ScoreQuantVerification, ScoreQuantImplication],
  },
  {
    id: "synthesis",
    number: null,
    title: "Synthesis",
    slides: [FiveCapabilities, BeyondCoding, TheQuestionAgain, Closing],
  },
];

/** The flat presentation order — what App.tsx renders. Derived, never edited. */
export const slides: ComponentType[] = sections.flatMap((section) => section.slides);

/** Flat slide index (0-based) → the section that slide belongs to. */
export const sectionOfSlide: DeckSection[] = sections.flatMap((section) =>
  section.slides.map(() => section),
);

/** Flat index (0-based) of a section's first slide. */
export const sectionStart: number[] = sections.map((_, index) =>
  sections.slice(0, index).reduce((total, section) => total + section.slides.length, 0),
);

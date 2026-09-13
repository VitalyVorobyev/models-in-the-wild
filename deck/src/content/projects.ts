import type { SlotId } from "./images";

/*
 * The five projects, in deck order. Slides 2, the five openers and slide 28 all
 * draw from this list, so a URL or a one-liner is corrected in exactly one place.
 *
 * The order is the capability ladder from docs/narrative.md — Organize,
 * Understand, Filter, Create & operate, Discover — which is also an escalation
 * in scale. Each project has a write-up under docs/projects/; nothing here is
 * invented.
 *
 * Note that `link.label` and `montageLabel` deliberately differ: the montage
 * cards on slide 2 are narrow and use shortened URLs, while the full-bleed
 * openers spell the host out.
 */

export interface Project {
  number: string;
  name: string;
  /** One line under the name on slide 2. */
  oneLiner: string;
  /** The capability this project demonstrates, one or two words — slide 28. */
  capability: string;
  /** What the agent actually does for that capability — slide 28. */
  capabilityNote: string;
  /** The one sentence the section's accent slide leaves behind; slide 28 gathers the five. */
  implication: string;
  /** Subtitle on the project's dark opener. */
  subtitle: string;
  /** Opener link; null where there is nothing public to show. */
  link: { href: string; label: string } | null;
  /** Dashed chip on the opener, only where access needs stating. */
  note?: string;
  /** The idea the project borrows, credited on the opener. */
  origin?: { href: string; label: string };
  montageSlot: SlotId;
  /** Bottom line of the slide-2 card — a short URL, or a plain note. */
  montageLabel: string;
}

export const projects: Project[] = [
  {
    number: "01",
    name: "Family Documents Organizer",
    oneLiner: "One family's paperwork, organized",
    capability: "Organize",
    capabilityNote: "Turn a small messy corpus into a useful structure",
    implication: "Agents make very small, custom software economically rational.",
    subtitle: "A register for one family's paperwork. Structured files plus an agent.",
    link: null,
    note: "local only · not public",
    montageSlot: "art-family-docs",
    montageLabel: "local only",
  },
  {
    number: "02",
    name: "CV Atlas",
    oneLiner: "Living knowledge from primary papers",
    capability: "Understand",
    capabilityNote: "Accumulate knowledge, relationships and narratives",
    implication: "From documents we store to knowledge we can navigate.",
    subtitle: "A personal knowledge system, maintained from primary papers.",
    link: { href: "https://vitavision.dev/atlas", label: "vitavision.dev/atlas" },
    montageSlot: "art-cv-atlas",
    montageLabel: "vitavision.dev/atlas",
  },
  {
    number: "03",
    name: "CV Tech Radar",
    oneLiner: "A daily filter on the computer-vision firehose",
    capability: "Filter",
    capabilityNote: "Handle a continuous high-volume information stream",
    implication: "Filtering is a routine. Routines can run on their own. People keep the decision.",
    subtitle:
      "A daily filter on the computer-vision firehose. The Atlas accumulates; the Radar filters.",
    link: {
      href: "https://vitalyvorobyev.github.io/cv-tech-radar/",
      label: "vitalyvorobyev.github.io/cv-tech-radar",
    },
    origin: { href: "https://www.thoughtworks.com/radar", label: "ThoughtWorks Technology Radar" },
    montageSlot: "art-radar",
    montageLabel: "github.io/cv-tech-radar",
  },
  {
    number: "04",
    name: "Deutsch-Atlas",
    oneLiner: "A German course and its production system",
    capability: "Create & operate",
    capabilityNote: "Build and maintain a large evidence-grounded content system",
    implication: "Start with evidence and standards. Let agents create inside the verified frame.",
    subtitle: "A German course I actually use — and the production system behind it.",
    link: { href: "https://deutsch.vitavision.dev", label: "deutsch.vitavision.dev" },
    montageSlot: "art-deutsch",
    montageLabel: "deutsch.vitavision.dev",
  },
  {
    number: "05",
    name: "ScoreQuant",
    oneLiner: "From a library request to research",
    capability: "Discover",
    capabilityNote: "Explore new technical and mathematical territory",
    implication:
      "Missing expertise is no longer a reason not to start. Agents bring the skill we lack, a formal proof included; the independent checks decide what stands.",
    subtitle: "A favour for a former colleague that became a research programme.",
    link: {
      href: "https://github.com/VitalyVorobyev/scorequant",
      label: "github.com/VitalyVorobyev/scorequant",
    },
    montageSlot: "art-scorequant",
    montageLabel: "github.com/…/scorequant",
  },
];

/** Look a project up by its `01`–`05` number, so slides never index blindly. */
export function project(number: string): Project {
  const found = projects.find((candidate) => candidate.number === number);
  if (!found) throw new Error(`No project numbered ${number}`);
  return found;
}

import type { SlotId } from "./images";

/*
 * The five projects. Slides 2, 7/12/14/16/18 and 20 all draw from this list, so
 * a URL or a one-liner is corrected in exactly one place.
 *
 * `story: "written"` means the project has a doc under docs/projects/ and real
 * slides. `"placeholder"` means it does not — per CLAUDE.md, those stay
 * placeholders until discussed with Vitaly. Do not fill them from guesswork.
 *
 * Note that `link.label` and `montageLabel` deliberately differ: the montage
 * cards on slide 2 are narrow and use shortened URLs, while the full-bleed
 * openers spell the host out. That is the handoff's choice, not an oversight.
 */

export interface Project {
  number: string;
  name: string;
  /** One line under the name on slide 2. */
  oneLiner: string;
  /** Capability this project demonstrates, slide 20. */
  capability: string;
  /** Subtitle on the project's dark opener. */
  subtitle: string;
  /** Opener link; null where there is nothing public to show. */
  link: { href: string; label: string } | null;
  montageSlot: SlotId;
  /** Bottom line of the slide-2 card — a short URL, or a plain note. */
  montageLabel: string;
  story: "written" | "placeholder";
}

export const projects: Project[] = [
  {
    number: "01",
    name: "CV Atlas",
    oneLiner: "Living knowledge from primary papers",
    capability: "Personal knowledge system",
    subtitle: "A personal knowledge system, maintained from primary papers.",
    link: { href: "https://vitavision.dev/atlas", label: "vitavision.dev/atlas" },
    montageSlot: "art-cv-atlas",
    montageLabel: "vitavision.dev/atlas",
    story: "written",
  },
  {
    number: "02",
    name: "Family Documents Organizer",
    oneLiner: "Private, local-only information system",
    capability: "Private information tool",
    subtitle: "A private information tool. Local only, sensitive data.",
    link: null,
    montageSlot: "art-family-docs",
    montageLabel: "local only",
    story: "placeholder",
  },
  {
    number: "03",
    name: "Deutsch-Atlas",
    oneLiner: "Large structured learning system",
    capability: "Large structured learning / product system",
    subtitle: "A large, structured learning and product system.",
    link: { href: "https://deutsch.vitavision.dev", label: "deutsch.vitavision.dev" },
    montageSlot: "art-deutsch",
    montageLabel: "deutsch.vitavision.dev",
    story: "placeholder",
  },
  {
    number: "04",
    name: "CV Tech Radar",
    oneLiner: "Ongoing technical intelligence",
    capability: "Ongoing technical intelligence workflow",
    subtitle: "An ongoing technical intelligence workflow.",
    link: {
      href: "https://vitalyvorobyev.github.io/cv-tech-radar/",
      label: "vitalyvorobyev.github.io/cv-tech-radar",
    },
    montageSlot: "art-radar",
    montageLabel: "github.io/cv-tech-radar",
    story: "placeholder",
  },
  {
    number: "05",
    name: "ScoreQuant",
    oneLiner: "Mathematical research + engineering library",
    capability: "Mathematical research + engineering library",
    subtitle: "Mathematical research and an engineering library.",
    link: {
      href: "https://github.com/VitalyVorobyev/scorequant",
      label: "github.com/VitalyVorobyev/scorequant",
    },
    montageSlot: "art-scorequant",
    montageLabel: "github.com/…/scorequant",
    story: "placeholder",
  },
];

export const PLACEHOLDER_CHIP = "PLACEHOLDER · story to be developed with Vitaly";

/** Look a project up by its `01`–`05` number, so slides never index blindly. */
export function project(number: string): Project {
  const found = projects.find((candidate) => candidate.number === number);
  if (!found) throw new Error(`No project numbered ${number}`);
  return found;
}

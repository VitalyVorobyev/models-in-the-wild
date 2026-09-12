import SectionOpener from "../components/SectionOpener";
import { project } from "../content/projects";

const PROJECT = project("03");

export default function CvTechRadarOpener() {
  return (
    <SectionOpener
      label="Project 3 — CV Tech Radar"
      notes="Project 3. Capability shown: Filter. The problem is not storing knowledge, it is coping with the continuous flow. Oriented toward practical, applicable technology rather than foundational research. The site is public — open it during the funnel slide."
      kicker={`Project ${PROJECT.number} / 05`}
      title={PROJECT.name}
      subtitle={PROJECT.subtitle}
      link={PROJECT.link ?? undefined}
    />
  );
}

import SectionOpener from "../components/SectionOpener";
import { project } from "../content/projects";

const PROJECT = project("04");

export default function DeutschAtlasOpener() {
  return (
    <SectionOpener
      label="Project 4 — Deutsch-Atlas"
      notes="Project 4, the largest. Capability shown: Create and operate. Not one application any more — a small educational publishing and production ecosystem, and a course Vitaly actually uses to learn German."
      kicker={`Project ${PROJECT.number} / 05`}
      title={PROJECT.name}
      subtitle={PROJECT.subtitle}
      link={PROJECT.link ?? undefined}
    />
  );
}

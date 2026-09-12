import SectionOpener from "../components/SectionOpener";
import { project } from "../content/projects";

const CV_ATLAS = project("02");

export default function CvAtlasOpener() {
  return (
    <SectionOpener
      label="Project 2 — CV Atlas"
      notes="Project 2. Capability shown: Understand — accumulate knowledge, relationships and narratives from primary sources, continuously."
      kicker={`Project ${CV_ATLAS.number} / 05`}
      title={CV_ATLAS.name}
      subtitle={CV_ATLAS.subtitle}
      link={CV_ATLAS.link ?? undefined}
    />
  );
}

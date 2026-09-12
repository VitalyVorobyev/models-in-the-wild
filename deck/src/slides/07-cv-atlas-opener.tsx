import SectionOpener from "../components/SectionOpener";
import { project } from "../content/projects";

const CV_ATLAS = project("01");

export default function CvAtlasOpener() {
  return (
    <SectionOpener
      label="Project 1 — CV Atlas"
      notes="Project 1. Capability shown: a personal knowledge system maintained continuously from primary sources."
      kicker={`Project ${CV_ATLAS.number} / 05`}
      title={CV_ATLAS.name}
      subtitle={CV_ATLAS.subtitle}
      link={CV_ATLAS.link ?? undefined}
    />
  );
}

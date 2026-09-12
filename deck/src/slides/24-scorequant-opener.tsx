import SectionOpener from "../components/SectionOpener";
import { project } from "../content/projects";

const PROJECT = project("05");

export default function ScoreQuantOpener() {
  return (
    <SectionOpener
      label="Project 5 — ScoreQuant"
      notes="Project 5, the furthest reach. Capability shown: Discover. It began as a favour: a former colleague from particle physics described a hard data-analysis procedure, and the request was to turn it into a publishable library. Started 2026-08-23 under the name FisherBin."
      kicker={`Project ${PROJECT.number} / 05`}
      title={PROJECT.name}
      subtitle={PROJECT.subtitle}
      link={PROJECT.link ?? undefined}
    />
  );
}

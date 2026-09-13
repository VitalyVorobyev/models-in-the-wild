import ImageSlot from "../components/ImageSlot";
import ProjectOpener from "../components/ProjectOpener";
import { project } from "../content/projects";

export default function ScoreQuant() {
  return (
    <ProjectOpener
      project={project("05")}
      notes="One minute. Capability Discover, the furthest reach of the five. It began as a favour: a former colleague from particle physics described a hard data-analysis procedure, and the request was to turn it into a publishable library. The hero is the documentation site, a walkthrough on binning an interferometer readout. Two things to say before the next slide: this is the one project where the workflow was pointed at mathematics rather than software, and the next slide explains the problem in plain words before anything else."
    >
      <ImageSlot
        id="art-scorequant"
        alt="The ScoreQuant documentation site: a walkthrough comparing bin layouts on an interferometer readout"
      />
    </ProjectOpener>
  );
}

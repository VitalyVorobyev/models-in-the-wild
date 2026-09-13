import ImageSlot from "../components/ImageSlot";
import ProjectOpener from "../components/ProjectOpener";
import { project } from "../content/projects";

export default function Radar() {
  return (
    <ProjectOpener
      project={project("03")}
      notes="One minute. Capability Filter. Looks like the Atlas from a distance and is the opposite in kind: the Atlas takes papers I choose to read and grows for years; the Radar takes everything cs.CV publishes today and resets every morning. Atlas output is connected pages; Radar output is a ranked digest, most of it Ignore. The Atlas maintains relationships; the Radar judges a deterministic shortlist. The board on the right is cumulative — 495 items — not one day's digest. Practical technology rather than foundational research. The idea is borrowed from the ThoughtWorks Technology Radar: rings for how close a thing is to use, tracks for what kind of thing it is. Their rings are Adopt, Trial, Assess, Hold; mine are Use, Prototype, Evaluate, Watch."
    >
      <ImageSlot id="art-radar" alt="The CV Tech Radar board: rings and tracks, 495 items" />
    </ProjectOpener>
  );
}

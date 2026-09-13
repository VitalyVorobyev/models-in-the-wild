import ImageSlot from "../components/ImageSlot";
import ProjectOpener from "../components/ProjectOpener";
import { project } from "../content/projects";

export default function Atlas() {
  return (
    <ProjectOpener
      project={project("02")}
      notes="One minute. Capability Understand. Why it exists: learning computer vision meant absorbing a huge amount of information, and a pile of notes and bookmarks was not a system. Concepts, algorithms and models have their own pages; works and ideas are related to each other; narrative stories explain larger developments. Author exploration is work in progress. The public site is the artifact; the next slide is the workflow behind it."
    >
      <ImageSlot
        id="atlas-overview"
        alt="The CV Atlas overview with a selected page and its relationships"
      />
    </ProjectOpener>
  );
}

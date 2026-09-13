import ImageSlot from "../components/ImageSlot";
import ProjectOpener from "../components/ProjectOpener";
import { project } from "../content/projects";

export default function Deutsch() {
  return (
    <ProjectOpener
      project={project("04")}
      notes="One minute. Capability Create and operate. The largest of the five: a German course from A1 to B1 with lessons, exercises, flashcards, reading texts and listening scenes, plus the tools that produce and check it. The screenshot is my own landing page: cards due today, the next topic suggested, 47 of 57 topics done. I use it every day, which is the real test. The next slide is how it was built: evidence and standards first, generation second."
    >
      <ImageSlot
        id="art-deutsch"
        alt="Deutsch-Atlas landing page: today's session, cards due, the next topic"
      />
    </ProjectOpener>
  );
}

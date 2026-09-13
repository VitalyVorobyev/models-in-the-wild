import ImageSlot from "../components/ImageSlot";
import ProjectOpener from "../components/ProjectOpener";
import { project } from "../content/projects";

export default function Family() {
  return (
    <ProjectOpener
      project={project("01")}
      notes="One minute. The smallest project; capability Organize. The pain: time lost finding documents, folder trees that cannot express what a document is, no clean PDF workflow. The viewer on the right is local; Claude works over the files, it is not a search backend inside the app. The letter shown is a handwritten welcome letter from school tutors — first names only, cleared for the talk."
    >
      <ImageSlot
        id="art-family-docs"
        alt="The local viewer: category navigation, a register entry and the document"
      />
    </ProjectOpener>
  );
}

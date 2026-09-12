import SectionOpener from "../components/SectionOpener";
import { project } from "../content/projects";

const PROJECT = project("01");

export default function FamilyDocsOpener() {
  return (
    <SectionOpener
      label="Project 1 — Family Documents Organizer"
      notes="Project 1, the smallest. Capability shown: Organize — turn a small messy corpus into a useful structure. Nothing public to open; the data is a family's paperwork. Describe the pain: time spent finding documents, folder hierarchies not expressive enough, no clean PDF workflow."
      kicker={`Project ${PROJECT.number} / 05`}
      title={PROJECT.name}
      subtitle={PROJECT.subtitle}
      link={PROJECT.link ?? undefined}
      note={PROJECT.note}
    />
  );
}

import SectionOpener from "../components/SectionOpener";
import { PLACEHOLDER_CHIP, project } from "../content/projects";

const PROJECT = project("02");

export default function FamilyDocumentsOpener() {
  return (
    <SectionOpener
      label="Project 2 — Family Documents Organizer"
      notes="PLACEHOLDER — story to be discussed with Vitaly before filling in."
      kicker={`Project ${PROJECT.number} / 05`}
      title={PROJECT.name}
      subtitle={PROJECT.subtitle}
      link={PROJECT.link ?? undefined}
      placeholder={PLACEHOLDER_CHIP}
    />
  );
}

import Implication from "../components/Implication";

export default function FamilyDocsImplication() {
  return (
    <Implication
      label="Company Implication 01: Small Bespoke Software"
      number="01"
      notes="The lesson is economic, not technical. A register for one family was never worth building by hand. With an agent it took weekends, and it fits the actual workflow instead of forcing the workflow into a system. Teams and departments have dozens of information problems this size."
      statement="Agents make very small, bespoke software economically rational."
      today="Every information problem is either forced into a large enterprise system or stays in a folder nobody can search."
      possibleNow="Team and departmental registers built around the actual workflow — structured files, one agent, no platform project."
    />
  );
}

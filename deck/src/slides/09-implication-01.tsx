import Implication from "../components/Implication";
import { projects } from "../content/projects";

export default function Implication01() {
  return (
    <Implication
      number="01"
      statement={projects[0]?.implication ?? ""}
      possibleNow="Team and departmental registers built around the actual workflow. Structured files, one agent, no platform project."
      notes="Thirty seconds. The lesson is economic, not technical: a register for one family was never worth building by hand, and every team has a dozen problems of this size. Avoid the enterprise-system comparison; the point is what becomes worth attempting."
    />
  );
}

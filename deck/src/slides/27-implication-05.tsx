import Implication from "../components/Implication";
import { projects } from "../content/projects";

export default function Implication05() {
  return (
    <Implication
      number="05"
      statement={projects[4]?.implication ?? ""}
      possibleNow="Method and algorithm questions that used to wait for a specialist: derived, implemented, audited and written up in weeks, each result traceable to its claim, its audit and its test."
      notes="Thirty seconds. This expands the scope furthest: genuine R&D, not only implementation of known solutions. The point is not that a model can be trusted to do mathematics. The point is that two people and a registry of claims can run the whole loop, and that what makes its output usable is the independent check on every claim, not the strength of the model. The stronger the model, the more the checking matters."
    />
  );
}

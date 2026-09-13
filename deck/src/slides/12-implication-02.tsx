import Implication from "../components/Implication";
import { projects } from "../content/projects";

export default function Implication02() {
  return (
    <Implication
      number="02"
      statement={projects[1]?.implication ?? ""}
      possibleNow="Living internal atlases that organize evidence, concepts, decisions and relationships across departments."
      notes="Thirty seconds. Technical knowledge does not have to stay scattered across people, PDFs, slide decks, chats and project folders. One or several internal atlases, maintained the same way, would keep evidence, concepts, decisions and their relationships navigable."
    />
  );
}

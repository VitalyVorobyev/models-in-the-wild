import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";

/** Each rung is where most conversations about LLMs stop; the last is the point. */
const RUNGS = [
  "Coding productivity",
  "Individual leverage",
  "New kinds of personal tools",
  "Persistent knowledge and information workflows",
  "Cross-department capability",
  "R&D and discovery",
];

export default function BeyondCoding() {
  return (
    <Slide
      label="Beyond Coding"
      notes="Rung one is already up — pause on it, then climb one click per rung. Most conversations stop at the first rung. The five projects climbed the rest: a personal tool, two knowledge and information workflows, a content system that could serve any department, and a research programme. The same pattern supports shared knowledge, research synthesis, handoffs, requirements, technical communication and decision support."
    >
      <SlideHeader kicker="Think bigger than coding" title="Beyond Coding" />

      <div className="ladder">
        {RUNGS.map((rung, index) => (
          <div
            className={`ladder__row${index > 0 ? " fragment" : ""}${
              index === RUNGS.length - 1 ? " ladder__row--last" : ""
            }`}
            key={rung}
            style={{ "--step": index } as React.CSSProperties}
          >
            <span className="ladder__num">{String(index + 1).padStart(2, "0")}</span>
            <span>{rung}</span>
          </div>
        ))}
      </div>
    </Slide>
  );
}

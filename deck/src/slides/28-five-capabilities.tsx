import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import { projects } from "../content/projects";

/** The five accent slides gathered on one page: capability, project, implication. */
export default function FiveCapabilities() {
  return (
    <Slide
      label="Five capabilities, five implications"
      notes="Ninety seconds; read down the right column. Five projects, five capabilities, in the order of the talk, which is also an escalation in scale: from a folder of one family's paperwork to a research programme. Each left behind one implication, and this is the whole list. None of them is about writing code faster. They are about work that was not attempted before: the custom tool, the atlas, the daily filter, the content system, the research loop."
    >
      <SlideHeader kicker="Synthesis" title="Five capabilities, five implications" />
      <div className="five">
        {projects.map((p) => (
          <div key={p.number} className="five__row">
            <span className="five__num">{p.number}</span>
            <div className="five__cap">
              <strong>{p.capability}</strong>
              <span>{p.name}</span>
            </div>
            <p className="five__statement">{p.implication}</p>
          </div>
        ))}
      </div>
    </Slide>
  );
}

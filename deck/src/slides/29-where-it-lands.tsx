import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import { projects } from "../content/projects";

const departments = [
  "R&D",
  "Software",
  "Application Engineering",
  "Service",
  "Quality",
  "Product",
  "Sales",
];

/** One concrete proposal per capability, and the departments it touches. Proposals, not a description of today. */
const rows: { number: string; example: string; touches: string[] }[] = [
  {
    number: "01",
    example:
      "A shared folder becomes a register: certificates, contracts, service records, with the source file behind every answer.",
    touches: ["Service", "Quality", "Application Engineering"],
  },
  {
    number: "02",
    example:
      "Papers, tickets and decisions become one connected atlas with a narrative path through it.",
    touches: ["R&D", "Software", "Product"],
  },
  {
    number: "03",
    example:
      "Technology, patents, competitors, supplier changes, quality events: a daily shortlist with a reason, confirmed by a person.",
    touches: ["R&D", "Product", "Sales", "Quality"],
  },
  {
    number: "04",
    example:
      "Manuals, training and service knowledge generated inside a verified frame and checked for coverage, not just produced.",
    touches: ["Application Engineering", "Service", "Product"],
  },
  {
    number: "05",
    example:
      "Method and algorithm questions run as a research loop: a registry of claims, an independent audit, a checked proof.",
    touches: ["R&D", "Software"],
  },
];

export default function WhereItLands() {
  return (
    <Slide
      label="Where this lands"
      notes="Two minutes, then the question. These are proposals, not a description of how we work today, and not a measured saving. One concrete shape per capability, and the departments it would touch: a register for Service and Quality; an atlas for R&D and Software; the daily filter for whoever watches a stream too wide to read; generated material inside a verified frame for Application Engineering and Service; the research loop for R&D. Two things they share: each leaves a reviewed file with an owner, and in each a person keeps the decision. Ask the room which handoff loses information today."
    >
      <SlideHeader kicker="Synthesis · across departments" title="Where this lands" />
      <div className="lands">
        <div className="lands__head" aria-hidden="true">
          <span />
          {departments.map((d) => (
            <span key={d} className="lands__dept">
              {d}
            </span>
          ))}
        </div>
        {rows.map((r) => {
          const p = projects.find((x) => x.number === r.number);
          return (
            <div key={r.number} className="lands__row">
              <div className="lands__what">
                <strong>
                  <span className="lands__num">{r.number}</span> {p?.capability}
                </strong>
                <span>{r.example}</span>
              </div>
              {departments.map((d) => (
                <span
                  key={d}
                  className={`lands__mark${r.touches.includes(d) ? " lands__mark--on" : ""}`}
                  title={r.touches.includes(d) ? `${p?.capability}: ${d}` : undefined}
                />
              ))}
            </div>
          );
        })}
      </div>
      <p className="lands__rule">
        Proposals, not a description of today. Each leaves a reviewed file with an owner.
      </p>
    </Slide>
  );
}

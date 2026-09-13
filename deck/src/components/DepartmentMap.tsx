import { useState } from "react";
import { Arrow, Diagram, Node } from "./Diagram";

const locations: Record<string, [number, number]> = {
  "R&D": [840, 80],
  Software: [1430, 205],
  "Application Engineering": [1430, 440],
  Service: [270, 205],
  Quality: [270, 440],
  Product: [840, 560],
  Sales: [1430, 80],
};
const flows = [
  {
    name: "R&D result",
    input: "Experiment result",
    artifact: "Maintained knowledge",
    owner: "R&D review",
    from: ["R&D"],
    to: ["Service", "Sales"],
  },
  {
    name: "Service reports",
    input: "Recurring issue evidence",
    artifact: "Issue synthesis",
    owner: "Quality review",
    from: ["Service"],
    to: ["Quality", "Product", "R&D"],
  },
  {
    name: "Customer requirements",
    input: "Customer requirements",
    artifact: "Requirements + evidence",
    owner: "Application Engineering review",
    from: ["Sales"],
    to: ["Application Engineering", "Software", "Product"],
  },
  {
    name: "Technical updates",
    input: "Papers · patents · vendors",
    artifact: "Curated technical radar",
    owner: "R&D review",
    from: [],
    to: ["R&D"],
  },
];
export default function DepartmentMap() {
  const [index, setIndex] = useState(0);
  const flow = flows[index];
  if (!flow) throw new Error("Unknown flow");
  return (
    <div className="department-map">
      <fieldset className="flow-tabs" aria-label="Proposed company information flows">
        {flows.map((f, i) => (
          <button type="button" key={f.name} aria-pressed={index === i} onClick={() => setIndex(i)}>
            {f.name}
          </button>
        ))}
      </fieldset>
      <Diagram
        title={`Proposed flow: ${flow.input} through ${flow.artifact} to ${flow.to.join(", ")}`}
      >
        {flow.from.length === 0 && (
          <>
            <Node x={330} y={80} label="Papers · patents · vendors" width={490} kind="paper" />
            <Arrow from={[575, 80]} to={[730, 230]} />
          </>
        )}
        {flow.from.map((name) => {
          const p = locations[name];
          if (!p) throw new Error("Missing department layout");
          return <Arrow key={name} from={[p[0], p[1] + 55]} to={[840, 225]} label="input" />;
        })}
        {flow.to.map((name) => {
          const p = locations[name];
          if (!p) throw new Error("Missing department layout");
          return (
            <Arrow
              key={name}
              from={[
                p[0] < 600 ? 590 : p[0] > 1000 ? 1090 : 840,
                p[0] < 600 || p[0] > 1000 ? 290 : p[1] < 290 ? 230 : 350,
              ]}
              to={[p[0], p[1] + (p[1] < 300 ? 50 : -55)]}
            />
          );
        })}
        {Object.entries(locations).map(([name, [x, y]]) => (
          <g key={name} opacity={flow.to.includes(name) || flow.from.includes(name) ? 1 : 0.3}>
            <Node x={x} y={y} label={name} width={name === "Application Engineering" ? 410 : 260} />
          </g>
        ))}
        <Node x={840} y={290} label={flow.artifact} sub={flow.owner} kind="paper" width={510} />
      </Diagram>
    </div>
  );
}

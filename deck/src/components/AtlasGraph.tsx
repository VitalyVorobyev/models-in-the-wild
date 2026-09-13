import { projectEvidence } from "../content/evidence";
import { Arrow, Diagram, Node } from "./Diagram";

const positions: Record<string, [number, number]> = {
  attention: [155, 145],
  transformer: [505, 145],
  vit: [865, 145],
  kd: [300, 375],
  deit: [865, 375],
  dino: [1245, 145],
  dinov2: [1490, 375],
};
const labels: Record<string, string> = {
  attention: "Attention",
  transformer: "Transformer",
  vit: "ViT",
  kd: "Distillation",
  deit: "DeiT",
  dino: "DINO",
  dinov2: "DINOv2",
};
export default function AtlasGraph() {
  const source = projectEvidence.atlas;
  const paper = source.papers.find((p) => p.node === "dino")?.paper;
  return (
    <Diagram title="Actual Atlas relationships with primary-paper and author metadata">
      {source.edges.map((edge) => {
        const a = positions[edge.from],
          b = positions[edge.to];
        if (!a || !b) throw new Error("Atlas edge has no layout position");
        return (
          <Arrow
            key={`${edge.from}-${edge.to}`}
            from={[a[0] + 85, a[1] + 25]}
            to={[b[0] - 85, b[1] + 25]}
            label={undefined}
          />
        );
      })}
      <path
        d="M155 75 H1245"
        stroke="var(--link)"
        strokeWidth="4"
        fill="none"
        strokeDasharray="8 8"
      />
      <text x="740" y="38" className="edge-label" textAnchor="middle">
        Selected narrative route
      </text>
      {source.nodes.map((node) => (
        <Node
          key={node.id}
          x={positions[node.id]?.[0] ?? 0}
          y={positions[node.id]?.[1] ?? 0}
          label={labels[node.id] ?? node.id}
          width={200}
        />
      ))}
      <Node
        x={680}
        y={565}
        label="Emerging Properties…"
        kind="paper"
        sub="primary paper · title shortened"
        width={365}
      />
      <Arrow from={[870, 560]} to={[1160, 215]} label="source for" bend={80} />
      <Node x={1180} y={530} label={paper?.authors[0] ?? ""} kind="person" />
      <Arrow from={[1120, 525]} to={[880, 550]} label="author" />
      <text x="125" y="570" className="edge-label">
        Page / concept
      </text>
      <text x="125" y="610" className="edge-label">
        Paper · author
      </text>
    </Diagram>
  );
}

import { Arrow, Diagram, Node } from "../components/Diagram";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
export default function Page() {
  return (
    <Slide
      label="Atlas accumulates; Radar filters"
      notes="1.5 minutes. This contrast introduces Radar, replacing its title slide. Atlas adds durable knowledge; Radar selects from new arrivals. Radar does retain history in SQLite\u2014the selection resets daily, not the database. The public radar board is cumulative and is not the daily intake."
      className="editorial"
    >
      <SlideHeader kicker="Filter" title="Atlas accumulates; Radar filters" />
      <Diagram title="Atlas retains connected additions while Radar filters each daily stream">
        <text x="340" y="65" textAnchor="middle" className="diagram-heading">
          Atlas · accumulation
        </text>
        <text x="1230" y="65" textAnchor="middle" className="diagram-heading">
          Radar · filtering
        </text>
        <path d="M820 100 V565" stroke="var(--hairline-strong)" />
        <g stroke="var(--muted)" strokeWidth="3">
          {[
            [160, 210, 350, 165],
            [350, 165, 560, 260],
            [160, 210, 260, 405],
            [260, 405, 560, 260],
            [350, 165, 470, 470],
          ].map(([x, y, a, b]) => (
            <path key={`${x}-${y}`} d={`M${x},${y} L${a},${b}`} />
          ))}
        </g>
        {[
          [160, 210],
          [350, 165],
          [560, 260],
          [260, 405],
          [470, 470],
        ].map(([x, y], i) => (
          <g key={x}>
            <circle
              cx={x}
              cy={y}
              r="40"
              fill={i < 3 ? "var(--dark)" : "var(--paper)"}
              stroke="var(--dark)"
              strokeWidth="3"
            />
            <text x={x} y={(y ?? 0) + 75} textAnchor="middle" className="edge-label">
              {i < 3 ? "existing" : "added"}
            </text>
          </g>
        ))}
        <path
          d="M990 180 H1490 L1330 360 H1150 Z"
          fill="var(--surface)"
          stroke="var(--muted)"
          strokeWidth="3"
        />
        {Array.from({ length: 24 }, (_, id) => id).map((i) => (
          <circle
            key={`item-${i}`}
            cx={1010 + (i % 8) * 65}
            cy={125 + Math.floor(i / 8) * 26}
            r="7"
            fill="var(--muted)"
          />
        ))}
        <Arrow from={[1240, 370]} to={[1240, 490]} label="selected" />
        <Arrow from={[1440, 235]} to={[1580, 425]} label="Ignore" />
        <Node x={1240} y={530} label="Daily digest" kind="paper" width={250} />
        <text x="300" y="605" textAnchor="middle">
          Relationships remain
        </text>
        <text x="1250" y="625" textAnchor="middle" className="edge-label">
          Daily selection; history remains in the database
        </text>
      </Diagram>
      <p className="caption">Process schematic · dots are illustrative, not measured counts</p>
    </Slide>
  );
}

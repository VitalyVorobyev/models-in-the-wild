import { type ReactNode, useId } from "react";

export function Diagram({
  title,
  children,
  height = 640,
}: {
  title: string;
  children: ReactNode;
  height?: number;
}) {
  const id = useId();
  return (
    <svg className="diagram" viewBox={`0 0 1680 ${height}`} role="img" aria-labelledby={id}>
      <title id={id}>{title}</title>
      {children}
    </svg>
  );
}
export function Arrow({
  from,
  to,
  label,
  dashed = false,
  bend = 0,
}: {
  from: [number, number];
  to: [number, number];
  label?: string;
  dashed?: boolean;
  bend?: number;
}) {
  const id = useId();
  const [x, y] = from;
  const [a, b] = to;
  return (
    <g className="edge">
      <defs>
        <marker id={id} markerWidth="10" markerHeight="10" refX="8" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8" fill="var(--muted)" />
        </marker>
      </defs>
      <path
        d={`M${x},${y} Q${(x + a) / 2},${(y + b) / 2 + bend} ${a},${b}`}
        fill="none"
        stroke="var(--muted)"
        strokeWidth="2.5"
        strokeDasharray={dashed ? "8 7" : undefined}
        markerEnd={`url(#${id})`}
      />
      {label && (
        <text
          x={(x + a) / 2}
          y={(y + b) / 2 + bend / 2 - 15}
          textAnchor="middle"
          className="edge-label"
        >
          {label}
        </text>
      )}
    </g>
  );
}
export function Node({
  x,
  y,
  label,
  sub,
  kind = "process",
  width = 260,
}: {
  x: number;
  y: number;
  label: string;
  sub?: string;
  kind?: "paper" | "person" | "process" | "store";
  width?: number;
}) {
  return (
    <g transform={`translate(${x},${y})`} className={`diagram-node diagram-node--${kind}`}>
      {kind === "person" ? (
        <>
          <circle cx="0" cy="-22" r="17" />
          <path d="M-35,27 Q-35,-3 0,-3 Q35,-3 35,27" />
        </>
      ) : kind === "paper" ? (
        <path
          d={`M${-width / 2},-45 H${width / 2 - 24} L${width / 2},-21 V45 H${-width / 2} Z M${width / 2 - 24},-45 V-21 H${width / 2}`}
        />
      ) : kind === "store" ? (
        <>
          <path
            d={`M${-width / 2},-28 V30 C${-width / 2},62 ${width / 2},62 ${width / 2},30 V-28`}
          />
          <ellipse cx="0" cy="-28" rx={width / 2} ry="22" />
        </>
      ) : (
        <rect x={-width / 2} y="-45" width={width} height="90" rx="4" />
      )}
      <text y={kind === "person" ? 66 : kind === "store" ? 23 : sub ? -8 : 6} textAnchor="middle">
        {label}
      </text>
      {sub && (
        <text
          y={kind === "person" ? 101 : kind === "store" ? 88 : 27}
          textAnchor="middle"
          className="node-sub"
        >
          {sub}
        </text>
      )}
    </g>
  );
}
export function Document({ name, children }: { name: string; children: ReactNode }) {
  return (
    <figure className="document">
      <figcaption>{name}</figcaption>
      <pre>{children}</pre>
    </figure>
  );
}

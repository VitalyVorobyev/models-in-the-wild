/** The dark repo-tree code block on slides 5 and 22. */
export default function Tree({ framed = false, children }: { framed?: boolean; children: string }) {
  return <pre className={`tree${framed ? " tree--framed" : ""}`}>{children}</pre>;
}

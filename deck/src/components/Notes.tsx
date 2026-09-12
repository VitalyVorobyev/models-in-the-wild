/*
 * Reveal's speaker view (press S) reads these. In the design handoff the same
 * text sat inert in a `data-speaker-notes` attribute that nothing consumed.
 */
export default function Notes({ children }: { children: string }) {
  return <aside className="notes">{children}</aside>;
}

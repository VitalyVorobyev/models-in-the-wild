/** Kicker + serif title — the most repeated unit in the deck (10 light slides). */
export default function SlideHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <>
      <div className="kicker">{kicker}</div>
      <h2 className="title">{title}</h2>
    </>
  );
}

import Slide from "../components/Slide";

export default function CompanyImplication() {
  return (
    <Slide
      label="Company Implication: A Living Knowledge Atlas"
      theme="accent"
      align="between"
      notes="Technical knowledge does not have to stay scattered across people, PDFs, decks, chats and folders. One or several internal atlases can continuously organize evidence, concepts, decisions and relationships."
    >
      <div className="kicker kicker--accent">Company implication 01</div>

      <h2 className="statement" style={{ color: "var(--accent-fg)", maxWidth: "1500px" }}>
        From documents we store to knowledge we can navigate.
      </h2>

      <div
        className="split split--wide-gap"
        style={{
          marginTop: 0,
          fontSize: "var(--type-small)",
          lineHeight: 1.4,
          color: "var(--accent-muted)",
        }}
      >
        <p>
          <span
            className="card__label"
            style={{ display: "block", marginBottom: "12px", color: "inherit" }}
          >
            Today
          </span>
          Scattered across people, PDFs, slide decks, chats and project folders.
        </p>
        <p>
          <span
            className="card__label"
            style={{ display: "block", marginBottom: "12px", color: "inherit" }}
          >
            Possible now
          </span>
          Living internal atlases organizing evidence, concepts, decisions and relationships across
          departments.
        </p>
      </div>
    </Slide>
  );
}

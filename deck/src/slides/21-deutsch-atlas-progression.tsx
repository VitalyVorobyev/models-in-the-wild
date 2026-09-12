import Grid from "../components/Grid";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import { evidence, MEASURED } from "../content/evidence";

const { deutsch } = evidence;

/** Two rows: the verified foundation, then the ecosystem that grew on it. */
const STAGES = [
  [
    "01",
    "Evidence",
    "Literature on how adults learn languages, distilled into a skill with a calibrated verdict per principle",
  ],
  [
    "02",
    "Standards",
    "Goethe-Institut word lists, DTZ structures, CEFR levels — coverage ratcheted by tests",
  ],
  [
    "03",
    "Corpus",
    `${deutsch.units.value} units A1–B1 · ${deutsch.vocabulary.value} vocabulary entries · ${deutsch.readingTexts.value} reading texts · ${deutsch.listeningScenes.value} listening scenes`,
  ],
  [
    "04",
    "Editorial tooling",
    "Redaktion: grammar atlas, theme tracing, coverage kept apart from teaching depth, a findings queue",
  ],
  [
    "05",
    "Audio studio",
    `Tonwerk: local TTS and sound models, a ${deutsch.cast.value}-voice cast, ASR-checked output`,
  ],
  [
    "06",
    "Learning product",
    "FSRS cards, optional local-model review, cross-device sync, explanations authored per native language",
  ],
] as const;

export default function DeutschAtlasProgression() {
  return (
    <Slide
      label="From Evidence to Ecosystem"
      notes="Read as two rows. Top row is the verified frame: research evidence first, then the official standards, then a corpus authored inside them. Bottom row is what became necessary once generation was cheap: editorial tooling to keep coverage and quality honest, an audio studio on local models, and the product itself. Caveats for honesty: the cast is a voice-casting roster, portraits are not approved; English and Russian explanations are complete, Ukrainian is arriving in waves; the local-model review runs on desktop only."
    >
      <SlideHeader kicker="Deutsch-Atlas · the progression" title="From Evidence to Ecosystem" />

      <Grid cols={3} style={{ marginTop: "var(--gap-title)" }}>
        {STAGES.map(([number, label, note]) => (
          <div className="card card--step" key={number}>
            <span className="card__num">{number}</span>
            <span className="card__name">{label}</span>
            <span className="card__step-note">{note}</span>
          </div>
        ))}
      </Grid>

      <p className="note" style={{ marginTop: "56px", maxWidth: "1500px" }}>
        Cheap generation moves the bottleneck from producing content to controlling quality,
        coverage and consistency.
      </p>
      <p className="evidence-line">counts measured {MEASURED} in the repository</p>
    </Slide>
  );
}

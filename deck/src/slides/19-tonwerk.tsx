import AudioExample from "../components/AudioExample";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import { audioEvidence, evidence } from "../content/evidence";

const scene = [
  ["Verkäuferin", "Guten Morgen! Was darf es sein?"],
  ["Kunde", "Ich möchte ein Kilo Äpfel und zwei Kilo Kartoffeln."],
  ["Verkäuferin", "Gern. Die Äpfel kosten drei Euro, die Kartoffeln zwei Euro fünfzig."],
  ["Kunde", "Haben Sie auch Tomaten?"],
  ["Verkäuferin", "Ja, aber nur noch wenige. Ein Pfund kostet zwei Euro."],
  ["Kunde", "Dann nehme ich ein Pfund Tomaten. Das ist alles."],
  ["Verkäuferin", "Zusammen sind das sieben Euro fünfzig."],
] as const;

const checklist = [
  "accent",
  "context",
  "intelligibility",
  "naturalness",
  "pace",
  "questions",
  "speakers",
];

/** Tonwerk: the audio studio. Four stations, then one approved scene to play. */
export default function Tonwerk() {
  const d = evidence.deutsch;
  return (
    <Slide
      label="From script to approved audio"
      notes={`Two minutes including the ${audioEvidence.duration}-second scene. The listening scenes are made in a separate studio over a local engine. A script names the cast and the lines; a ${d.cast.value}-voice cast keeps recurring characters recognisable. All models are local, pinned with licence and provenance in the repository: Qwen3-TTS, the 0.6B custom-voice checkpoint, speaks the lines; Stable Audio renders ambience and is never used for speech; Whisper large-v3-turbo transcribes the render and the transcript is compared with the script; WavLM speaker verification checks that each line is in the intended voice. Then a person listens and approves against a fixed checklist — the seven items shown are the ones recorded in this scene's provenance file, approved on ${d.approvedOn.value}. Nothing is published without both. Play the scene: A1, at the market stall. No voice cloning, no reference audio; the provenance file says so.`}
    >
      <SlideHeader kicker="Deutsch-Atlas · Tonwerk" title="From script to approved audio" />
      <ol className="studio">
        <li className="studio__step">
          <strong>Script</strong>
          <span>the cast and the lines; a {d.cast.value}-voice cast with fixed voices</span>
        </li>
        <li className="studio__step">
          <strong>Render</strong>
          <span>
            Qwen3-TTS speaks the lines in the cast's voices; Stable Audio renders the ambience,
            never speech
          </span>
        </li>
        <li className="studio__step">
          <strong>Machine checks</strong>
          <span>
            Whisper transcribes the render and compares it with the script; WavLM verifies the
            speaker of every line
          </span>
        </li>
        <li className="studio__step studio__step--human">
          <strong>A person approves</strong>
          <span className="studio__checklist">
            {checklist.map((item) => (
              <em key={item}>{item}</em>
            ))}
          </span>
        </li>
      </ol>
      <div className="tape">
        <div className="tape__meta">
          <span className="tape__level">A1 · listening</span>
          <strong>At the market stall</strong>
          <span>
            the full scene, {audioEvidence.duration} seconds · approved {d.approvedOn.value} · no
            voice cloning
          </span>
          <AudioExample />
        </div>
        <dl className="tape__script">
          {scene.map(([who, line]) => (
            <div key={line}>
              <dt>{who}</dt>
              <dd>{line}</dd>
            </div>
          ))}
        </dl>
      </div>
      <p className="tape__rule">
        Every model runs on my laptop. Nothing is published without the checks and a person's
        approval.
      </p>
    </Slide>
  );
}

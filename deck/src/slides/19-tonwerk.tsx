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
      notes={`Two minutes including the ${audioEvidence.duration}-second excerpt. The listening scenes are made in a separate studio over a local engine. A script names the cast and the lines; a ${d.cast.value}-voice cast keeps recurring characters recognisable. A local text-to-speech model renders the voices and a local sound model renders the ambience, never speech. Then the machine checks: speech recognition against the script, speaker verification per line. Then a person listens and approves against a fixed checklist — the seven items shown are the ones recorded in this scene's provenance file, approved on ${d.approvedOn.value}. Nothing is published without both. Play the scene: A1, at the market stall. No voice cloning, no reference audio; the provenance file says so.`}
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
            local text-to-speech for voices; a local sound model for ambience, never speech
          </span>
        </li>
        <li className="studio__step">
          <strong>Machine checks</strong>
          <span>speech recognition against the script; speaker verification per line</span>
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
            approved {d.approvedOn.value} · no voice cloning · {audioEvidence.duration}-second
            excerpt
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
      <p className="tape__rule">Nothing is published without the checks and a person's approval.</p>
    </Slide>
  );
}

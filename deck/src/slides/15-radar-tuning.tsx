import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import { radarTuning } from "../content/evidence";

const max = Math.max(...radarTuning.phrases.map((p) => p.ignore + p.kept));

/**
 * How the deterministic part of the filter is maintained: one real tuning
 * round, with every candidate phrase and the count that decided it.
 */
export default function RadarTuning() {
  const t = radarTuning;
  return (
    <Slide
      label="The filter is tuned from its own decisions"
      notes={`Two minutes. The keyword scoring is not set by feel. Each round starts from the misses: items that reached the top 25 with zero penalty and were then sent to Ignore. Candidate phrases are mined from those abstracts and counted over every decided paper — on ${t.round}, ${t.corpus.ignore.toLocaleString("en")} Ignore against ${t.corpus.kept} kept. A phrase becomes a penalty only if it never touches a kept paper, and even then the hits are read: “fashion” scored 15 to 0 and was rejected because it fires on “in an autoregressive fashion” and on Fashion-MNIST. The reasoning stays in the config file next to the phrase. No improvement percentage is claimed; the next round's misses are the test.`}
    >
      <SlideHeader
        kicker="CV Tech Radar · maintenance"
        title="The filter is tuned from its own decisions"
      />
      <div className="tuning">
        <ol className="tuning__steps">
          <li>
            <strong>Start from the misses</strong>
            <span>{t.trigger}</span>
          </li>
          <li>
            <strong>Count every candidate phrase</strong>
            <span>
              over the decided corpus: {t.corpus.ignore.toLocaleString("en")} Ignore,{" "}
              {t.corpus.kept} kept
            </span>
          </li>
          <li>
            <strong>Accept only what never hits a kept paper</strong>
            <span>then read the hits anyway; the reason stays in the config file</span>
          </li>
        </ol>
        <table className="phrases">
          <thead>
            <tr>
              <th>phrase</th>
              <th>hits in Ignore papers, in kept papers</th>
              <th />
              <th>verdict</th>
            </tr>
          </thead>
          <tbody>
            {t.phrases.map((p) => (
              <tr key={p.phrase} className={`phrases__row phrases__row--${p.verdict}`}>
                <td className="phrases__phrase">{p.phrase}</td>
                <td className="phrases__bar">
                  <span
                    className="phrases__ignore"
                    style={{ width: `${(p.ignore / max) * 100}%` }}
                  />
                  {p.kept > 0 && (
                    <span className="phrases__kept" style={{ width: `${(p.kept / max) * 100}%` }} />
                  )}
                  <span className="phrases__count">
                    {p.ignore} · {p.kept}
                  </span>
                </td>
                <td className="phrases__verdict">
                  <div className="phrases__verdict-inner">
                    <span className="phrases__mark">
                      {p.verdict === "accepted" ? "penalty" : "rejected"}
                    </span>
                    {"note" in p && <span className="phrases__note">{p.note}</span>}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="evidence-line">
        {t.source.replace("cv-tech-radar: ", "")} · transcribed {t.transcribed}
      </p>
    </Slide>
  );
}

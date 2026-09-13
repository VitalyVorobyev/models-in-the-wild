import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import { evidence } from "../content/evidence";

/**
 * How Deutsch-Atlas was built, in the order it happened: evidence and standards
 * first (the frame), then the corpus written inside it, then the tools that keep
 * it honest, then the product. Three clicks follow that order.
 */
export default function VerifiedFrame() {
  const d = evidence.deutsch;
  return (
    <Slide
      label="From evidence to a production system"
      notes={`Two minutes, three clicks. Before any content: what does the research say about how adults learn a language? The distilled principles carry a calibrated verdict each, with named sources: retrieval practice, spacing and explanatory feedback are settled; comprehensible input only under conditions. Then the Goethe-Institut standards: the official word list per level and the grammar structures the Deutsch-Test für Zuwanderer expects. That is the frame; it is verifiable, not model intuition about what belongs at B1. Click: inside it, agents wrote the corpus — ${d.units.value} units, ${d.vocabulary.value} vocabulary entries, ${d.readingTexts.value} reading texts, ${d.listeningScenes.value} listening scenes. Coverage against the lists is 100% at every level and a test fails if it drops. Click: once generation is cheap, the hard part is keeping the corpus coherent and complete, so two tools grew on top: Redaktion for editorial control and Tonwerk for audio. Click: the learner app consumes all of it. Not one application any more; a small publishing and production system.`}
    >
      <SlideHeader
        kicker="Deutsch-Atlas · how it was built"
        title="From evidence to a production system"
      />
      <div className="frame-slide">
        <div className="verified">
          <div className="verified__side">
            <div className="verified__side-text">
              <strong>Learning research</strong>
              <span>proven for adults: retrieval practice, spacing, feedback</span>
            </div>
          </div>
          <div className="verified__inner">
            <span className="verified__ghost" aria-hidden="true">
              the frame · settled before anything is written
            </span>
            <div className="verified__tools fragment" data-fragment-index={1}>
              <div className="verified__tool">
                <strong>Redaktion</strong>
                <span>editorial control: coverage and findings</span>
              </div>
              <div className="verified__tool">
                <strong>Tonwerk</strong>
                <span>audio studio: render, check, approve</span>
              </div>
            </div>
            <div className="verified__corpus fragment" data-fragment-index={0}>
              <span className="verified__corpus-label">Written by agents, inside the frame</span>
              <div className="verified__counts">
                <div className="verified__count">
                  <strong>{d.units.value}</strong>
                  <span>units, A1 to B1</span>
                </div>
                <div className="verified__count">
                  <strong>{d.vocabulary.value}</strong>
                  <span>vocabulary entries</span>
                </div>
                <div className="verified__count">
                  <strong>{d.readingTexts.value}</strong>
                  <span>reading texts</span>
                </div>
                <div className="verified__count">
                  <strong>{d.listeningScenes.value}</strong>
                  <span>listening scenes with audio</span>
                </div>
              </div>
            </div>
          </div>
          <div className="verified__corner" aria-hidden="true" />
          <div className="verified__bottom">
            <strong>Goethe-Institut standards</strong>
            <span>
              the word list per level ({d.wortliste.value} words) and the grammar structures of the
              Deutsch-Test für Zuwanderer ({d.dtzStructures.value}), all covered; a test fails if it
              drops
            </span>
          </div>
        </div>
        <div className="frame-out fragment" data-fragment-index={2}>
          <span className="frame-out__arrow" aria-hidden="true" />
          <div className="frame-out__product">
            <span className="frame-out__kicker">The product</span>
            <strong>Learner app</strong>
            <span>lessons, exercises, flashcards, listening</span>
            <span>progress synced between devices</span>
            <span className="frame-out__use">in daily use</span>
          </div>
        </div>
      </div>
      <p className="frame-rule fragment" data-fragment-index={2}>
        Once generation is cheap, the work is keeping the corpus correct, complete and coherent.
      </p>
    </Slide>
  );
}

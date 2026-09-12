import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import RevealNotes from "reveal.js/plugin/notes";
import { slides } from "./slides";

/**
 * Reveal owns presentation; the slides own their own layout.
 *
 * `width`/`height` must stay at the design canvas size and `center` must stay
 * false: the handoff's slides were authored against a fixed 1920×1080 stage and
 * size themselves with `space-between` and `flex: 1`. Letting Reveal centre
 * them collapses every one of those layouts to content height.
 */
export default function App() {
  const deckRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!deckRef.current) return;

    const deck = new Reveal(deckRef.current, {
      width: 1920,
      height: 1080,
      margin: 0,
      center: false,
      hash: true,
      controls: true,
      progress: true,
      transition: "slide",
      plugins: [RevealNotes],
    });

    deck.initialize();

    return () => {
      deck.destroy();
    };
  }, []);

  return (
    <div className="reveal" ref={deckRef}>
      <div className="slides">
        {slides.map((SlideComponent) => (
          <SlideComponent key={SlideComponent.name} />
        ))}
      </div>
    </div>
  );
}

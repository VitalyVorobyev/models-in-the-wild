import { useEffect, useRef } from "react";
import audio from "../assets/audio/market-stall.mp3";
export default function AudioExample() {
  const ref = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    const el = ref.current;
    const section = el?.closest("section");
    if (!el || !section) return;
    const observer = new MutationObserver(() => {
      if (!section.classList.contains("present")) {
        el.pause();
        el.currentTime = 0;
      }
    });
    observer.observe(section, { attributes: true, attributeFilter: ["class"] });
    return () => {
      observer.disconnect();
      el.pause();
    };
  }, []);
  return (
    <div className="audio-example">
      <audio
        ref={ref}
        controls
        preload="metadata"
        aria-label="Market-stall listening scene excerpt"
      >
        <source src={audio} type="audio/mpeg" />
        <track kind="captions" />
        Your browser does not support audio.
      </audio>
      <details>
        <summary>Scene transcript · excerpt starts at the beginning</summary>
        <p>
          Verkäuferin: Guten Morgen! Was darf es sein?
          <br />
          Kunde: Ich möchte ein Kilo Äpfel und zwei Kilo Kartoffeln.
          <br />
          Verkäuferin: Gern. Die Äpfel kosten drei Euro, die Kartoffeln zwei Euro fünfzig.
          <br />
          Kunde: Haben Sie auch Tomaten?
          <br />
          Verkäuferin: Ja, aber nur noch wenige. Ein Pfund kostet zwei Euro.
          <br />
          Kunde: Dann nehme ich ein Pfund Tomaten. Das ist alles.
          <br />
          Verkäuferin: Zusammen sind das sieben Euro fünfzig.
        </p>
      </details>
    </div>
  );
}

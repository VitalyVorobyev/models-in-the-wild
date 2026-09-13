import katex from "katex";

/**
 * A formula rendered by KaTeX at build time of the component, no network.
 * Inline by default; `display` centres it on its own line.
 */
export default function Tex({
  children,
  display = false,
}: {
  children: string;
  display?: boolean;
}) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: display,
    // The two parameters of the ScoreQuant example keep one colour each across slides 22–25.
    macros: { "\\ff": "\\textcolor{#2563eb}{f}", "\\mm": "\\textcolor{#d97706}{m}" },
  });
  return (
    <span
      className={display ? "tex tex--display" : "tex"}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: KaTeX output from a string literal in this repository, not user input.
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

import { createRoot } from "react-dom/client";
import App from "./App";

// Self-hosted so the deck's typography survives a venue with no network.
import "@fontsource-variable/source-serif-4";
import "@fontsource/geist-mono/400.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";

import "reveal.js/reveal.css";
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/components.css";
import "katex/dist/katex.min.css";

const root = document.getElementById("root");
if (!root) throw new Error("#root is missing from index.html");

// No StrictMode: its double-mount in development initializes and tears down
// Reveal twice, which leaves the deck's keyboard handling in a bad state.
createRoot(root).render(<App />);

import "./styles/editorial.css";

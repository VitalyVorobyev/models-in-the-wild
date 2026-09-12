import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// `base` is intentionally not set here. The Pages subpath is applied by the
// `build:pages` script (`vite build --base=/models-in-the-wild/`), which keeps
// local `dev` and `preview` serving from `/`.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4330,
    strictPort: true,
  },
  build: {
    target: ["es2022", "chrome120", "safari17"],
  },
});

import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Static site: every page is rendered to HTML at build time (no server needed).
// BASE_PATH lets the same build run under a subfolder, e.g. "/easylobby-site/" on GitHub Pages.
const base = process.env["BASE_PATH"] ?? "/";

export default defineConfig({
  base,
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      router: { basepath: base },
      prerender: { enabled: true, crawlLinks: true, failOnError: true },
      pages: [{ path: "/" }],
    }),
    viteReact(),
  ],
});

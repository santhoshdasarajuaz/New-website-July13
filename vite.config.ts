import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      server: {
        entry: "./src/server.ts",
      },
      // Generate static HTML into dist/client for Azure Static Web Apps Free (no Node SSR host)
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoStaticPathsDiscovery: true,
        failOnError: true,
        // Skip query-string URLs (e.g. /contact?subject=...) — not needed as static files
        filter: ({ path }) => !path.includes("?"),
      },
    }),
    // React plugin must come after TanStack Start plugin
    react(),
  ],
});

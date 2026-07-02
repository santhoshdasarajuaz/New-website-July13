import { createFileRoute } from "@tanstack/react-router";
import { legalDocs } from "@/data/legal";
import { LegalPage } from "@/components/sections/LegalPage";

export const Route = createFileRoute("/_site/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — Niaga Prestasi" },
      {
        name: "description",
        content: "Disclaimer for information provided on the Niaga Prestasi Sdn Bhd website.",
      },
      { property: "og:title", content: "Disclaimer — Niaga Prestasi" },
      {
        property: "og:description",
        content: "Disclaimer for information provided on the Niaga Prestasi Sdn Bhd website.",
      },
      { property: "og:url", content: "/disclaimer" },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: () => <LegalPage doc={legalDocs.disclaimer} />,
});

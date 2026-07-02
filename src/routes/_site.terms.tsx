import { createFileRoute } from "@tanstack/react-router";
import { legalDocs } from "@/data/legal";
import { LegalPage } from "@/components/sections/LegalPage";

export const Route = createFileRoute("/_site/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Niaga Prestasi" },
      {
        name: "description",
        content: "Terms & Conditions for using the Niaga Prestasi Sdn Bhd website.",
      },
      { property: "og:title", content: "Terms & Conditions — Niaga Prestasi" },
      {
        property: "og:description",
        content: "Terms & Conditions for using the Niaga Prestasi Sdn Bhd website.",
      },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => <LegalPage doc={legalDocs.terms} />,
});

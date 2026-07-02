import { createFileRoute } from "@tanstack/react-router";
import { legalDocs } from "@/data/legal";
import { LegalPage } from "@/components/sections/LegalPage";

export const Route = createFileRoute("/_site/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Niaga Prestasi" },
      { name: "description", content: "Cookie Policy for the Niaga Prestasi Sdn Bhd website." },
      { property: "og:title", content: "Cookie Policy — Niaga Prestasi" },
      {
        property: "og:description",
        content: "Cookie Policy for the Niaga Prestasi Sdn Bhd website.",
      },
      { property: "og:url", content: "/cookies" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: () => <LegalPage doc={legalDocs.cookies} />,
});

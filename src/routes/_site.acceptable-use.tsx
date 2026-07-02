import { createFileRoute } from "@tanstack/react-router";
import { legalDocs } from "@/data/legal";
import { LegalPage } from "@/components/sections/LegalPage";

export const Route = createFileRoute("/_site/acceptable-use")({
  head: () => ({
    meta: [
      { title: "Acceptable Use Policy — Niaga Prestasi" },
      {
        name: "description",
        content: "Acceptable Use Policy for using the Niaga Prestasi Sdn Bhd website.",
      },
      { property: "og:title", content: "Acceptable Use Policy — Niaga Prestasi" },
      {
        property: "og:description",
        content: "Acceptable Use Policy for using the Niaga Prestasi Sdn Bhd website.",
      },
      { property: "og:url", content: "/acceptable-use" },
    ],
    links: [{ rel: "canonical", href: "/acceptable-use" }],
  }),
  component: () => <LegalPage doc={legalDocs.acceptableUse} />,
});

import { createFileRoute } from "@tanstack/react-router";
import { legalDocs } from "@/data/legal";
import { LegalPage } from "@/components/sections/LegalPage";

export const Route = createFileRoute("/_site/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Niaga Prestasi" },
      { name: "description", content: "Privacy Policy for the Niaga Prestasi Sdn Bhd website." },
      { property: "og:title", content: "Privacy Policy — Niaga Prestasi" },
      {
        property: "og:description",
        content: "Privacy Policy for the Niaga Prestasi Sdn Bhd website.",
      },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => <LegalPage doc={legalDocs.privacy} />,
});

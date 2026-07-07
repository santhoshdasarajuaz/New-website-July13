import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesBentoSection } from "@/components/sections/ServicesBentoSection";
import { TechnologyStackMotion } from "@/components/sections/TechnologyStackMotion";
import { CTASection } from "@/components/sections/CTASection";
import { CTAButton } from "@/components/ui/cta-button";

export const Route = createFileRoute("/_site/services/")({
  head: () => ({
    meta: [
      { title: "IT Services — Niaga Prestasi" },
      {
        name: "description",
        content:
          "Software development, application maintenance, cloud, data, testing and production support for banks, insurers and enterprises.",
      },
      { property: "og:title", content: "IT Services — Niaga Prestasi" },
      {
        property: "og:description",
        content: "Comprehensive IT services across the full software delivery lifecycle.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title={
          <>
            Our <span className="text-gradient-cyan">IT services</span>
          </>
        }
        description="Comprehensive IT services across the full software development lifecycle — from concept and architecture through development, testing, deployment and ongoing support."
        crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
        actions={
          <>
            <CTAButton to="/contact" size="lg">
              Talk to an expert
            </CTAButton>
            <CTAButton to="/expertise" size="lg" variant="outline-white" withArrow={false}>
              Explore expertise
            </CTAButton>
          </>
        }
      />

      <ServicesBentoSection showCta={false} />
      <TechnologyStackMotion />
      <CTASection />
    </>
  );
}

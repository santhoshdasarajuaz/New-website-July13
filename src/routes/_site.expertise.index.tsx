import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/container";
import { LinkCard } from "@/components/ui/link-card";
import { Reveal } from "@/components/ui/reveal";
import { CTASection } from "@/components/sections/CTASection";
import { CTAButton } from "@/components/ui/cta-button";
import { expertise } from "@/data/expertise";

export const Route = createFileRoute("/_site/expertise/")({
  head: () => ({
    meta: [
      { title: "Expertise — Niaga Prestasi" },
      {
        name: "description",
        content:
          "Deep domain expertise in insurance technology, banking IT and AI & Python solutions.",
      },
      { property: "og:title", content: "Expertise — Niaga Prestasi" },
      {
        property: "og:description",
        content:
          "Banking, insurance and AI expertise, delivered with strong engineering and domain depth.",
      },
      { property: "og:url", content: "/expertise" },
    ],
    links: [{ rel: "canonical", href: "/expertise" }],
  }),
  component: ExpertiseIndex,
});

function ExpertiseIndex() {
  return (
    <>
      <PageHero
        eyebrow="Domain expertise"
        title={
          <>
            Where <span className="text-gradient-cyan">deep domain</span> meets modern engineering
          </>
        }
        description="We combine software engineering with deep knowledge of Malaysia's banking, insurance and AI landscape to deliver programs that succeed under regulatory scrutiny."
        crumbs={[{ label: "Home", to: "/" }, { label: "Expertise" }]}
        actions={
          <CTAButton to="/contact" size="lg">
            Discuss your domain
          </CTAButton>
        }
      />

      <section className="section-y bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {expertise.map((e, i) => (
              <Reveal key={e.slug} delay={i * 0.05}>
                <LinkCard
                  to="/expertise/$slug"
                  params={{ slug: e.slug }}
                  Icon={e.icon}
                  title={e.title}
                  description={e.subtitle}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

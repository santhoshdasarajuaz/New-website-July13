import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/container";
import { LinkCard } from "@/components/ui/link-card";
import { Reveal } from "@/components/ui/reveal";
import { CTASection } from "@/components/sections/CTASection";
import { CTAButton } from "@/components/ui/cta-button";
import { services } from "@/data/services";

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

const tech = [
  ".NET / C#",
  "Java",
  "Python",
  "React",
  "Angular",
  "Node.js",
  "SQL Server",
  "Oracle",
  "PostgreSQL",
  "MongoDB",
  "Azure",
  "AWS",
  "Docker",
  "Kubernetes",
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "REST APIs",
  "SOAP",
  "Microservices",
  "Spring Boot",
  "Django",
];

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
            <CTAButton to="/expertise" size="lg" variant="outline-white">
              Explore expertise
            </CTAButton>
          </>
        }
      />

      <section className="section-y bg-white">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.04}>
                <LinkCard
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  Icon={s.icon}
                  title={s.title}
                  description={s.subtitle}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-y bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-royal">
              Technologies we work with
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-ink">
              A modern, proven stack
            </h2>
            <div className="mx-auto mt-3 h-1 w-14 bg-royal rounded-full" />
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-white px-4 py-2 text-sm text-ink hover:border-royal hover:text-royal transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

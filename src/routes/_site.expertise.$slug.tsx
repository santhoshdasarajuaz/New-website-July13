import { createFileRoute, notFound } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { CTAButton } from "@/components/ui/cta-button";
import { LinkCard } from "@/components/ui/link-card";
import { CTASection } from "@/components/sections/CTASection";
import { getExpertise, expertise } from "@/data/expertise";

export const Route = createFileRoute("/_site/expertise/$slug")({
  loader: ({ params }) => {
    const item = getExpertise(params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => {
    const e = loaderData?.item;
    if (!e) return {};
    return {
      meta: [
        { title: `${e.title} — Niaga Prestasi` },
        { name: "description", content: e.subtitle },
        { property: "og:title", content: `${e.title} — Niaga Prestasi` },
        { property: "og:description", content: e.subtitle },
        { property: "og:url", content: `/expertise/${e.slug}` },
      ],
      links: [{ rel: "canonical", href: `/expertise/${e.slug}` }],
    };
  },
  component: ExpertiseDetail,
});

function ExpertiseDetail() {
  const { item } = Route.useLoaderData() as { item: import("@/data/expertise").Expertise };
  const others = expertise.filter((e) => e.slug !== item.slug);

  return (
    <>
      <PageHero
        eyebrow="Expertise"
        title={item.title}
        description={item.subtitle}
        crumbs={[{ label: "Home", to: "/" }, { label: "Expertise", to: "/expertise" }, { label: item.title }]}
        actions={
          <>
            <CTAButton to="/contact" size="lg">Talk to a specialist</CTAButton>
            <CTAButton to="/expertise" size="lg" variant="outline-white">All expertise</CTAButton>
          </>
        }
      />

      <section className="section-y bg-white">
        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-lg text-ink-soft leading-relaxed">{item.overview}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-20 lg:pb-24 bg-white">
        <Container>
          <Reveal>
            <SectionHeader align="left" eyebrow="Capabilities" title="What we deliver in this domain" />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {item.capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.03}>
                <div className="card-hover h-full rounded-xl border border-border bg-surface p-6">
                  <div className="h-9 w-9 rounded-lg bg-royal/10 text-royal flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 font-display font-bold text-ink">{c.title}</h4>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-y bg-navy text-white">
        <Container>
          <Reveal>
            <SectionHeader invert eyebrow="Outcomes" title="What clients achieve with us" />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {item.outcomes.map((o) => (
              <div key={o} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <CheckCircle2 className="h-5 w-5 text-cyan-accent mt-0.5" />
                <span className="text-white/80">{o}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {others.length ? (
        <section className="section-y bg-surface">
          <Container>
            <Reveal>
              <SectionHeader eyebrow="Other expertise" title="Explore more domains" />
            </Reveal>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
              {others.map((o) => (
                <LinkCard key={o.slug} to="/expertise/$slug" params={{ slug: o.slug }} Icon={o.icon} title={o.title} description={o.subtitle} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CTASection />
    </>
  );
}

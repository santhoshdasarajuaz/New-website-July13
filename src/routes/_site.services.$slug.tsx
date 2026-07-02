import { createFileRoute, notFound } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { CTAButton } from "@/components/ui/cta-button";
import { LinkCard } from "@/components/ui/link-card";
import { CTASection } from "@/components/sections/CTASection";
import { getService, services } from "@/data/services";

export const Route = createFileRoute("/_site/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return {};
    return {
      meta: [
        { title: `${s.title} — Niaga Prestasi` },
        { name: "description", content: s.subtitle },
        { property: "og:title", content: `${s.title} — Niaga Prestasi` },
        { property: "og:description", content: s.subtitle },
        { property: "og:url", content: `/services/${s.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${s.slug}` }],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData() as { service: import("@/data/services").Service };
  const related = service.related
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={service.title}
        description={service.subtitle}
        crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: service.title }]}
        actions={
          <>
            <CTAButton to="/contact" size="lg">Discuss your project</CTAButton>
            <CTAButton to="/services" size="lg" variant="outline-white">All services</CTAButton>
          </>
        }
      />

      <section className="section-y bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-royal">Overview</span>
                <h2 className="mt-3 font-display text-3xl font-bold text-ink">Built for scale, compliance and speed</h2>
                <div className="mt-2 h-1 w-14 bg-royal rounded-full" />
                <p className="mt-5 text-lg text-ink-soft leading-relaxed">{service.overview}</p>
              </Reveal>

              <Reveal delay={0.05}>
                <h3 className="mt-12 font-display text-2xl font-bold text-ink">What we deliver</h3>
                <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.whatWeDeliver.map((w) => (
                    <li key={w} className="flex items-start gap-2 rounded-lg border border-border bg-surface p-4 text-sm text-ink">
                      <CheckCircle2 className="h-5 w-5 text-royal shrink-0 mt-0.5" />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.05}>
                <h3 className="mt-12 font-display text-2xl font-bold text-ink">Use cases</h3>
                <ul className="mt-5 space-y-2">
                  {service.useCases.map((u) => (
                    <li key={u} className="flex items-start gap-2 text-ink-soft">
                      <ArrowRight className="h-4 w-4 text-royal mt-1 shrink-0" />
                      <span>{u}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.05}>
                <h3 className="mt-12 font-display text-2xl font-bold text-ink">Our approach</h3>
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.approach.map((a, i) => (
                    <div key={a.title} className="rounded-lg border border-border bg-white p-5">
                      <div className="font-display text-xl text-royal font-bold">{String(i + 1).padStart(2, "0")}</div>
                      <div className="mt-2 font-semibold text-ink">{a.title}</div>
                      <p className="mt-1 text-sm text-ink-soft">{a.body}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <Reveal>
                  <div className="rounded-xl border border-border bg-surface p-6">
                    <h4 className="font-display text-lg font-bold text-ink">Benefits</h4>
                    <ul className="mt-4 space-y-2.5">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-ink">
                          <CheckCircle2 className="h-4 w-4 text-royal mt-0.5 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
                <Reveal>
                  <div className="rounded-xl bg-navy-deep text-white p-6">
                    <h4 className="font-display text-lg font-bold">Ready to start?</h4>
                    <p className="mt-2 text-sm text-white/70">Book a discovery call with our team.</p>
                    <div className="mt-5">
                      <CTAButton to="/contact" size="md">Contact us</CTAButton>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {related.length ? (
        <section className="section-y bg-surface">
          <Container>
            <Reveal>
              <SectionHeader eyebrow="Related services" title="You may also need" />
            </Reveal>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((r) => (
                <LinkCard key={r.slug} to="/services/$slug" params={{ slug: r.slug }} Icon={r.icon} title={r.title} description={r.subtitle} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CTASection />
    </>
  );
}

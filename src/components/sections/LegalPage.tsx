import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/sections/PageHero";
import type { LegalDoc } from "@/data/legal";

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={doc.title}
        description={
          <span>
            Last updated: <span className="text-white/90 font-medium">{doc.lastUpdated}</span>
          </span>
        }
        crumbs={[{ label: "Home", to: "/" }, { label: doc.title }]}
        size="sm"
      />

      <section className="section-y bg-white">
        <Container>
          <div className="max-w-3xl">
            {doc.sections.map((s) => (
              <div key={s.heading} className="mt-10 first:mt-0">
                <h2 className="font-display text-xl md:text-2xl font-bold text-ink">{s.heading}</h2>
                <div
                  className="mt-3 h-[3px] w-10 rounded-full bg-linear-to-r from-royal to-cyan-accent"
                  aria-hidden="true"
                />
                <div className="mt-4 space-y-3 text-sm md:text-base text-ink-soft leading-relaxed">
                  {s.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

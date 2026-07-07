import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Landmark, Shield } from "lucide-react";
import bankingImg from "@/assets/banking.jpg";
import { SparklineBars } from "@/components/common/DataVizPrimitives";
import { ImageHighlightCard } from "@/components/common/ImageHighlightCard";
import { SectionBackdrop } from "@/components/common/SectionBackdrop";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { expertise } from "@/data/expertise";

export function BankingInsuranceSplit() {
  const domainExpertise = expertise.filter((e) => e.slug !== "ai-python");

  return (
    <SectionBackdrop variant="surface" withGrid={false}>
      <div className="absolute inset-0 dot-pattern opacity-25" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-32 arc-glow-light" aria-hidden="true" />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionHeader
                align="left"
                size="large"
                eyebrow="Domain expertise"
                title={
                  <>
                    Built for <span className="text-gradient-cyan">Banking</span> & Insurance
                  </>
                }
                description="We combine software engineering with deep domain understanding of banking and insurance operations in Malaysia — from core systems to digital channels and regulatory reporting."
              />
            </Reveal>

            <div className="mt-10 space-y-3">
              {domainExpertise.map((e) => (
                <Reveal key={e.slug}>
                  <Link
                    to="/expertise/$slug"
                    params={{ slug: e.slug }}
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-royal/40 hover:shadow-[0_24px_56px_-36px_rgba(23,105,255,0.35)]"
                  >
                    <div className="h-12 w-12 shrink-0 rounded-xl bg-linear-to-br from-royal/15 to-cyan-accent/10 text-royal flex items-center justify-center ring-1 ring-royal/10 group-hover:bg-royal group-hover:text-white transition-all duration-300">
                      {e.slug === "banking-it" ? (
                        <Landmark className="h-5 w-5" />
                      ) : (
                        <Shield className="h-5 w-5" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg font-bold text-ink group-hover:text-royal transition-colors">
                        {e.title}
                      </h3>
                      <p className="mt-1 text-sm text-ink-soft line-clamp-2">{e.subtitle}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-ink-soft shrink-0 group-hover:text-royal group-hover:translate-x-0.5 transition-all duration-300" />
                  </Link>
                </Reveal>
              ))}
            </div>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "BNM regulatory alignment",
                "Core banking & payments",
                "Claims & policy administration",
                "Fraud detection & analytics",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-2.5 rounded-lg border border-border/60 bg-white/80 px-3 py-2.5 text-sm text-ink"
                >
                  <CheckCircle2 className="h-4 w-4 text-royal shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-3xl bg-linear-to-br from-royal/15 to-cyan-accent/10 blur-2xl"
                  aria-hidden="true"
                />
                <ImageHighlightCard
                  src={bankingImg}
                  alt="Banking and insurance technology"
                  stat="10+"
                  title="Years in banking & insurance"
                  description="Specialized delivery for regulated financial institutions"
                  className="relative aspect-[4/3]"
                />
                <div className="absolute -bottom-4 -left-4 hidden md:block rounded-2xl border border-border bg-white p-4 shadow-xl max-w-[200px]">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-royal">
                    Delivery focus
                  </p>
                  <SparklineBars
                    className="mt-2 h-8"
                    values={[40, 65, 50, 80, 60, 90]}
                    animate={false}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </SectionBackdrop>
  );
}

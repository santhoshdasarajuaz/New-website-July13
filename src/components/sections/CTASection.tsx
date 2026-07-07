import { Container } from "@/components/ui/container";
import { CTAButton } from "@/components/ui/cta-button";
import { Reveal } from "@/components/ui/reveal";

export function CTASection({
  eyebrow = "Ready to start?",
  title = "Let's build what banks and insurers trust.",
  description = "Talk to our team about your next platform, transformation program or training investment.",
  primaryLabel = "Get in touch",
  primaryTo = "/contact",
  secondaryLabel,
  secondaryTo,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-16 lg:py-20">
      <div className="absolute inset-x-0 top-0 h-full arc-glow opacity-80" aria-hidden="true" />
      <div className="absolute inset-0 mesh-gradient opacity-60" aria-hidden="true" />
      <div className="absolute inset-0 grid-pattern opacity-[0.08]" aria-hidden="true" />

      <Container className="relative">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-12 lg:p-14 glass-panel">
            <div className="absolute inset-0 bg-radial-glow opacity-40" aria-hidden="true" />
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-2xl">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-accent">
                  {eyebrow}
                </span>
                <h2 className="mt-3 font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-[1.08] tracking-[-0.02em]">
                  {title}
                </h2>
                <div
                  className="mt-4 h-[3px] w-14 rounded-full bg-linear-to-r from-royal via-cyan-accent to-transparent"
                  aria-hidden="true"
                />
                <p className="mt-4 text-white/65 text-base md:text-lg leading-relaxed">
                  {description}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <CTAButton to={primaryTo} size="lg">
                  {primaryLabel}
                </CTAButton>
                {secondaryLabel && secondaryTo ? (
                  <CTAButton to={secondaryTo} size="lg" variant="outline-white" withArrow={false}>
                    {secondaryLabel}
                  </CTAButton>
                ) : null}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

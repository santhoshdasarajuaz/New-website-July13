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
    <section className="relative overflow-hidden bg-navy-deep py-20 lg:py-24">
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-royal/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-cyan-accent/20 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-cyan-accent text-xs font-semibold uppercase tracking-[0.2em]">
                {eyebrow}
              </span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-white leading-tight">
                {title}
              </h2>
              <p className="mt-4 text-white/70 text-base md:text-lg">{description}</p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <CTAButton to={primaryTo} size="lg">
                {primaryLabel}
              </CTAButton>
              {secondaryLabel && secondaryTo ? (
                <CTAButton to={secondaryTo} size="lg" variant="outline-white">
                  {secondaryLabel}
                </CTAButton>
              ) : null}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

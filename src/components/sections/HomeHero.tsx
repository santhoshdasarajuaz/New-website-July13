import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";
import { CTAButton } from "@/components/ui/cta-button";
import { Reveal } from "@/components/ui/reveal";
import { HeroBentoCollage } from "@/components/sections/HeroBentoCollage";
import { company } from "@/data/company";

export function HomeHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      {/* Layered atmosphere */}
      <div
        className="absolute inset-0 bg-linear-to-b from-navy-deep via-navy to-navy-deep"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 top-0 h-[55%] arc-glow" aria-hidden="true" />
      <div className="absolute inset-0 grid-pattern opacity-[0.12]" aria-hidden="true" />
      <div className="absolute inset-0 mesh-gradient opacity-70" aria-hidden="true" />

      <motion.div
        animate={reduceMotion ? undefined : { opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] max-w-5xl h-32 bg-linear-to-r from-transparent via-cyan-accent/20 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative pt-12 pb-12 lg:pt-16 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-5">
            <Reveal delay={0.04}>
              <h1 className="font-display text-[2.125rem] sm:text-4xl md:text-[2.75rem] lg:text-[3.5rem] font-bold leading-[1.04] tracking-[-0.03em] text-balance">
                <span className="text-white">Build </span>
                <span className="text-gradient-cyan-on-dark">Technology</span>
                <span className="text-white">.</span>
                <br />
                <span className="text-white">Train </span>
                <span className="text-gradient-cyan-on-dark">Talent</span>
                <span className="text-white">.</span>
                <br />
                <span className="text-white">Grow </span>
                <span className="text-gradient-cyan-on-dark">Smarter</span>
                <span className="text-white">.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-5 text-base md:text-lg text-white/70 leading-relaxed max-w-md">
                {company.heroSubheading}
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-7 flex flex-wrap gap-3">
                <CTAButton to="/services" size="lg">
                  Explore Services
                </CTAButton>
                <CTAButton to="/contact" size="lg" variant="outline-white" withArrow={false}>
                  Talk to Us
                </CTAButton>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <HeroBentoCollage />
            </Reveal>
          </div>
        </div>
      </Container>

      <div className="section-divider opacity-30" aria-hidden="true" />
    </section>
  );
}

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { Container } from "@/components/ui/container";
import { CTAButton } from "@/components/ui/cta-button";
import { Reveal } from "@/components/ui/reveal";

const trustChips = [
  "Banking Technology",
  "Insurance Systems",
  "AI & Data",
  "HRDC Training",
  "Talent Solutions",
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white pt-20 pb-16 lg:pt-28 lg:pb-20">
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-linear-to-br from-navy-deep via-navy-deep/95 to-royal/30"
        aria-hidden="true"
      />
      <div className="absolute inset-0 grid-pattern opacity-25" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.2, 0.34, 0.2] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute -top-40 -right-40 w-136 h-136 rounded-full bg-royal/20 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-accent/40 bg-cyan-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-accent" />
                Malaysia’s IT Services, Training & Talent Partner
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.04] tracking-tight">
                Technology, Training & Talent Solutions for{" "}
                <span className="text-gradient-cyan">Financial Services</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-white/75 leading-relaxed max-w-xl">
                Niaga Prestasi helps banks, insurers and enterprises deliver reliable software,
                AI/data solutions, cloud modernization, HRDC training and skilled technology talent.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-7 flex flex-wrap gap-2">
                {trustChips.map((p) => (
                  <span
                    key={p}
                    className="inline-flex items-center rounded-full border border-white/15 bg-white/4 px-3.5 py-1.5 text-xs font-medium text-white/80"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-wrap gap-3">
                <CTAButton to="/services" size="lg">
                  Explore Services <ArrowRight className="h-4 w-4" />
                </CTAButton>
                <CTAButton to="/contact" size="lg" variant="outline-white">
                  Talk to Us
                </CTAButton>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <div className="relative max-w-xl lg:ml-auto">
                <div
                  className="absolute -inset-4 rounded-2xl bg-linear-to-br from-cyan-accent/20 to-royal/20 blur-2xl"
                  aria-hidden="true"
                />
                <div className="relative rounded-2xl border border-white/10 bg-white/4 backdrop-blur p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        title: "Delivery",
                        body: "Build, test, deploy and operate with confidence.",
                      },
                      {
                        title: "Modernization",
                        body: "Cloud migration and platform modernization.",
                      },
                      {
                        title: "AI & Data",
                        body: "Practical AI solutions for real business outcomes.",
                      },
                      { title: "Training", body: "HRDC-ready programs to upskill teams." },
                    ].map((c) => (
                      <div
                        key={c.title}
                        className="rounded-xl border border-white/10 bg-navy-deep/40 p-4"
                      >
                        <div className="text-xs uppercase tracking-wider text-cyan-accent font-semibold">
                          {c.title}
                        </div>
                        <div className="mt-2 text-sm text-white/75 leading-relaxed">{c.body}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

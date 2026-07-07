import { Link } from "@tanstack/react-router";
import { ArrowRight, Brain, Cloud, Database, Sparkles } from "lucide-react";
import {
  AreaChartSvg,
  DotGrid,
  RingGauge,
  SparklineBars,
} from "@/components/common/DataVizPrimitives";
import { SectionBackdrop } from "@/components/common/SectionBackdrop";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";

const panels = [
  {
    icon: Brain,
    title: "Machine Learning",
    body: "Supervised, unsupervised and deep learning pipelines.",
    span: "col-span-12 md:col-span-7",
    featured: true,
  },
  {
    icon: Database,
    title: "Data Engineering",
    body: "Pipelines, lakes and cloud modernization.",
    span: "col-span-12 md:col-span-5",
    featured: false,
  },
  {
    icon: Cloud,
    title: "Cloud Platforms",
    body: "Azure and AWS architecture & migration.",
    span: "col-span-12 sm:col-span-6 md:col-span-4",
    featured: false,
  },
  {
    icon: Sparkles,
    title: "MLOps",
    body: "Model versioning, CI/CD and monitoring.",
    span: "col-span-12 sm:col-span-6 md:col-span-8",
    featured: false,
  },
];

export function AiDataCloudSection() {
  return (
    <SectionBackdrop variant="dark" withArc withGrid={false}>
      <div className="absolute inset-0 mesh-gradient opacity-60" aria-hidden="true" />
      <div className="absolute inset-0 grid-pattern opacity-10" aria-hidden="true" />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal>
              <SectionHeader
                invert
                align="left"
                size="large"
                eyebrow="AI, Data & Cloud"
                title={
                  <>
                    Modernization with{" "}
                    <span className="text-gradient-cyan-on-dark">intelligence</span>
                  </>
                }
                description="AI, Python and cloud solutions that turn data into practical automation, insights and smarter decisions — from machine learning and NLP to fraud detection and MLOps."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                to="/expertise/$slug"
                params={{ slug: "ai-python" }}
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-red-cta px-6 py-3.5 text-white font-semibold hover:bg-red-cta-dark transition-colors shadow-lg shadow-red-cta/25 group"
              >
                <Sparkles className="h-4 w-4" />
                Explore AI capabilities
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-12 gap-3 md:gap-4">
              {panels.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.05} className={p.span}>
                  <div
                    className={[
                      "group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-6 backdrop-blur-md",
                      "transition-[transform,box-shadow,border-color] duration-300",
                      "hover:-translate-y-1 hover:border-cyan-accent/35 hover:shadow-[0_28px_64px_-36px_rgba(23,105,255,0.5)]",
                      p.featured ? "min-h-[200px]" : "",
                    ].join(" ")}
                  >
                    <div
                      className="absolute inset-0 mesh-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-hidden="true"
                    />

                    <div className="relative flex items-start justify-between gap-3">
                      <p.icon className="h-5 w-5 text-cyan-accent shrink-0" />
                      {p.featured ? <RingGauge /> : null}
                    </div>

                    <h4 className="relative mt-3 font-display text-lg font-bold text-white">
                      {p.title}
                    </h4>
                    <p className="relative mt-1.5 text-sm text-white/55">{p.body}</p>

                    {p.featured ? (
                      <AreaChartSvg className="relative mt-4" />
                    ) : (
                      <div className="relative mt-4 flex items-end gap-3">
                        <SparklineBars
                          className="flex-1 h-7 opacity-50 group-hover:opacity-90 transition-opacity"
                          values={[20, 40, 30, 55, 45, 65]}
                          animate={false}
                        />
                        {!p.featured && i % 2 === 0 ? (
                          <DotGrid className="w-12 h-7 shrink-0" />
                        ) : null}
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </SectionBackdrop>
  );
}

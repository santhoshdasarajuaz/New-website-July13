import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Building2, Landmark, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { CTASection } from "@/components/sections/CTASection";
import { AnimatedTagMarquee } from "@/components/common/AnimatedTagMarquee";
import { TrainingHrdcSection } from "@/components/sections/TrainingHrdcSection";
import { trainingTopics } from "@/data/capabilities";

export const Route = createFileRoute("/_site/training")({
  head: () => ({
    meta: [
      { title: "IT Training Programs — Niaga Prestasi" },
      {
        name: "description",
        content:
          "HRDC-approved IT training for university students, corporates, and government professionals in Malaysia.",
      },
      { property: "og:title", content: "IT Training — Niaga Prestasi" },
      {
        property: "og:description",
        content: "HRDC-approved training programs across banking IT, AI, data, cloud and more.",
      },
      { property: "og:url", content: "/training" },
    ],
    links: [{ rel: "canonical", href: "/training" }],
  }),
  component: TrainingPage,
});

const audiences = [
  {
    icon: GraduationCap,
    title: "University Final Year Students",
    body: "Specialized IT training programs bridging academic knowledge and industry requirements — real-world software development, data science, and banking / insurance domain training.",
    bullets: [
      "Industry-relevant curriculum",
      "Hands-on project experience",
      "Mentorship from practitioners",
      "Career guidance & job referencing",
    ],
  },
  {
    icon: Building2,
    title: "Corporate IT Training",
    body: "Tailored corporate training programs to upskill your workforce in the latest IT technologies. Customized learning paths for software teams, business analysts, and IT professionals.",
    bullets: [
      "Customized learning paths",
      "Flexible scheduling",
      "On-site & virtual delivery",
      "Post-training support",
    ],
  },
  {
    icon: Landmark,
    title: "Government Training (HRDC Claimable)",
    body: "As a registered HRD Corp Training Provider, we deliver HRDC-claimable training programs for government agencies and GLC organizations, aligned to Ministry of Human Resources Malaysia's workforce development agenda.",
    bullets: [
      "HRDC/HRD Corp claimable",
      "Aligned to MOHR Malaysia",
      "Government-approved curriculum",
      "Certified trainers",
    ],
  },
];

function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Professional development"
        title={
          <>
            IT <span className="text-gradient-cyan">Training Programs</span>
          </>
        }
        description="Structured IT training for university graduates, corporate teams and government professionals — delivered by practitioners with enterprise delivery experience."
        crumbs={[{ label: "Home", to: "/" }, { label: "Training" }]}
      />

      <TrainingHrdcSection showActions={false} />

      <section className="section-y bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {audiences.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.05}>
                <div className="card-hover h-full rounded-xl border border-border bg-white p-6 border-t-4 border-t-royal">
                  <div className="h-11 w-11 rounded-lg bg-royal/10 text-royal flex items-center justify-center">
                    <a.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">{a.title}</h3>
                  <p className="mt-3 text-sm text-ink-soft leading-relaxed">{a.body}</p>
                  <ul className="mt-5 space-y-2">
                    {a.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-ink">
                        <CheckCircle2 className="h-4 w-4 text-royal mt-0.5 shrink-0" />{" "}
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-y bg-white">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Training topics available"
              title="A wide range of IT disciplines"
            />
          </Reveal>
          <div className="mt-10">
            <AnimatedTagMarquee
              items={trainingTopics}
              rowCount={3}
              variant="light"
              speed="normal"
            />
          </div>
        </Container>
      </section>

      <CTASection primaryLabel="Enquire about training" />
    </>
  );
}

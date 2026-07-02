import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Building2, Landmark, BadgeCheck, CheckCircle2 } from "lucide-react";
import trainingImg from "@/assets/training.jpg";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { CTAButton } from "@/components/ui/cta-button";
import { CTASection } from "@/components/sections/CTASection";

export const Route = createFileRoute("/_site/training")({
  head: () => ({
    meta: [
      { title: "IT Training Programs — Niaga Prestasi" },
      { name: "description", content: "HRDC-approved IT training for university students, corporates, and government professionals in Malaysia." },
      { property: "og:title", content: "IT Training — Niaga Prestasi" },
      { property: "og:description", content: "HRDC-approved training programs across banking IT, AI, data, cloud and more." },
      { property: "og:url", content: "/training" },
    ],
    links: [{ rel: "canonical", href: "/training" }],
  }),
  component: TrainingPage,
});

const audiences = [
  { icon: GraduationCap, title: "University Final Year Students", body: "Specialized IT training programs bridging academic knowledge and industry requirements — real-world software development, data science, and banking / insurance domain training.", bullets: ["Industry-relevant curriculum", "Hands-on project experience", "Mentorship from practitioners", "Career guidance & job referencing"] },
  { icon: Building2, title: "Corporate IT Training", body: "Tailored corporate training programs to upskill your workforce in the latest IT technologies. Customized learning paths for software teams, business analysts, and IT professionals.", bullets: ["Customized learning paths", "Flexible scheduling", "On-site & virtual delivery", "Post-training support"] },
  { icon: Landmark, title: "Government Training (HRDC Claimable)", body: "As a registered HRD Corp Training Provider, we deliver HRDC-claimable training programs for government agencies and GLC organizations, aligned to Ministry of Human Resources Malaysia's workforce development agenda.", bullets: ["HRDC/HRD Corp claimable", "Aligned to MOHR Malaysia", "Government-approved curriculum", "Certified trainers"] },
];

const topics = [
  "Python Programming & Automation", "Data Science & Analytics", "Machine Learning & AI", "Java Development",
  ".NET / C# Development", "Web Development (React, Angular)", "Database Management (SQL, Oracle)",
  "Cloud Computing (Azure, AWS)", "DevOps & CI/CD", "Cybersecurity Fundamentals", "Business Analysis",
  "Agile & Scrum Methodology", "API Development & Integration", "Insurance Domain Knowledge",
  "Banking IT Systems", "Data Engineering & ETL",
];

function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Professional development"
        title={<>IT <span className="text-gradient-cyan">Training Programs</span></>}
        description="We empower individuals and organizations through structured IT training — from university students taking their first steps into the industry, to corporate teams and government professionals advancing their skills."
        crumbs={[{ label: "Home", to: "/" }, { label: "Training" }]}
      />

      <section className="section-y bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <Reveal>
              <img src={trainingImg} alt="IT training in Malaysia" width={1280} height={900} loading="lazy" className="rounded-2xl border border-border shadow-xl w-full" />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-surface p-6 mb-4">
                <div className="flex items-center gap-3">
                  <BadgeCheck className="h-8 w-8 text-royal" />
                  <div>
                    <div className="font-display font-bold text-ink">HRDC Approved Training Provider</div>
                    <div className="text-xs text-ink-soft mt-0.5 uppercase tracking-wider">HRD Corp & Claimable Training</div>
                  </div>
                </div>
              </div>
              <SectionHeader
                align="left"
                eyebrow="Looking to upskill, hire, or advance your IT career?"
                title="Partner with Niaga Prestasi"
                description="Your trusted talent and technology development partner. We offer comprehensive training solutions for individuals, corporates, and government bodies across Malaysia. Our trainers are industry practitioners with real-world experience in banking, insurance, and enterprise IT."
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <CTAButton to="/courses" variant="secondary">Browse courses</CTAButton>
                <CTAButton to="/contact" variant="ghost" withArrow={false}><span className="text-royal">Contact training team</span></CTAButton>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

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
                        <CheckCircle2 className="h-4 w-4 text-royal mt-0.5 shrink-0" /> <span>{b}</span>
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
            <SectionHeader eyebrow="Training topics available" title="A wide range of IT disciplines" />
          </Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {topics.map((t) => (
              <span key={t} className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-ink hover:border-royal hover:text-royal transition-colors">{t}</span>
            ))}
          </div>
        </Container>
      </section>

      <CTASection primaryLabel="Enquire about training" />
    </>
  );
}

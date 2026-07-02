import { createFileRoute } from "@tanstack/react-router";
import {
  TrendingUp,
  BookOpen,
  MessageSquare,
  Search,
  Globe,
  Briefcase,
  Users,
  UserCheck,
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { CTAButton } from "@/components/ui/cta-button";
import { CTASection } from "@/components/sections/CTASection";

export const Route = createFileRoute("/_site/talent-staffing")({
  head: () => ({
    meta: [
      { title: "Talent & Staffing Solutions — Niaga Prestasi" },
      {
        name: "description",
        content:
          "IT talent sourcing, contract staffing, corporate training and career development — Malaysia's trusted talent partner.",
      },
      { property: "og:title", content: "Talent & Staffing — Niaga Prestasi" },
      {
        property: "og:description",
        content: "Workforce solutions across upskilling, hiring, referencing and training.",
      },
      { property: "og:url", content: "/talent-staffing" },
    ],
    links: [{ rel: "canonical", href: "/talent-staffing" }],
  }),
  component: TalentPage,
});

const services = [
  {
    icon: TrendingUp,
    title: "IT Software Upskilling Programs",
    body: "Structured upskilling programs that bridge skill gaps in your IT workforce — covering the latest technologies, frameworks and industry best practices.",
  },
  {
    icon: BookOpen,
    title: "Professional Training & Workshops",
    body: "Hands-on workshops and professional development sessions delivered by experienced industry practitioners for immediate workplace application.",
  },
  {
    icon: MessageSquare,
    title: "Career Guidance & Job Referencing",
    body: "Personalized career counseling, resume building and job-referencing services to help IT professionals navigate their next career path.",
  },
  {
    icon: Search,
    title: "Recruitment Solutions for Employers",
    body: "End-to-end recruitment services — from job profiling and candidate sourcing to screening, interviewing and onboarding for IT roles.",
  },
  {
    icon: Globe,
    title: "Talent Sourcing (Local & Expat)",
    body: "Access to a wide talent pool of local Malaysian IT professionals and international expat specialists for niche technology requirements.",
  },
  {
    icon: Briefcase,
    title: "Contract & Permanent Staffing",
    body: "Flexible staffing solutions — contract placements for project-based needs and permanent hiring for long-term team building.",
  },
  {
    icon: Users,
    title: "Corporate Training Programs",
    body: "Customized corporate training designed around your organization's specific technology stack, business processes and learning objectives.",
  },
  {
    icon: UserCheck,
    title: "Interview Preparation & Career Support",
    body: "Mock interviews, technical assessment prep and career coaching to help candidates succeed in competitive IT job markets.",
  },
];

const pills = [
  "IT & Software Upskilling",
  "Professional Training & Workshops",
  "Career Guidance & Job Referencing",
  "Recruitment Solutions",
  "Talent Sourcing (Local & Expat)",
  "Contract & Permanent Staffing",
  "Corporate Training",
  "Interview Preparation",
  "Workforce Development",
];

function TalentPage() {
  return (
    <>
      <PageHero
        eyebrow="Talent & workforce"
        title={
          <>
            Talent & <span className="text-gradient-cyan">Staffing Solutions</span>
          </>
        }
        description="Whether you are looking to upskill your team, hire top IT talent, or advance your own IT career — Niaga Prestasi is your trusted partner for talent development and workforce solutions."
        crumbs={[{ label: "Home", to: "/" }, { label: "Talent & Staffing" }]}
      />

      <section className="section-y bg-white">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl bg-royal text-white p-8 lg:p-12">
              <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
              <div className="relative max-w-3xl mx-auto text-center">
                <h2 className="font-display text-2xl md:text-3xl font-bold">
                  Looking to Upskill, Hire, or Advance Your IT Career?
                </h2>
                <p className="mt-3 text-white/85">
                  Partner with Niaga Prestasi Sdn Bhd — your trusted talent and technology
                  development partner.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {pills.map((p) => (
                    <span
                      key={p}
                      className="rounded-full border border-white/30 bg-white/10 px-3.5 py-1.5 text-xs font-medium"
                    >
                      {p}
                    </span>
                  ))}
                </div>
                <div className="mt-8">
                  <CTAButton to="/contact" size="lg" variant="primary">
                    Partner with us
                  </CTAButton>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section-y bg-surface">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="What we do"
              title="A complete workforce solution"
              description="Eight complementary services covering the full talent lifecycle."
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.04}>
                <div className="card-hover h-full rounded-xl border border-border bg-white p-6">
                  <div className="h-11 w-11 rounded-lg bg-royal/10 text-royal flex items-center justify-center">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection primaryLabel="Partner with us" />
    </>
  );
}

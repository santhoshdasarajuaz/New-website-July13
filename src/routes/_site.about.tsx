import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Building2, GraduationCap, Users, ShieldCheck } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { CTAButton } from "@/components/ui/cta-button";
import { CTASection } from "@/components/sections/CTASection";

export const Route = createFileRoute("/_site/about")({
  head: () => ({
    meta: [
      { title: "About — Niaga Prestasi Sdn Bhd" },
      {
        name: "description",
        content:
          "Malaysia-based IT services and talent development partner for banking, insurance and enterprise sectors.",
      },
      { property: "og:title", content: "About Niaga Prestasi" },
      {
        property: "og:description",
        content: "Your trusted technology and talent development partner in Malaysia.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Building2,
    title: "Domain expertise",
    body: "Banking, insurance and enterprise depth built over a decade of delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Delivery excellence",
    body: "Structured methodology, senior engineering, and quality-first culture.",
  },
  {
    icon: GraduationCap,
    title: "Training capability",
    body: "HRDC-approved programs that build sustainable talent pipelines.",
  },
  {
    icon: Users,
    title: "Talent support",
    body: "Recruitment, staffing and career development for our clients and community.",
  },
];

const timeline = [
  { title: "Discover", body: "Understand business goals, constraints and stakeholders." },
  { title: "Design", body: "Solution architecture that meets domain and regulatory needs." },
  { title: "Deliver", body: "Iterative build, test and deployment with senior oversight." },
  { title: "Operate", body: "Ongoing support, enhancement and continuous improvement." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Your trusted <span className="text-gradient-cyan">technology & talent</span> development
            partner
          </>
        }
        description="Niaga Prestasi Sdn Bhd is a Malaysia-based IT services company delivering specialized technology solutions and professional training to the banking, insurance and enterprise sectors."
        crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <section className="section-y bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-royal">
                Our story
              </span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-ink">
                A Malaysia-based team with regional experience
              </h2>
              <div className="mt-2 h-1 w-14 bg-royal rounded-full" />
              <div className="mt-6 space-y-4 text-ink-soft leading-relaxed">
                <p>
                  Headquartered in Bangsar, Kuala Lumpur, we combine deep domain expertise with
                  cutting-edge technology to help organizations innovate, modernize and grow.
                </p>
                <p>
                  Our team of seasoned engineers, business analysts and trainers brings hands-on
                  experience across the full software development lifecycle — from requirements
                  gathering and architecture design to development, testing, production support and
                  workforce upskilling. We are proud to serve clients in Malaysia and the broader
                  Asia-Pacific region.
                </p>
              </div>
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "End-to-end product development for banking & insurance",
                  "Specialized in .NET, Java, Python, Data Science & AI/ML",
                  "Cloud migration & legacy system modernization",
                  "HRDC-approved IT training provider",
                  "Functional Business Analysis & production support",
                  "Talent sourcing, staffing & workforce development",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-ink">
                    <CheckCircle2 className="h-5 w-5 text-royal mt-0.5 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTAButton to="/services" variant="secondary">
                  Our services
                </CTAButton>
                <CTAButton to="/contact" variant="ghost" withArrow={false}>
                  <span className="text-royal">Contact us</span>
                </CTAButton>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-royal/20 to-cyan-accent/20 blur-2xl"
                  aria-hidden="true"
                />
                <img
                  src={aboutImg}
                  alt="Niaga Prestasi team collaborating"
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="relative w-full rounded-2xl border border-border shadow-2xl object-cover"
                />
                <div className="absolute -bottom-6 -left-6 rounded-xl bg-royal text-white px-5 py-4 shadow-xl max-w-[220px]">
                  <div className="text-3xl font-display font-bold">10+</div>
                  <div className="text-xs text-white/80 mt-0.5">
                    Years of specialized IT services in banking & insurance
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section-y bg-surface">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="What we stand for"
              title="Our values in delivery"
              description="Four principles that guide every engagement we take on."
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="card-hover h-full rounded-xl border border-border bg-white p-6">
                  <div className="h-11 w-11 rounded-lg bg-royal/10 text-royal flex items-center justify-center">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display font-bold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-y bg-navy text-white">
        <Container>
          <Reveal>
            <SectionHeader invert eyebrow="How we work" title="A proven four-step delivery model" />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-6">
            {timeline.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.06}>
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 h-full">
                  <div className="font-display text-3xl font-bold text-cyan-accent">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="h-px bg-white/10 w-10 mt-3" />
                  <h4 className="mt-4 font-display font-bold text-white text-lg">{t.title}</h4>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

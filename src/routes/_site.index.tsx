import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Landmark, Shield, Brain, GraduationCap, Users, ArrowRight,
  Cloud, Code2, CheckCircle2, Sparkles, Building2, BadgeCheck,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import bankingImg from "@/assets/banking.jpg";
import aiImg from "@/assets/ai-python.jpg";
import trainingImg from "@/assets/training.jpg";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { CTAButton } from "@/components/ui/cta-button";
import { LinkCard } from "@/components/ui/link-card";
import { StatCounter } from "@/components/ui/stat-counter";
import { CTASection } from "@/components/sections/CTASection";
import { services } from "@/data/services";
import { expertise } from "@/data/expertise";
import { company } from "@/data/company";

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "Niaga Prestasi — Technology, Training & Talent for Malaysia's Financial Sector" },
      {
        name: "description",
        content:
          "We help banks, insurers and enterprises build reliable software, modernize platforms, strengthen talent and deliver technology programs with confidence.",
      },
      { property: "og:title", content: "Niaga Prestasi — Malaysia's Financial Technology Partner" },
      { property: "og:description", content: "IT services, banking & insurance technology, AI & data, and HRDC-approved training." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const industryPills = ["Banking", "Insurance", "AI & Data", "Cloud", "IT Training", "Talent Solutions"];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-deep text-white pt-24 pb-28 lg:pt-32 lg:pb-40">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-deep/95 to-royal/30" aria-hidden="true" />
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <motion.div
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute -top-32 right-0 w-[38rem] h-[38rem] rounded-full bg-royal/20 blur-3xl"
          aria-hidden="true"
        />
        <Container className="relative">
          <div className="max-w-4xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-accent/40 bg-cyan-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-accent" />
                Malaysia's trusted IT services partner
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
                Technology, Training & Talent Solutions for{" "}
                <span className="text-gradient-cyan">Malaysia's Financial Sector</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 text-lg lg:text-xl text-white/75 leading-relaxed max-w-3xl">
                We help banks, insurers and enterprises build reliable software, modernize platforms,
                strengthen talent capability and deliver technology programs with confidence.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-2">
                {industryPills.map((p) => (
                  <span key={p} className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-white/80">
                    {p}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-3">
                <CTAButton to="/services" size="lg">Explore Services</CTAButton>
                <CTAButton to="/contact" size="lg" variant="outline-white">Talk to Us</CTAButton>
              </div>
            </Reveal>
          </div>
        </Container>
        {/* Stats band */}
        <Container className="relative mt-16 lg:mt-24">
          <Reveal delay={0.25}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
              {company.stats.map((s) => (
                <div key={s.label} className="py-6 px-6">
                  <StatCounter value={s.value} label={s.label} />
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Trusted partner */}
      <section className="section-y bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <SectionHeader
                align="left"
                eyebrow="Who we are"
                title={<>Your trusted <span className="text-royal">technology & talent</span> partner</>}
                description="Niaga Prestasi Sdn Bhd is a Malaysia-based IT services company delivering specialized technology solutions and professional training to the banking, insurance and enterprise sectors. Headquartered in Bangsar, Kuala Lumpur, we combine deep domain expertise with cutting-edge technology to help organizations innovate, modernize and grow."
              />
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "End-to-end product development",
                  "Banking & insurance domain focus",
                  "AI, Python & cloud capability",
                  "HRDC-approved IT training",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-2 text-sm text-ink">
                    <CheckCircle2 className="h-5 w-5 text-royal shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTAButton to="/about" variant="secondary">About Niaga Prestasi</CTAButton>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-royal/20 to-cyan-accent/20 blur-2xl" aria-hidden="true" />
                <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
                  <img src={bankingImg} alt="Banking technology dashboards" width={1280} height={900} loading="lazy" className="w-full h-auto object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 rounded-xl bg-navy-deep text-white px-5 py-4 shadow-xl">
                  <div className="text-3xl font-display font-bold text-cyan-accent">10+</div>
                  <div className="text-xs text-white/70 max-w-[140px] leading-snug">Years of specialized IT services in banking & insurance</div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="section-y bg-white">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="What we do"
              title="Our IT Services"
              description="We provide comprehensive IT services across the full software development lifecycle — from concept and architecture through development, testing, deployment and ongoing support."
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.04}>
                <LinkCard
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  Icon={s.icon}
                  title={s.title}
                  description={s.subtitle}
                />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <CTAButton to="/services" variant="secondary">View all services</CTAButton>
          </div>
        </Container>
      </section>

      {/* Banking & Insurance split */}
      <section className="section-y bg-surface-muted relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" aria-hidden="true" />
        <Container className="relative">
          <Reveal>
            <SectionHeader
              eyebrow="Domain expertise"
              title="Built for Banking & Insurance"
              description="We combine software engineering with deep domain understanding of Malaysia's financial services sector."
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertise.filter((e) => e.slug !== "ai-python").map((e, i) => (
              <Reveal key={e.slug} delay={i * 0.08}>
                <Link
                  to="/expertise/$slug"
                  params={{ slug: e.slug }}
                  className="group card-hover block h-full rounded-2xl overflow-hidden border border-border bg-white"
                >
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <img
                      src={e.slug === "banking-it" ? bankingImg : bankingImg}
                      alt={e.title}
                      width={1280}
                      height={720}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                      <e.icon className="h-5 w-5 text-cyan-accent" />
                      <span className="text-xs uppercase tracking-wider text-cyan-accent font-semibold">Expertise</span>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8">
                    <h3 className="font-display text-2xl font-bold text-ink">{e.title}</h3>
                    <p className="mt-3 text-ink-soft">{e.subtitle}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-royal">
                      Explore capabilities <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* AI & Python */}
      <section className="section-y bg-navy-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover" style={{ backgroundImage: `url(${aiImg})` }} aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/95 to-navy-deep/60" aria-hidden="true" />
        <Container className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <SectionHeader
                  invert
                  align="left"
                  eyebrow="Artificial Intelligence"
                  title={<>AI & Python <span className="text-gradient-cyan">solutions</span> for financial services</>}
                  description="We develop intelligent AI tools and data-driven solutions using Python — from machine learning models and NLP systems to fraud detection, predictive analytics and conversational AI."
                />
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/expertise/$slug"
                    params={{ slug: "ai-python" }}
                    className="inline-flex items-center gap-2 rounded-md bg-red-cta px-6 py-3.5 text-white font-semibold hover:bg-red-cta-dark transition-colors shadow-lg shadow-red-cta/20 group"
                  >
                    <Sparkles className="h-4 w-4" /> Explore AI capabilities
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Machine Learning", body: "Supervised, unsupervised, deep learning." },
                  { title: "NLP & LLMs", body: "Chatbots, summarization, extraction." },
                  { title: "Fraud Detection AI", body: "Anomaly + behavioral analytics." },
                  { title: "MLOps", body: "Model versioning, CI/CD, monitoring." },
                ].map((c, i) => (
                  <Reveal key={c.title} delay={i * 0.05}>
                    <div className="h-full rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
                      <Brain className="h-5 w-5 text-cyan-accent" />
                      <h4 className="mt-3 font-display font-bold text-white">{c.title}</h4>
                      <p className="mt-1 text-sm text-white/60">{c.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Training */}
      <section className="section-y bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-cyan-accent/20 to-royal/20 blur-xl" aria-hidden="true" />
                <img
                  src={trainingImg}
                  alt="IT training in Malaysia"
                  width={1280}
                  height={900}
                  loading="lazy"
                  className="relative rounded-2xl border border-border w-full h-auto object-cover shadow-xl"
                />
                <div className="absolute top-6 right-6 rounded-xl bg-white px-4 py-3 shadow-lg border border-border">
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-royal" />
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-ink-soft font-semibold">HRDC</div>
                      <div className="text-sm font-bold text-ink">Approved Trainer</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <SectionHeader
                align="left"
                eyebrow="Professional development"
                title={<>Training & <span className="text-royal">HRDC programs</span></>}
                description="We empower individuals and organizations through structured IT training — from university students entering the industry to corporate teams and government professionals seeking to advance their skills."
              />
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: GraduationCap, title: "University Students", body: "Final year and fresh graduate programs." },
                  { icon: Building2, title: "Corporate IT Training", body: "Customized upskilling for enterprise teams." },
                  { icon: Landmark, title: "Government Training", body: "HRDC-claimable programs for agencies." },
                  { icon: BadgeCheck, title: "HRDC Claimable", body: "Fully aligned with HRD Corp guidelines." },
                ].map(({ icon: Icon, title, body }) => (
                  <div key={title} className="rounded-lg border border-border p-4">
                    <Icon className="h-5 w-5 text-royal" />
                    <div className="mt-2 font-semibold text-ink">{title}</div>
                    <div className="text-sm text-ink-soft mt-0.5">{body}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTAButton to="/training" variant="secondary">View training programs</CTAButton>
                <CTAButton to="/courses" variant="ghost" withArrow={false}>
                  <span className="text-royal">Browse courses</span>
                </CTAButton>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Talent */}
      <section className="section-y bg-surface">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Talent & workforce"
              title="Talent & Staffing Solutions"
              description="Whether you're looking to upskill your team, hire top IT talent, or advance your own IT career — we're your trusted partner for talent development and workforce solutions."
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "IT Software Upskilling", body: "Bridge skill gaps in your workforce." },
              { title: "Professional Workshops", body: "Hands-on workshops by practitioners." },
              { title: "Career Guidance", body: "Referencing, coaching and placement." },
              { title: "Recruitment Solutions", body: "End-to-end IT recruitment." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <div className="card-hover h-full rounded-xl border border-border bg-white p-6">
                  <div className="h-10 w-10 rounded-lg bg-royal/10 text-royal flex items-center justify-center">
                    <Users className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display font-bold text-ink">{c.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <CTAButton to="/talent-staffing" variant="secondary">Talent & Staffing solutions</CTAButton>
          </div>
        </Container>
      </section>

      {/* Why choose */}
      <section className="section-y bg-white">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Why Niaga Prestasi"
              title="A delivery partner that understands your business"
              description="We bring engineering discipline, banking and insurance domain depth, and a training capability that keeps your teams sharp — all from a Malaysia-based team you can meet in person."
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Deep BNM compliance expertise", body: "Regulatory alignment across banking and insurance programs." },
              { title: "Proven core banking track record", body: "Delivery on core, digital and payments platforms." },
              { title: "Agile delivery with quality", body: "Fast, iterative delivery without sacrificing rigor." },
              { title: "End-to-end support", body: "From analysis to build, test, deploy and operate." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <div className="rounded-xl border border-border bg-surface p-6 h-full">
                  <div className="h-9 w-9 rounded-lg bg-royal text-white flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display font-bold text-ink">{c.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Delivery model */}
      <section className="section-y bg-navy text-white">
        <Container>
          <Reveal>
            <SectionHeader
              invert
              eyebrow="How we work"
              title="A delivery model built for financial services"
              description="Our engagement model blends senior architects, domain analysts and hands-on engineers — supported by a training arm that keeps your team growing."
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discover", body: "Domain-led discovery of business goals, constraints and compliance." },
              { step: "02", title: "Design", body: "Solution architecture and delivery plan aligned to regulatory needs." },
              { step: "03", title: "Deliver", body: "Agile squads shipping iteratively with QA and business analysts." },
              { step: "04", title: "Operate", body: "SLA-backed support, monitoring and continuous improvement." },
            ].map((s, i) => (
              <Reveal key={s.step} delay={i * 0.06}>
                <div className="relative h-full rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
                  <div className="text-cyan-accent font-display text-3xl font-bold">{s.step}</div>
                  <div className="mt-3 h-px bg-white/10 w-10" />
                  <h4 className="mt-4 font-display font-bold text-white text-lg">{s.title}</h4>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Let's build together"
        title="Ready to modernize your platform or grow your team?"
        description="Talk to our Malaysia-based team about your next project, transformation program or training investment."
        primaryLabel="Get in touch"
        primaryTo="/contact"
        secondaryLabel="Explore services"
        secondaryTo="/services"
      />
    </>
  );
}

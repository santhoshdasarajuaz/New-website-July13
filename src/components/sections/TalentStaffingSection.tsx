import { Users } from "lucide-react";
import { ImageHighlightCard } from "@/components/common/ImageHighlightCard";
import { SectionBackdrop } from "@/components/common/SectionBackdrop";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { CTAButton } from "@/components/ui/cta-button";
import { siteAssets } from "@/constants/assets";

const services = [
  {
    title: "IT Software Upskilling",
    body: "Structured programs to close skill gaps in your team.",
  },
  {
    title: "Recruitment Solutions",
    body: "Sourcing, screening and placement for IT roles.",
  },
];

export function TalentStaffingSection() {
  return (
    <SectionBackdrop variant="surface" withGrid={false}>
      <div className="absolute inset-0 dot-pattern opacity-20" aria-hidden="true" />
      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-6">
            <SectionHeader
              align="left"
              size="large"
              eyebrow="Talent & workforce"
              title={
                <>
                  Talent & <span className="text-gradient-cyan">Staffing</span> Solutions
                </>
              }
              description="Hiring, staffing and career support for Malaysian IT teams — explore full workforce services on our talent page."
            />
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.04}>
                  <div className="group card-hover h-full rounded-2xl border border-border bg-white p-5">
                    <div className="h-10 w-10 rounded-xl bg-royal/10 text-royal flex items-center justify-center group-hover:bg-royal group-hover:text-white transition-colors duration-300">
                      <Users className="h-5 w-5" />
                    </div>
                    <h3 className="mt-3 font-display font-bold text-ink group-hover:text-royal transition-colors">
                      {c.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-ink-soft">{c.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-8">
              <CTAButton to="/talent-staffing" variant="secondary">
                Talent & Staffing solutions
              </CTAButton>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6">
            <ImageHighlightCard
              src={siteAssets.talentHero}
              alt="Talent and staffing analytics visual"
              badge="Talent"
              title="Skilled IT professionals"
              description="Connect with engineers, analysts and specialists for your programs"
              overlayPosition="bottom-left"
              className="aspect-4/3"
            />
          </Reveal>
        </div>
      </Container>
    </SectionBackdrop>
  );
}

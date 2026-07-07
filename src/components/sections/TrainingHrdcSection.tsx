import { Building2, GraduationCap, Landmark } from "lucide-react";
import trainingImg from "@/assets/training.jpg";
import { ImageHighlightCard } from "@/components/common/ImageHighlightCard";
import { HrdCorpBadges } from "@/components/common/HrdCorpBadges";
import { SectionBackdrop } from "@/components/common/SectionBackdrop";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { CTAButton } from "@/components/ui/cta-button";

const audiences = [
  {
    icon: GraduationCap,
    title: "University Students",
    body: "Final year and fresh graduate programs.",
  },
  {
    icon: Building2,
    title: "Corporate IT Training",
    body: "Customized upskilling for enterprise teams.",
  },
  {
    icon: Landmark,
    title: "Government Training",
    body: "HRDC-claimable programs for agencies.",
  },
];

export function TrainingHrdcSection({ showActions = true }: { showActions?: boolean }) {
  return (
    <SectionBackdrop variant="light" withArc withGrid>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5 lg:order-2">
            <SectionHeader
              align="left"
              size="large"
              eyebrow="Professional development"
              title={
                <>
                  Training & <span className="text-gradient-cyan">HRDC programs</span>
                </>
              }
              description="We empower individuals and organizations through structured IT training — from university students entering the industry to corporate teams and government professionals."
            />
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {audiences.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-border bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-royal/40 hover:shadow-[0_20px_48px_-32px_rgba(23,105,255,0.3)]"
                >
                  <div className="h-10 w-10 rounded-lg bg-royal/10 text-royal flex items-center justify-center group-hover:bg-royal group-hover:text-white transition-colors duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-3 font-semibold text-ink">{title}</div>
                  <div className="text-sm text-ink-soft mt-0.5">{body}</div>
                </div>
              ))}
            </div>
            {showActions ? (
              <div className="mt-8 flex flex-wrap gap-3">
                <CTAButton to="/training" variant="secondary">
                  View training programs
                </CTAButton>
                <CTAButton
                  to="/courses"
                  variant="secondary"
                  withArrow={false}
                  className="!bg-transparent !text-royal !border !border-royal/30 hover:!bg-royal/5"
                >
                  Browse courses
                </CTAButton>
              </div>
            ) : null}
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7 lg:order-1">
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-3xl bg-linear-to-br from-cyan-accent/15 to-royal/15 blur-2xl"
                aria-hidden="true"
              />
              <ImageHighlightCard
                src={trainingImg}
                alt="IT training in Malaysia"
                overlayPosition="top-right"
                showOverlayOnMobile={false}
                className="relative aspect-[16/10]"
              />
              <div className="absolute bottom-4 left-4 z-10">
                <HrdCorpBadges size="md" />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </SectionBackdrop>
  );
}

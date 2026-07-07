import { BentoGrid } from "@/components/common/BentoGrid";
import { ServiceBentoCard } from "@/components/cards/ServiceBentoCard";
import { SectionBackdrop } from "@/components/common/SectionBackdrop";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { CTAButton } from "@/components/ui/cta-button";
import { services } from "@/data/services";

const bentoLayout: {
  slug: string;
  span: "lg" | "sm" | "wide";
  variant: "dark" | "light" | "accent";
}[] = [
  { slug: "software-development", span: "lg", variant: "dark" },
  { slug: "application-maintenance", span: "sm", variant: "light" },
  { slug: "testing-qa", span: "sm", variant: "light" },
  { slug: "production-support", span: "sm", variant: "light" },
  { slug: "business-analysis", span: "sm", variant: "light" },
  { slug: "cloud-migration", span: "wide", variant: "accent" },
  { slug: "data-engineering", span: "sm", variant: "light" },
  { slug: "api-integration", span: "sm", variant: "light" },
];

export function ServicesBentoSection({ showCta = true }: { showCta?: boolean }) {
  return (
    <SectionBackdrop variant="light" withArc withGrid className="!bg-white">
      <Container>
        <Reveal>
          <SectionHeader
            size="large"
            eyebrow="What we do"
            title={
              <>
                Our <span className="text-gradient-cyan">IT services</span>
              </>
            }
            description="Comprehensive services across the full software development lifecycle — from concept and architecture through development, testing, deployment and ongoing support."
          />
        </Reveal>
        <BentoGrid className="mt-14">
          {bentoLayout.map((item, i) => {
            const service = services.find((s) => s.slug === item.slug);
            if (!service) return null;
            return (
              <BentoGrid.Item key={service.slug} span={item.span}>
                <Reveal delay={i * 0.04}>
                  <ServiceBentoCard
                    slug={service.slug}
                    title={service.title}
                    description={service.subtitle}
                    Icon={service.icon}
                    variant={item.variant}
                  />
                </Reveal>
              </BentoGrid.Item>
            );
          })}
        </BentoGrid>
        {showCta ? (
          <div className="mt-12 flex justify-center">
            <CTAButton to="/services" variant="secondary">
              View all services
            </CTAButton>
          </div>
        ) : null}
      </Container>
    </SectionBackdrop>
  );
}

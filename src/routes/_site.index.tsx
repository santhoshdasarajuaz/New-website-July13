import { createFileRoute } from "@tanstack/react-router";
import { HomeHero } from "@/components/sections/HomeHero";
import { FloatingCapabilities } from "@/components/sections/FloatingCapabilities";
import { ServicesBentoSection } from "@/components/sections/ServicesBentoSection";
import { BankingInsuranceSplit } from "@/components/sections/BankingInsuranceSplit";
import { AiDataCloudSection } from "@/components/sections/AiDataCloudSection";
import { TrainingHrdcSection } from "@/components/sections/TrainingHrdcSection";
import { TalentStaffingSection } from "@/components/sections/TalentStaffingSection";
import { TechnologyStackMotion } from "@/components/sections/TechnologyStackMotion";
import { CertificationTracks } from "@/components/sections/CertificationTracks";
import { CTASection } from "@/components/sections/CTASection";
import { company } from "@/data/company";

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "Niaga Prestasi Sdn Bhd | IT Services, Training & Talent Solutions Malaysia" },
      {
        name: "description",
        content: company.metaDescription,
      },
      {
        property: "og:title",
        content: "Niaga Prestasi Sdn Bhd | IT Services, Training & Talent Solutions Malaysia",
      },
      {
        property: "og:description",
        content: company.ogDescription,
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HomeHero />
      <FloatingCapabilities />
      <ServicesBentoSection />
      <BankingInsuranceSplit />
      <AiDataCloudSection />
      <TrainingHrdcSection />
      <TalentStaffingSection />
      <TechnologyStackMotion invert />
      <CertificationTracks />
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

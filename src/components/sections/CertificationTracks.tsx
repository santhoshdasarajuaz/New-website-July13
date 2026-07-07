import { AnimatedTagMarquee } from "@/components/common/AnimatedTagMarquee";
import { SectionBackdrop } from "@/components/common/SectionBackdrop";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { capabilityDisclaimer, certificationTracks } from "@/data/capabilities";

export function CertificationTracks() {
  return (
    <SectionBackdrop variant="light" withArc withGrid>
      <Container>
        <Reveal>
          <SectionHeader
            size="large"
            eyebrow="Certification ecosystem"
            title="Platforms, Tools & Certification Tracks"
            description={capabilityDisclaimer}
          />
        </Reveal>
        <div className="mt-12">
          <AnimatedTagMarquee
            items={certificationTracks}
            rowCount={2}
            variant="light"
            speed="slow"
          />
        </div>
      </Container>
    </SectionBackdrop>
  );
}

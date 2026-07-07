import { AnimatedTagMarquee } from "@/components/common/AnimatedTagMarquee";
import { SectionBackdrop } from "@/components/common/SectionBackdrop";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { floatingCapabilityRows } from "@/data/capabilities";

export function FloatingCapabilities() {
  return (
    <SectionBackdrop variant="dark" withArc withGrid className="!py-14 lg:!py-20">
      <Container>
        <Reveal>
          <SectionHeader
            invert
            align="center"
            size="large"
            eyebrow="Capability marquee"
            title={
              <>
                Skills and platforms in{" "}
                <span className="text-gradient-cyan-on-dark">continuous motion</span>
              </>
            }
            description="A rolling view of the tools, domains and disciplines our teams apply across software delivery, data, cloud and workforce programs."
          />
        </Reveal>
      </Container>

      <div className="mt-12 md:mt-14">
        <AnimatedTagMarquee explicitRows={floatingCapabilityRows} variant="dark" speed="normal" />
      </div>
    </SectionBackdrop>
  );
}

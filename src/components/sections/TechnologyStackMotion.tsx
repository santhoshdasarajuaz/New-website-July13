import { AnimatedTagMarquee } from "@/components/common/AnimatedTagMarquee";
import { SectionBackdrop } from "@/components/common/SectionBackdrop";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { technologyStack } from "@/data/capabilities";
import { cn } from "@/lib/utils";

export function TechnologyStackMotion({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <SectionBackdrop
      variant={invert ? "dark" : "surface"}
      withArc={invert}
      withGrid
      className={cn(className)}
    >
      <Container>
        <Reveal>
          <SectionHeader
            invert={invert}
            size="large"
            eyebrow="Technology stack"
            title={
              <>
                Platforms and tools we{" "}
                <span className={invert ? "text-gradient-cyan-on-dark" : "text-gradient-cyan"}>
                  deliver on
                </span>
              </>
            }
            description="Modern stacks across cloud, data, AI and enterprise development — aligned to your architecture and compliance needs."
          />
        </Reveal>
        <div className="mt-12">
          <AnimatedTagMarquee
            items={technologyStack}
            rowCount={3}
            variant={invert ? "dark" : "light"}
            speed="normal"
          />
        </div>
      </Container>
    </SectionBackdrop>
  );
}

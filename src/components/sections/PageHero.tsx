import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type Crumb = { label: string; to?: string; params?: Record<string, string> };

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  actions,
  size = "md",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  crumbs?: Crumb[];
  actions?: ReactNode;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-navy-deep text-white",
        size === "lg"
          ? "pt-28 pb-20 lg:pt-36 lg:pb-28"
          : size === "md"
            ? "pt-20 pb-16 lg:pt-28 lg:pb-20"
            : "pt-16 pb-12 lg:pt-20 lg:pb-14",
      )}
    >
      <div
        className="absolute inset-0 bg-linear-to-b from-navy-deep via-navy to-navy-deep"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 top-0 h-48 arc-glow" aria-hidden="true" />
      <div className="absolute inset-0 mesh-gradient opacity-50" aria-hidden="true" />
      <div className="absolute inset-0 grid-pattern opacity-[0.1]" aria-hidden="true" />

      <Container className="relative">
        {crumbs?.length ? (
          <nav
            className="mb-6 text-xs text-white/55 flex flex-wrap items-center gap-1.5"
            aria-label="Breadcrumb"
          >
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {c.to ? (
                  <a href={c.to} className="hover:text-cyan-accent transition-colors">
                    {c.label}
                  </a>
                ) : (
                  <span className="text-white/80">{c.label}</span>
                )}
                {i < crumbs.length - 1 ? <span className="text-white/25">/</span> : null}
              </span>
            ))}
          </nav>
        ) : null}
        <div className="max-w-4xl">
          {eyebrow ? (
            <Reveal>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-accent">
                <span
                  className="h-px w-5 bg-linear-to-r from-cyan-accent to-transparent"
                  aria-hidden="true"
                />
                {eyebrow}
              </span>
            </Reveal>
          ) : null}
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.06] tracking-[-0.03em]">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={0.06}>
            <div
              className="mt-5 h-[3px] w-14 rounded-full bg-linear-to-r from-royal via-cyan-accent to-royal/20"
              aria-hidden="true"
            />
          </Reveal>
          {description ? (
            <Reveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">
                {description}
              </p>
            </Reveal>
          ) : null}
          {actions ? (
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">{actions}</div>
            </Reveal>
          ) : null}
        </div>
      </Container>
      <div className="section-divider opacity-20 mt-2" aria-hidden="true" />
    </section>
  );
}

import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import heroBg from "@/assets/hero-bg.jpg";
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
          ? "pt-32 pb-24 lg:pt-40 lg:pb-32"
          : size === "md"
            ? "pt-24 pb-20 lg:pt-32 lg:pb-24"
            : "pt-20 pb-14 lg:pt-24 lg:pb-16",
      )}
    >
      <div
        className="absolute inset-0 opacity-25 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-deep/95 to-royal/40"
        aria-hidden="true"
      />
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
      <Container className="relative">
        {crumbs?.length ? (
          <nav
            className="mb-6 text-xs text-white/60 flex flex-wrap items-center gap-1.5"
            aria-label="Breadcrumb"
          >
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {c.to ? (
                  <a href={c.to} className="hover:text-cyan-accent">
                    {c.label}
                  </a>
                ) : (
                  <span className="text-white/80">{c.label}</span>
                )}
                {i < crumbs.length - 1 ? <span className="text-white/30">/</span> : null}
              </span>
            ))}
          </nav>
        ) : null}
        <div className="max-w-3xl">
          {eyebrow ? (
            <Reveal>
              <span className="inline-flex items-center gap-2 text-cyan-accent text-xs font-semibold uppercase tracking-[0.2em]">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-accent" />
                {eyebrow}
              </span>
            </Reveal>
          ) : null}
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              {title}
            </h1>
          </Reveal>
          {description ? (
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg text-white/75 leading-relaxed max-w-2xl">{description}</p>
            </Reveal>
          ) : null}
          {actions ? (
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">{actions}</div>
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

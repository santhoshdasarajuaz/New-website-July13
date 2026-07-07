import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { SparklineBars } from "@/components/common/DataVizPrimitives";
import { cn } from "@/lib/utils";

type Variant = "dark" | "light" | "accent";

const variantCls: Record<Variant, string> = {
  dark: [
    "border-white/10 bg-linear-to-br from-navy via-navy-deep to-navy-deep text-white",
    "hover:border-cyan-accent/35 hover:shadow-[0_32px_72px_-36px_rgba(23,105,255,0.55)]",
  ].join(" "),
  light: [
    "border-border bg-white text-ink",
    "hover:border-royal/45 hover:shadow-[0_28px_64px_-40px_rgba(23,105,255,0.35)]",
  ].join(" "),
  accent: [
    "border-royal/25 bg-linear-to-br from-royal/[0.08] via-white to-cyan-accent/[0.06] text-ink",
    "hover:border-royal/50 hover:shadow-[0_32px_72px_-40px_rgba(23,105,255,0.4)]",
  ].join(" "),
};

export function ServiceBentoCard({
  slug,
  title,
  description,
  Icon,
  variant = "light",
  className,
}: {
  slug: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  variant?: Variant;
  className?: string;
}) {
  const isDark = variant === "dark";
  const isAccent = variant === "accent";

  return (
    <Link
      to="/services/$slug"
      params={{ slug }}
      className={cn(
        "group relative flex h-full min-h-[190px] flex-col rounded-2xl border p-5 md:p-6 overflow-hidden",
        "transition-[transform,box-shadow,border-color] duration-300 ease-out",
        "hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal/30 focus-visible:ring-offset-2",
        variantCls[variant],
        className,
      )}
    >
      {/* Decorative mesh */}
      <div
        className="pointer-events-none absolute inset-0 mesh-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-royal/15 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="relative flex items-start justify-between gap-3">
        <div
          className={cn(
            "inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300",
            isDark
              ? "bg-white/10 text-cyan-accent ring-1 ring-white/10 group-hover:bg-cyan-accent group-hover:text-navy-deep group-hover:ring-cyan-accent/30"
              : "bg-royal/10 text-royal ring-1 ring-royal/10 group-hover:bg-royal group-hover:text-white",
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
        {(isDark || isAccent) && (
          <SparklineBars
            className="w-16 opacity-40 group-hover:opacity-80 transition-opacity h-8"
            values={[25, 45, 35, 60, 40, 70]}
            animate={false}
          />
        )}
      </div>

      <h3
        className={cn(
          "relative mt-5 font-display text-lg md:text-xl font-bold leading-tight transition-colors duration-300",
          isDark ? "text-white group-hover:text-cyan-accent" : "text-ink group-hover:text-royal",
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "relative mt-2 flex-1 text-sm leading-relaxed line-clamp-3",
          isDark ? "text-white/60" : "text-ink-soft",
        )}
      >
        {description}
      </p>

      <div
        className={cn(
          "relative mt-5 inline-flex items-center gap-2 text-sm font-semibold",
          "opacity-60 translate-y-0 group-hover:opacity-100",
          "transition-all duration-300 ease-out",
          isDark ? "text-cyan-accent" : "text-royal",
        )}
      >
        View Details
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

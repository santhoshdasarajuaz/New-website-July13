import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function LinkCard({
  to,
  params,
  title,
  description,
  Icon,
  invert = false,
}: {
  to: string;
  params?: Record<string, string>;
  title: string;
  description: string;
  Icon?: LucideIcon;
  invert?: boolean;
}) {
  return (
    <Link
      to={to}
      params={params as never}
      className={cn(
        "group block h-full rounded-2xl border p-6 relative overflow-hidden",
        "transition-[transform,box-shadow,border-color] duration-300 ease-out",
        "hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal/30 focus-visible:ring-offset-2",
        invert
          ? "border-white/10 bg-white/3 hover:border-cyan-accent/50 hover:shadow-[0_28px_60px_-40px_rgba(23,105,255,0.45)]"
          : "border-border bg-white hover:border-royal/50 hover:shadow-[0_28px_60px_-40px_rgba(23,105,255,0.35)]",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        {Icon ? (
          <div
            className={cn(
              "h-11 w-11 rounded-lg inline-flex items-center justify-center transition-colors duration-[280ms]",
              invert
                ? "bg-royal/20 text-cyan-accent group-hover:bg-cyan-accent group-hover:text-navy-deep"
                : "bg-royal/10 text-royal group-hover:bg-royal group-hover:text-white",
            )}
          >
            <Icon className="h-5 w-5" />
          </div>
        ) : null}
        <ArrowUpRight
          className={cn(
            "h-5 w-5 transition-transform duration-[280ms] group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
            invert
              ? "text-white/40 group-hover:text-cyan-accent"
              : "text-ink-soft group-hover:text-royal",
          )}
        />
      </div>
      <h3
        className={cn(
          "mt-5 font-display text-lg font-bold leading-tight transition-colors duration-[280ms]",
          invert ? "text-white group-hover:text-cyan-accent" : "text-ink group-hover:text-royal",
        )}
      >
        {title}
      </h3>
      <p className={cn("mt-2 text-sm leading-relaxed", invert ? "text-white/60" : "text-ink-soft")}>
        {description}
      </p>

      <div
        className={cn(
          "mt-5 inline-flex items-center gap-2 text-sm font-semibold",
          "opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0",
          "transition-all duration-[280ms] ease-out",
          invert ? "text-cyan-accent" : "text-royal",
        )}
      >
        View details
        <ArrowRight className="h-4 w-4 transition-transform duration-[280ms] group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

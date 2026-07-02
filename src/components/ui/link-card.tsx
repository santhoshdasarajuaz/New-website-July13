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
        "group card-hover block h-full rounded-xl border p-6 relative overflow-hidden focus-visible:outline-none",
        invert
          ? "border-white/10 bg-white/3 hover:border-cyan-accent/50"
          : "border-border bg-white hover:border-royal/40",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        {Icon ? (
          <div
            className={cn(
              "h-11 w-11 rounded-lg inline-flex items-center justify-center transition-colors duration-200",
              invert
                ? "bg-royal/20 text-cyan-accent group-hover:bg-cyan-accent/15"
                : "bg-royal/10 text-royal group-hover:bg-royal group-hover:text-white",
            )}
          >
            <Icon className="h-5 w-5" />
          </div>
        ) : null}
        <ArrowUpRight
          className={cn(
            "h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1",
            invert
              ? "text-white/40 group-hover:text-cyan-accent"
              : "text-ink-soft group-hover:text-royal",
          )}
        />
      </div>
      <h3
        className={cn(
          "mt-5 font-display text-lg font-bold leading-tight transition-colors duration-200",
          invert ? "text-white" : "text-ink group-hover:text-royal",
        )}
      >
        {title}
      </h3>
      <p className={cn("mt-2 text-sm leading-relaxed", invert ? "text-white/60" : "text-ink-soft")}>
        {description}
      </p>

      <div
        className={cn(
          "mt-5 inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200",
          invert
            ? "text-white/60 group-hover:text-cyan-accent"
            : "text-ink-soft group-hover:text-royal",
        )}
      >
        View details{" "}
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

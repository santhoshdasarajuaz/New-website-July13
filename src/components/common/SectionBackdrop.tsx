import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Variant = "dark" | "light" | "surface";

const variantCls: Record<Variant, string> = {
  dark: "bg-navy-deep text-white",
  light: "bg-white text-ink",
  surface: "bg-surface text-ink",
};

export function SectionBackdrop({
  variant = "dark",
  withArc = false,
  withGrid = true,
  className,
  children,
}: {
  variant?: Variant;
  withArc?: boolean;
  withGrid?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const isDark = variant === "dark";

  return (
    <section className={cn("section-y relative overflow-hidden", variantCls[variant], className)}>
      {withArc ? (
        <div
          className={cn(
            "pointer-events-none absolute inset-x-0 top-0 h-48 arc-glow",
            isDark ? "opacity-90" : "opacity-40 arc-glow-light",
          )}
          aria-hidden="true"
        />
      ) : null}
      {withGrid ? (
        <div
          className={cn(
            "pointer-events-none absolute inset-0",
            isDark ? "grid-pattern opacity-[0.14]" : "grid-pattern-light opacity-60",
          )}
          aria-hidden="true"
        />
      ) : null}
      {isDark ? (
        <div
          className="pointer-events-none absolute inset-0 bg-radial-glow opacity-50"
          aria-hidden="true"
        />
      ) : null}
      <div className="relative">{children}</div>
    </section>
  );
}

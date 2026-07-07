import { useMemo } from "react";
import type { CSSProperties } from "react";
import { useReducedMotion } from "motion/react";
import { CapabilityTag } from "@/components/common/CapabilityTag";
import { cn } from "@/lib/utils";

function splitRowItems(items: readonly string[], minPerRow = 4): string[] {
  if (items.length >= minPerRow) return [...items];
  return [...items, ...items];
}

export function AnimatedTagRow({
  items,
  direction = "left",
  durationSec = 48,
  variant = "light",
  className,
}: {
  items: readonly string[];
  direction?: "left" | "right";
  durationSec?: number;
  variant?: "light" | "dark";
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  const trackItems = useMemo(() => {
    const base = splitRowItems(items);
    return reduceMotion ? base : [...base, ...base];
  }, [items, reduceMotion]);

  if (!items.length) return null;

  if (reduceMotion) {
    return (
      <div className={cn("flex flex-wrap justify-center gap-2 py-1", className)}>
        {trackItems.map((label) => (
          <CapabilityTag key={label} label={label} variant={variant} />
        ))}
        <ul className="sr-only">
          {items.map((label) => (
            <li key={label}>{label}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "group/tag relative overflow-hidden",
        variant === "dark" && "marquee-fade-dark",
        variant === "light" && "marquee-fade-light",
        className,
      )}
    >
      <div
        className={cn(
          "marquee-track flex w-max gap-3 py-1",
          direction === "left" ? "marquee-left" : "marquee-right",
        )}
        style={{ "--marquee-duration": `${durationSec}s` } as CSSProperties}
        aria-hidden="true"
      >
        {trackItems.map((label, i) => (
          <CapabilityTag key={`${label}-${i}`} label={label} variant={variant} />
        ))}
      </div>

      <ul className="sr-only">
        {items.map((label) => (
          <li key={label}>{label}</li>
        ))}
      </ul>
    </div>
  );
}

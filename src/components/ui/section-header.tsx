import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  invert = false,
  size = "default",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  invert?: boolean;
  size?: "default" | "large";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 md:gap-5",
        align === "center"
          ? "items-center text-center mx-auto max-w-4xl"
          : "items-start text-left max-w-3xl",
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em]",
            invert ? "text-cyan-accent" : "text-royal",
          )}
        >
          <span
            className={cn(
              "h-px w-6",
              invert
                ? "bg-linear-to-r from-cyan-accent/80 to-transparent"
                : "bg-linear-to-r from-royal to-royal/20",
            )}
            aria-hidden="true"
          />
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "font-bold leading-[1.08] tracking-[-0.03em]",
          size === "large"
            ? "text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem]"
            : "text-2xl sm:text-3xl md:text-4xl lg:text-[2.875rem]",
          invert ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "h-[3px] rounded-full bg-linear-to-r from-royal via-cyan-accent to-royal/30",
          align === "center" ? "w-14" : "w-12",
        )}
        aria-hidden="true"
      />
      {description ? (
        <p
          className={cn(
            "text-base md:text-lg leading-relaxed max-w-2xl",
            invert ? "text-white/65" : "text-ink-soft",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

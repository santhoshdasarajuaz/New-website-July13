import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  invert = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  invert?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center"
          ? "items-center text-center mx-auto max-w-3xl"
          : "items-start text-left max-w-3xl",
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.18em]",
            invert ? "text-cyan-accent" : "text-royal",
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1]",
          invert ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "h-1 w-14 rounded-full",
          invert ? "bg-cyan-accent" : "bg-royal",
          align === "center" ? "" : "",
        )}
      />
      {description ? (
        <p
          className={cn(
            "text-base md:text-lg leading-relaxed",
            invert ? "text-white/70" : "text-ink-soft",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

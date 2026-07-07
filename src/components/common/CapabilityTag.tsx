import { cn } from "@/lib/utils";

export function CapabilityTag({
  label,
  variant = "light",
  className,
}: {
  label: string;
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-full border px-5 py-2.5 text-sm font-medium whitespace-nowrap",
        "transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out",
        "group-hover/tag:-translate-y-0.5",
        variant === "dark"
          ? [
              "border-white/10 bg-white/[0.04] text-white/90 backdrop-blur-md",
              "group-hover/tag:border-cyan-accent/50 group-hover/tag:bg-white/[0.08]",
              "group-hover/tag:shadow-[0_20px_48px_-28px_rgba(23,105,255,0.5)]",
            ]
          : [
              "border-border/80 bg-white text-ink shadow-[0_1px_0_rgba(6,17,31,0.04)]",
              "group-hover/tag:border-royal/40 group-hover/tag:text-royal",
              "group-hover/tag:shadow-[0_16px_40px_-28px_rgba(23,105,255,0.35)]",
            ],
        className,
      )}
    >
      {label}
    </span>
  );
}

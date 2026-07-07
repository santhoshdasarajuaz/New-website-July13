import { cn } from "@/lib/utils";
import { siteAssets } from "@/constants/assets";

export function Logo({
  variant = "dark",
  className,
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const isLight = variant === "light";

  return (
    <div className={cn("inline-flex min-w-0 items-center gap-3.5", className)}>
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white p-1 shadow-sm ring-1 ring-black/5">
        <img
          src={siteAssets.logoMark}
          alt=""
          aria-hidden="true"
          width={56}
          height={56}
          decoding="async"
          className="h-full w-full object-contain"
        />
      </div>

      <div
        className={cn("h-11 w-px shrink-0", isLight ? "bg-white/25" : "bg-border")}
        aria-hidden="true"
      />

      <div className="flex min-w-0 flex-col justify-center leading-none">
        <span
          className={cn(
            "font-display text-[15px] font-bold uppercase tracking-[0.04em] sm:text-base",
            isLight ? "text-white" : "text-[#c41e2a]",
          )}
        >
          NIAGA PRESTASI
        </span>
        <span
          className={cn(
            "mt-1.5 text-[10px] font-semibold uppercase tracking-[0.22em]",
            isLight ? "text-white/55" : "text-ink-soft",
          )}
        >
          SDN BHD
        </span>
      </div>
    </div>
  );
}

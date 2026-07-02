export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const textColor = variant === "dark" ? "text-ink" : "text-white";
  const subColor = variant === "dark" ? "text-ink-soft" : "text-white/60";
  return (
    <div className="flex items-center gap-3">
      <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
        <defs>
          <linearGradient id="np-mark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.65 0.22 25)" />
            <stop offset="100%" stopColor="oklch(0.5 0.22 25)" />
          </linearGradient>
        </defs>
        <path d="M20 4 L36 34 H4 Z" fill="url(#np-mark)" />
        <path d="M20 14 L28 30 H12 Z" fill="oklch(0.22 0.06 265)" />
      </svg>
      <div className="flex flex-col leading-tight">
        <span className={`font-display text-[15px] font-bold tracking-tight ${textColor}`}>
          NIAGA PRESTASI
        </span>
        <span className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${subColor}`}>
          Sdn Bhd
        </span>
      </div>
    </div>
  );
}

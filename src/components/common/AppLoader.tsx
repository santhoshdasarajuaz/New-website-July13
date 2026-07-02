import { motion, useReducedMotion } from "motion/react";

export function AppLoader({
  variant = "full",
  label = "Loading digital experience...",
}: {
  variant?: "full" | "bar";
  label?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (variant === "bar") {
    return (
      <div className="fixed left-0 right-0 top-0 z-70">
        <div className="h-[3px] bg-royal/20">
          <motion.div
            className="h-full bg-royal"
            initial={{ width: "18%" }}
            animate={reduceMotion ? { width: "55%" } : { width: ["18%", "60%", "35%", "70%"] }}
            transition={
              reduceMotion
                ? { duration: 0.4 }
                : { duration: 1.1, repeat: Infinity, ease: "easeInOut" }
            }
            aria-hidden="true"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-80 bg-navy-deep text-white flex items-center justify-center"
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <div className="text-center px-6">
        <div className="relative inline-flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-10 py-10 shadow-2xl shadow-navy/40">
          <div className="text-6xl md:text-7xl font-display font-extrabold tracking-tight">
            <span className="text-white">N</span>
            <span className="text-royal">P</span>
          </div>
        </div>
        <div className="mt-5 font-display text-lg font-bold tracking-tight">Niaga Prestasi</div>
        <div className="mt-1 text-sm text-white/70">{label}</div>

        <div className="mt-6 h-[3px] w-44 mx-auto rounded-full bg-white/10 overflow-hidden">
          <motion.div
            className="h-full bg-cyan-accent"
            initial={{ x: "-60%" }}
            animate={reduceMotion ? { x: "0%" } : { x: ["-60%", "100%"] }}
            transition={
              reduceMotion
                ? { duration: 0.4 }
                : { duration: 1.1, repeat: Infinity, ease: "easeInOut" }
            }
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}

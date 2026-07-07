import { motion, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

export function AppLoader({
  variant = "full",
  onDone,
}: {
  variant?: "full" | "bar";
  onDone?: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const doneCalled = useRef(false);

  const durationMs = useMemo(() => (reduceMotion ? 180 : 900), [reduceMotion]);

  useEffect(() => {
    if (variant !== "full") return;

    setProgress(0);
    doneCalled.current = false;

    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = t < 1 ? 1 - Math.pow(1 - t, 3) : 1;
      const next = Math.min(100, Math.round(eased * 100));
      setProgress(next);
      if (t < 1) {
        raf = window.requestAnimationFrame(tick);
        return;
      }
      if (!doneCalled.current) {
        doneCalled.current = true;
        window.setTimeout(() => onDone?.(), 160);
      }
    };
    raf = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(raf);
  }, [durationMs, onDone, variant]);

  if (variant === "bar") {
    return (
      <div className="fixed left-0 right-0 top-0 z-70">
        <div className="h-[3px] bg-royal/20">
          <motion.div
            className="h-full bg-linear-to-r from-royal to-cyan-accent"
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
      aria-label="Loading"
    >
      <div className="text-center px-6">
        <div className="relative inline-flex flex-col items-center justify-center rounded-3xl bg-white/5 px-12 py-10 shadow-2xl shadow-navy/40 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl border border-white/12"
            aria-hidden="true"
          />
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-3xl p-[2px]"
            aria-hidden="true"
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={
              reduceMotion ? undefined : { duration: 1.2, repeat: Infinity, ease: "linear" }
            }
            style={{
              background:
                progress >= 100
                  ? "conic-gradient(from 90deg, #1769ff, #19c7f3)"
                  : `conic-gradient(from 90deg, #1769ff ${progress}%, rgba(255,255,255,.06) 0)`,
              WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-70 bg-radial-glow"
            aria-hidden="true"
          />

          <div className="relative text-6xl md:text-7xl font-display font-extrabold tracking-tight">
            <span className="text-white">N</span>
            <span className="text-cyan-accent">P</span>
          </div>
        </div>

        <div className="mt-5 text-sm font-semibold text-white/80 tabular-nums">{progress}%</div>
      </div>
    </div>
  );
}

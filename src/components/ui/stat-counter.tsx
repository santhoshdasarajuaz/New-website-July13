import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

/** Simple in-view number/text counter. Handles "10+", "50+", "HRDC", etc. */
export function StatCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState<string>(value);

  useEffect(() => {
    if (!inView || reduce) {
      setDisplay(value);
      return;
    }
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const target = parseInt(match[1], 10);
    const suffix = match[2];
    let current = 0;
    const duration = 1200;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      current = Math.floor(t * target);
      setDisplay(`${current}${suffix}`);
      if (t < 1) raf = requestAnimationFrame(tick);
      else setDisplay(`${target}${suffix}`);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="font-display text-3xl md:text-4xl font-bold text-gradient-cyan">
        {display}
      </div>
      <div className="mt-2 text-xs md:text-sm uppercase tracking-wider text-white/60">{label}</div>
    </motion.div>
  );
}

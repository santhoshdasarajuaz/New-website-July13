import { motion, useReducedMotion } from "motion/react";
import { useId } from "react";
import { cn } from "@/lib/utils";

export function SparklineBars({
  values = [35, 58, 42, 72, 48, 88, 62],
  className,
  animate = true,
}: {
  values?: number[];
  className?: string;
  animate?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={cn("flex items-end gap-1 h-10", className)} aria-hidden="true">
      {values.map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-[2px] bg-linear-to-t from-royal to-cyan-accent/80"
          initial={{ height: reduceMotion || !animate ? `${h}%` : "20%" }}
          animate={{ height: `${h}%` }}
          transition={
            reduceMotion || !animate
              ? { duration: 0 }
              : { duration: 0.8, delay: i * 0.06, ease: "easeOut" }
          }
        />
      ))}
    </div>
  );
}

export function AreaChartSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 60"
      className={cn("w-full h-12", className)}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1769FF" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#1769FF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,45 L25,38 L50,42 L75,28 L100,32 L125,18 L150,24 L175,12 L200,8 L200,60 L0,60 Z"
        fill="url(#areaFill)"
      />
      <path
        d="M0,45 L25,38 L50,42 L75,28 L100,32 L125,18 L150,24 L175,12 L200,8"
        fill="none"
        stroke="#19C7F3"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function RingGauge({
  value = 72,
  showLabel = false,
  className,
}: {
  value?: number;
  showLabel?: boolean;
  className?: string;
}) {
  const id = useId();
  const circumference = 2 * Math.PI * 18;
  const offset = circumference - (value / 100) * circumference;
  const gradId = `ringGrad-${id}`;

  return (
    <div className={cn("relative h-14 w-14", className)} aria-hidden="true">
      <svg viewBox="0 0 44 44" className="h-full w-full -rotate-90">
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1769FF" />
            <stop offset="100%" stopColor="#19C7F3" />
          </linearGradient>
        </defs>
        <circle
          cx="22"
          cy="22"
          r="18"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="3"
        />
        <circle
          cx="22"
          cy="22"
          r="18"
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      {showLabel ? (
        <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white">
          {value}%
        </span>
      ) : null}
    </div>
  );
}

export function DotGrid({ className }: { className?: string }) {
  return <div className={cn("rounded-lg dot-pattern opacity-60", className)} aria-hidden="true" />;
}

export function MeshGlow({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 mesh-gradient opacity-80", className)}
      aria-hidden="true"
    />
  );
}

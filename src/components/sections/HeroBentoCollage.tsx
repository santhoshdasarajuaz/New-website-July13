import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { Brain, Code2, GraduationCap, Users } from "lucide-react";
import { company } from "@/data/company";
import {
  AreaChartSvg,
  DotGrid,
  RingGauge,
  SparklineBars,
} from "@/components/common/DataVizPrimitives";

function PanelShell({
  children,
  className,
  glow = false,
}: {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md",
        "transition-[transform,box-shadow,border-color] duration-300",
        glow
          ? "hover:border-cyan-accent/30 hover:shadow-[0_24px_64px_-32px_rgba(23,105,255,0.55)]"
          : "hover:border-white/20",
        className,
      ].join(" ")}
    >
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-royal/20 blur-2xl"
        aria-hidden="true"
      />
      {children}
    </div>
  );
}

export function HeroBentoCollage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative">
      <motion.div
        animate={reduceMotion ? undefined : { opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-6 rounded-3xl bg-linear-to-br from-royal/25 via-transparent to-cyan-accent/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-3 md:p-4 glass-panel bento-glow">
        <div className="grid grid-cols-12 gap-2.5 md:gap-3">
          {/* Large delivery panel */}
          <div className="col-span-12 sm:col-span-7">
            <PanelShell glow className="h-full min-h-[168px] p-4 md:p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <Code2 className="h-4 w-4 text-cyan-accent" aria-hidden="true" />
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-accent">
                    Technology Delivery
                  </p>
                  <p className="mt-1.5 text-xs text-white/65 leading-relaxed max-w-[200px]">
                    Build, test, deploy and operate reliable business systems.
                  </p>
                </div>
                <RingGauge />
              </div>
              <AreaChartSvg className="mt-4" />
            </PanelShell>
          </div>

          {/* AI & Data */}
          <div className="col-span-12 sm:col-span-5">
            <PanelShell
              glow
              className="h-full min-h-[168px] p-4 md:p-5 bg-linear-to-br from-royal/15 to-cyan-accent/5"
            >
              <Brain className="h-4 w-4 text-cyan-accent" aria-hidden="true" />
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-accent">
                AI & Data
              </p>
              <p className="mt-1 text-xs text-white/60 line-clamp-2">
                Automation, insights and smarter decisions.
              </p>
              <DotGrid className="mt-3 h-10" />
              <SparklineBars className="mt-2" values={[30, 55, 40, 70, 50, 85]} />
            </PanelShell>
          </div>

          {/* Training */}
          <div className="col-span-6 sm:col-span-4">
            <PanelShell className="p-3.5 md:p-4 h-full">
              <GraduationCap className="h-3.5 w-3.5 text-cyan-accent" aria-hidden="true" />
              <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-accent">
                Training
              </p>
              <p className="mt-1 text-[11px] text-white/55 leading-snug">
                HRDC-aligned IT programs
              </p>
            </PanelShell>
          </div>

          {/* Talent */}
          <div className="col-span-6 sm:col-span-4">
            <PanelShell className="p-3.5 md:p-4 h-full">
              <Users className="h-3.5 w-3.5 text-cyan-accent" aria-hidden="true" />
              <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-accent">
                Talent
              </p>
              <p className="mt-1 text-[11px] text-white/55 leading-snug">
                Staffing & workforce support
              </p>
            </PanelShell>
          </div>

          {/* Stats */}
          <div className="col-span-12 sm:col-span-4 flex flex-col gap-2">
            {company.stats.slice(0, 2).map((s) => (
              <div
                key={s.label}
                className="flex-1 rounded-xl border border-white/10 bg-navy/50 px-3.5 py-2.5 backdrop-blur-sm"
              >
                <div className="font-display text-xl font-bold text-white tracking-tight">
                  {s.value}
                </div>
                <div className="text-[10px] text-white/50 leading-snug mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const spanMap = {
  sm: "col-span-12 sm:col-span-6 lg:col-span-3",
  md: "col-span-12 sm:col-span-6 lg:col-span-4",
  lg: "col-span-12 lg:col-span-6",
  wide: "col-span-12 lg:col-span-8",
  full: "col-span-12",
} as const;

export function BentoGrid({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("grid grid-cols-12 gap-4 md:gap-5", className)}>{children}</div>;
}

BentoGrid.Item = function BentoGridItem({
  span = "md",
  className,
  children,
}: {
  span?: keyof typeof spanMap;
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn(spanMap[span], className)}>{children}</div>;
};

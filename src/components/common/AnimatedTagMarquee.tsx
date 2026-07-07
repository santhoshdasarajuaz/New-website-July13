import { AnimatedTagRow } from "@/components/common/AnimatedTagRow";
import { cn } from "@/lib/utils";

const speedPresets = {
  normal: [44, 52, 48, 56],
  slow: [72, 84, 78, 90],
} as const;

type AnimatedTagMarqueeProps = {
  variant?: "light" | "dark";
  speed?: keyof typeof speedPresets;
  className?: string;
} & (
  | { items: readonly string[]; rowCount?: 2 | 3 | 4; explicitRows?: never }
  | { explicitRows: readonly (readonly string[])[]; items?: never; rowCount?: never }
);

export function AnimatedTagMarquee({
  items,
  explicitRows,
  variant = "light",
  rowCount = 3,
  speed = "normal",
  className,
}: AnimatedTagMarqueeProps) {
  const durations = speedPresets[speed];

  const rowSets: readonly (readonly string[])[] = explicitRows
    ? explicitRows
    : items
      ? (() => {
          const result: string[][] = Array.from({ length: rowCount }, () => []);
          items.forEach((item, index) => {
            result[index % rowCount]?.push(item);
          });
          return result.filter((row) => row.length > 0);
        })()
      : [];

  if (!rowSets.length) return null;

  return (
    <div className={cn("space-y-3 md:space-y-4", className)} aria-label="Capability tags">
      {rowSets.map((rowItems, index) => (
        <AnimatedTagRow
          key={index}
          items={rowItems}
          direction={index % 2 === 0 ? "right" : "left"}
          durationSec={durations[index % durations.length] ?? durations[0]}
          variant={variant}
        />
      ))}
    </div>
  );
}

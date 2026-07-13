import { cn } from "@/lib/utils";
import { siteAssets } from "@/constants/assets";

const badges = [
  {
    src: siteAssets.hrdCorpRegisteredTrainingProvider,
    alt: "HRD Corp Registered Training Provider",
  },
  {
    src: siteAssets.hrdCorpClaimable,
    alt: "HRD Corp Claimable",
  },
] as const;

const sizeClasses = {
  sm: "h-22 w-22",
  md: "h-20 w-20",
  lg: "h-24 w-24",
};

export function HrdCorpBadges({
  size = "md",
  className,
  withBackground = true,
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
  withBackground?: boolean;
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-5", className)}>
      {badges.map((badge) => (
        <div
          key={badge.src}
          className={cn(
            "shrink-0 rounded-full overflow-hidden",
            withBackground && "bg-white p-1.5 shadow-sm ring-1 ring-white/20",
            sizeClasses[size],
          )}
        >
          <img
            src={badge.src}
            alt={badge.alt}
            width={96}
            height={96}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}

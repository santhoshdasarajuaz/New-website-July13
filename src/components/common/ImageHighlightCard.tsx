import { useReducedMotion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type OverlayPosition = "bottom-left" | "bottom-right" | "top-left" | "top-right";

const overlayPosCls: Record<OverlayPosition, string> = {
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
};

export function ImageHighlightCard({
  src,
  alt,
  badge,
  stat,
  title,
  description,
  overlayPosition = "bottom-left",
  hoverZoom = true,
  showOverlayOnMobile = true,
  className,
  imageClassName,
}: {
  src: string;
  alt: string;
  badge?: ReactNode;
  stat?: string;
  title?: string;
  description?: string;
  overlayPosition?: OverlayPosition;
  hoverZoom?: boolean;
  showOverlayOnMobile?: boolean;
  className?: string;
  imageClassName?: string;
}) {
  const reduceMotion = useReducedMotion();
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-surface",
        "transition-[transform,box-shadow,border-color] duration-[280ms] ease-out",
        "hover:-translate-y-1 hover:border-royal/50",
        "hover:shadow-[0_36px_80px_-48px_rgba(23,105,255,0.5)]",
        className,
      )}
    >
      {imageError ? (
        <div
          className={cn(
            "flex h-full min-h-[12rem] w-full items-center justify-center bg-linear-to-br from-navy-deep to-navy text-white/50 text-sm",
            imageClassName,
          )}
          role="img"
          aria-label={alt}
        >
          Image unavailable
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setImageError(true)}
          className={cn(
            "h-full w-full object-cover",
            hoverZoom && !reduceMotion
              ? "transition-transform duration-[280ms] ease-out group-hover:scale-[1.06]"
              : undefined,
            imageClassName,
          )}
        />
      )}

      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 bg-linear-to-t from-navy-deep/90 via-navy-deep/20 to-transparent",
          showOverlayOnMobile
            ? "opacity-75 md:opacity-0 md:group-hover:opacity-95"
            : "opacity-0 group-hover:opacity-95",
          reduceMotion ? "transition-none" : "transition-opacity duration-[280ms] ease-out",
        )}
      />

      {(badge || stat || title || description) && (
        <div
          className={cn(
            "absolute z-10 max-w-[18rem] rounded-xl border border-white/10 bg-navy-deep/85 backdrop-blur px-4 py-3 shadow-xl",
            overlayPosCls[overlayPosition],
            showOverlayOnMobile
              ? "opacity-100 translate-y-0 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0"
              : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0",
            reduceMotion ? "transition-none" : "transition-all duration-[280ms] ease-out",
          )}
        >
          {badge ? (
            <div className="text-xs font-semibold text-cyan-accent uppercase tracking-wider">
              {badge}
            </div>
          ) : null}
          {stat ? (
            <div className="mt-0.5 text-3xl font-display font-extrabold text-white">{stat}</div>
          ) : null}
          {title ? (
            <div className="mt-1 font-display font-bold text-white leading-tight">{title}</div>
          ) : null}
          {description ? (
            <div className="mt-1 text-xs text-white/70 leading-relaxed">{description}</div>
          ) : null}
        </div>
      )}
    </div>
  );
}

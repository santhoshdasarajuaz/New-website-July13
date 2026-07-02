import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode, ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline-white";
type Size = "md" | "lg";

const baseCls =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-royal group";

const sizeCls: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-[15px]",
};

const variantCls: Record<Variant, string> = {
  primary: "bg-red-cta text-white hover:bg-red-cta-dark shadow-lg shadow-red-cta/20",
  secondary: "bg-royal text-white hover:bg-royal-dark shadow-lg shadow-royal/20",
  ghost: "bg-white/5 text-white border border-white/20 hover:bg-white/10 backdrop-blur",
  "outline-white": "border-2 border-white/40 text-white hover:bg-white hover:text-navy",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  children: ReactNode;
  className?: string;
};

export function CTAButton({
  to,
  search,
  variant = "primary",
  size = "md",
  withArrow = true,
  children,
  className,
  ...rest
}: CommonProps & { to: string; search?: Record<string, string> } & Omit<ComponentProps<typeof Link>, "to" | "children" | "className" | "search">) {
  return (
    <Link
      to={to as string}
      search={search as never}
      className={cn(baseCls, sizeCls[size], variantCls[variant], className)}
      {...(rest as object)}
    >
      {children}
      {withArrow ? (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      ) : null}
    </Link>
  );
}

export function CTALinkExternal({
  href,
  variant = "primary",
  size = "md",
  withArrow = true,
  children,
  className,
}: CommonProps & { href: string }) {
  return (
    <a href={href} className={cn(baseCls, sizeCls[size], variantCls[variant], className)}>
      {children}
      {withArrow ? (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      ) : null}
    </a>
  );
}

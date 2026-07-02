import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Container({
  className,
  children,
  as: Tag = "div",
}: {
  className?: string;
  children: ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const Component = Tag as React.ElementType;
  return <Component className={cn("container-x", className)}>{children}</Component>;
}

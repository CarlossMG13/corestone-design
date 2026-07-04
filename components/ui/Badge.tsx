import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  /** "stack" = tecnología (stone-300); "status" = estado (copper). */
  variant?: "stack" | "status";
};

/** Badge en JetBrains Mono para señal técnica. */
export function Badge({ variant = "stack", className, ...props }: BadgeProps) {
  const variants: Record<NonNullable<BadgeProps["variant"]>, string> = {
    stack: "text-on-surface-muted",
    status: "text-copper-500",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm bg-surface-hover px-3 py-1.5 font-mono text-mono",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}

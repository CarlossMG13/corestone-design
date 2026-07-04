import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/** Card estándar — sin aura. Hover sube el borde a stone-500. */
export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-stone-700 bg-surface-elevated p-6 transition-colors duration-200 ease-out hover:border-stone-500 md:p-8",
        className,
      )}
      {...props}
    />
  );
}

import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/** Input — fondo stone-800, foco en core-500. Sin aura. */
export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "rounded-sm border border-stone-700 bg-surface-hover px-3 py-2.5 text-body text-on-surface outline-none transition-colors duration-200 ease-out placeholder:text-on-surface-muted focus:border-core-500",
        className,
      )}
      {...props}
    />
  );
}

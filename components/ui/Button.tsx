import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

/**
 * Botón. Regla del sistema: máximo un `primary` visible por vista.
 * El glow azul en hover del primary es la única aparición de glow fuera del hero.
 */
export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-core-500 disabled:pointer-events-none disabled:opacity-50";
  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary: "bg-core-600 px-7 py-3.5 text-stone-50 hover:bg-core-500 hover:shadow-core-glow",
    secondary:
      "border border-stone-700 bg-transparent px-7 py-3 text-on-surface-secondary hover:border-stone-500",
  };
  return <button className={cn(base, variants[variant], className)} {...props} />;
}

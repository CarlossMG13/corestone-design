import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type AuraFrameProps = {
  /** "always" = hero (aura permanente); "hover" = feature card (solo en hover). */
  trigger?: "always" | "hover";
  /** Radio del contenedor: "xl" (hero) o "lg" (card). */
  radius?: "lg" | "xl";
  className?: string;
  innerClassName?: string;
  children: ReactNode;
};

/**
 * Corestone Aura — marco de firma.
 *
 * Técnica validada (docs/design.md §Components): marco (`p-0.5` + `overflow-hidden`)
 * con un degradado cónico sobredimensionado rotando detrás + una capa interior sólida
 * que tapa todo menos el borde. NO usa `mask-composite`/`@property` (falla en algunos motores).
 *
 * Regla del sistema: máximo UN elemento con aura activo por vista. Solo dos ubicaciones
 * permitidas: el hero (permanente) y un feature card por sección (hover).
 */
export function AuraFrame({
  trigger = "always",
  radius = "xl",
  className,
  innerClassName,
  children,
}: AuraFrameProps) {
  const outerRadius = radius === "xl" ? "rounded-xl" : "rounded-lg";
  // Radio interior = radio del marco menos los 2px de padding.
  const innerRadius = radius === "xl" ? "rounded-[22px]" : "rounded-[14px]";
  const gradientVisibility =
    trigger === "hover"
      ? "opacity-0 transition-opacity duration-[250ms] ease-out group-hover:opacity-100"
      : "opacity-100";

  return (
    <div
      className={cn(
        "group relative overflow-hidden bg-surface-elevated p-0.5",
        outerRadius,
        className,
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute left-1/2 top-1/2 h-[250%] w-[250%] -translate-x-1/2 -translate-y-1/2 bg-aura-gradient animate-aura-spin motion-reduce:animate-none",
          gradientVisibility,
        )}
      />
      <div className={cn("relative z-10 h-full bg-surface-elevated", innerRadius, innerClassName)}>
        {children}
      </div>
    </div>
  );
}

import { useId } from "react";
import { cn } from "@/lib/cn";

/** Monograma "C" — misma geometría que el resto de variantes, no alterar. */
const MARK_C =
  "M 81.16 25.64 A 40 40 0 1 0 81.16 70.36 L 67.9 61.42 A 24 24 0 1 1 67.9 34.58 Z";
/** Anillo interior por el que viaja la estela (r=32, pathLength normalizado a 100). */
const TRACK = "M 74.53 30.11 A 32 32 0 1 0 74.53 65.89";

type CorestoneLoaderProps = {
  /** Lado del SVG en px (viewBox fijo 0 0 96 96). */
  size?: number;
  /**
   * Arranca/detiene el recorrido sin desmontar.
   * `false` deja el segmento estático (sin bucle). Para quitarlo por completo,
   * desmonta el componente.
   */
  running?: boolean;
  /** Texto anunciado por lectores de pantalla mientras comunica carga. */
  label?: string;
  className?: string;
};

/**
 * Corestone — Loader / Aura ("algo pasa").
 *
 * Un ÚNICO segmento con el gradiente Aura recorre el anillo en bucle constante,
 * sin fade: anima solo `stroke-dashoffset` 100 → 0 (2.8s linear infinite) sobre
 * un path con `pathLength=100` y `stroke-dasharray="34 66"`. Track atenuado #1E1E22.
 *
 * El gradiente Aura (orden fijo #3B6BF0 → #8B5CF6 → #D6478C → #E0A526) vive SOLO
 * en la estela; el mark permanece monocromático y nunca se rellena con él.
 *
 * Arrancar/detener: prop `running` (pausa dejando el segmento estático) o
 * montar/desmontar el componente. prefers-reduced-motion: sin bucle; el segmento
 * queda estático y `role="status"` anuncia la carga.
 */
export function CorestoneLoader({
  size = 96,
  running = true,
  label = "Cargando…",
  className,
}: CorestoneLoaderProps) {
  const uid = useId().replace(/:/g, "");
  const gradId = `cs-aura-${uid}`;

  return (
    <span
      role="status"
      aria-live="polite"
      aria-label={label}
      className={className}
      style={{ display: "inline-block", lineHeight: 0 }}
    >
      <svg viewBox="0 0 96 96" width={size} height={size} aria-hidden="true">
        <defs>
          <linearGradient
            id={gradId}
            x1="0"
            y1="0"
            x2="96"
            y2="96"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#3B6BF0" />
            <stop offset="35%" stopColor="#8B5CF6" />
            <stop offset="70%" stopColor="#D6478C" />
            <stop offset="100%" stopColor="#E0A526" />
          </linearGradient>
        </defs>

        {/* Mark monocromático: hace de fondo/track atenuado del ícono. */}
        <path
          d={MARK_C}
          fill="#1E1E22"
          stroke="#1E1E22"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <rect x="40" y="40" width="16" height="16" rx="4" fill="#1E1E22" />

        {/* Estela Aura: único lugar con gradiente; SOLO anima stroke-dashoffset. */}
        <path
          d={TRACK}
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="16"
          strokeLinecap="butt"
          pathLength={100}
          strokeDasharray="34 66"
          className={cn(running && "animate-cs-orbit", "motion-reduce:animate-none")}
        />
      </svg>
    </span>
  );
}

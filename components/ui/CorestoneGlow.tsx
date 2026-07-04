import { useId } from "react";

/** Monograma "C" — geometría única, no alterar (radios, trazo y colores fijos). */
const MARK_C =
  "M 81.16 25.64 A 40 40 0 1 0 81.16 70.36 L 67.9 61.42 A 24 24 0 1 1 67.9 34.58 Z";

type CorestoneGlowProps = {
  /** Lado del SVG en px (viewBox fijo -16 -16 128 128). */
  size?: number;
  className?: string;
};

/**
 * Corestone — Halo ("estoy aquí").
 *
 * Resplandor blanco difuso, FIJO en su sitio, que solo pulsa de intensidad:
 * la capa de halo (blur estático ~6px) anima únicamente su `opacity`
 * 0.35 → 0.9 → 0.35 (3s ease-in-out infinite). El mark queda sólido y
 * monocromático (#F7F7F8) — nunca lleva el gradiente Aura.
 *
 * prefers-reduced-motion: el halo se congela a opacidad ~0.6 (sin bucle).
 */
export function CorestoneGlow({ size = 120, className }: CorestoneGlowProps) {
  const uid = useId().replace(/:/g, "");
  const markId = `cs-m-${uid}`;
  const blurId = `cs-b-${uid}`;

  return (
    <svg
      viewBox="-16 -16 128 128"
      width={size}
      height={size}
      role="img"
      aria-label="Corestone"
      className={className}
    >
      <defs>
        <g id={markId}>
          <path d={MARK_C} strokeWidth="5" strokeLinejoin="round" />
          <rect x="40" y="40" width="16" height="16" rx="4" />
        </g>
        <filter id={blurId} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* Capa halo: blur estático + SOLO anima opacity. */}
      <use
        href={`#${markId}`}
        fill="#FFFFFF"
        stroke="#FFFFFF"
        filter={`url(#${blurId})`}
        className="animate-cs-pulse motion-reduce:animate-none motion-reduce:opacity-60"
      />
      {/* Mark sólido, monocromático — sin animar. */}
      <use href={`#${markId}`} fill="#F7F7F8" stroke="#F7F7F8" />
    </svg>
  );
}

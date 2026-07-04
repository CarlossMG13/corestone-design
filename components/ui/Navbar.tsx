import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type NavbarProps = {
  brand?: ReactNode;
  /** Enlaces de navegación. */
  children?: ReactNode;
  className?: string;
};

/**
 * Navegación — glassmorphism: fondo translúcido stone-950 + backdrop blur/saturate,
 * hairline translúcido y un highlight superior sutil. Nunca aura.
 * `supports-[backdrop-filter]` sube la opacidad como fallback donde no hay blur.
 */
export function Navbar({ brand = "Corestone", children, className }: NavbarProps) {
  return (
    <nav
      className={cn(
        "sticky top-0 z-50 border-b border-white/[0.08] bg-surface/85 backdrop-blur-xl backdrop-saturate-150 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] supports-[backdrop-filter]:bg-surface/55",
        className,
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="font-semibold tracking-[-0.02em] text-on-surface">{brand}</span>
        {children ? (
          <div className="flex items-center gap-7 text-body text-on-surface-muted">{children}</div>
        ) : null}
      </div>
    </nav>
  );
}

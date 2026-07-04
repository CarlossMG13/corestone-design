import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type NavbarProps = {
  brand?: ReactNode;
  /** Enlaces de navegación. */
  children?: ReactNode;
  className?: string;
};

/** Navegación — fondo stone-950, hairline inferior, blur al hacer scroll. Nunca aura. */
export function Navbar({ brand = "Corestone", children, className }: NavbarProps) {
  return (
    <nav
      className={cn(
        "sticky top-0 z-50 border-b border-stone-700 bg-surface/80 backdrop-blur-md",
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

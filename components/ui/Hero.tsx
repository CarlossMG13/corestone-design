import type { ReactNode } from "react";
import { AuraFrame } from "./AuraFrame";

type HeroProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  actions?: ReactNode;
  className?: string;
};

/** Hero con aura permanente — la ubicación #1 (de 2) permitida para el aura. */
export function Hero({ eyebrow, title, subtitle, actions, className }: HeroProps) {
  return (
    <AuraFrame
      trigger="always"
      radius="xl"
      className={className}
      innerClassName="px-6 py-16 text-center md:px-12 md:py-[72px]"
    >
      {eyebrow ? (
        <p className="mb-3 font-mono text-mono uppercase tracking-[0.08em] text-on-surface-muted">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-h1 text-on-surface md:text-display">{title}</h1>
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-[460px] text-body-lg text-on-surface-muted">{subtitle}</p>
      ) : null}
      {actions ? (
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">{actions}</div>
      ) : null}
    </AuraFrame>
  );
}

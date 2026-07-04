import type { ReactNode } from "react";
import { AuraFrame } from "./AuraFrame";

type FeatureCardProps = {
  className?: string;
  children: ReactNode;
};

/**
 * Feature card destacada — aura SOLO en hover, nunca en reposo.
 * Es la segunda (y única otra) ubicación permitida para el aura: una por sección.
 */
export function FeatureCard({ className, children }: FeatureCardProps) {
  return (
    <AuraFrame
      trigger="hover"
      radius="lg"
      className={className}
      innerClassName="border border-stone-700 p-6 transition-colors duration-200 ease-out group-hover:border-transparent"
    >
      {children}
    </AuraFrame>
  );
}

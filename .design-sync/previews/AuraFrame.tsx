import { AuraFrame } from "corestone";

export function Always() {
  return (
    <AuraFrame trigger="always" radius="xl" innerClassName="p-10 text-center">
      <p className="text-h2 text-on-surface">Corestone Aura</p>
      <p className="mt-2 text-body text-on-surface-muted">
        Marco de firma — máximo un elemento activo por vista.
      </p>
    </AuraFrame>
  );
}

export function HoverReady() {
  return (
    <AuraFrame trigger="hover" radius="lg" innerClassName="p-6">
      <p className="text-h3 text-on-surface">Feature destacada</p>
      <p className="mt-2 text-body text-on-surface-muted">
        El aura aparece solo al pasar el cursor.
      </p>
    </AuraFrame>
  );
}

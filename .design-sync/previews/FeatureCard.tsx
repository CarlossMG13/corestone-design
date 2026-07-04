import { FeatureCard } from "corestone";

export function Default() {
  return (
    <FeatureCard className="max-w-sm">
      <h3 className="text-h3 text-on-surface">Migraciones sin downtime</h3>
      <p className="mt-2 text-body text-on-surface-muted">
        Pasamos sistemas legacy a arquitecturas modernas sin interrumpir el negocio.
      </p>
    </FeatureCard>
  );
}

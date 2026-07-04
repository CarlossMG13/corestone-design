import { Button } from "corestone";

export function Primary() {
  return <Button>Empezar propuesta</Button>;
}

export function Secondary() {
  return <Button variant="secondary">Ver casos de estudio</Button>;
}

export function Disabled() {
  return <Button disabled>Procesando…</Button>;
}

import { Hero, Button } from "corestone";

export function Default() {
  return (
    <Hero
      eyebrow="Estudio de desarrollo de software"
      title="Software que dura"
      subtitle="Construimos, entregamos y nos quedamos: un partner técnico de largo plazo."
      actions={
        <>
          <Button>Empezar propuesta</Button>
          <Button variant="secondary">Ver casos de estudio</Button>
        </>
      }
    />
  );
}

import { Navbar } from "corestone";

export function Default() {
  return (
    <Navbar brand="Corestone">
      <a href="#work">Trabajo</a>
      <a href="#about">Nosotros</a>
      <a href="#contact">Contacto</a>
    </Navbar>
  );
}

export function BrandOnly() {
  return <Navbar brand="Corestone" />;
}

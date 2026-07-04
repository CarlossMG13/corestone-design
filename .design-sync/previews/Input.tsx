import { Input } from "corestone";

export function Default() {
  return <Input placeholder="nombre@empresa.com" className="w-72" />;
}

export function WithValue() {
  return <Input defaultValue="hola@corestone.dev" className="w-72" />;
}

export function Disabled() {
  return <Input placeholder="No disponible" disabled className="w-72" />;
}

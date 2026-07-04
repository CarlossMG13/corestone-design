import { Badge } from "corestone";

export function Stack() {
  return (
    <div className="flex gap-2">
      <Badge>TypeScript</Badge>
      <Badge>PostgreSQL</Badge>
      <Badge>AWS</Badge>
    </div>
  );
}

export function Status() {
  return <Badge variant="status">En producción</Badge>;
}

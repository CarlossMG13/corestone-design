import { Badge, Button, Card, FeatureCard, Hero, Input, Navbar } from "@/components/ui";

const stack = ["Next.js", "React Native", "Supabase", "PostgreSQL", "n8n"];

/**
 * Página vitrina del design system de Corestone.
 * Demuestra las dos ubicaciones del aura (hero permanente + un feature card en hover)
 * y las reglas de restricción — sirve de referencia de "estado final correcto".
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar>
        <span>Servicios</span>
        <span>Trabajo</span>
        <span>Contacto</span>
      </Navbar>

      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        {/* Aura #1: hero, permanente */}
        <Hero
          eyebrow="Estudio de software"
          title={
            <>
              Software que <span className="text-aura-violet">dura</span>,
              <br />
              no que es rápido.
            </>
          }
          subtitle="Construimos, entregamos y nos quedamos. Un partner técnico para el largo plazo."
          actions={
            <>
              <Button variant="primary">Iniciar un proyecto</Button>
              <Button variant="secondary">Ver nuestro trabajo</Button>
            </>
          }
        />

        {/* Servicios: un solo feature card con aura en hover, el resto cards normales */}
        <section className="mt-24">
          <p className="mb-3 font-mono text-mono uppercase tracking-[0.08em] text-on-surface-muted">
            Servicios
          </p>
          <h2 className="mb-8 text-h2 text-on-surface">Lo que construimos</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {/* Aura #2: solo aparece en hover */}
            <FeatureCard>
              <h3 className="mb-2 text-h3 text-on-surface">Plataformas web</h3>
              <p className="text-body text-on-surface-muted">
                Apps en React / Next.js pensadas para operar años, no para un demo.
              </p>
            </FeatureCard>
            <Card>
              <h3 className="mb-2 text-h3 text-on-surface">Mobile</h3>
              <p className="text-body text-on-surface-muted">
                React Native + Expo. Una base de código, publicada en ambas tiendas.
              </p>
            </Card>
            <Card>
              <h3 className="mb-2 text-h3 text-on-surface">Automatización</h3>
              <p className="text-body text-on-surface-muted">
                Flujos con Claude + n8n que quitan trabajo manual sin hacer ruido.
              </p>
            </Card>
          </div>
        </section>

        {/* Stack técnico en badges mono */}
        <section className="mt-24">
          <p className="mb-3 font-mono text-mono uppercase tracking-[0.08em] text-on-surface-muted">
            Stack
          </p>
          <div className="flex flex-wrap gap-2.5">
            {stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
            <Badge variant="status">● En producción</Badge>
          </div>
        </section>

        {/* Contacto */}
        <section className="mt-24 max-w-md">
          <h2 className="mb-4 text-h2 text-on-surface">Hablemos</h2>
          <div className="flex gap-3">
            <Input placeholder="tu@empresa.com" className="flex-1" />
            <Button>Enviar</Button>
          </div>
        </section>

        <footer className="mt-24 border-t border-stone-700 pt-8 text-caption text-stone-500">
          Corestone · Construimos, entregamos, nos quedamos.
        </footer>
      </div>
    </main>
  );
}

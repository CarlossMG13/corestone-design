## Corestone conventions

Corestone is a Tailwind-utility design system with one strict brand rule: **the "Aura" gradient border can appear on at most one element per view.** Only two placements are allowed — the `Hero` (always on) and one `FeatureCard` per section (gradient only on `:hover`, invisible at rest — that's correct, not a bug). Never add a third aura element or apply `bg-aura-gradient`/`animate-aura-spin` directly outside `AuraFrame`.

### No provider, no wrapper
Every component is stateless (plain props in, JSX out) — no context, no theme provider, no client-only hooks. Just load `styles.css` and `_ds_bundle.js` as the README describes and mount components directly.

### Styling idiom: Tailwind utilities, real token names
Never invent class names — compose from this system's actual scale (defined in the shipped `tailwind.config.js`, compiled into `styles.css`):

| Purpose | Classes |
|---|---|
| Surfaces | `bg-surface`, `bg-surface-elevated`, `bg-surface-hover` |
| Borders | `border-stone-700` (default), `hover:border-stone-500` (hover state) |
| Text | `text-on-surface` (primary), `text-on-surface-secondary`, `text-on-surface-muted` |
| Accent (single UI accent — don't introduce a second) | `bg-core-600`/`hover:bg-core-500` (primary button fill), `focus-visible:ring-core-500`/`focus:border-core-500` (focus rings on Button/Input) |
| Secondary accent (minimal use only) | `text-copper-500` (status badges only) |
| Type scale | `text-display`, `text-h1`, `text-h2`, `text-h3`, `text-body-lg`, `text-body`, `text-caption`, `text-mono` (mono pairs with `font-mono`, used for eyebrows/badges) |
| Radius | `rounded-sm` (6px), `rounded-md` (10px), `rounded-lg` (16px), `rounded-xl` (24px) |
| Glow (primary button hover only) | `hover:shadow-core-glow` |
| Aura gradient (AuraFrame internals only) | `bg-aura-gradient`, `animate-aura-spin` |

Rule: **max one visible `primary` Button per view** (mirrors the aura rule) — use `secondary` for every other action.

### Where the truth lives
Read `styles.css` (imports the compiled Tailwind output + tokens) and each component's `<Name>.d.ts`/`<Name>.prompt.md` before composing — they carry the real prop names. `guidelines/design.md` has the full written design system (colors, spacing, motion, the aura rule in detail).

### Fonts
`Inter` (sans) and `JetBrains Mono` (mono) load from Google Fonts at runtime (not bundled as files) — include the same `<link>` tags the host app uses, or text falls back to the system stack:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Example build
```jsx
const { Hero, Button, FeatureCard } = window.Corestone;

<>
  <Hero
    eyebrow="Estudio de desarrollo de software"
    title="Software que dura"
    subtitle="Construimos, entregamos y nos quedamos."
    actions={<>
      <Button>Empezar propuesta</Button>
      <Button variant="secondary">Ver casos de estudio</Button>
    </>}
  />
  <div className="mt-12 grid grid-cols-3 gap-6">
    <FeatureCard>
      <h3 className="text-h3 text-on-surface">Migraciones sin downtime</h3>
      <p className="mt-2 text-body text-on-surface-muted">
        Pasamos sistemas legacy a arquitecturas modernas sin interrumpir el negocio.
      </p>
    </FeatureCard>
  </div>
</>
```

# Brief para la skill `design-system` (builder-os) — Corestone

*Pegar este documento completo como contexto al invocar la skill en Claude Code.*
*Última actualización: 4 de julio de 2026.*

> **Nota de homologación (4 jul 2026):** este brief fue el *input* que generó el sistema.
> La fuente de verdad canónica es ahora **`docs/design.md`** + **`docs/design.html`**
> (con `tailwind.config.js` y `globals.css` como implementación). Si algún valor de este
> brief discrepa, manda `docs/design.md`. Valores ya homologados abajo: semántico de error
> = `error` (antes `danger-500`); `mono` = 13px; line-heights h1 1.15 / h2 1.3.

---

## 1. Contexto del proyecto

Corestone es un estudio de desarrollo de software (México). Stack: React/Next.js, Tailwind CSS, Node.js, PostgreSQL, Supabase, Vercel/Railway (web); React Native + Expo (mobile); Claude + n8n (automatización). Posicionamiento de marca: "conocemos lo que hacemos, no hay necesidad de gritar, construimos, entregamos, nos quedamos" — partner técnico de largo plazo, no proveedor de moda.

Este brief documenta un rediseño de identidad visual ya decidido en conversación previa. La skill debe **generar los artefactos de design system a partir de estas decisiones**, no proponer una dirección nueva — la dirección ya está definida y aprobada por el dueño del proyecto (Carlos).

## 2. Origen de la referencia visual

El punto de partida fue un video de referencia con estética: fondo negro, glow de neón multicolor (azul/magenta/violeta/ámbar) rodeando tarjetas redondeadas, tipografía blanca minimalista, animaciones fluidas. Se evaluó el trade-off entre esa estética (lenguaje de app de consumo/wellness) y el tono de marca de Corestone (sólido, confiable, partner técnico) — Carlos decidió, de forma informada, **conservar el glow multicolor como elemento de firma permanente**, aceptando el trade-off. La única condición añadida para que no se vuelva ruido visual: paleta fija (no arcoíris libre) y máximo un elemento con el efecto activo por vista.

## 3. Decisiones de marca (fundamentos)

- **Concepto:** "Core + Stone" — energía técnica (core, acento azul) + solidez mineral (stone, neutros cálidos).
- **Modo:** dark mode como base, no negro puro.
- **Radios:** moderados (8–16px, hasta 24px en contenedores grandes). Nada de `radius-full` en cards/contenedores — transmite estructura, no burbuja.
- **Movimiento:** transiciones cortas (150–250ms) por defecto; el aura es la única animación ambiental permitida.

## 4. Paleta de color (tokens finales)

### Stone — neutros
| Token | Hex |
|---|---|
| `stone-950` | `#0B0B0D` (fondo página) |
| `stone-900` | `#131316` (fondo cards/secciones elevadas) |
| `stone-800` | `#1D1D21` (hover, inputs) |
| `stone-700` | `#2A2A2F` (bordes hairline) |
| `stone-500` | `#6B6B72` (texto muted) |
| `stone-300` | `#A8A8AE` (texto terciario) |
| `stone-100` | `#E4E4E7` (texto secundario) |
| `stone-50`  | `#F7F7F8` (texto primario) |

### Core — acento único de UI
| Token | Hex |
|---|---|
| `core-600` | `#1E4FD6` (fill botón primario) |
| `core-500` | `#3B6BF0` (hover) |
| `core-400` | `#6E8FF5` (texto de acento) |

### Copper — acento secundario, uso mínimo
| Token | Hex |
|---|---|
| `copper-500` | `#D97757` (badges de estado, detalle editorial puntual) |

### Corestone Aura — glow multicolor de firma (decisión final: adoptado)
| Token | Hex | Orden en el gradiente |
|---|---|---|
| `aura-blue` | `#3B6BF0` | 1 (mismo azul que `core-500`, ancla con el resto de la marca) |
| `aura-violet` | `#8B5CF6` | 2 |
| `aura-pink` | `#D6478C` | 3 |
| `aura-amber` | `#E0A526` | 4 (mismo tono que warning) |

**Regla no negociable:** estos 4 colores, en este orden, siempre. Si el gradiente cambia cada vez que se usa, deja de ser un activo de marca reconocible.

### Semánticos
`success #3FB27F` · `warning #E0A526` · `error #E5484D`

## 5. Reglas de uso del Aura (crítico para la skill)

1. **Máximo un elemento con aura activo por vista.** Nunca dos simultáneos.
2. **Dos ubicaciones permitidas:**
   - Contenedor **hero** de cada página principal — aura permanente (siempre visible, rotando).
   - **Un** feature card destacado por sección — aura solo en `hover`, nunca en reposo.
3. **Nunca en:** navegación, footer, botones secundarios, texto de cuerpo, inputs.
4. **Implementación técnica preferida:** marco (`padding` + `overflow: hidden`) con una capa de degradado cónico sobredimensionada rotando detrás (`transform: rotate`, animación 6–8s `linear infinite`), y una capa interior sólida (`background: stone-900`) que tapa todo menos el borde. **Evitar la técnica de `mask-composite`/`@property` para el recorte del borde** — se probó y falló en algunos motores de render (el degradado terminó cubriendo el contenido interior en vez de solo el borde). El método de "marco + capa interior sólida" ya está validado y funcionando.
5. Respetar `prefers-reduced-motion: reduce` (desactivar la rotación, dejar el degradado estático).

## 6. Tipografía

- **UI y cuerpo:** Inter (o Geist como alternativa).
- **Código / stack técnico:** JetBrains Mono — usar en badges de stack tecnológico y snippets.
- Escala: `display` 56–72px/600, `h1` 40px/600, `h2` 28px/600, `h3` 20px/500, `body-lg` 18px/400, `body` 16px/400, `caption` 13px/400.
- Line-height: 1.1 en display, 1.15 en h1, 1.3 en h2, 1.4 en h3, 1.6+ en body.

## 7. Espaciado y forma

- Escala de espaciado (base 4px): `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`.
- Radios: `sm 6px` (inputs/badges), `md 10px` (botones), `lg 16px` (cards), `xl 24px` (hero/modales).

## 8. Componentes ya definidos

- **Botón primario:** fill `core-600`, hover `core-500` + glow azul sutil (`box-shadow: 0 0 24px rgba(59,107,240,0.4)`). Máximo un botón primario visible por vista.
- **Botón secundario:** transparente, borde `stone-700`, hover borde `stone-500`.
- **Card:** fondo `stone-900`, borde 1px `stone-700`, radius `lg`, padding 24–32px. Hover sube a borde `stone-500` (sin aura, salvo el feature card designado).
- **Nav:** fondo `stone-950`, blur sutil al hacer scroll, borde inferior 1px `stone-700`. Sin aura.
- **Badge de stack técnico:** fondo `stone-800`, texto `mono` 13px color `stone-300`, radius `sm`.

## 9. Archivos ya generados (punto de partida, no reescribir desde cero)

Estos archivos ya existen en la carpeta del proyecto y contienen la implementación validada — la skill debería **extenderlos o formalizarlos**, no reinventarlos:

- `corestone-design-system.md` — documento completo de fundamentos, con historial de la decisión del aura.
- `tailwind.config.js` — tokens de color, tipografía, radios, keyframes de `aura-spin`.
- `globals.css` — custom properties + clases `.aura-border`, `.aura-content`, `.aura-halo`, `.btn-primary`, `.btn-secondary`, `.card`.
- `preview.html` — mockup funcional del sistema con el aura aplicada correctamente (referencia visual de cómo debe verse el resultado final).

## 10. Qué se espera de la skill `design-system`

- Tomar estos tokens y reglas como fuente de verdad (no reinterpretar la estética desde las imágenes originales del video).
- Producir/actualizar los artefactos estándar que genera la skill (`docs/design-system.md` o el output que corresponda a su formato) usando exactamente estos valores.
- Si la skill pide inputs visuales, usar `preview.html` como referencia de "estado final correcto", no el video original — el video fue el punto de partida, no el resultado.
- Mantener las reglas de restricción del aura (sección 5) como reglas explícitas del sistema, no solo como nota de estilo.

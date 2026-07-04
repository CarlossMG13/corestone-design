# Corestone — Design System v1.1

*Sistema visual para el sitio web y materiales de marca de Corestone.*
*Fecha: 4 de julio de 2026.*

---

> **Fuente de verdad (homologación 4 jul 2026).** La referencia canónica del sistema
> vive ahora en **`docs/design.md`** (tokens YAML + prosa, para agentes de código) y su
> espejo humano **`docs/design.html`** (guía de estilo renderizada). La implementación en
> código es **`tailwind.config.js`** y **`globals.css`**. Este documento es la narrativa de
> marca y las reglas de uso; si algún valor discrepa, **manda `docs/design.md`**. Esta
> versión (v1.1) ya está alineada con esa base.

---

## 0. Decisión de marca: el glow multicolor sí se queda

**Actualización (4 jul 2026):** la primera versión de este documento recomendaba un solo acento de color, con el glow multicolor de la referencia reservado como mucho a una pieza de campaña aislada. Carlos revisó ese argumento y decidió, de forma informada, que el glow multicolor ("Corestone Aura") es un elemento clave de identidad que quiere conservar de forma permanente, aceptando el trade-off frente al tono "boring-but-reliable" original. Esta versión adapta el sistema a esa decisión.

Mi trabajo aquí ya no es cuestionar la decisión — eso ya se discutió — sino asegurar que se implemente sin que se vuelva ruido visual. La única condición técnica que mantengo (y que Carlos aceptó) es esta: **el aura es un elemento de firma, no una textura de fondo.** Aparece en máximo un lugar por vista, con una paleta fija de 4 colores (no arcoíris libre), y nunca en elementos informativos (nav, footer, texto de cuerpo). Así el efecto se lee como algo intencional y reconocible — "eso es de Corestone" — en vez de decoración genérica que se pierde entre sí misma.

| De la referencia | Qué conservamos | Cómo lo adaptamos |
|---|---|---|
| Fondo oscuro premium | Sí — dark mode como base | Negro cálido (`stone-950`), no negro puro |
| Tipografía blanca minimalista | Sí | Sin cambios |
| Glow de neón multicolor | **Sí, adoptado como "Corestone Aura"** | Paleta fija de 4 stops ligados a marca (azul, violeta, magenta, ámbar) en vez de arcoíris arbitrario; aparece en máximo 1 contenedor por vista |
| Bordes tipo píldora | Parcialmente | Radios moderados (8–16px), no pill-shape |
| Animaciones tipo onda | Sí, acotado | El aura rota lentamente (6-8s) como halo de fondo; el resto de la UI usa transiciones cortas (150–250ms) |

Ver sección 5.1 para las reglas exactas de dónde y cómo aparece el aura.

---

## 1. Fundamentos

### 1.1 Concepto de marca

**Core + Stone.** Dos fuerzas en tensión: energía técnica (core) y solidez mineral (stone). La paleta traduce esto literalmente:

- **Stone** → neutros cálidos (grises con temperatura, casi piedra), la base de todo.
- **Core** → un único acento azul-eléctrico contenido, que aparece solo donde hay una decisión o acción importante.

### 1.2 Principios visuales

1. **Un acento, no un arcoíris.** El color se gana su lugar; si todo brilla, nada destaca.
2. **Oscuro pero cálido.** Negro con temperatura (`#0B0B0D`), no `#000000` — se siente diseñado, no vacío.
3. **Jerarquía por espacio, no por decoración.** Prioriza whitespace y tamaño tipográfico antes que efectos.
4. **El glow se gana, no se regala.** Reservado para: CTA primario, estado de foco/hover, y un highlight por página como máximo.
5. **Mobile-first, siempre legible.** Ningún efecto debe sacrificar contraste o legibilidad en pantallas pequeñas.

---

## 2. Color

### 2.1 Paleta base (neutros — "Stone")

| Token | Hex | Uso |
|---|---|---|
| `stone-950` | `#0B0B0D` | Fondo principal (page background) |
| `stone-900` | `#131316` | Fondo de tarjetas / secciones elevadas |
| `stone-800` | `#1D1D21` | Fondo de tarjetas hover / inputs |
| `stone-700` | `#2A2A2F` | Bordes por defecto (hairline) |
| `stone-500` | `#6B6B72` | Texto secundario / muted |
| `stone-300` | `#A8A8AE` | Texto terciario / placeholders |
| `stone-100` | `#E4E4E7` | Texto secundario sobre fondo oscuro |
| `stone-50`  | `#F7F7F8` | Texto primario (casi blanco, no blanco puro) |

### 2.2 Acento — "Core Blue"

| Token | Hex | Uso |
|---|---|---|
| `core-600` | `#1E4FD6` | Fill sólido (botones primarios) |
| `core-500` | `#3B6BF0` | Hover / estado activo |
| `core-400` | `#6E8FF5` | Texto de acento sobre fondo oscuro |
| `core-glow` | `#3B6BF0` @ 40% blur 24px | Glow — solo en CTA principal y focus rings |

### 2.3 Acento secundario — "Copper" (uso mínimo, señal de calidez humana)

| Token | Hex | Uso |
|---|---|---|
| `copper-500` | `#D97757` | Badges de estado "en progreso", detalles editoriales puntuales. |

### 2.4 Corestone Aura — el glow multicolor de firma

Cuatro colores fijos, siempre en el mismo orden, formando un gradiente cónico animado:

| Token | Hex | Rol en el gradiente |
|---|---|---|
| `aura-blue` | `#3B6BF0` | Mismo azul que `core-500` — punto de anclaje con el resto de la marca |
| `aura-violet` | `#8B5CF6` | Transición fría |
| `aura-pink` | `#D6478C` | Punto medio cálido |
| `aura-amber` | `#E0A526` | Cierre cálido, mismo tono que `warning` |

Por qué estos 4 y no un arcoíris libre: si el gradiente cambia de colores cada vez que se usa, deja de ser reconocible como "de Corestone" y se vuelve decoración genérica. Fijar la paleta es lo que convierte el efecto en un activo de marca en vez de un truco visual.

### 2.5 Semánticos

| Token | Hex | Uso |
|---|---|---|
| `success` | `#3FB27F` | Confirmaciones |
| `warning` | `#E0A526` | Advertencias |
| `error`   | `#E5484D` | Errores |

---

## 3. Tipografía

### 3.1 Familia

- **UI y cuerpo:** `Inter` (o `Geist` como alternativa) — sans-serif geométrica, legible, sin personalidad excesiva. Refuerza "boring but reliable".
- **Código / detalles técnicos:** `JetBrains Mono` — usada en badges de stack tecnológico, snippets, o cuando se muestra código en el sitio. Refuerza credibilidad técnica sin necesidad de decirlo.

### 3.2 Escala tipográfica

| Token | Tamaño | Peso | Line-height | Uso |
|---|---|---|---|---|
| `display` | 72px (4.5rem) | 600 | 1.1 (`-0.02em`) | Hero headline únicamente |
| `h1` | 40px (2.5rem) | 600 | 1.15 (`-0.02em`) | Título de sección |
| `h2` | 28px (1.75rem) | 600 | 1.3 | Subsección |
| `h3` | 20px (1.25rem) | 500 | 1.4 | Título de card |
| `body-lg` | 18px (1.125rem) | 400 | 1.6 | Intro de sección |
| `body` | 16px (1rem) | 400 | 1.6 | Texto general |
| `caption` | 13px (0.8125rem) | 400 | 1.4 | Metadatos, labels |
| `mono` | 13px (0.8125rem) | 400 | 1.4 (`0.02em`) | Código / stack técnico |

Nunca menos de 1.5 de line-height en párrafos largos. El peso nunca pasa de 600 — la autoridad viene de la estructura y el contraste, no de tipografía pesada.

---

## 4. Espaciado y forma

### 4.1 Escala de espaciado (base 4px)

`4, 8, 12, 16, 24, 32, 48, 64, 96, 128` — usar siempre múltiplos de esta escala, no valores arbitrarios.

### 4.2 Radios

| Token | Valor | Uso |
|---|---|---|
| `rounded-sm` | 6px | Inputs, badges |
| `rounded-md` | 10px | Botones |
| `rounded-lg` | 16px | Cards |
| `rounded-xl` | 24px | Contenedores hero / modales |

Nota deliberada: nada de `rounded-full` (pill) en cards grandes — eso es lo que hacía el video verse "app de wellness". Mantener ángulos moderados da la sensación de estructura, no de burbuja.

---

## 5. Componentes clave

### 5.1 Corestone Aura — reglas de uso

El aura vive en dos lugares posibles, nunca más de uno activo a la vez:

1. **Contenedor hero** (permanente): el bloque hero de cada página principal lleva el borde de aura como marco fijo. Es el lugar de más jerarquía visual, así que es donde el aura "vive" por defecto.
2. **Un feature card destacado** (solo hover): si una sección de cards necesita un punto de énfasis (ej. el servicio que más se quiere vender ese trimestre), esa card puede revelar el aura al hacer hover — nunca en reposo. El resto de las cards de esa sección se quedan con el hairline `stone-700` normal.

Nunca en: navegación, footer, botones secundarios, texto de cuerpo, o más de un elemento por vista simultáneamente. Si una página necesita "destacar" más de dos cosas, esa es una señal de que falta jerarquía de contenido, no de que falte más aura.

**Implementación de referencia (validada):** clases `.aura-border` (hero) y `.card-featured` (hover) en `globals.css`. Técnica: marco (`padding` + `overflow: hidden`) con un degradado cónico sobredimensionado rotando detrás (`transform: rotate`, 6–8s `linear infinite`) y una capa interior sólida (`background: stone-900`) que tapa todo menos el borde. **No usar la técnica de `mask-composite`/`@property`** para recortar el borde — se probó y falló en algunos motores de render (el degradado terminó cubriendo el contenido interior). `prefers-reduced-motion: reduce` desactiva la rotación y deja el degradado estático.

### 5.2 Botón primario
- Fondo `core-600`, texto `stone-50`, `rounded-md`.
- Hover: `core-500` + `core-glow` sutil (`box-shadow: 0 0 24px rgba(59,107,240,0.4)`) — única aparición de glow permitida fuera del hero.
- Nunca más de un botón primario visible por vista (regla de restricción: si todo es urgente, nada lo es).

### 5.3 Botón secundario
- Fondo transparente, borde `stone-700`, texto `stone-100`.
- Hover: borde `stone-500`, sin glow.

### 5.4 Card
- Fondo `stone-900`, borde 1px `stone-700`, `rounded-lg`, padding 24–32px.
- Hover (si es interactiva): borde pasa a `stone-500`. Sin glow — el glow se reserva para acción, no para contenido pasivo.

### 5.5 Input
- Fondo `stone-800`, borde 1px `stone-700`, `rounded-sm`, padding 10–12px.
- Foco: borde `core-500`. Sin aura.

### 5.6 Navegación
- Fondo `stone-950` con blur sutil (`backdrop-filter`) al hacer scroll, borde inferior 1px `stone-700`.
- Sin aura, sin glow. La navegación es infraestructura, no protagonista.

### 5.7 Badges
- **Stack técnico:** fondo `stone-800`, texto `mono` 13px color `stone-300`, `rounded-sm`.
- **Estado:** misma forma, texto `mono` color `copper-500` (ej. "● En producción").

### 5.8 Footer
- Fondo `stone-950`, borde superior 1px `stone-700`, texto `stone-500` a 13px.
- Sin aura, sin glow.

---

## 6. Movimiento

- Transiciones de UI: 150–250ms, `ease-out` (por defecto 200ms).
- Única animación ambiental permitida: la rotación del aura (6–8s `linear infinite`).
- Respetar siempre `prefers-reduced-motion: reduce`.

/** @type {import('tailwindcss').Config} */
// Corestone — Tailwind config.
// Fuente de verdad: docs/design.md (+ docs/design.html como espejo humano).
// Este archivo solo traduce esos tokens a Tailwind — no introducir valores nuevos aquí.
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Stone — neutros
        stone: {
          950: "#0B0B0D",
          900: "#131316",
          800: "#1D1D21",
          700: "#2A2A2F",
          500: "#6B6B72",
          300: "#A8A8AE",
          100: "#E4E4E7",
          50: "#F7F7F8",
        },
        // Core — acento único de UI
        core: {
          600: "#1E4FD6",
          500: "#3B6BF0",
          400: "#6E8FF5",
        },
        // Copper — acento secundario, uso mínimo
        copper: {
          500: "#D97757",
        },
        // Corestone Aura — gradiente de firma (orden fijo, no negociable)
        aura: {
          blue: "#3B6BF0",
          violet: "#8B5CF6",
          pink: "#D6478C",
          amber: "#E0A526",
        },
        // Semánticos (nombres canónicos de docs/design.md)
        success: "#3FB27F",
        warning: "#E0A526",
        error: "#E5484D",
        // Alias semánticos de superficie y texto (mapean a Stone/Core)
        surface: "#0B0B0D",
        "surface-elevated": "#131316",
        "surface-hover": "#1D1D21",
        border: "#2A2A2F",
        "border-hover": "#6B6B72",
        "on-surface": "#F7F7F8",
        "on-surface-secondary": "#E4E4E7",
        "on-surface-muted": "#A8A8AE",
        primary: "#1E4FD6",
        "primary-hover": "#3B6BF0",
        "on-primary": "#F7F7F8",
        accent: "#6E8FF5",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        display: ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }],
        h1: ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "600" }],
        h2: ["1.75rem", { lineHeight: "1.3", fontWeight: "600" }],
        h3: ["1.25rem", { lineHeight: "1.4", fontWeight: "500" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }],
        body: ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        caption: ["0.8125rem", { lineHeight: "1.4", fontWeight: "400" }],
        // mono: 13px (no 14px) para homologar con docs/design.md
        mono: ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0.02em", fontWeight: "400" }],
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "16px",
        xl: "24px",
      },
      spacing: {
        // Escala base 4px: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128
        4.5: "1.125rem",
      },
      boxShadow: {
        "core-glow": "0 0 24px 0 rgba(59, 107, 240, 0.4)",
        "core-glow-sm": "0 0 12px 0 rgba(59, 107, 240, 0.35)",
        // Glow difuso detrás del contenedor con Corestone Aura
        "aura-glow": "0 0 60px 10px rgba(139, 92, 246, 0.25)",
      },
      backgroundImage: {
        // Gradiente de firma — orden fijo. Usar solo vía .aura-border / .card-featured,
        // nunca suelto como fondo de cualquier contenedor.
        "aura-gradient":
          "conic-gradient(#3B6BF0, #8B5CF6, #D6478C, #E0A526, #3B6BF0)",
      },
      keyframes: {
        "aura-spin": {
          to: { transform: "translate(-50%, -50%) rotate(360deg)" },
        },
      },
      animation: {
        // 8s linear infinite — respetar prefers-reduced-motion en CSS
        "aura-spin": "aura-spin 8s linear infinite",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
    },
  },
  plugins: [],
};

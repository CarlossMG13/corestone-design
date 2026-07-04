import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Corestone — Software que dura",
  description:
    "Estudio de desarrollo de software. Construimos, entregamos y nos quedamos: un partner técnico de largo plazo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

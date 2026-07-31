import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mochila y Nos Fuimos | Rediseño conceptual",
    template: "%s | Mochila y Nos Fuimos",
  },
  description:
    "Rediseño conceptual de una agencia de viajes colombiana enfocada en experiencias auténticas y viajes personalizados.",
  robots: { index: false, follow: false },
  other: {
    "codex-preview": "development",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}

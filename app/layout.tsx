import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Me viajo y me voy | Rediseño conceptual",
    template: "%s | Me viajo y me voy",
  },
  description:
    "Rediseño conceptual de una agencia de viajes colombiana enfocada en experiencias auténticas y viajes personalizados.",
  robots: { index: false, follow: false },
  
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

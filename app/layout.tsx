import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dencitia | Agente IA para WhatsApp en clínicas dentales y estética",
  description:
    "Automatiza las respuestas de WhatsApp de tu clínica con IA. Atiende pacientes 24/7, agenda citas y reduce no-shows. Sin permanencia.",
  openGraph: {
    title: "Dencitia | Agente IA para WhatsApp en clínicas dentales y estética",
    description:
      "Automatiza las respuestas de WhatsApp de tu clínica con IA. Atiende pacientes 24/7, agenda citas y reduce no-shows. Sin permanencia.",
    type: "website",
    locale: "es_ES",
    siteName: "Dencitia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dencitia | Agente IA para WhatsApp en clínicas dentales y estética",
    description:
      "Automatiza las respuestas de WhatsApp de tu clínica con IA. Atiende pacientes 24/7, agenda citas y reduce no-shows. Sin permanencia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

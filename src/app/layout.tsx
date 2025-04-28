import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Férias no Colégio Arcanjo Gabriel | Brincar, Aprender e se Encantar",
  description:
    "Férias especiais para crianças de 3 a 10 anos no Colégio Arcanjo Gabriel. Amor, diversão, descobertas e uma programação completa em um ambiente acolhedor!",
  keywords: [
    "férias escolares",
    "programa de férias",
    "colégio infantil",
    "atividades para crianças",
    "educação infantil",
    "berçário",
    "escola em São Paulo",
    "brincar e aprender",
    "férias educativas",
    "escola maternal",
  ],
  openGraph: {
    title: "Férias Incríveis no Colégio Arcanjo Gabriel",
    description:
      "Um mês inteiro de diversão, acolhimento e aprendizado para crianças de 3 a 10 anos. Garanta a vaga do seu filho agora mesmo!",
    url: "https://ferias.colegioarcanjogabriel.com.br",
    type: "website",
    siteName: "Colégio Arcanjo Gabriel",
    images: [
      {
        url: "https://ferias.colegioarcanjogabriel.com.br/logo.png",
        width: 1200,
        height: 630,
        alt: "Crianças se divertindo nas férias no Colégio Arcanjo Gabriel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Férias no Colégio Arcanjo Gabriel",
    description:
      "Diversão com propósito: atividades educativas e acolhedoras para crianças de 3 a 10 anos. Garanta a vaga do seu filho!",
    images: ["https://ferias.colegioarcanjogabriel.com.br/logo.png"],
  },
  metadataBase: new URL("https://ferias.colegioarcanjogabriel.com.br"),
  robots: {
    index: true,
    follow: true,
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter} antialiased`}>
        {children} <SpeedInsights />
      </body>
    </html>
  );
}

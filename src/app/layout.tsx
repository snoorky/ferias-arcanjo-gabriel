import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Script from "next/script";

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
  verification: {
    google: "vaypX1iSrYcYJ_il_5oyJWVv9-EDWb6vSR8dfXm2s9U",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
        {/* Google Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VXELMC56WP"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VXELMC56WP', {
            page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Meta Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '531320856313425');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className="antialiased">
        {children}
        <SpeedInsights />
        <div
          dangerouslySetInnerHTML={{
            __html: `
        <noscript>
          <img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=531320856313425&ev=PageView&noscript=1"/>
        </noscript>
      `,
          }}
        />
      </body>
    </html>
  );
}

import Image from "next/image";
import { Button } from "../_components/button";
import { Limited } from "../_components/limited";
import { Countdown } from "@/_components/countdown";
import { HeroAnimation } from "@/app/animations";
import Link from "next/link";

export default function Hero() {
  return (
    <main
      className="w-screen h-full bg-cover bg-center"
      style={{ backgroundImage: "url('/banner.webp')" }}
    >
      <div className="responsive relative h-full bg-black/50" id="hero">
        <div className="logo relative w-36 lg:w-52 xl:w-56 h-24 lg:h-36 xl:h-40">
          <Image src="/logo.png" alt="Logo" fill className="object-contain" />
        </div>
        <div className="flex flex-col items-center text-center mt-8 pb-30 space-y-2 xl:space-y-8">
          <h1 className="title text-yellow">
            Onde cada risada vira lembrança e cada brincadeira, um aprendizado
          </h1>
          <p className="paragraph font-semibold text-white mb-8 md:text-lg md:px-12 lg:px-16">
            Férias especiais no Colégio Arcanjo Gabriel para crianças de 3 a 10
            anos, com um mês inteiro de amor, diversão e descobertas que vão
            marcar a infância do jeitinho que ela merece.
          </p>
          <Limited />
          <Button />
          <p className="warning font-semibold text-white mt-8 text-sm md:text-lg lg:px-52">
            <strong className="text-green">Desconto especial:</strong> Ganhe 30%
            de desconto no curso de férias ao fazer a matrícula ou contratar o
            contraturno! <strong>Oferta válida por tempo limitado.</strong>
          </p>
        </div>
        <Countdown />
        <HeroAnimation />
        <Link
          href="https://api.whatsapp.com/send?phone=5515997096890&text=Olá,+quero+a+vaga+do+eu+filho+no+programa+de+férias"
          target="_blank"
        >
          <Image
            src="/whatsapp.avif"
            width={80}
            height={80}
            className="z-1 fixed bottom-15 right-5"
            alt="ícone do WhatsApp para entrar em contato"
          />
        </Link>
      </div>
    </main>
  );
}

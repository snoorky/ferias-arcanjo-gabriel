import Image from "next/image";
import { Button } from "../components/button";
import { Limited } from "../components/limited";
import { Countdown } from "@/components/countdown";

export default function Hero() {
  return (
    <div
      className="h-full w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/banner.webp')" }}
    >
      <div className="relative h-full w-full bg-black/50 px-50">
        <Image
          src="/logo.png"
          width={210}
          height={150}
          alt="logo do Colégio Arcanjo Gabriel"
          className="mb-28"
          loading="lazy"
        />
        <div className="text-center space-y-4 flex flex-col items-center pb-56">
          <h1 className="text-yellow text-6xl">
            Onde cada risada vira lembrança e cada brincadeira, um aprendizado
          </h1>
          <p className="text-white text-2xl">
            Férias especiais no Colégio Arcanjo Gabriel para crianças de 3 a 10
            anos, com um mês inteiro de amor, diversão e descobertas que vão
            marcar a infância do jeitinho que ela merece
          </p>
          <Limited />
          <Button />
          <p className="text-sm font-bold text-white px-72">
            Não é necessário estar matriculado no Colégio Arcanjo Gabriel para
            participar do nosso curso de férias! Inscreva-se agora!
          </p>
        </div>
        <Countdown />
        <Image
          src="/whatsapp.avif"
          width={80}
          height={80}
          className="fixed bottom-10 right-10"
          alt="ícone do WhatsApp para entrar em contato"
        />
      </div>
    </div>
  );
}

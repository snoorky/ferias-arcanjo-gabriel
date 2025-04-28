import { Button } from "@/components/button";
import { Limited } from "@/components/limited";
import Image from "next/image";

export default function CallToAction() {
  return (
    <div className="w-screen px-50 py-24 flex relative overflow-hidden">
      <div className="flex flex-col items-start w-1/2 pr-20 space-y-4">
        <Limited />
        <h2 className="font-bold text-5xl">Garanta a vaga do seu filho!</h2>
        <p>
          Cada atividade do nosso programa de férias foi pensada com muito
          cuidado para estimular o desenvolvimento emocional, social e criativo
          das crianças.
        </p>
        <p>
          Aqui, elas aprendem brincando, fazem amigos, se sentem acolhidas e
          vivem momentos mágicos todos os dias.
        </p>
        <p>
          Garanta a vaga do seu filho e proporcione a ele uma experiência de
          férias rica em afeto e aprendizado.
        </p>
        <Button />
        <p className="text-sm">
          * Inscrições até 20/06/2025 ou enquanto houver vagas
        </p>
      </div>
      <Image
        src={"/cta.webp"}
        alt="crianças felizes"
        width={720}
        height={720}
        className="absolute right-20 top-10"
        loading="lazy"
      />
    </div>
  );
}

import { CTAAnimation } from "@/app/animations";
import { Button } from "@/_components/button";
import { Limited } from "@/_components/limited";
import Image from "next/image";

export default function CallToAction() {
  return (
    <section
      className="responsive marginBlock pb-[24rem] md:pb-[34rem] xl:pb-32 relative overflow-hidden"
      id="cta"
    >
      <div className="flex flex-col items-center xl:items-start space-y-4 text-center xl:text-start xl:w-1/2">
        <Limited />
        <h2 className="title text-blue">Garanta a vaga do seu filho!</h2>
        <p className="paragraph mb-4">
          Cada atividade do nosso programa de férias foi pensada com muito
          cuidado para estimular o desenvolvimento emocional, social e criativo
          das crianças. Não perca a oportunidade de proporcionar ao seu filho(a)
          uma experiência de férias rica em afeto e aprendizado.
        </p>
        <Button />
        <p className="footerline text-sm">
          * Inscrições até 20/06/2025 ou enquanto houver vagas
        </p>
      </div>
      <Image
        src={"/cta.webp"}
        alt="crianças felizes"
        width={570}
        height={570}
        className="ctaImage absolute bottom-0 max-xl:left-1/2 max-xl:-translate-x-1/2 xl:right-40 xl:top-10"
        loading="lazy"
      />
      <CTAAnimation />
    </section>
  );
}

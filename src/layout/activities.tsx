"use client";

import { ActivitiesAnimation } from "@/app/animations";
import { Button } from "@/components/button";
import Image from "next/image";
import { useState } from "react";

export default function Activities() {
  const weeks = [
    {
      title: "Semana 1",
      dates: "(01/06 ao 04/06)",
      items: [
        {
          icon: "bicycle",
          title: "Dia da Bicicleta",
          description:
            "Um dia ao ar livre para as crianças trazerem suas bicicletas, patinetes e velotrols.",
        },
        {
          icon: "catering",
          title: "Buffet Infantil",
          description:
            "Uma manhã em um espaço seguro, com brinquedos, escorregadores e muita alegria em grupo.",
        },
        {
          icon: "picnic",
          title: "Piquenique",
          description:
            "Momento de socialização com lanchinhos e brincadeiras no estilo “acampamento”.",
        },
        {
          icon: "video",
          title: "Cinema com Pipoca",
          description:
            "Sessão de cinema com direito a pipoca, almofadas e muito aconchego.",
        },
      ],
    },
    {
      title: "Semana 2",
      dates: "(07/06 ao 11/06)",
      items: [
        {
          icon: "costume",
          title: "Festa a Fantasia",
          description:
            "Um dia mágico para virem fantasiados como heróis, princesas ou personagens favoritos!",
        },
        {
          icon: "toy",
          title: "Gincanas",
          description:
            "Atividades para estimular a cooperação, coordenação motora e, claro, muita diversão em grupo!",
        },
        {
          icon: "gift",
          title: "Caixa das Sensações",
          description:
            "Atividade sensorial onde as crianças exploram texturas, cheiros e objetos misteriosos.",
        },
        {
          icon: "juggler",
          title: "Oficina do Circo",
          description:
            "Malabares, equilíbrio e muita criatividade! Uma manhã divertida no mundo encantado do circo.",
        },
      ],
    },
    {
      title: "Semana 3",
      dates: "(14/06 ao 18/06)",
      items: [
        {
          icon: "player",
          title: "Dia da Atividade Física",
          description:
            "Brincadeiras de correr e pular, com foco no desenvolvimento motor e no gasto de energia saudável.",
        },
        {
          icon: "brush",
          title: "Oficina de Pintura",
          description:
            "Tintas, pincéis, mãos e muita imaginação! As crianças vão criar suas próprias obras de arte.",
        },
        {
          icon: "pajamas",
          title: "Festa do Pijama",
          description:
            "Uma tarde de histórias, pelúcias e pijamas, como uma noite do soninho durante o dia!",
        },
        {
          icon: "storytelling",
          title: "Contação de História",
          description:
            "Histórias ganham vida com personagens, vozes e imaginação guiada por nossos educadores.",
        },
        {
          icon: "zoo",
          title: "Passeio ao Zoológico",
          description:
            "Uma experiência educativa e divertida com contato direto com o mundo animal.",
        },
      ],
    },
    {
      title: "Semana 4",
      dates: "(21/06 ao 25/06)",
      items: [
        {
          icon: "cinema",
          title: "Cinema no Shopping",
          description:
            "Passeio especial fora da escola com filme infantil escolhido especialmente para os pequenos.",
        },
        {
          icon: "hairstyle",
          title: "Cabelo Maluco",
          description:
            "Cabelos coloridos, penteados criativos e muita alegria! Um dia para extravasar estilo e diversão.",
        },
        {
          icon: "handcraft",
          title: "Artesanato",
          description:
            "Atividade manual que desenvolve coordenação e criatividade, com materiais feitos por eles.",
        },
        {
          icon: "science",
          title: "Experimentos Científicos",
          description:
            "Misturinhas, espumas e cores! Atividades para despertar o cientista em cada criança.",
        },
        {
          icon: "kite",
          title: "Brincadeiras com Pipas",
          description:
            "Pipas coloridas ganham o céu! Um dia leve e alegre com vento no rosto e olhos brilhando.",
        },
      ],
    },
    {
      title: "Semana 5",
      dates: "(28/06 ao 31/06)",
      items: [
        {
          icon: "cooking",
          title: "Culinária",
          description:
            "Receitinhas simples feitas pelas próprias crianças. Uma experiência divertida, sensorial e deliciosa!",
        },
        {
          icon: "toys",
          title: "Dia do Brinquedo Preferido",
          description:
            "Cada criança pode trazer seu brinquedo favorito para compartilhar um momento com os colegas.",
        },
        {
          icon: "baby-feet",
          title: "Pé de Lata",
          description:
            "Brincadeira tradicional que estimula equilíbrio, risadas e contato com jogos da nossa infância.",
        },
        {
          icon: "bounce",
          title: "Brinquedos Infláveis",
          description:
            "Um dia inteiro com escorregadores, castelinhos e pula-pulas! Diversão garantida do início ao fim.",
        },
      ],
    },
  ];

  const [selectedWeek, setSelectedWeek] = useState<number>(0);
  const selectedItems = weeks[selectedWeek].items;

  return (
    <div
      className="w-screen px-50 py-24 space-y-12 flex flex-col items-center"
      id="activities"
    >
      <h2 className="text-blue text-center font-bold text-5xl title">
        Programação Completa
      </h2>
      <div className="flex gap-10">
        <div className="w-1/5 space-y-4">
          {weeks.map((week, index) => (
            <button
              key={index}
              onClick={() => setSelectedWeek(index)}
              className={`w-full py-2 px-4 rounded-xl shadow-soft text-blue item${index} ${
                selectedWeek === index && "bg-blue text-white"
              }`}
            >
              <h3 className="font-semibold">{week.title}</h3>
              <p className="text-sm">{week.dates}</p>
            </button>
          ))}
        </div>
        <div className="w-4/5 flex activities">
          <div className="grid grid-cols-6 gap-4">
            {selectedItems.map((item, index) => {
              const items =
                selectedItems.length === 4
                  ? "col-span-3"
                  : index < 3
                  ? "col-span-2"
                  : "col-span-3";

              return (
                <div
                  key={index}
                  className={`p-4 rounded-xl shadow-soft flex flex-col items-center text-center ${items}`}
                >
                  <Image
                    src={`/icons/${item.icon}.png`}
                    alt={item.title}
                    width={40}
                    height={40}
                    loading="lazy"
                  />
                  <h3 className="font-semibold mt-2">{item.title}</h3>
                  <p className="">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Button />
      <ActivitiesAnimation />
    </div>
  );
}

"use client";

import React from "react";
import { useState } from "react";

const arrow = (active: boolean) => (
  <div
    className={`rounded-full p-2 ${
      active == true ? "bg-blue/20" : "bg-black/20"
    }`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      className={`stroke-black/50 w-3 h-3 ${
        active == true ? "-scale-y-100" : ""
      }`}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
      />
    </svg>
  </div>
);

const faqData = [
  {
    question: "Com que idade pode participar?",
    answer: `Nossa programação é dividida em duas faixas etárias:
      <br>• <strong>Berçário (0 a 2 anos)</strong>: Atividades adaptadas para o desenvolvimento sensorial e motor.
      <br>• <strong>Infantil (3 a 10 anos)</strong>: Brincadeiras, aventuras e aprendizagens para todas as idades!`,
  },
  {
    question: "Quais são os horários das atividades?",
    answer: `As atividades acontecem no período integral (8h às 17h), mas também oferecemos <strong>meio período</strong> e <strong>semi-integral</strong>, dependendo da sua necessidade. Você pode escolher a opção que melhor se encaixa na rotina do seu filho!`,
  },
  {
    question: "O que está incluso na programação?",
    answer: `Está incluso tudo o que seu filho vai precisar para se divertir e aprender:
      <br>• <strong>Atividades pedagógicas</strong> e <strong>recreativas</strong> para o desenvolvimento físico e emocional.
      <br>• <strong>Lanches</strong> e <strong>alimentação</strong> saudáveis.
      <br>• <strong>Materiais</strong> para atividades de arte, jogos e experimentos.
      <br>• <strong>Passeios</strong> e <strong>excursões</strong>, como visitas ao zoológico, cinema e muito mais!`,
  },
  {
    question: "Quais são as opções de pagamento?",
    answer: `Oferecemos diversas formas de pagamento: cartão de crédito, boleto bancário ou transferência. Tudo para facilitar a sua inscrição!`,
  },
  {
    question: "As atividades são seguras?",
    answer: `A segurança das crianças é nossa prioridade. Todas as atividades são acompanhadas por educadores qualificados e nossos espaços são preparados para garantir que as crianças possam brincar com tranquilidade. Além disso, seguimos todos os protocolos de segurança e higiene recomendados.`,
  },
  {
    question: "O que meu filho vai almoçar durante as férias?",
    answer: `Oferecemos uma alimentação balanceada, com opções saudáveis para as crianças, respeitando suas necessidades nutricionais e possíveis restrições alimentares. Se seu filho tiver alguma alergia ou dieta especial, basta nos informar na inscrição.`,
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4">
      {faqData.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="border border-black/10 bg-white rounded-xl"
          >
            <button
              className="w-full flex justify-between items-center p-4"
              onClick={() => toggleQuestion(index)}
            >
              <h5 className={`font-semibold`}>{item.question}</h5>
              {arrow(isOpen)}
            </button>
            {isOpen && (
              <>
                <hr className="border-black/10" />
                <p
                  className="p-4 text-black/80"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

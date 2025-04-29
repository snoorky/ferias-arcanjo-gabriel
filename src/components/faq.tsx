"use client";

import React from "react";
import { useState } from "react";

const plus = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    className="fill-blue w-5 h-5"
    viewBox="0 0 16 16"
  >
    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0" />
  </svg>
);

const minus = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    className="fill-blue w-5 h-5"
    viewBox="0 0 16 16"
  >
    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1" />
  </svg>
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
            className={`border border-black/10 bg-white rounded-xl item${index}`}
          >
            <button
              className="w-full flex justify-between items-center p-4"
              onClick={() => toggleQuestion(index)}
            >
              <p className={`font-semibold`}>{item.question}</p>
              {isOpen == true ? minus() : plus()}
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

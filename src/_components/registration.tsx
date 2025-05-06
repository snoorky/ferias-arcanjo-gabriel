import Image from "next/image";
import Link from "next/link";

const text =
  "Olá!+Tenho+interesse+em+participar+do+Curso+de+Férias+do+Colégio+Arcanjo+Gabriel+e+também+gostaria+de+saber+mais+sobre+o+desconto+especial+de+30%.+Poderiam+me+enviar+mais+informações,+por+favor?";

export default function Registration() {
  return (
    <div className="registration bg-green-100 border-2 border-green-300 rounded-xl grid lg:grid-cols-8 lg:mt-14">
      <div className="p-8 py-8 flex flex-col space-y-4 mb-44 md:mb-80 lg:mb-auto md:items-center lg:col-span-3 lg:text-start lg:items-start">
        <h2 className="font-bold text-green">Desconto especial!</h2>
        <p className="text-lg leading-snug">
          Ganhe <span className="font-bold">30% de desconto</span> no curso de
          férias na compra da matrícula contraturno!
        </p>
        <Link
          href={`https://api.whatsapp.com/send?phone=5515997096890&text=${text}`}
          target="_blank"
          className="py-4 px-4 font-semibold rounded-xl bg-green text-white"
        >
          Oferta válida por tempo limitado
        </Link>
      </div>
      <div className="absolute right-1/2 lg:right-0 translate-x-1/2 lg:translate-0 bottom-0 w-[24rem] h-[12rem] md:w-[40rem] md:h-[20rem]">
        <Image
          src="/kids.png"
          alt="Crianças brincando"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

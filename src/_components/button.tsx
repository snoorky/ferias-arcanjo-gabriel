import Link from "next/link";

const text =
  "Olá!+Tenho+interesse+no+Curso+de+Férias+do+Colégio+Arcanjo+Gabriel.+Poderiam+me+enviar+mais+detalhes,+por+favor?";

export function Button() {
  return (
    <button className="button py-4 px-8 font-semibold rounded-xl bg-green text-white">
      <Link
        href={`https://api.whatsapp.com/send?phone=5515981619803&text=${text}`}
        target="_blank"
      >
        GARANTIR MINHA VAGA
      </Link>
    </button>
  );
}

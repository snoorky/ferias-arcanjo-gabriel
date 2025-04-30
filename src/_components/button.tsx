import Link from "next/link";

const text = "Olá,+quero+a+vaga+do+eu+filho+no+programa+de+férias";

export function Button() {
  return (
    <button className="button p-4 rounded-xl bg-green text-white">
      <Link
        href={`https://api.whatsapp.com/send?phone=5515997096890&text=${text}`}
        target="_blank"
      >
        GARANTIR MINHA VAGA
      </Link>
    </button>
  );
}

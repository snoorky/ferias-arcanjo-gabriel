import Link from "next/link";

export function Button() {
  return (
    <button className="bg-green text-white p-4 rounded-xl button">
      <Link href={"/"}>GARANTIR MINHA VAGA</Link>
    </button>
  );
}

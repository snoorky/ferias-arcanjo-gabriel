import Link from "next/link";

export function Button() {
  return (
    <button className="bg-green text-white p-4 rounded-xl">
      <Link href={"/"}>GARANTIR MINHA VAGA</Link>
    </button>
  );
}

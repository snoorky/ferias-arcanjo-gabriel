import Link from "next/link";

export function Button() {
  return (
    <button className="button p-4 rounded-xl bg-green text-white">
      <Link href={"/"}>GARANTIR MINHA VAGA</Link>
    </button>
  );
}

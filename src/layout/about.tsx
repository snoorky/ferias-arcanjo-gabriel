import { JustifiedGallery } from "@/components/gallery";
import { Video } from "@/components/video";

export default function About() {
  return (
    <div className="w-screen bg-blue/15 py-24 flex flex-col justify-center gap-24">
      <div className="flex items-center justify-between gap-8 px-50">
        <div className="w-full h-full rounded-xl overflow-hidden">
          <Video />
        </div>
        <div className="w-2/3 space-y-4">
          <h4 className="text-lg font-bold -mb-1">Colégio</h4>
          <h2 className="font-bold text-5xl">Arcanjo Gabriel</h2>
          <p>
            O Colégio Arcanjo Gabriel é especializado no atendimento exclusivo à
            educação infantil. Atendemos crianças na faixa de 0 a 5 anos, nos
            períodos Meio Período, Semi-Integral e Integral.
          </p>
          <p>
            Nossa abordagem pedagógica é sócio-interacionista, acreditando que
            toda criança já nasce com saberes e que o papel da escola é mediar
            suas interações com o meio, potencializando seu desenvolvimento
            através de diferentes linguagens.
          </p>
        </div>
      </div>
      <h2 className="text-center text-blue font-bold text-5xl">
        Quem já viveu, amou, e quer voltar!
      </h2>
      <JustifiedGallery />
    </div>
  );
}

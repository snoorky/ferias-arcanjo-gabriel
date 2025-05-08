import { AboutAnimation } from "@/app/animations";
import { JustifiedGallery } from "@/_components/gallery";
import { Video } from "@/_components/video";

export default function About() {
  return (
    <section
      className="responsive marginBlock spacingTitle bg-blue/15 md:gap-4 lg:gap-8 flex flex-col text-center"
      id="about"
    >
      <div className="flex flex-col xl:flex-row gap-8">
        <div className="video rounded-xl overflow-hidden w-full h-full">
          <Video />
        </div>
        <div className="space-y-2 xl:w-2/3 xl:space-y-4 xl:text-start">
          <h4 className="subtitle font-bold -mb-1 text-green">Colégio</h4>
          <h2 className="title text-blue">Arcanjo Gabriel</h2>
          <div className="content space-y-2 xl:space-y-4">
            <p>
              O Colégio Arcanjo Gabriel é especializado no atendimento exclusivo
              à educação infantil. Atendemos crianças na faixa de 0 a 5 anos,
              nos períodos Meio Período, Semi-Integral e Integral.
            </p>
            <p>
              Nossa abordagem pedagógica é sócio-interacionista, acreditando que
              toda criança já nasce com saberes e que o papel da escola é mediar
              suas interações com o meio, potencializando seu desenvolvimento
              através de diferentes linguagens.
            </p>
          </div>
        </div>
      </div>
      <h2 className="titleGallery font-bold text-blue">
        Quem já viveu, amou, e quer voltar!
      </h2>
      <JustifiedGallery />
      <AboutAnimation />
    </section>
  );
}

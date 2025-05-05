import { FAQAnimation } from "@/app/animations";
import { FAQ } from "@/_components/faq";

export default function FAQSection() {
  return (
    <section
      className="responsive marginBlock spacingTitle bg-blue/15"
      id="faq"
    >
      <h2 className="title text-center text-blue">Perguntas Frequentes</h2>
      <FAQ />
      <FAQAnimation />
    </section>
  );
}

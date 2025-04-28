import { FAQ } from "@/components/faq";

export default function FAQSection() {
  return (
    <div className="w-screen bg-blue/15 px-50 py-24 flex flex-col gap-12">
      <h2 className="text-center text-blue font-bold text-5xl">
        Perguntas Frequentes
      </h2>
      <FAQ />
    </div>
  );
}

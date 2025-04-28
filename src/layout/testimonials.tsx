import { Testimonial } from "@/components/testimonial";

export default function Testimonials() {
  return (
    <div className="w-screen px-50 py-24 space-y-12">
      <h2 className="text-blue text-center font-bold text-5xl">
        Olha o que outros papais e mamães acharam da nossa escolinha
      </h2>
      <Testimonial />
    </div>
  );
}

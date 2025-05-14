import { TestimonialAnimation } from "@/app/animations";
import { Testimonial } from "@/_components/testimonial";

export default function Testimonials() {
  return (
    <section className="responsive marginBlock spacingTitle" id="testimonial">
      <h2 className="title text-blue text-center">
        Olha o que outros papais e mamães acharam da nossa escolinha
      </h2>
      <Testimonial />
      <TestimonialAnimation />
    </section>
  );
}

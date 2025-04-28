import About from "@/layout/about";
import Activities from "@/layout/activities";
import Benefits from "@/layout/benefits";
import Hero from "@/layout/hero";
import Testimonials from "@/layout/testimonials";
import FAQ from "@/layout/faq";
import CallToAction from "@/layout/cta";
import Footer from "@/layout/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Activities />
      <About />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <Footer />
    </>
  );
}

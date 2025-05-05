import About from "@/_layout/about";
import Activities from "@/_layout/activities";
import Benefits from "@/_layout/benefits";
import Hero from "@/_layout/hero";
import Testimonials from "@/_layout/testimonials";
import FAQ from "@/_layout/faq";
import CallToAction from "@/_layout/cta";
import Footer from "@/_layout/footer";

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

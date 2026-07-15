import OurMind from "@/components/sections/OurMind";
import Expertise from "@/components/sections/Expertise";
import HeroSection from "@/components/sections/HeroSection";
import OurAgent from "@/components/sections/OurAgent";
import Services from "@/components/sections/Services";
import Header from "@/components/ui/Header";
import Form from "@/components/sections/Form";
import Footer from "@/components/sections/Footer";
import Highlights from "@/components/sections/Highlights";
import Partners from "@/components/sections/Partners";
import About from "@/components/sections/About"
import OurApproach from "@/components/sections/OurApproach";
export default function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
      <HeroSection />

      <About/>
      {/* What we offer */}
      <Services />
      <OurApproach/>
      {/* Why choose us / Highlights */}
      <Highlights />

      {/* Our expertise */}
      <Expertise />

      {/* Meet the team */}
      <OurAgent />

      <Partners />

      {/* Company vision & values */}
      <OurMind />

      {/* Contact / CTA */}
      <Form />

      <Footer />
    </>
  );
}
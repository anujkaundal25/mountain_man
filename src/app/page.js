import Location from "@/components/sections/Location";
import HeroSection from "@/components/sections/HeroSection";
import OurAgent from "@/components/sections/OurAgent";
import Header from "@/components/ui/Header";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";
import Project from "@/components/sections/Project";
import Partners from "@/components/sections/Partners";
import About from "@/components/sections/About"
import Ourservices from "@/components/sections/Ourservices";
export default function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
      <HeroSection />

      <About/>
      {/* What we offer */}
       <OurAgent />

      <Ourservices/>

      {/* our projects */}
      <Project />
     
     {/* loaction */}
     <Location/>
     
     {/* clients */}
      <Partners />

      {/* Contact / CTA */}
      <Contact />

      <Footer />
    </>
  );
}
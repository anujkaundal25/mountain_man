import OurMind from "@/components/sections/OurMind";
import Expertise from "@/components/sections/Expertise";
import HeroSection from "@/components/sections/HeroSection";
import OurAgent from "@/components/sections/OurAgent";
import Services from "@/components/sections/Services";
import Header from "@/components/ui/Header";
import Image from "next/image";
import Form from "@/components/sections/Form";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <Services/>
    <OurAgent/>
    <Expertise/>
    <OurMind/>
    <Form/>
    <Footer/>
    </>
  );
}

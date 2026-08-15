import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/layout/Loader";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Problem from "@/components/sections/Problem";
import Capabilities from "@/components/sections/Capabilities";
import Work from "@/components/sections/Work";
import Process from "@/components/sections/Process";
import Why from "@/components/sections/Why";
import Technology from "@/components/sections/Technology";
import Trust from "@/components/sections/Trust";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Loader />
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Problem />
        <Capabilities />
        <Work />
        <Process />
        <Why />
        <Technology />
        <Trust />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/layout/Loader";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Capabilities from "@/components/sections/Capabilities";
import Process from "@/components/sections/Process";
import Technology from "@/components/sections/Technology";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Loader />
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Capabilities />
        <Process />
        <Technology />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

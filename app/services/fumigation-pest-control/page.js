import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import FumigationEliminatesSection from "@/components/FumigationEliminatesSection";
import Header from "@/components/Header";
import HowServicesWork from "@/components/HowServicesWork";
import PageHero from "@/components/PageHero";

export default function FumigationPestControlPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <PageHero
          title="Fumigation & Pest Control"
          backgroundImage="/images/heroimg.png"
          alt="Fumigation and pest control team at work"
          overlayClassName="bg-[linear-gradient(90deg,_rgba(37,168,201,0.78)_0%,_rgba(37,168,201,0.64)_45%,_rgba(37,168,201,0.34)_100%)]"
          contentClassName="absolute inset-y-0 left-0 flex max-w-[34rem] items-center px-6 sm:px-10"
          titleClassName="text-4xl font-black uppercase leading-[1.05] text-white "
        />
        <FumigationEliminatesSection />
        <HowServicesWork />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

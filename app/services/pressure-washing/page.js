import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowServicesWork from "@/components/HowServicesWork";
import PageHero from "@/components/PageHero";
import PressureWashingServicesSection from "@/components/PressureWashingServicesSection";

export default function PressureWashingPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <PageHero
          title="Pressure Washing Services"
          backgroundImage="/images/team.png"
          alt="286 Hygiene pressure washing team"
          overlayClassName="bg-[linear-gradient(90deg,_rgba(37,168,201,0.76)_0%,_rgba(37,168,201,0.62)_48%,_rgba(37,168,201,0.28)_100%)]"
          contentClassName="absolute inset-y-0 left-0 flex max-w-[34rem] items-end px-6 pb-8 sm:px-10 sm:pb-10"
          titleClassName="text-4xl font-black uppercase leading-[1.02] text-white "
        />
        <PressureWashingServicesSection />
        <HowServicesWork />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

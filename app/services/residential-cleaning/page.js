import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowServicesWork from "@/components/HowServicesWork";
import PageHero from "@/components/PageHero";
import ResidentialIncludesSection from "@/components/ResidentialIncludesSection";

export default function ResidentialCleaningPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <PageHero
          title="Our residential cleaning services help homeowners maintain clean, hygienic living environments."
          backgroundImage="/images/heroimg.png"
          alt="Residential cleaning team at work"
          overlayClassName="bg-[linear-gradient(90deg,_rgba(37,168,201,0.78)_0%,_rgba(37,168,201,0.64)_45%,_rgba(37,168,201,0.34)_100%)]"
          contentClassName="absolute inset-y-0 left-0 flex max-w-[46rem] items-center px-6 sm:px-10"
          titleClassName="text-3xl font-black uppercase leading-[1.2] text-white "
        />
        <ResidentialIncludesSection />
        <HowServicesWork />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

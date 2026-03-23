import CallToAction from "@/components/CallToAction";
import CommercialIncludesSection from "@/components/CommercialIncludesSection";
import CommercialIndustriesSection from "@/components/CommercialIndustriesSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowServicesWork from "@/components/HowServicesWork";
import PageHero from "@/components/PageHero";

export default function CommercialCleaningPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <PageHero
          title="A clean workspace improves productivity, employee health, and the professional image of your business"
          backgroundImage="/images/heroimg.png"
          alt="Commercial cleaning team at work"
          overlayClassName="bg-[linear-gradient(90deg,_rgba(37,168,201,0.78)_0%,_rgba(37,168,201,0.64)_45%,_rgba(37,168,201,0.34)_100%)]"
          sectionClassName="px-4 pb-10 pt-8 sm:px-6 lg:px-8"
          contentClassName="absolute inset-y-0 left-0 flex max-w-[48rem] items-center px-6 sm:px-10"
          titleClassName="text-3xl font-black uppercase leading-[1.15] text-white"
        />
        <CommercialIndustriesSection />
        <CommercialIncludesSection />
        <HowServicesWork />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

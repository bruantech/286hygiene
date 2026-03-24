import CommercialIncludesSection from "../../../components/services/commercial-cleaning/CommercialIncludesSection";
import CommercialIndustriesSection from "../../../components/services/commercial-cleaning/CommercialIndustriesSection";
import CallToAction from "../../../components/shared/CallToAction";
import Footer from "../../../components/shared/Footer";
import Header from "../../../components/shared/Header";
import HowServicesWork from "../../../components/shared/HowServicesWork";
import PageHero from "../../../components/shared/PageHero";
import { getPageMetadata } from "../../../lib/siteData";

export const metadata = getPageMetadata({
  title: "Commercial Cleaning Services",
  description:
    "Professional commercial cleaning services for offices, retail stores, schools, hotels, restaurants, and other business spaces in Lagos, Nigeria.",
  path: "/services/commercial-cleaning"
});

export default function CommercialCleaningPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <PageHero
          title="A clean workspace improves productivity, and the professional image of your business"
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

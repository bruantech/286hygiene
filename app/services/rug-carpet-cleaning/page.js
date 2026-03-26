import RugCarpetCleaningIncludesSection from "../../../components/services/rug-carpet-cleaning/RugCarpetCleaningIncludesSection";
import CallToAction from "../../../components/shared/CallToAction";
import Footer from "../../../components/shared/Footer";
import Header from "../../../components/shared/Header";
import HowServicesWork from "../../../components/shared/HowServicesWork";
import PageHero from "../../../components/shared/PageHero";
import { getPageMetadata } from "../../../lib/siteData";

export const metadata = getPageMetadata({
  title: "Rug and Carpet Cleaning Services",
  description:
    "Restore rugs and carpets with professional cleaning services from 286 Hygiene for fresher, healthier interiors in Lagos, Nigeria.",
  path: "/services/rug-carpet-cleaning"
});

export default function RugCarpetCleaningPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <PageHero
          title="Rug & Carpet Cleaning Services"
          animatedTitlePrefix=""
          animatedTitleWords={["Rug", "Carpet", "Floor Textile", "Fiber"]}
          animatedTitleSuffix="Cleaning Services"
          animatedTitleInterval={2500}
          animatedTitleClassName="text-[#d9f7ff]"
          backgroundImage="/images/rugHero.png"
          alt="286 Hygiene rug and carpet cleaning professionals"
          overlayClassName="bg-[linear-gradient(90deg,_rgba(37,168,201,0.76)_0%,_rgba(37,168,201,0.62)_48%,_rgba(37,168,201,0.28)_100%)]"
          contentClassName="absolute inset-y-0 left-0 flex max-w-[40rem] items-end px-6 pb-8 sm:px-10 sm:pb-10"
          titleClassName="text-4xl font-black uppercase leading-[1.02] text-white sm:text-5xl"
        />
        <RugCarpetCleaningIncludesSection />
        <HowServicesWork />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

import ResidentialIncludesSection from "../../../components/services/residential-cleaning/ResidentialIncludesSection";
import CallToAction from "../../../components/shared/CallToAction";
import Footer from "../../../components/shared/Footer";
import Header from "../../../components/shared/Header";
import HowServicesWork from "../../../components/shared/HowServicesWork";
import PageHero from "../../../components/shared/PageHero";
import { getPageMetadata } from "../../../lib/siteData";

export const metadata = getPageMetadata({
  title: "Residential Cleaning Services",
  description:
    "Keep your home clean, healthy, and comfortable with residential cleaning services from 286 Hygiene in Lagos, Nigeria.",
  path: "/services/residential-cleaning"
});

export default function ResidentialCleaningPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <PageHero
          title="Our residential cleaning services help homeowners maintain clean, hygienic living environments."
          animatedTitlePrefix="Residential care for"
          animatedTitleWords={["homes", "apartments", "families", "living spaces"]}
          animatedTitleSuffix="that feel refreshed."
          animatedTitleInterval={2500}
          animatedTitleClassName="text-[#d9f7ff]"
          backgroundImage="/images/residentialHero.png"
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

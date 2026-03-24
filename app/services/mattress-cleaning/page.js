import MattressCleaningServicesSection from "../../../components/services/mattress-cleaning/MattressCleaningServicesSection";
import CallToAction from "../../../components/shared/CallToAction";
import Footer from "../../../components/shared/Footer";
import Header from "../../../components/shared/Header";
import HowServicesWork from "../../../components/shared/HowServicesWork";
import PageHero from "../../../components/shared/PageHero";
import { getPageMetadata } from "../../../lib/siteData";

export const metadata = getPageMetadata({
  title: "Mattress Cleaning Services",
  description:
    "Refresh and sanitize your sleeping environment with professional mattress cleaning services from 286 Hygiene in Lagos, Nigeria.",
  path: "/services/mattress-cleaning"
});

export default function MattressCleaningPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <PageHero
          title="Mattress Cleaning Services"
          backgroundImage="/images/team.png"
          alt="286 Hygiene mattress cleaning professionals"
          overlayClassName="bg-[linear-gradient(90deg,_rgba(37,168,201,0.76)_0%,_rgba(37,168,201,0.62)_48%,_rgba(37,168,201,0.28)_100%)]"
          contentClassName="absolute inset-y-0 left-0 flex max-w-[34rem] items-end px-6 pb-8 sm:px-10 sm:pb-10"
          titleClassName="text-4xl font-black uppercase leading-[1.02] text-white sm:text-5xl"
        />
        <MattressCleaningServicesSection />
        <HowServicesWork />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

import FumigationEliminatesSection from "../../../components/services/fumigation-pest-control/FumigationEliminatesSection";
import CallToAction from "../../../components/shared/CallToAction";
import Footer from "../../../components/shared/Footer";
import Header from "../../../components/shared/Header";
import HowServicesWork from "../../../components/shared/HowServicesWork";
import PageHero from "../../../components/shared/PageHero";
import { getPageMetadata } from "../../../lib/siteData";

export const metadata = getPageMetadata({
  title: "Fumigation and Pest Control",
  description:
    "286 Hygiene provides fumigation and pest control services in Lagos for mosquitoes, cockroaches, rodents, bed bugs, and termites.",
  path: "/services/fumigation-pest-control"
});

export default function FumigationPestControlPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <PageHero
          title="Fumigation & Pest Control"
          animatedTitlePrefix=""
          animatedTitleWords={[
            "Fumigation",
            "Pest Control",
            "Rodent Control",
            "Insect Protection",
          ]}
          animatedTitleSuffix=""
          animatedTitleInterval={2600}
          animatedTitleClassName="text-[#d9f7ff]"
          backgroundImage="/images/pestControlHero.webp"
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

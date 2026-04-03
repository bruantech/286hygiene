import PostConstructionHighlightsSection from "../../../components/services/post-construction-cleaning/PostConstructionHighlightsSection";
import CallToAction from "../../../components/shared/CallToAction";
import Footer from "../../../components/shared/Footer";
import Header from "../../../components/shared/Header";
import HowServicesWork from "../../../components/shared/HowServicesWork";
import PageHero from "../../../components/shared/PageHero";
import { getPageMetadata } from "../../../lib/siteData";

export const metadata = getPageMetadata({
  title: "Post-Construction Cleaning",
  description:
    "Prepare newly built or renovated spaces for use with detailed post-construction cleaning services from 286 Hygiene.",
  path: "/services/post-construction-cleaning"
});

export default function PostConstructionCleaningPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <PageHero
          title="Our team provides professional post-construction cleaning to prepare the space for use."
          animatedTitlePrefix="Post-construction cleanup for"
          animatedTitleWords={["homes", "offices", "sites", "interiors"]}
          animatedTitleSuffix="ready for handover."
          animatedTitleInterval={2500}
          animatedTitleClassName="text-[#d9f7ff]"
          backgroundImage="/images/ladder.webp"
          alt="Post construction cleaning team at work"
          overlayClassName="bg-[linear-gradient(90deg,_rgba(37,168,201,0.78)_0%,_rgba(37,168,201,0.64)_45%,_rgba(37,168,201,0.34)_100%)]"
          contentClassName="absolute inset-y-0 left-0 flex max-w-[48rem] items-center px-6 sm:px-10"
          titleClassName="text-3xl font-black uppercase leading-[1.2] text-white "
        />
        <PostConstructionHighlightsSection />
        <HowServicesWork />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

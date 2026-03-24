import AboutTimeline from "../../components/about/AboutTimeline";
import CoreValuesSection from "../../components/about/CoreValuesSection";
import CallToAction from "../../components/shared/CallToAction";
import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";
import PageHero from "../../components/shared/PageHero";
import { getPageMetadata } from "../../lib/siteData";

export const metadata = getPageMetadata({
  title: "About 286 Hygiene",
  description:
    "Learn about 286 Hygiene, our mission, our values, and our commitment to delivering reliable cleaning and hygiene services in Nigeria.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <PageHero
          title="To deliver professional hygiene solutions that make every space sparkle."
          backgroundImage="/images/heroimg.png"
          alt="286 Hygiene cleaning team in action"
          overlayClassName="bg-[linear-gradient(90deg,_rgba(8,58,53,0.64)_0%,_rgba(8,58,53,0.34)_42%,_rgba(8,58,53,0.1)_100%)]"
          imageClassName="h-[15rem] w-full object-cover sm:h-[20rem] lg:h-[23rem]"
          contentClassName="absolute inset-y-0 left-0 flex max-w-[28rem] items-center px-6 sm:px-10"
          titleClassName="text-3xl font-black uppercase leading-[1.15] text-white"
        />
        <AboutTimeline />
        <CoreValuesSection />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

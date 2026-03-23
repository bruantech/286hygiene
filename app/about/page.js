import AboutTimeline from "@/components/AboutTimeline";
import CallToAction from "@/components/CallToAction";
import CoreValuesSection from "@/components/CoreValuesSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";

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

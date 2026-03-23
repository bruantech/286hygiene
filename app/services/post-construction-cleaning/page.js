import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowServicesWork from "@/components/HowServicesWork";
import PageHero from "@/components/PageHero";
import PostConstructionHighlightsSection from "@/components/PostConstructionHighlightsSection";

export default function PostConstructionCleaningPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <PageHero
          title="Our team provides professional post-construction cleaning to prepare the space for use."
          backgroundImage="/images/heroimg.png"
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

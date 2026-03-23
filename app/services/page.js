import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServicesGrid from "@/components/ServicesGrid";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <PageHero
          title="Our services are designed to maintain hygienic, healthy environments."
          backgroundImage="/images/heroimg.png"
          alt="286 Hygiene cleaning team delivering services"
          overlayClassName="bg-[linear-gradient(90deg,_rgba(37,168,201,0.76)_0%,_rgba(37,168,201,0.62)_45%,_rgba(37,168,201,0.32)_100%)]"
        />
        <ServicesGrid />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

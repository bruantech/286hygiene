import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowServicesWork from "@/components/HowServicesWork";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";
import WhyChooseSection from "@/components/WhyChooseSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <ServicesSection />
        <WhyChooseSection />
        <HowServicesWork />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

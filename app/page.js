import Hero from "../components/home/Hero";
import ServicesSection from "../components/home/ServicesSection";
import Testimonials from "../components/home/Testimonials";
import WhyChooseSection from "../components/home/WhyChooseSection";
import CallToAction from "../components/shared/CallToAction";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import HowServicesWork from "../components/shared/HowServicesWork";
import { getPageMetadata } from "../lib/siteData";

export const metadata = getPageMetadata({
  title: "Professional Cleaning Services in Lagos",
  description:
    "286 Hygiene offers residential cleaning, commercial cleaning, fumigation, and specialist hygiene services in Lagos, Nigeria.",
  path: "/"
});

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

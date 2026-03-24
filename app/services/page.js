import ServicesGrid from "../../components/services/shared/ServicesGrid";
import CallToAction from "../../components/shared/CallToAction";
import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";
import PageHero from "../../components/shared/PageHero";
import { getPageMetadata } from "../../lib/siteData";

export const metadata = getPageMetadata({
  title: "Cleaning Services",
  description:
    "Browse professional cleaning, fumigation, and specialist hygiene services from 286 Hygiene in Lagos, Nigeria.",
  path: "/services"
});

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

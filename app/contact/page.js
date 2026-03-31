import ContactPageSection from "../../components/contact/ContactPageSection";
import CallToAction from "../../components/shared/CallToAction";
import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";
import PageHero from "../../components/shared/PageHero";
import { getPageMetadata } from "../../lib/siteData";

export const metadata = getPageMetadata({
  title: "Contact 286 Hygiene",
  description:
    "Contact 286 Hygiene for cleaning, fumigation, and hygiene services in Lagos, Nigeria. Reach us by phone, email, or Google Maps.",
  path: "/contact"
});

export default async function ContactPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const requestedService = resolvedSearchParams?.service ?? "";
  const requestedMessage = resolvedSearchParams?.message ?? "";

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <PageHero
          title="connect with us"
          animatedTitlePrefix="Connect for"
          animatedTitleWords={[
            "bookings",
            "estimates",
            "support",
            "consultations",
          ]}
          animatedTitleSuffix=""
          animatedTitleInterval={2500}
          animatedTitleClassName="text-[#d9f7ff]"
          extraText="Experience clinical excellence. Reach out to our 
          team to design a bespoke sanitation protocol for your space."
          backgroundImage="/images/contactHero.webp"
          alt="Commercial cleaning team at work"
          overlayClassName="bg-[linear-gradient(90deg,_rgba(37,168,201,0.78)_0%,_rgba(37,168,201,0.64)_45%,_rgba(37,168,201,0.34)_100%)]"
          sectionClassName="px-4 pb-10 pt-8 sm:px-6 lg:px-8"
          contentClassName="absolute inset-y-0 left-0 flex max-w-[48rem] items-center px-6 sm:px-10"
          titleClassName="text-3xl font-black uppercase leading-[1.15] text-white"
        />
        <ContactPageSection
          requestedService={requestedService}
          requestedMessage={requestedMessage}
        />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

import CleaningProcessSection from "../../components/cleaning-process/CleaningProcessSection";
import CallToAction from "../../components/shared/CallToAction";
import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";
import PageHero from "../../components/shared/PageHero";
import { getPageMetadata } from "../../lib/siteData";

export const metadata = getPageMetadata({
  title: "Our Cleaning Process",
  description:
    "See how 286 Hygiene approaches inspection, planning, cleaning, and final review to deliver consistent hygiene results.",
  path: "/cleaning-process"
});

export default function CleaningProcessPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <PageHero
          title="Our Cleaning Process"
          animatedTitlePrefix="Our"
          animatedTitleWords={["Cleaning", "Service", "Delivery", "Review"]}
          animatedTitleSuffix="Process"
          animatedTitleInterval={2600}
          animatedTitleClassName="text-[#cbeff6]"
          backgroundImage="/images/heroimg.png"
          alt="286 Hygiene team preparing a professional cleaning visit"
          overlayClassName="bg-[linear-gradient(110deg,rgba(7,28,39,0.82)_0%,rgba(7,28,39,0.58)_38%,rgba(11,135,104,0.22)_100%)]"
          extraText="Every visit follows a clear workflow, from site assessment to final sign-off, so the result feels consistent, hygienic, and ready for use."
          titleClassName="text-3xl font-black leading-[1.02] text-white sm:text-5xl lg:text-6xl"
        />

        <section className="px-4 mt-6 sm:mt-0 pb-4  sm:px-6 sm:pb-0 lg:px-8">
          <div className="">
            <div className=" border border-white/70 bg-white/88 p-8 shadow-[0_28px_70px_rgba(55,124,147,0.12)] backdrop-blur sm:p-10">
              <div className="inline-flex rounded-full bg-[#e8f6f1] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.24em] text-[#0b8768]">
                Structured Delivery
              </div>
              <h1 className="mt-5 text-4xl font-black leading-[0.95] tracking-tight text-[#15213a] sm:text-5xl">
                A cleaner process creates
                <span className="block text-[#0b8768]">more reliable results.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#556a74]">
                We do not approach homes, offices, and specialist hygiene jobs
                with guesswork. Our team follows a practical step-by-step
                method that helps us prepare properly, clean thoroughly, and
                leave every space with a clear standard of finish.
              </p>
            </div>

            {/* <div className="sm:grid gap-4 hidden sm:grid-cols-3 lg:grid-cols-1">
              {[
                {
                  value: "4 Stages",
                  label: "Inspection, planning, execution, and review"
                },
                {
                  value: "Tailored Setup",
                  label: "Methods adjusted to the surface, usage, and hygiene goal"
                },
                {
                  value: "Final Check",
                  label: "Every service ends with a walkthrough before sign-off"
                }
              ].map((item) => (
                <div
                  key={item.value}
                  className=" border border-[#d9ecea] bg-[linear-gradient(180deg,#ffffff_0%,#f6fbfa_100%)] p-6 shadow-[0_18px_44px_rgba(63,122,131,0.1)]"
                >
                  <div className="text-xl font-black text-[#17233b]">
                    {item.value}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#5a7079]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div> */}
          </div>
        </section>

        <CleaningProcessSection />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

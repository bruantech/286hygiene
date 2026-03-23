import {
  BadgeCheck,
  BedDouble,
  Droplets,
  ShieldCheck,
  Sparkles
} from "lucide-react";

const serviceItems = [
  {
    title: "Deep extraction cleaning",
    text: "Removes trapped dirt, sweat, and buildup embedded within mattress layers.",
    icon: Droplets
  },
  {
    title: "Removal of dust mites",
    text: "Specialized treatment helps reduce microscopic irritants that affect breathing.",
    icon: Sparkles
  },
  {
    title: "Stain removal",
    text: "Gentle spot treatment for common marks while protecting mattress fabric.",
    icon: BadgeCheck
  },
  {
    title: "Odor elimination",
    text: "Neutralizing solutions lift stale smells and leave your mattress refreshed.",
    icon: BedDouble
  },
  {
    title: "Surface sanitization",
    text: "Safe hygiene-focused finishing process helps promote a healthier sleep surface.",
    icon: ShieldCheck
  }
];

export default function MattressCleaningServicesSection() {
  return (
    <>
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 py-20 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-[2rem] border border-[#d9e8ea] bg-white px-6 py-10 shadow-[0_22px_50px_rgba(78,129,141,0.08)] sm:px-8">
            <h2 className="text-2xl font-black uppercase text-[#17222b]">
              You Need Us
            </h2>
            <p className="mt-5 max-w-[40rem] text-base leading-8 text-[#677c85]">
              Your mattress can harbor dust, bacteria, sweat, and allergens
              that affect your health and sleep quality. At 286 Hygiene, we
              provide professional mattress cleaning services designed to remove
              deep-seated dirt, eliminate odors, and restore freshness.
            </p>
          </article>

          <article className="relative overflow-hidden rounded-[2rem] bg-[#58bdd8] px-6 py-10 text-white shadow-[0_22px_50px_rgba(78,129,141,0.12)] sm:px-8">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-35"
              style={{ backgroundImage: "url('/images/service 3.png')" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(74,186,214,0.88)_0%,_rgba(142,218,238,0.8)_100%)]" />
            <div className="relative">
              <p className="max-w-[21rem] text-base font-semibold leading-8 text-white">
                Our process ensures your mattress is hygienic, safe, and
                comfortable for everyday use. We use professional equipment and
                safe cleaning solutions.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,_#38a9cc_0%,_#2d9fc4_100%)] px-4 py-18 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-black uppercase tracking-[0.04em] text-white sm:text-4xl">
            Our Mattress Cleaning Services
          </h2>

          <div className="mt-12 grid gap-2 md:grid-cols-2 xl:grid-cols-5">
            {serviceItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="min-h-[18rem]  bg-white px-5 py-6 shadow-[0_18px_36px_rgba(16,90,112,0.12)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf9fc] text-[#1999c2]">
                    <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
                  </div>
                  <h3 className="mt-10 text-xl font-extrabold leading-tight text-[#17222b]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#677c85]">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

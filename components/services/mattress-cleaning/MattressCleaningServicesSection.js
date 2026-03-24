import Image from "next/image";
import {
  BadgeCheck,
  BedDouble,
  Droplets,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const serviceItems = [
  {
    title: "Deep extraction cleaning",
    text: "Removes trapped dirt, sweat, and buildup embedded within mattress layers.",
    icon: Droplets,
  },
  {
    title: "Removal of dust mites",
    text: "Specialized treatment helps reduce microscopic irritants that affect breathing.",
    icon: Sparkles,
  },
  {
    title: "Stain removal",
    text: "Gentle spot treatment for common marks while protecting mattress fabric.",
    icon: BadgeCheck,
  },
  {
    title: "Odor elimination",
    text: "Neutralizing solutions lift stale smells and leave your mattress refreshed.",
    icon: BedDouble,
  },
  {
    title: "Surface sanitization",
    text: "Safe hygiene-focused finishing process helps promote a healthier sleep surface.",
    icon: ShieldCheck,
  },
];

export default function MattressCleaningServicesSection() {
  return (
    <>
      <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,169,204,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(214,245,222,0.42),transparent_22%),linear-gradient(180deg,#f8fcfc_0%,#eef5f5_100%)]" />

        <div className="relative mx-auto grid max-w-6xl  py-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
          <article className=" border border-white/80 bg-white/92 px-6 py-10 shadow-[0_24px_60px_rgba(78,129,141,0.08)] sm:px-8 sm:py-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0b8768]">
              Better Sleep Hygiene
            </p>
            <h2 className="mt-4 max-w-136 text-4xl font-black leading-tight text-[#17222b] sm:text-5xl">
              Mattress cleaning that restores freshness where it matters most
            </h2>
            <p className="mt-6 max-w-160 text-base leading-8 text-[#677c85]">
              Your mattress can harbor dust, bacteria, sweat, and allergens that
              affect your health and sleep quality. At 286 Hygiene, we provide
              professional mattress cleaning services designed to remove
              deep-seated dirt, eliminate odors, and restore freshness.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Deep extraction",
                "Safer sleep surface",
                "Fresh odor finish",
              ].map((label) => (
                <div
                  key={label}
                  className="rounded-full bg-[#e8f6f1] px-4 py-2 text-sm font-semibold text-[#0b8768]"
                >
                  {label}
                </div>
              ))}
            </div>
          </article>

          <article className="relative overflow-hidden  shadow-[0_24px_60px_rgba(78,129,141,0.14)]">
            <div className="relative h-full min-h-84">
              <Image
                src="/images/service 3.png"
                alt="Professional mattress cleaning service"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(74,186,214,0.28)_0%,rgba(11,135,104,0.14)_38%,rgba(17,28,35,0.76)_100%)]" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/76">
                  What You Get
                </p>
                <p className="mt-4 max-w-88 text-lg font-semibold leading-8 text-white">
                  Our process ensures your mattress is hygienic, safe, and
                  comfortable for everyday use. We use professional equipment
                  and safe cleaning solutions.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#38a9cc_0%,#2f9fc3_55%,#248dae_100%)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/76">
              Service Includes
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.04em] text-white sm:text-4xl">
              Our Mattress Cleaning Services
            </h2>
          </div>

          <div className="mt-12 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {serviceItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="min-h-72 bg-white px-5 py-6 shadow-[0_18px_36px_rgba(16,90,112,0.12)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf9fc] text-[#1999c2]">
                    <Icon
                      className="h-5 w-5"
                      strokeWidth={2.2}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-8 text-xl font-extrabold leading-tight text-[#17222b]">
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

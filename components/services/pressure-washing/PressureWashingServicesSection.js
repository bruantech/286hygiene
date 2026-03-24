import Image from "next/image";
import { BriefcaseBusiness, Building2, House } from "lucide-react";

const serviceItems = [
  {
    title: "Parking Areas",
    image: "/images/service 3.png",
    alt: "Pressure washing a driveway",
    className: "sm:col-span-2 lg:col-span-2 lg:row-span-2"
  },
  {
    title: "Walkways/Driveways",
    image: "/images/service 1.png",
    alt: "Pressure washing a walkway",
    className: "lg:col-span-1 lg:row-span-1"
  },
  {
    title: "Compound floors",
    image: "/images/team.png",
    alt: "Pressure washing compound floors",
    className: "lg:col-span-1 lg:row-span-1"
  },
  {
    title: "Outdoor tiles",
    image: "/images/service 2.png",
    alt: "Pressure washing outdoor tiles",
    className: "lg:col-span-1 lg:row-span-1"
  },
  {
    title: "Walls and fences",
    image: "/images/heroimg.png",
    alt: "Pressure washing a wall or fence",
    className: "lg:col-span-1 lg:row-span-1"
  },
 
];

export default function PressureWashingServicesSection() {
  return (
    <>
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(97,210,233,0.1),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(214,245,222,0.52),_transparent_22%),linear-gradient(180deg,_#f7fbfb_0%,_#eef5f5_100%)]" />

        <div className="relative mx-auto grid max-w-6xl  py-20 lg:grid-cols-[1.08fr_0.92fr]">
          <article className=" border border-white/70 bg-white/92 px-6 py-10 shadow-[0_22px_50px_rgba(78,129,141,0.08)] sm:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0b8768]">
              Exterior Renewal
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#17222b] sm:text-5xl">
              Pressure washing that restores hard surfaces beautifully
            </h2>
            <p className="mt-6 max-w-[40rem] text-base leading-8 text-[#677c85]">
              Over time, outdoor surfaces accumulate dirt, stains, mold, and
              grime that regular cleaning cannot remove. Our professional
              pressure washing service restores the appearance of your property
              by removing tough buildup from hard surfaces.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { label: "Homes", icon: House },
                { label: "Offices", icon: BriefcaseBusiness },
                { label: "Commercial exteriors", icon: Building2 }
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full bg-[#e8f6f1] px-4 py-2 text-sm font-semibold text-[#0b8768]"
                  >
                    <Icon className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
                    {item.label}
                  </div>
                );
              })}
            </div>
          </article>

          <article className="relative overflow-hidden bg-[#5cae9c] px-6 py-10 text-white shadow-[0_22px_50px_rgba(78,129,141,0.12)] sm:px-8">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-32"
              style={{ backgroundImage: "url('/images/service 3.png')" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(94,174,156,0.9)_0%,_rgba(135,196,184,0.78)_100%)]" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-white/80">
                What We Cover
              </p>
              <p className="mt-5 max-w-[24rem] text-lg font-semibold leading-9 text-white">
                286 Hygiene provides reliable pressure washing services for
                residential and commercial properties.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0b8768]">
              Service Areas
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#17222b] sm:text-5xl">
              Our Pressure Washing Services
            </h2>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:auto-rows-[15rem] lg:grid-cols-4">
            {serviceItems.map((item) => {
              return (
                <article
                  key={item.title}
                  className={`group relative overflow-hidden  border border-white/50 shadow-[0_20px_40px_rgba(16,90,112,0.14)] ${item.className}`}
                >
                  <div className="relative min-h-[16rem] sm:min-h-[18rem] lg:h-full lg:min-h-0">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(18,34,43,0.08)_10%,_rgba(18,34,43,0.78)_100%)]" />
                   
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                      <h3 className="text-xl font-bold uppercase leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

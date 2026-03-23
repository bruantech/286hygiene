import Image from "next/image";

const serviceItems = [
  {
    title: "Driveways",
    image: "/images/service 3.png",
    alt: "Pressure washing a driveway",
    className: "md:col-start-1 md:row-start-1 md:row-span-2 md:min-h-[42rem]"
  },
  {
    title: "Walkways",
    image: "/images/service 1.png",
    alt: "Pressure washing a walkway",
    className: "md:col-start-2 md:row-start-1 md:min-h-[20rem]"
  },
  {
    title: "Compound floors",
    image: "/images/team.png",
    alt: "Pressure washing compound floors",
    className: "md:col-start-3 md:row-start-1 md:min-h-[20rem]"
  },
  {
    title: "Outdoor tiles",
    image: "/images/service 2.png",
    alt: "Pressure washing outdoor tiles",
    className: "md:col-start-1 md:row-start-3 md:min-h-[20rem]"
  },
  {
    title: "Walls and fences",
    image: "/images/heroimg.png",
    alt: "Pressure washing a wall or fence",
    className: "md:col-start-2 md:row-start-2 md:min-h-[20rem]"
  },
  {
    title: "Parking areas",
    image: "/images/service 1.png",
    alt: "Pressure washed parking area",
    className: "md:col-start-3 md:row-start-2 md:row-span-2 md:min-h-[42rem]"
  }
];

export default function PressureWashingServicesSection() {
  return (
    <>
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 py-20 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-[2rem] border border-[#d9e8ea] bg-white px-6 py-10 shadow-[0_22px_50px_rgba(78,129,141,0.08)] sm:px-8">
            <h2 className="text-2xl font-black uppercase text-[#17222b]">
              You Need Us
            </h2>
            <p className="mt-5 max-w-[40rem] text-base leading-8 text-[#677c85]">
              Over time, outdoor surfaces accumulate dirt, stains, mold, and
              grime that regular cleaning cannot remove. Our professional
              pressure washing service restores the appearance of your property
              by removing tough buildup from hard surfaces.
            </p>
          </article>

          <article className="relative overflow-hidden rounded-[2rem] bg-[#5cae9c] px-6 py-10 text-white shadow-[0_22px_50px_rgba(78,129,141,0.12)] sm:px-8">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: "url('/images/service 3.png')" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(94,174,156,0.9)_0%,_rgba(135,196,184,0.78)_100%)]" />
            <div className="relative">
              <p className="max-w-[22rem] text-base font-semibold leading-8 text-white">
                286 Hygiene provides reliable pressure washing services for
                residential and commercial properties.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-black uppercase tracking-[0.02em] text-[#17222b] sm:text-4xl">
            Our Pressure Washing Services
          </h2>

          <div className="mt-10 grid gap-3 md:grid-cols-3 md:grid-rows-[20rem_20rem_20rem]">
            {serviceItems.map((item) => {
              return (
                <article
                  key={item.title}
                  className={`group relative overflow-hidden rounded-[1rem] shadow-[0_18px_36px_rgba(16,90,112,0.12)] ${item.className}`}
                >
                  <div className="relative min-h-[15rem] h-full">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(18,34,43,0.02)_25%,_rgba(18,34,43,0.72)_100%)]" />
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                      <h3 className="text-xl font-black uppercase leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
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

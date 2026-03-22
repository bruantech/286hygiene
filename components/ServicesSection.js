"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

const services = [
  {
    title: "Residential",
    text: "Tailored deep cleaning solutions for your private sanctuary.",
    image: "/images/service 1.png",
    alt: "Residential cleaning service interior"
  },
  {
    title: "Commercial",
    text: "Maintaining peak productivity through pristine workspaces.",
    image: "/images/service 2.png",
    alt: "Commercial cleaning service facility"
  },
  {
    title: "Post Construction",
    text: "Specialized heavy-duty sanitation for complex facilities.",
    image: "/images/service 3.png",
    alt: "Post construction cleaning facility"
  },
  {
    title: "Deep Cleaning",
    text: "Restoring shared work environments with detailed, routine care.",
    image: "/images/service 2.png",
    alt: "Office cleaning service facility"
  },
  {
    title: "Matterass Cleaning",
    text: "Fresh, welcoming interiors prepared before you settle in.",
    image: "/images/service 1.png",
    alt: "Move in cleaning residential interior"
  },
  {
    title: "Pressure Washing",
    text: "Powerful cleaning support for demanding technical environments.",
    image: "/images/service 3.png",
    alt: "Industrial sanitization facility"
  }
];

function ServiceCard({ service, isFeatured }) {
  return (
    <article
      className={[
        "rounded-[2.3rem] border border-white/85 bg-white/90 p-5 shadow-[0_24px_50px_rgba(84,141,155,0.12)] backdrop-blur transition duration-300",
        isFeatured ? "lg:-translate-y-3 lg:scale-[1.02]" : "lg:translate-y-6"
      ].join(" ")}
    >
      <div
        className={[
          "relative overflow-hidden rounded-[2rem]",
          isFeatured
            ? "h-[18rem] sm:h-[20rem] lg:h-[22rem]"
            : "h-[15rem] sm:h-[17rem] lg:h-[19rem]"
        ].join(" ")}
      >
        <Image
          src={service.image}
          alt={service.alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </div>

      <div className="px-3 pb-4 pt-6">
        <h3 className="text-30px font-bold leading-tight text-[#18253a]">
          {service.title}
        </h3>
        <p className="mt-4 max-w-[18rem] text-[1.05rem] leading-8 text-[#8c99a5]">
          {service.text}
        </p>
      </div>
    </article>
  );
}

export default function ServicesSection() {
  const [startIndex, setStartIndex] = useState(0);
  const maxStartIndex = Math.max(0, services.length - 3);

  const visibleServices = useMemo(
    () => services.slice(startIndex, startIndex + 3),
    [startIndex]
  );

  function goPrevious() {
    setStartIndex((current) => (current === 0 ? maxStartIndex : current - 1));
  }

  function goNext() {
    setStartIndex((current) => (current === maxStartIndex ? 0 : current + 1));
  }

  return (
    <section
      id="services"
      className="relative overflow-hidden px-4 py-18 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(97,210,233,0.23),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(214,245,222,0.9),_transparent_28%),linear-gradient(180deg,_#effbff_0%,_#eaf8f6_100%)]" />

      <div className="relative mx-auto max-w-[1220px]">
        <div>
          <p className="text-sm font-light uppercase tracking-[0.4em] text-[#617b84]">
            Our Services
          </p>
          <h2 className="mt-7 max-w-[34rem] text-5xl font-light leading-[1.1] tracking-[-0.03em] text-[#13233b] sm:text-6xl lg:text-[4rem]">
            Elevated Hygiene For Every Space
          </h2>
        </div>

        <div className="relative py-6 lg:pt-12 lg:pb-6">
          <button
            type="button"
            onClick={goPrevious}
            aria-label="Previous services"
            className="absolute left-[-1.5rem] top-1/2 z-20 hidden h-13 w-13 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/85 text-2xl text-[#2fb4da] shadow-[0_12px_24px_rgba(47,180,218,0.16)] transition hover:bg-white xl:flex"
          >
            ←
          </button>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next services"
            className="absolute right-[-1.5rem] top-1/2 z-20 hidden h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-[#2fb4da] text-3xl text-white shadow-[0_16px_28px_rgba(47,180,218,0.32)] transition hover:bg-[#1ea6cd] xl:flex"
          >
            →
          </button>

          <div className="overflow-hidden pt-4 pb-2 lg:pt-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1fr_0.9fr] lg:items-start">
              {visibleServices.map((service, index) => (
                <ServiceCard
                  key={`${service.title}-${startIndex}-${index}`}
                  service={service}
                  isFeatured={index === 1}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 xl:hidden">
          <button
            type="button"
            onClick={goPrevious}
            aria-label="Previous services"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-white/85 text-2xl text-[#2fb4da] shadow-[0_10px_20px_rgba(47,180,218,0.14)]"
          >
            ←
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next services"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2fb4da] text-2xl text-white shadow-[0_14px_26px_rgba(47,180,218,0.28)]"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

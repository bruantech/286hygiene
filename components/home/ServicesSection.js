"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ServiceCard from "../services/shared/ServiceCard";
import { services } from "../services/shared/servicesData";

export default function ServicesSection() {
  const [startIndex, setStartIndex] = useState(0);
  const featuredServices = services.slice(0, 6);
  const maxStartIndex = Math.max(0, featuredServices.length - 3);

  const visibleServices = useMemo(
    () => featuredServices.slice(startIndex, startIndex + 3),
    [featuredServices, startIndex]
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
      className="relative  overflow-hidden px-4 py-18 sm:px-6 lg:px-8"
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
            className="absolute left-[-1.5rem] top-1/2 z-20 hidden h-13 w-13 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/85 text-[#2fb4da] shadow-[0_12px_24px_rgba(47,180,218,0.16)] transition hover:bg-white xl:flex"
          >
            <ChevronLeft className="h-6 w-6" strokeWidth={2.4} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next services"
            className="absolute right-[-1.5rem] top-1/2 z-20 hidden h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-[#2fb4da] text-white shadow-[0_16px_28px_rgba(47,180,218,0.32)] transition hover:bg-[#1ea6cd] xl:flex"
          >
            <ChevronRight className="h-7 w-7" strokeWidth={2.4} aria-hidden="true" />
          </button>

          <div className="overflow-hidden pt-4 pb-10 lg:pt-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1fr_0.9fr] lg:items-start">
              {visibleServices.map((service, index) => (
                <ServiceCard
                  key={`${service.title}-${startIndex}-${index}`}
                  service={service}
                  titleAs="h3"
                  className={index === 1 ? "lg:-translate-y-3 lg:scale-[1.02]" : "lg:translate-y-6"}
                  imageClassName={
                    index === 1
                      ? "h-[18rem] sm:h-[20rem] lg:h-[22rem]"
                      : "h-[15rem] sm:h-[17rem] lg:h-[19rem]"
                  }
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 hidden items-center justify-center gap-3 md:flex xl:hidden">
          <button
            type="button"
            onClick={goPrevious}
            aria-label="Previous services"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-white/85 text-[#2fb4da] shadow-[0_10px_20px_rgba(47,180,218,0.14)]"
          >
            <ChevronLeft className="h-6 w-6" strokeWidth={2.4} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next services"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2fb4da] text-white shadow-[0_14px_26px_rgba(47,180,218,0.28)]"
          >
            <ChevronRight className="h-6 w-6" strokeWidth={2.4} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

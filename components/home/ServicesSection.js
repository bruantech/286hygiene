"use client";

import { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import ServiceCard from "../services/shared/ServiceCard";
import { services } from "../services/shared/servicesData";

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    duration: 35,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slideDelay, setSlideDelay] = useState(3000); 

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  
  useEffect(() => {
    if (!emblaApi || !isInView) return;
    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, slideDelay);
    
    return () => clearInterval(timer);
  }, [emblaApi, slideDelay, isInView]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative overflow-hidden pt-18 pb-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(97,210,233,0.23),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(214,245,222,0.9),_transparent_28%),linear-gradient(180deg,_#effbff_0%,_#eaf8f6_100%)] z-0" />

      <div className="relative z-10 w-full">
      
        <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8 mb-4 lg:mb-8">
          <p className="text-sm font-light uppercase tracking-[0.4em] text-[#617b84]">
            Our Services
          </p>
          <div className="mt-7">
            <h2 className="max-w-[42rem] text-5xl font-light leading-[1.1] tracking-[-0.03em] text-[#13233b] sm:text-6xl lg:text-[4.5rem]">
              Elevated Hygiene For Every Space
            </h2>
          </div>
        </div>

       
        <div 
          className="relative mx-auto max-w-[1400px]"
          onMouseEnter={() => setSlideDelay(4000)} 
          onMouseLeave={() => setSlideDelay(3000)} 
        >
         
          <Link
            href="/services"
            className="group absolute right-8 xl:right-[4rem] top-[40%] z-20 hidden h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-[#2fb4da] px-0 text-white shadow-[0_16px_28px_rgba(47,180,218,0.32)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:w-[136px] hover:bg-[#1ea6cd] lg:flex"
            aria-label="View all services"
          >
            <div className="flex items-center justify-center">
              <span className="w-0 overflow-hidden whitespace-nowrap text-[15px] font-semibold tracking-wide transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:w-[72px] group-hover:pl-1 text-white">
                View All
              </span>
              <ChevronRight className="h-7 w-7 shrink-0 text-white" strokeWidth={2.4} aria-hidden="true" />
            </div>
          </Link>

          <div className="w-full xl:pl-[max(1rem,calc((100vw-1400px)/2))] xl:pr-[max(1rem,calc((100vw-1400px)/2))] container mx-auto px-0 md:px-4 mt-6">
            <div className="embla overflow-hidden cursor-grab active:cursor-grabbing px-2" ref={emblaRef}>
              <div className="embla__container flex touch-pan-y pt-4 pb-14 items-center -ml-5 sm:-ml-6 lg:-ml-8">
                {services.map((service, index) => {
                  const isSelected = index === selectedIndex;
                  
                  return (
                    <div
                      key={service.title}
                      className="embla__slide min-w-0 flex-[0_0_88%] sm:flex-[0_0_55%] lg:flex-[0_0_36%] xl:flex-[0_0_31%] pl-5 sm:pl-6 lg:pl-8"
                    >
                      <div 
                        className={`h-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                          isSelected 
                            ? "scale-[1.01] sm:scale-[1.03] opacity-100 lg:-translate-y-2 z-10 relative" 
                            : "scale-95 opacity-50 sm:opacity-60 hover:opacity-100 relative z-0"
                        }`}
                      >
                        <ServiceCard
                          service={service}
                          titleAs="h3"
                          className={`h-full border-[1.5px] transition-all duration-700 ease-out ${
                            isSelected ? 'border-white bg-white/95 shadow-[0_25px_50px_rgba(47,180,218,0.18)]' : 'border-white/40 bg-white/70 shadow-none'
                          }`}
                          imageClassName={`transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                            isSelected ? "h-[18rem] sm:h-[22rem] lg:h-[22rem]" : "h-[16rem] sm:h-[18rem] lg:h-[20rem]"
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-center lg:hidden px-4 relative z-10 w-full mb-8">
          <Link
            href="/services"
            className="group flex h-14 w-full max-w-[22rem] items-center justify-center rounded-full bg-[#2fb4da] text-white shadow-[0_14px_26px_rgba(47,180,218,0.28)] transition-colors hover:bg-[#1ea6cd]"
          >
            <span className="mr-3 font-semibold tracking-wide text-white">View All Services</span>
            <ChevronRight className="h-6 text-white w-6 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.4} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

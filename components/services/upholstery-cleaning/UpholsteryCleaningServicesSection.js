"use client";

import Image from "next/image";
import {
  Armchair,
  Leaf,
  ShieldCheck,
  Sparkles,
  Wind
} from "lucide-react";
import { motion } from "framer-motion";
import { fadeOnScroll, staggerContainer, fadeInUp } from "../../../lib/animations";

const serviceItems = [
  {
    title: "Deep cleaning of sofas and chairs",
    image: "/images/upholstery2.webp",
    alt: "Deep cleaning upholstery on a sofa",
    icon: Armchair,
    className: "sm:col-span-2 lg:col-span-3 lg:row-span-2"
  },
  {
    title: "Stain removal",
    image: "/images/upholstery3.webp",
    alt: "Treatment for upholstery stains",
    icon: Sparkles,
    className: "lg:col-span-3 lg:row-span-1"
  },
  {
    title: "Odor elimination",
    image: "/images/upholstery4.webp",
    alt: "Fresh and odor-free upholstered seating",
    icon: Wind,
    className: "lg:col-span-3 lg:row-span-1"
  },
  {
    title: "Dust and allergen removal",
    image: "/images/upholstery5.webp",
    alt: "Removal of dust and allergens from upholstery",
    icon: ShieldCheck,
    className: "sm:col-span-2 lg:col-span-2 lg:row-span-1"
  },
  {
    title: "Fabric-safe cleaning methods",
    image: "/images/upholstery6.webp",
    alt: "Gentle cleaning methods for fabric upholstery",
    icon: Leaf,
    className: "sm:col-span-2 lg:col-span-4 lg:row-span-1"
  }
];



export default function UpholsteryCleaningServicesSection() {
  return (
    <>
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeOnScroll}
        className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,169,204,0.16),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(11,135,104,0.16),_transparent_24%),linear-gradient(180deg,_#f8fcfc_0%,_#edf5f5_100%)]" />

        <div className="relative mx-auto grid max-w-6xl  lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <article className=" border border-white/80 bg-white/90 px-6 py-10 shadow-[0_24px_60px_rgba(78,129,141,0.1)] backdrop-blur sm:px-8 sm:py-12">
          
            <h2 className="mt-4 max-w-[36rem] text-4xl font-black leading-tight text-[#17222b] sm:text-5xl">
              YOU NEED US
            </h2>
            <p className="mt-6 max-w-[38rem] text-base leading-8 text-[#667a84]">
              Sofas, chairs, and upholstered seating absorb dust, spills, body
              oils, and odors over time. Our upholstery cleaning service is
              designed to lift embedded dirt, revive fabric appearance, and
              improve indoor freshness without harsh treatment.
            </p>

           
          </article>

          <article className="relative overflow-hidden  bg-[#1d8fae] shadow-[0_24px_60px_rgba(60,119,134,0.18)]">
            <div className="relative min-h-[21rem] h-full">
              <Image
                src="/images/upholstery1.webp"
                alt="Professional upholstery cleaning in progress"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(53,172,203,0.18)_0%,_rgba(11,135,104,0.18)_34%,_rgba(12,27,34,0.78)_100%)]" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="inline-flex rounded-full bg-white/14 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/82 backdrop-blur-sm">
                  Why You Should Book Us
                </div>
                <p className="mt-5 max-w-[22rem] text-xl font-semibold leading-9 text-white">
                  Regular upholstery cleaning helps shared spaces look polished
                  and feel cleaner, healthier, and more inviting.
                </p>
              </div>
            </div>
          </article>
        </div>
      </motion.section>

      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeOnScroll}
        className="bg-[linear-gradient(180deg,_#35a8cb_0%,_#2f9dbf_55%,_#278eb1_100%)] px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-left sm:text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/78">
              Service Includes
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.03em] text-white sm:text-4xl">
              Our Upholstery Cleaning Services
            </h2>
          </div>

          <motion.div variants={staggerContainer} className="mt-12 grid gap-3 sm:grid-cols-2 lg:auto-rows-[14rem] lg:grid-cols-6">
            {serviceItems.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  variants={fadeInUp}
                  key={item.title}
                  className={`group relative overflow-hidden  border border-white/20 shadow-[0_22px_40px_rgba(13,75,96,0.18)] ${item.className}`}
                >
                  <div className="relative min-h-[17rem] sm:min-h-[18rem] lg:h-full lg:min-h-0">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(17,29,34,0.08)_8%,_rgba(17,29,34,0.82)_100%)]" />

                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                      
                      <h3 className="mt-4 max-w-[18rem] text-[1.35rem] font-extrabold leading-tight text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.28)] sm:text-[1.6rem]">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

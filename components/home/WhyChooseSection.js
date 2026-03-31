"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../../lib/animations";
import { CalendarDays, ShieldCheck, Sparkles, Wrench } from "lucide-react";

const features = [
  {
    title: "Professional Cleaning Team",
    text: "Trained specialists delivering consistent, high-quality hygiene solutions.",
    icon: "shield"
  },
  {
    title: "Reliable & Trusted",
    text: "Dependable service built around safety, discretion, and client satisfaction.",
    icon: "trusted"
  },
  {
    title: "Flexible Scheduling",
    text: "Convenient appointment times for homes, businesses, and industrial sites.",
    icon: "calendar"
  },
  {
    title: "Modern Equipment",
    text: "Efficient tools and materials designed for deep cleaning and sanitization.",
    icon: "equipment"
  }
];

function FeatureIcon({ icon }) {
  const icons = {
    shield: ShieldCheck,
    trusted: Sparkles,
    calendar: CalendarDays,
    equipment: Wrench
  };

  const Icon = icons[icon];

  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10">
      {Icon ? <Icon className="h-5 w-5 text-white" strokeWidth={2.2} aria-hidden="true" /> : null}
    </span>
  );
}

export default function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-[#edf8f8] px-4 pt-24 pb-18 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-24 bg-[#edf8f8]" />
      <div
        className="absolute inset-x-0 bottom-0 top-10 bg-[linear-gradient(180deg,_#35a8ca_0%,_#2db2da_100%)] shadow-[inset_0_18px_30px_rgba(255,255,255,0.08)] [clip-path:none] lg:[clip-path:polygon(0_0,100%_9%,100%_100%,0_100%)]"
      />
      <div className="absolute inset-x-0 bottom-0 top-10 bg-[radial-gradient(circle_at_18%_46%,_rgba(255,255,255,0.14),_transparent_28%),radial-gradient(circle_at_68%_70%,_rgba(255,255,255,0.10),_transparent_24%),radial-gradient(circle_at_50%_100%,_rgba(255,255,255,0.08),_transparent_34%)]" />
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center"
      >
        <div>
          
          <motion.h2 variants={fadeInUp} className="mt-4 max-w-md text-4xl font-black uppercase leading-tight sm:text-5xl">
            Why choose 286 hygiene
          </motion.h2>

          <motion.div variants={fadeInUp} className="mt-10 space-y-6">
            {features.map((feature) => (
              <motion.div variants={fadeInUp} key={feature.title} className="flex gap-4">
                <FeatureIcon icon={feature.icon} />
                <div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-1 max-w-md text-sm leading-6 text-white/80">{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          variants={{
            hidden: { opacity: 0, scale: 0.82, y: 42 },
            show: {
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 120,
                damping: 14,
                mass: 0.9,
                delay: 0.12
              }
            }
          }}
          className="mx-auto w-full max-w-[27rem]"
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(180deg,_rgba(243,241,209,0.98)_0%,_rgba(201,229,191,0.94)_100%)] p-5 shadow-[0_30px_65px_rgba(4,71,96,0.32)]">
            <div className="relative h-[25rem] overflow-hidden rounded-[1.6rem] bg-[linear-gradient(180deg,_rgba(255,255,255,0.28)_0%,_rgba(127,197,172,0.2)_100%)]">
              <Image
                src="/images/teamImg.webp"
                alt="286 Hygiene team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 27rem"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

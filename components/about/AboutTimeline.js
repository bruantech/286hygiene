"use client";

import Image from "next/image";
import { Eye, Sparkles, Target } from "lucide-react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../../lib/animations";

const timelineItems = [
  {
    eyebrow: "Our story",
    title: "WHO WE ARE",
    text: "286 Hygiene is a professional cleaning and hygiene service company committed to creating clean, safe, and healthy environment. We provide cleaning services for residential homes, offices, commercial facilities, and construction sites. Our team is trained to deliver efficient, detailed cleaning using modern equipment and safe hygiene practices.",
    image: "/images/about1.webp",
    alt: "286 Hygiene team members holding cleaning supplies",
    icon: Sparkles,
    align: "left",
  },
  {
    eyebrow: "Driving purpose",
    title: "OUR MISSION",
    text: "To provide reliable, professional cleaning and hygiene services that improve health, safety, and comfort for our clients.",
    image: "/images/about2.webp",
    alt: "Professional cleaners smiling with cleaning tools",
    icon: Target,
    align: "right",
  },
  {
    eyebrow: "Future forward",
    title: "OUR VISION",
    text: "To become one of Nigeria's most trusted cleaning and hygiene service companies.",
    image: "/images/about3.webp",
    alt: "Cleaning team standing in a prepared interior",
    icon: Eye,
    align: "left",
  },
];

function TimelineCard({ item, isImage }) {
  if (isImage) {
    return (
      <div className="overflow-hidden rounded-[1.8rem] bg-white shadow-[0_18px_42px_rgba(52,114,128,0.12)]">
        <Image
          src={item.image}
          alt={item.alt}
          width={900}
          height={700}
          className="h-64 w-full object-cover"
        />
      </div>
    );
  }

  const isLeft = item.align === "left";

  return (
    <div
      className={[
        "px-2 py-2 text-left lg:px-8",
        isLeft ? "lg:text-right" : "lg:text-left"
      ].join(" ")}
    >
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-[#0b8768]">
        {item.eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black text-[#17222b] sm:text-4xl">
        {item.title}
      </h2>
      <p
        className={[
          "mt-5 text-base leading-8 text-[#5f767f]",
          isLeft ? "max-w-152 lg:ml-auto lg:mr-0" : "max-w-lg lg:ml-0 lg:mr-auto"
        ].join(" ")}
      >
        {item.text}
      </p>
    </div>
  );
}

export default function AboutTimeline() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-6xl">
        <div className="absolute bottom-0 left-1/2 top-0 hidden w-0.75 -translate-x-1/2 bg-[#0b8768] lg:block" />

        <div className="space-y-14 lg:space-y-20">
          {timelineItems.map((item, index) => {
            const Icon = item.icon;
            const textFirst = item.align === "left";

            return (
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={item.align === "left" ? slideInFromLeft : slideInFromRight}
                key={item.title}
                className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_88px_minmax(0,1fr)] lg:items-center"
              >
                <div className={textFirst ? "" : "lg:order-3"}>
                  <TimelineCard item={item} isImage={false} />
                </div>

                <div className="relative z-10 mx-auto hidden h-14 w-14 items-center justify-center rounded-full border-[5px] border-white bg-[#0b8768] text-white shadow-[0_12px_30px_rgba(11,135,104,0.24)] lg:flex lg:order-2">
                  <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
                </div>

                <div className={textFirst ? "lg:order-3" : ""}>
                  <TimelineCard item={item} isImage />
                </div>

                {index < timelineItems.length - 1 ? (
                  <div className="mx-auto h-10 w-px bg-[#0b8768] lg:hidden" />
                ) : null}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

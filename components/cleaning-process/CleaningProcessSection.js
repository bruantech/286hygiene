"use client";

import { ClipboardCheck, Search, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeOnScroll, staggerContainer, fadeInUp } from "../../lib/animations";

const steps = [
  {
    number: "01",
    label: "Inspection",
    title: "Inspection",
    text: "We assess the cleaning requirements. Every sanctuary is unique; our experts conduct a tactile and visual audit to identify sensitive surfaces and high-traffic focal points.",
    image: "/images/service 1.png",
    alt: "Inspection of cleaning surfaces before work begins",
    icon: Search,
  },
  {
    number: "02",
    label: "Planning",
    title: "Planning",
    text: "Each project receives a tailored care plan. We select the right tools, map the workflow, and prepare safe solutions that match the material, traffic level, and hygiene goal of the space.",
    image: "/images/service 2.png",
    alt: "Cleaning tools and materials prepared for a job",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    label: "Cleaning",
    title: "Cleaning",
    text: "Our trained team carries out the process with discipline and attention to detail. We focus on high-touch zones, embedded buildup, and surface-safe treatment to deliver a visibly refreshed result.",
    image: "/images/team.png",
    alt: "Professional cleaners carrying out a detailed cleaning service",
    icon: Sparkles,
  },
  {
    number: "04",
    label: "Final Inspection",
    title: "Final Inspection",
    text: "Before we sign off, we review the finished space to confirm standards have been met. This last pass helps ensure consistency, presentation, and peace of mind for every client.",
    image: "/images/heroimg.png",
    alt: "Final review of a cleaned and polished space",
    icon: ShieldCheck,
  },
];

export default function CleaningProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const step = steps[activeStep];
  const Icon = step.icon;

  return (
    <motion.section 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeOnScroll}
      className="bg-[#d8eef6] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-extrabold uppercase tracking-[0.28em] text-[#0b8768]">
            Cleaning Process
          </h2>
        </div>

        <motion.div variants={staggerContainer} className="mt-12 grid gap-8 md:hidden">
          {steps.map((item) => {
            const MobileIcon = item.icon;

            return (
              <motion.article
                variants={fadeInUp}
                key={item.number}
                className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_28px_70px_rgba(73,121,135,0.2)]"
              >
                <div className="relative">
                  <div
                    className="min-h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url('${item.image}')` }}
                    role="img"
                    aria-label={item.alt}
                  />
                  <div className="absolute left-4 top-4 inline-flex h-12 min-w-12 items-center justify-center rounded-full bg-white/92 px-3 text-sm font-black text-[#17233b] shadow-[0_10px_22px_rgba(23,35,59,0.16)]">
                    {item.number}
                  </div>
                </div>

                <div className="px-6 py-8 sm:px-8">
                  <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf5f2] text-[#0b8768]">
                    <MobileIcon
                      className="h-6 w-6"
                      strokeWidth={2.2}
                      aria-hidden="true"
                    />
                  </div>

                  <h2 className="mt-6 text-3xl font-black text-[#17233b] sm:text-4xl">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[#516770] sm:text-lg">
                    {item.text}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div variants={staggerContainer} className="mt-12 hidden flex-wrap justify-center gap-3 md:flex">
          {steps.map((item, index) => {
            const isActive = index === activeStep;

            return (
              <motion.button
                variants={fadeInUp}
                key={item.number}
                type="button"
                onClick={() => setActiveStep(index)}
                className={[
                  "rounded-xl cursor-pointer px-6 py-4 text-sm font-extrabold s transition",
                  isActive
                    ? "bg-[#0b8768] text-white shadow-[0_18px_34px_rgba(11,135,104,0.26)]"
                    : "bg-white text-[#17222b] hover:bg-[#f6fbfb]",
                ].join(" ")}
              >
                {item.number}. {item.label}
              </motion.button>
            );
          })}
        </motion.div>

        <motion.article variants={fadeInUp} className="mt-12 hidden overflow-hidden bg-white shadow-[0_28px_70px_rgba(73,121,135,0.2)] md:block relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="grid lg:grid-cols-[1.2fr_0.88fr]"
            >
              <div className="px-8 py-10 sm:px-10 sm:py-12 lg:px-10 lg:py-14">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf5f2] text-[#0b8768]">
                  <Icon
                    className="h-6 w-6"
                    strokeWidth={2.2}
                    aria-hidden="true"
                  />
                </div>

                <h2 className="mt-8 text-4xl font-black text-[#17233b] sm:text-5xl">
                  {step.title}
                </h2>
                <p className="mt-6 max-w-120 text-lg leading-9 text-[#516770]">
                  {step.text}
                </p>
              </div>

              <div className="relative min-h-[24rem] lg:min-h-[34rem]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${step.image}')` }}
                  role="img"
                  aria-label={step.alt}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.article>
      </div>
    </motion.section>
  );
}

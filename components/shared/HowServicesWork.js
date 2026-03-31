"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../../lib/animations";

const steps = [
  {
    number: "01",
    title: "Request A Quote",
    text: "CONTACT US VIA WEB OR PHONE FOR YOUR NEEDS",
  },
  {
    number: "02",
    title: "Schedule Cleaning",
    text: "PICK A CONVENIENT DATE AND TIME FOR THE VISIT ",
  },
  {
    number: "03",
    title: "Professional Cleaning",
    text: "OUR PROFESSIONAL TEAM ARRIVES AND WORKS MAGIC",
  },
  {
    number: "04",
    title: "Enjoy A Sparkling Space",
    text: "BREATHE EASY IN YOUR SANITIZED SPARKLING SPACE",
  },
];

export default function HowServicesWork() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2.5rem] px-6 py-16 sm:px-10 lg:px-12">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#0E6A4B]">
            The roadmap
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase text-[#17222b] sm:text-5xl">
            How our services work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#6e848d]">
            Designed for modern busy lives. We handle the mess, you enjoy the
            magic.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-8 lg:grid-cols-4"
        >
          {steps.map((step, index) => (
            <motion.div variants={fadeInUp} key={step.number} className="relative text-center">
              {index < steps.length - 1 ? (
                <div className="absolute left-1/2 top-14 hidden h-px w-full -translate-y-1/2 overflow-hidden lg:block">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.2, ease: "easeInOut" }}
                    className="h-full w-full origin-left border-t border-dashed border-[#0E6A4B]"
                  />
                </div>
              ) : null}
              <motion.div 
                whileHover={{ scale: 1.05, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative z-10 mx-auto flex h-28 w-28 cursor-default items-center justify-center rounded-[2rem] bg-[rgba(226,242,237,0.95)] p-3 shadow-[0_18px_40px_rgba(163,211,196,0.42)]"
              >
                <div className="flex h-full w-full items-center justify-center rounded-[1.65rem] bg-white text-[2rem] font-black leading-none text-[#0E7A58]">
                  {step.number}
                </div>
              </motion.div>
              <h3 className="mt-7 text-lg font-extrabold uppercase text-[#17222b]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#728891]">
                {step.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

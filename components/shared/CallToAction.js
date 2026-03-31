"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, buttonTap } from "../../lib/animations";

export default function CallToAction() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-6xl rounded-[2.2rem] bg-white px-6 py-16 text-center shadow-[0_26px_60px_rgba(55,124,147,0.12)] sm:px-10"
      >
        <motion.h2 variants={fadeInUp} className="text-4xl font-black text-[#17222b] sm:text-6xl">
          Ready for a <span className="text-[#0b8768]">Brighter</span> Space?
        </motion.h2>
        <motion.p variants={fadeInUp} className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#6d838c]">
          Let&apos;s transform your home, office, or commercial site with 286 Hygiene&apos;s trusted care and attention.
        </motion.p>
        <motion.a
          variants={fadeInUp}
          whileHover={{ scale: 1.06 }}
          whileTap={buttonTap.scale}
          href="/contact"
          className="mt-10 inline-flex rounded-full bg-[#0b8768] px-9 py-4 text-sm font-semibold text-white! shadow-[0_14px_30px_rgba(11,135,104,0.28)] transition hover:bg-[#0a785e]"
        >
          Get Your Free Quote
        </motion.a>
      </motion.div>
    </section>
  );
}

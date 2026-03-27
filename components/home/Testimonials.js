"use client";

import { motion } from "framer-motion";
import { fadeOnScroll, staggerContainer, fadeInUp } from "../../lib/animations";

const testimonials = [
  {
    name: "Olumide A.",
    role: "Homeowner",
    text: "286 Hygiene made our home feel brand new. Their team was punctual, professional, and incredibly thorough."
  },
  {
    name: "Chioma E.",
    role: "Facility Lead",
    text: "The team pays attention to detail from start to finish. Every room felt refreshed and properly cared for."
  },
  {
    name: "Fatima N.",
    role: "Business Owner",
    text: "We needed a cleaning partner we could trust, and they delivered consistently. I’d gladly recommend them."
  }
];

const starVariants = {
  hidden: { opacity: 0, scale: 0, rotate: -60 },
  show: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { type: "spring", stiffness: 350, damping: 20 }
  }
};

const starsContainerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.4 // Small delay so the card fades in first
    }
  }
};

function Stars() {
  return (
    <motion.div 
      variants={starsContainerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex gap-[0.2em] text-[1.1rem] text-[#0b8768]"
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.span 
          key={i} 
          variants={starVariants} 
          whileHover={{ scale: 1.3, rotate: 10, color: "#14b992" }}
          className="origin-center cursor-default"
        >
          ★
        </motion.span>
      ))}
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <motion.section 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeOnScroll}
      className="px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-extrabold text-[#17222b] sm:text-5xl">
          WHAT OUR CLIENTS SAY
        </h2>

        <motion.div variants={staggerContainer} className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <motion.article
              variants={fadeInUp}
              key={testimonial.name}
              className="rounded-[1.7rem] bg-white/88 p-6 shadow-[0_18px_45px_rgba(48,112,135,0.1)]"
            >
              <Stars />
              <p className="mt-5 text-sm leading-7 text-[#5e757e]">{testimonial.text}</p>
              <div className="mt-7 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dff4e8] text-sm font-bold text-[#0b8768]">
                  {testimonial.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-semibold text-[#17222b]">{testimonial.name}</p>
                  <p className="text-sm text-[#7a9096]">{testimonial.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}


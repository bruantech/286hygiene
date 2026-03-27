"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { animate, motion, useInView } from "framer-motion";
import { staggerContainer, fadeInUp, scaleHover, buttonTap } from "../../lib/animations";

function Counter({ from = 0, to, suffix = "", duration = 2 }) {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (!inView) return;
    
    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      delay: 0.2,
      onUpdate(value) {
        if (nodeRef.current) {
          nodeRef.current.textContent = Math.round(value) + suffix;
        }
      },
    });
    
    return () => controls.stop();
  }, [from, to, suffix, duration, inView]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
}

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Projects Done" },
  { value: 100, suffix: "%", label: "Quality Assurance" }
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-8 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-18 lg:hidden"
        style={{ backgroundImage: "url('/images/team.png')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(244,251,251,0.9)_0%,_rgba(239,249,247,0.88)_48%,_rgba(245,251,247,0.92)_100%)] lg:hidden" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(97,210,233,0.23),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(214,245,222,0.9),_transparent_28%),linear-gradient(180deg,_#effbff_0%,_#eaf8f6_100%)]" />
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center"
      >
        <div className="max-w-xl pt-4 lg:pt-10">
          <motion.h1 variants={fadeInUp} className="max-w-lg text-3xl font-black uppercase leading-[0.95] tracking-tight text-[#27a8c9] sm:text-5xl lg:text-4xl">
            Professional cleaning &amp; hygiene services in Nigeria
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-5 max-w-md text-base leading-7 text-[#4d6771]">
            The Spark to Your Sparkle. 286 Hygiene provides professional
            cleaning, sanitation, and fumigation services for homes and
            businesses. Our mission is simple: to create clean, safe, and
            healthy environments for our clients.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap items-center gap-4">
            <motion.a
              href="#contact"
              whileHover={scaleHover.scale}
              whileTap={buttonTap.scale}
              transition={scaleHover.transition}
              className="inline-flex items-center gap-3 rounded-full bg-[#27acd0] px-7 py-4 text-sm font-semibold !text-white shadow-[0_14px_30px_rgba(39,172,208,0.35)] transition hover:bg-[#1499bc]"
            >
              Book Now
              <span className="text-base !text-white">→</span>
            </motion.a>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-10 grid grid-cols-3 gap-2 sm:gap-4">
            {stats.map((stat) => (
              <motion.div
                variants={fadeInUp}
                key={stat.label}
                className="min-w-0 rounded-[18px] border border-white/75 bg-white/85 px-3 py-3 text-left shadow-[0_16px_40px_rgba(44,146,178,0.12)] sm:px-5 sm:py-4"
              >
                <div className="text-lg font-extrabold text-[#22a9cb] sm:text-2xl">
                  <Counter to={stat.value} suffix={stat.suffix} duration={2} />
                </div>
                <div className="mt-1 text-[10px] font-medium uppercase leading-4 tracking-[0.08em] text-[#7d949b] sm:text-xs sm:tracking-[0.12em]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative mx-auto hidden w-full max-w-[30rem] lg:block"
        >
          <div className="absolute -bottom-8 -right-4 h-24 w-24 rounded-full bg-[#f6d8d5]" />
          <div className="absolute -left-8 top-6 h-32 w-32 rounded-full bg-[#dff6fb]/80 blur-xl" />

          <div className="relative overflow-hidden rounded-[2.8rem] bg-white/55 p-3 shadow-[0_30px_70px_rgba(54,134,159,0.22)]">
            <Image
              src="/images/hero.webp"
              alt="Cleaning professional wiping a surface"
              width={500}
              height={620}
              className="h-auto w-[420px] rounded-[2.2rem] rounded-tr-none object-cover rotate-2"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

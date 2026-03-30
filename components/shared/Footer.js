"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, Phone, MessageCircle, Video } from "lucide-react";
import { footerLinkGroups, siteConfig } from "../../lib/siteData";
import { motion } from "framer-motion";
import { staggerContainer, fadeOnScroll } from "../../lib/animations";

export default function Footer() {
  const getFooterIcon = (label) => {
    if (label === "Instagram") {
      return <Instagram className="h-4 w-4" strokeWidth={2} aria-hidden="true" />;
    }

    if (label === siteConfig.email) {
      return <Mail className="h-4 w-4" strokeWidth={2} aria-hidden="true" />;
    }

    if (label === siteConfig.phoneDisplay) {
      return <Phone className="h-4 w-4" strokeWidth={2} aria-hidden="true" />;
    }

    if (label === "WhatsApp") {
      return <MessageCircle className="h-4 w-4" strokeWidth={2} aria-hidden="true" />;
    }

    if (label === "TikTok") {
      return <Video className="h-4 w-4" strokeWidth={2} aria-hidden="true" />;
    }

    return null;
  };

  return (
    <footer
      id="contact"
      className="border-t border-[#dbeceb] px-4 py-12 sm:px-6 lg:px-8"
    >
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]"
      >
        <motion.div variants={fadeOnScroll}>
          <div className="flex h-16 w-16 items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="286 Hygiene logo"
              width={500}
              height={620}
              className="h-auto w-full rounded-[2.2rem] rounded-tr-none object-cover rotate-2"
              priority
            />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-7 text-[#6c828b]">
            We deliver safe, reliable, and efficient cleaning services for
            every kind of space across Lagos, Nigeria.
          </p>
        </motion.div>

        {Object.entries(footerLinkGroups).map(([group, items]) => (
          <motion.div variants={fadeOnScroll} key={group}>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#17222b]">
              {group}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-[#6f858d]">
              {items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    scroll={false}
                    className="inline-flex items-center gap-2 transition hover:text-[#0b8768]"
                  >
                    {getFooterIcon(item.label)}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-[#dbeceb] pt-6 text-center text-sm text-[#8ba0a4]">
        {"\u00A9"} 2026 {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}

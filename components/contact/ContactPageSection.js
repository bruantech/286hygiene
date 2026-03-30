"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Instagram, Mail, MapPin, Phone, CheckCircle2, Loader2 } from "lucide-react";
import { TikTokIcon, WhatsAppIcon } from "../shared/BrandIcons";
import { getBookingMessage } from "../../lib/contactBooking";
import { siteConfig } from "../../lib/siteData";
import { motion, AnimatePresence } from "framer-motion";
import { fadeOnScroll, staggerContainer, fadeInUp } from "../../lib/animations";

// Firebase
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../lib/firebase";

const contactItems = [
  {
    title: "Direct Inquiry",
    text: siteConfig.phoneDisplay,
    detail: "Available 24/7",
    href: `tel:${siteConfig.phone}`,
    icon: Phone
  },
  {
    title: "Customer service",
    text: siteConfig.email,
    detail: "",
    href: `mailto:${siteConfig.email}`,
    icon: Mail
  },
  {
    title: "Our Headquarters",
    text: siteConfig.addressLocality,
    detail: "Serving clients across Lagos, Nigeria",
    href: siteConfig.mapUrl,
    icon: MapPin
  },
  {
    title: "Instagram",
    text: "@286_hygiene",
    detail: "Follow our latest work and updates",
    href: siteConfig.instagramUrl,
    icon: Instagram
  },
  {
    title: "WhatsApp",
    text: siteConfig.phoneDisplay,
    detail: "Message us directly",
    href: siteConfig.whatsappUrl,
    icon: WhatsAppIcon
  },
  {
    title: "TikTok",
    text: "@286_hygiene",
    detail: "Watch our cleaning transformations",
    href: siteConfig.tiktokUrl,
    icon: TikTokIcon
  }
];

const serviceOptions = [
  "Post-Construction Cleaning",
  "Residential Cleaning",
  "Commercial Cleaning",
  "Fumigation & Pest Control",
  "Rug & Carpet Cleaning",
  "Mattress Cleaning",
  "Pressure Washing",
  "Upholstery Cleaning"
];

export default function ContactPageSection({
  requestedService = "",
  requestedMessage = ""
}) {
  const formSectionRef = useRef(null);
  
  // Form States
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const normalizedServiceOptions = useMemo(() => {
    if (!requestedService || serviceOptions.includes(requestedService)) {
      return serviceOptions;
    }
    return [requestedService, ...serviceOptions];
  }, [requestedService]);

  const [selectedService, setSelectedService] = useState(
    requestedService || serviceOptions[0]
  );
  
  const [message, setMessage] = useState(
    requestedMessage || (requestedService ? getBookingMessage(requestedService) : "")
  );

  useEffect(() => {
    setSelectedService(requestedService || serviceOptions[0]);
    setMessage(
      requestedMessage ||
        (requestedService ? getBookingMessage(requestedService) : "")
    );
  }, [requestedMessage, requestedService]);

  useEffect(() => {
    if (requestedService || requestedMessage) {
      const timer = setTimeout(() => {
        formSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [requestedMessage, requestedService]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      await addDoc(collection(db, "messages"), {
        fullName,
        email,
        phone,
        location,
        service: selectedService,
        message,
        read: false,
        createdAt: serverTimestamp(),
      });
      setSubmitSuccess(true);
      // Reset form
      setFullName("");
      setEmail("");
      setPhone("");
      setLocation("");
      setMessage("");
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (err) {
      console.error("Error submitting form: ", err);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeOnScroll}
        className="px-4 py-8 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="space-y-10">
            <motion.div variants={staggerContainer} className="space-y-8">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.a variants={fadeInUp}
                    key={item.title}
                    href={item.href}
                    className="flex items-start gap-4 transition hover:opacity-80"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#dceae5] text-[#0b8768]">
                      <Icon className="h-5 w-5" strokeWidth={2.1} aria-hidden="true" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-[#17233b]">
                        {item.title}
                      </h2>
                      <p className="mt-2 text-lg leading-8 text-[#354e5a]">
                        {item.text}
                      </p>
                      {item.detail ? (
                        <p className="mt-1 text-sm uppercase tracking-[0.18em] text-[#6f9389]">
                          {item.detail}
                        </p>
                      ) : null}
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          <motion.article variants={fadeInUp}
            id="contact-form"
            ref={formSectionRef}
            className="rounded-[1.8rem] bg-white px-6 py-8 shadow-[0_28px_70px_rgba(73,121,135,0.12)] sm:px-8 sm:py-10 relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                <label className="block">
                  <span className="text-[0.78rem] font-extrabold uppercase tracking-[0.22em] text-[#5e9a87]">
                    Full Name
                  </span>
                  <input
                    required
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Johnathan Paul"
                    className="mt-4 w-full border-0 border-b border-[#dce7e5] bg-transparent px-0 pb-3 text-lg text-[#17233b] placeholder:text-[#c8d4dc] focus:border-[#0b8768] focus:outline-none focus:ring-0"
                  />
                </label>

                <label className="block">
                  <span className="text-[0.78rem] font-extrabold uppercase tracking-[0.22em] text-[#5e9a87]">
                    Email Address
                  </span>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sterling@luxury.com"
                    className="mt-4 w-full border-0 border-b border-[#dce7e5] bg-transparent px-0 pb-3 text-lg text-[#17233b] placeholder:text-[#c8d4dc] focus:border-[#0b8768] focus:outline-none focus:ring-0"
                  />
                </label>

                <label className="block">
                  <span className="text-[0.78rem] font-extrabold uppercase tracking-[0.22em] text-[#5e9a87]">
                    Phone Number
                  </span>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+123(000) 000-0000"
                    className="mt-4 w-full border-0 border-b border-[#dce7e5] bg-transparent px-0 pb-3 text-lg text-[#17233b] placeholder:text-[#c8d4dc] focus:border-[#0b8768] focus:outline-none focus:ring-0"
                  />
                </label>

                <label className="block">
                  <span className="text-[0.78rem] font-extrabold uppercase tracking-[0.22em] text-[#5e9a87]">
                    Location
                  </span>
                  <input
                    required
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder={`${siteConfig.addressLocality}, Nigeria`}
                    className="mt-4 w-full border-0 border-b border-[#dce7e5] bg-transparent px-0 pb-3 text-lg text-[#17233b] placeholder:text-[#c8d4dc] focus:border-[#0b8768] focus:outline-none focus:ring-0"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-[0.78rem] font-extrabold uppercase tracking-[0.22em] text-[#5e9a87]">
                  Service Required
                </span>
                <select
                  value={selectedService}
                  onChange={(event) => setSelectedService(event.target.value)}
                  className="mt-4 w-full border-0 border-b border-[#dce7e5] bg-transparent px-0 pb-3 text-lg text-[#17233b] focus:border-[#0b8768] focus:outline-none focus:ring-0 cursor-pointer"
                >
                  {normalizedServiceOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-[0.78rem] font-extrabold uppercase tracking-[0.22em] text-[#5e9a87]">
                  Your Message
                </span>
                <textarea
                  required
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  rows={5}
                  placeholder="Describe your spatial requirements..."
                  className="mt-4 w-full resize-none border-0 border-b border-[#dce7e5] bg-transparent px-0 pb-3 text-lg text-[#17233b] placeholder:text-[#c8d4dc] focus:border-[#0b8768] focus:outline-none focus:ring-0"
                />
              </label>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex min-w-[200px] justify-center items-center gap-3 rounded-[0.8rem] bg-[#0b8768] px-10 py-4 text-base font-bold text-white shadow-[0_18px_34px_rgba(11,135,104,0.24)] transition hover:bg-[#0a785e] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      Send Request
                      <span aria-hidden="true">→</span>
                    </>
                  )}
                </button>
                
                <AnimatePresence>
                  {submitSuccess && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex items-center gap-2 text-[#0b8768] font-medium"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      Request Sent!
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.article>
        </div>
      </motion.section>
    </>
  );
}

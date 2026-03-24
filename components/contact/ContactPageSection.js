import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "../../lib/siteData";

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
  }
];

const serviceOptions = [
  "Post-Construction Cleaning",
  "Residential Cleaning",
  "Commercial Cleaning",
  "Fumigation & Pest Control",
  "Rug & Carpet Cleaning"
];

export default function ContactPageSection() {
  return (
    <>
      {/* <section className="relative overflow-hidden px-4 pb-12 pt-0 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden bg-white">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative px-6 py-18 sm:px-10 lg:px-12 lg:py-26">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(210,236,232,0.45),_transparent_34%),linear-gradient(180deg,_rgba(255,255,255,0.98)_0%,_rgba(244,248,247,0.82)_100%)]" />
              <div className="relative max-w-xl">
                <span className="inline-flex rounded-full bg-[#e2efe8] px-4 py-2 text-[0.72rem] font-extrabold uppercase tracking-[0.24em] text-[#0b8768]">
                  Connect With Us
                </span>
                <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight text-[#14203a] sm:text-6xl lg:text-7xl">
                  Get in Touch
                </h1>
                <p className="mt-8 max-w-[32rem] text-lg leading-9 text-[#4f6670]">
                  Experience clinical excellence. Reach out to our concierge
                  team to design a bespoke sanitation protocol for your space.
                </p>
              </div>
            </div>

            <div
              className="min-h-[23rem] bg-cover bg-center"
              style={{ backgroundImage: "url('/images/heroimg.png')" }}
              role="img"
              aria-label="Calm interior background for contact page"
            />
          </div>
        </div>
      </section> */}

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="space-y-10">
            <div className="space-y-8">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex items-start gap-4"
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
                  </a>
                );
              })}
            </div>

            <article className="overflow-hidden rounded-[1.35rem] bg-[#cfe2de] shadow-[0_22px_50px_rgba(65,122,128,0.18)]">
              <div className="flex min-h-64 items-center justify-center bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.42),transparent_14%),linear-gradient(180deg,rgba(255,255,255,0.2)_0%,rgba(166,195,191,0.36)_100%)]">
                <MapPin
                  className="h-28 w-28 text-[#90a7a4]"
                  strokeWidth={1.4}
                  aria-hidden="true"
                />
              </div>
              <div className="p-4">
                <a
                  href={siteConfig.mapUrl}
                  className="flex items-center justify-between rounded-2xl bg-white px-4 py-4 text-sm font-bold text-[#0b8768] shadow-[0_12px_30px_rgba(68,115,121,0.12)] transition hover:bg-[#f8fcfb]"
                >
                  View on Google Maps
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.1} aria-hidden="true" />
                </a>
              </div>
            </article>
          </div>

          <article className="rounded-[1.8rem] bg-white px-6 py-8 shadow-[0_28px_70px_rgba(73,121,135,0.12)] sm:px-8 sm:py-10">
            <form className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                <label className="block">
                  <span className="text-[0.78rem] font-extrabold uppercase tracking-[0.22em] text-[#5e9a87]">
                    Full Name
                  </span>
                  <input
                    type="text"
                    placeholder="Johnathan Paul"
                    className="mt-4 w-full border-0 border-b border-[#dce7e5] bg-transparent px-0 pb-3 text-lg text-[#17233b] placeholder:text-[#c8d4dc] focus:border-[#0b8768] focus:outline-none"
                  />
                </label>

                <label className="block">
                  <span className="text-[0.78rem] font-extrabold uppercase tracking-[0.22em] text-[#5e9a87]">
                    Email Address
                  </span>
                  <input
                    type="email"
                    placeholder="sterling@luxury.com"
                    className="mt-4 w-full border-0 border-b border-[#dce7e5] bg-transparent px-0 pb-3 text-lg text-[#17233b] placeholder:text-[#c8d4dc] focus:border-[#0b8768] focus:outline-none"
                  />
                </label>

                <label className="block">
                  <span className="text-[0.78rem] font-extrabold uppercase tracking-[0.22em] text-[#5e9a87]">
                    Phone Number
                  </span>
                  <input
                    type="tel"
                    placeholder="+123(000) 000-0000"
                    className="mt-4 w-full border-0 border-b border-[#dce7e5] bg-transparent px-0 pb-3 text-lg text-[#17233b] placeholder:text-[#c8d4dc] focus:border-[#0b8768] focus:outline-none"
                  />
                </label>

                <label className="block">
                  <span className="text-[0.78rem] font-extrabold uppercase tracking-[0.22em] text-[#5e9a87]">
                    Location
                  </span>
                  <input
                    type="text"
                    placeholder={`${siteConfig.addressLocality}, Nigeria`}
                    className="mt-4 w-full border-0 border-b border-[#dce7e5] bg-transparent px-0 pb-3 text-lg text-[#17233b] placeholder:text-[#c8d4dc] focus:border-[#0b8768] focus:outline-none"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-[0.78rem] font-extrabold uppercase tracking-[0.22em] text-[#5e9a87]">
                  Service Required
                </span>
                <select className="mt-4 w-full border-0 border-b border-[#dce7e5] bg-transparent px-0 pb-3 text-lg text-[#17233b] focus:border-[#0b8768] focus:outline-none">
                  {serviceOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-[0.78rem] font-extrabold uppercase tracking-[0.22em] text-[#5e9a87]">
                  Your Message
                </span>
                <textarea
                  rows={5}
                  placeholder="Describe your spatial requirements..."
                  className="mt-4 w-full resize-none border-0 border-b border-[#dce7e5] bg-transparent px-0 pb-3 text-lg text-[#17233b] placeholder:text-[#c8d4dc] focus:border-[#0b8768] focus:outline-none"
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-[0.8rem] bg-[#0b8768] px-10 py-4 text-base font-bold text-white shadow-[0_18px_34px_rgba(11,135,104,0.24)] transition hover:bg-[#0a785e]"
              >
                Send Request
                <span aria-hidden="true">→</span>
              </button>
            </form>
          </article>
        </div>
      </section>
    </>
  );
}

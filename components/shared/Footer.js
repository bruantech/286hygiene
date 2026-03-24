import Image from "next/image";
import { siteConfig } from "../../lib/siteData";

const links = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Process", href: "/cleaning-process" },
    { label: "Contact", href: "/contact" }
  ],
  Services: [
    { label: "Home Cleaning", href: "/services/residential-cleaning" },
    { label: "Office Cleaning", href: "/services/commercial-cleaning" },
    { label: "Fumigation", href: "/services/fumigation-pest-control" }
  ],
  Contact: [
    { label: siteConfig.phoneDisplay, href: `tel:${siteConfig.phone}` },
    { label: siteConfig.email, href: `mailto:${siteConfig.email}` },
    {
      label: `${siteConfig.addressLocality}, ${siteConfig.addressCountry === "NG" ? "Nigeria" : siteConfig.addressCountry}`,
      href: siteConfig.mapUrl
    }
  ]
};

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-[#dbeceb] px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
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
        </div>

        {Object.entries(links).map(([group, items]) => (
          <div key={group}>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#17222b]">
              {group}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-[#6f858d]">
              {items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="transition hover:text-[#0b8768]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-[#dbeceb] pt-6 text-center text-sm text-[#8ba0a4]">
        {"\u00A9"} 2026 {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { services } from "@/components/servicesData";

export default function ServicesGrid() {
  return (
    <section className="relative overflow-hidden px-4 pb-18 pt-8 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(97,210,233,0.23),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(214,245,222,0.85),_transparent_28%),linear-gradient(180deg,_#eef8fa_0%,_#dceced_100%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[2rem] border border-white/80 bg-white/88 p-4 shadow-[0_20px_45px_rgba(68,133,149,0.1)] backdrop-blur"
            >
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={900}
                  height={700}
                  className="h-[16rem] w-full object-cover"
                />
              </div>

              <div className="px-3 pb-3 pt-5">
                <h2 className="text-[1.75rem] font-extrabold leading-tight text-[#17233b]">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#7a8e96]">
                  {service.text}
                </p>
                <Link
                  href={service.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0b8768] transition hover:text-[#0a745b]"
                >
                  View Service
                  <ArrowRight className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

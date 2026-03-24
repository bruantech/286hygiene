import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { services } from "./servicesData";

export default function ServicesGrid() {
  return (
    <section className="relative overflow-hidden px-4 pb-18 pt-8 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(97,210,233,0.23),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(214,245,222,0.85),_transparent_28%),linear-gradient(180deg,_#eef8fa_0%,_#dceced_100%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-xl font-semibold uppercase tracking-[0.28em] text-[#0b8768]">
            Our Services
          </h1>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/75 bg-white/88 p-4 shadow-[0_20px_45px_rgba(68,133,149,0.1)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(43,115,133,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b8768] focus-visible:ring-offset-4"
            >
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={900}
                  height={700}
                  className="h-[16rem] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(17,35,59,0.06)_0%,_rgba(17,35,59,0.34)_100%)]" />

                
              </div>

              <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
                <h2 className="text-[1.75rem] font-extrabold leading-tight text-[#17233b]">
                  {service.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-[#6f858d]">
                  {service.text}
                </p>

                <div className="mt-6 flex items-center justify-between gap-4 border-t border-[#e2ecec] pt-4">
                  <span className="text-sm font-semibold text-[#0b8768]">
                    Explore service details
                  </span>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#e8f7f2] text-[#0b8768] transition group-hover:bg-[#0b8768] group-hover:text-white">
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

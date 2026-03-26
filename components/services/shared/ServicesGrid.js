import ServiceCard from "./ServiceCard";
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
            <ServiceCard
              key={service.title}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

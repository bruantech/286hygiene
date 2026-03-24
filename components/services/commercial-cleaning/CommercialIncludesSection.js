import {
  Building2,
  Layers3,
  ShieldPlus,
  Trash2,
  UsersRound
} from "lucide-react";

const serviceItems = [
  {
    title: "Floor cleaning and maintenance",
    text: "Consistent, high-quality maintenance schedules to keep your facility pristine around the clock.",
    icon: Building2,
    wide: true
  },
  {
    title: "Surface disinfection",
    text: "Expert treatment for all surfaces from polished marble to clinical-grade vinyl.",
    icon: Layers3
  },
  {
    title: "Dusting and polishing",
    text: "Detailed protocols to reduce buildup, refresh surfaces, and support a healthier workspace.",
    icon: ShieldPlus
  },
  {
    title: "Waste Disposal",
    text: "Efficient and compliant waste management tailored to your industry standards.",
    icon: Trash2
  },
  {
    title: "Washroom Cleaning",
    text: "Elevating hygiene standards where it matters most for visitors and employees.",
    icon: UsersRound
  }
];

export default function CommercialIncludesSection() {
  return (
    <section className="relative overflow-hidden bg-[#f2f7f7] px-4 py-18 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(97,210,233,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(214,245,222,0.52),transparent_24%),linear-gradient(180deg,#f7fbfb_0%,#edf5f5_100%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0b8768]">
              Workplace Essentials
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#17222b] sm:text-5xl">
              Our Commercial Services Include
            </h2>
          </div>

          <div className="lg:pl-10">
            <p className="max-w-2xl text-base leading-8 text-[#657b84] sm:text-lg">
              Structured cleaning support for high-traffic business spaces, with
              services tailored to presentation, compliance, and day-to-day
              operational comfort.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {serviceItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={[
                  "group relative overflow-hidden rounded-[1.7rem] border border-white/75 bg-white/92 px-6 py-6 shadow-[0_18px_36px_rgba(97,129,141,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(61,117,130,0.14)]",
                  item.wide ? "lg:col-span-2" : ""
                ].join(" ")}
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[2.4rem] bg-[linear-gradient(180deg,rgba(231,246,242,0.75)_0%,rgba(231,246,242,0)_100%)]" />

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#edf8f5_0%,#e1f3ed_100%)] text-[#0b8768] shadow-[0_12px_24px_rgba(11,135,104,0.12)] transition group-hover:bg-[#0b8768] group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={2.2} aria-hidden="true" />
                </div>

                <h3 className="relative mt-7 text-2xl font-extrabold leading-tight text-[#17222b]">
                  {item.title}
                </h3>

                <p className="relative mt-4 max-w-136 text-sm leading-7 text-[#697e87]">
                  {item.text}
                </p>

                <div className="relative mt-6 h-px w-full bg-[#e3eded]" />

                <p className="relative mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#0b8768]">
                  Book Service
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

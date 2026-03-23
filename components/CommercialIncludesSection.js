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
    <section className="bg-[#f2f4f4] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-black uppercase text-[#17222b]">
          Our Commercial Services Include
        </h2>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {serviceItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={[
                  "rounded-[1.6rem] bg-white px-6 py-6 shadow-[0_18px_36px_rgba(97,129,141,0.12)]",
                  item.wide ? "lg:col-span-2" : ""
                ].join(" ")}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef7f5] text-[#0b8768]">
                  <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-2xl font-extrabold leading-tight text-[#17222b]">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-[34rem] text-sm leading-7 text-[#697e87]">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

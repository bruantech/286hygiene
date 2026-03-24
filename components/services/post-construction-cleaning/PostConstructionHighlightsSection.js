import {
  Paintbrush,
  Shovel,
  Sparkles,
  Wind
} from "lucide-react";

const highlightItems = [
  {
    title: "Dust Extraction",
    text: "Fine particulate matter extracted from every crevice, including HVAC systems and structural seams.",
    icon: Sparkles,
    tone: "bg-[#127a58]"
  },
  {
    title: "Cement Residue",
    text: "Professional removal of hardened alkaline deposits from flooring, glazing, and architectural surfaces.",
    icon: Wind,
    tone: "bg-[#36a8c9]"
  },
  {
    title: "Paint Stains",
    text: "Surgical cleaning of overspray and droplets without compromising the integrity of finished materials.",
    icon: Paintbrush,
    tone: "bg-[#36a8c9]"
  },
  {
    title: "Construction Debris",
    text: "Final clearance of leftover offcuts, packaging materials, and industrial waste components.",
    icon: Shovel,
    tone: "bg-[#127a58]"
  }
];

export default function PostConstructionHighlightsSection() {
  return (
    <section className="bg-[#f2f4f4] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-2 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="max-w-[28rem] pt-10">
          <h2 className="text-4xl p font-black uppercase leading-[1.05] text-[#17222b] ">
            Post Construction Cleaning
          </h2>
          <p className="mt-2  leading-6 text-sm text-[#596d75]">
            Our systematic approach targets the unique chemical and physical
            residues left behind by modern construction processes, ensuring a
            clinical level of purity.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {highlightItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`${item.tone} min-h-[13rem] px-6 py-8 text-white shadow-[0_18px_36px_rgba(84,126,136,0.14)]`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/12 text-white">
                  <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
                </div>
                <h3 className="mt-8 text-2xl font-extrabold uppercase leading-tight">
                  {item.title}
                </h3>
                <p className="mt-5 max-w-[19rem] text-sm leading-7 text-white/82">
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

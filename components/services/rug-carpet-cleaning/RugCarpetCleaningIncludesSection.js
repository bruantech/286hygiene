import {
  Droplets,
  Leaf,
  Sparkles,
  Wind,
  Worm
} from "lucide-react";

const serviceItems = [
  {
    title: "Deep extraction cleaning",
    text: "Our primary methodology uses controlled high-pressure steam and high-suction vacuuming. This industrial-grade extraction reaches the base of fibers to pull out years of trapped debris that standard vacuuming leaves behind.",
    icon: Droplets,
    iconColor: "bg-[#0b8768]",
    iconTint: "bg-[#eef4f4]"
  },
  {
    title: "Stain removal",
    text: "We employ pH-specific spotting agents. Specialized spot treatments for stubborn spills, wine, and high-traffic area discoloration are applied with precision, ensuring no damage to the integrity of the rug's backing.",
    icon: Sparkles,
    iconColor: "bg-[#2ea8d1]",
    iconTint: "bg-[#eef4f4]"
  },
  {
    title: "Odor treatment",
    text: "Our odor neutralization process works at the molecular level. Instead of masking smells, we neutralize deep-set odors at the source, leaving a fresh, neutral scent without heavy perfumes or irritating synthetic fragrances.",
    icon: Wind,
    iconColor: "bg-[#2f3b3f]",
    iconTint: "bg-[#f1f2f2]"
  },
  {
    title: "Dust and allergen removal",
    text: "Using medical-grade HEPA filtration and steaming to eliminate dust mites, pet dander, and trapped contaminants, this additional focus on hygiene supports a cleaner indoor environment for sensitive spaces.",
    icon: Worm,
    iconColor: "bg-[#0b8768]",
    iconTint: "bg-[#eef4f4]"
  },
  {
    title: "Fabric-safe cleaning solutions",
    text: "Transparency is key to our service. We use pH-balanced, non-toxic detergents that are safe for premium wool, silk blends, and synthetic fibers alike. Our solutions are biodegradable and leave zero sticky residue, ensuring fabric longevity.",
    icon: Leaf,
    iconColor: "bg-[#2ea8d1]",
    iconTint: "bg-[#eef4f4]"
  }
];

export default function RugCarpetCleaningIncludesSection() {
  return (
    <>
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="max-w-5xl text-xl italic leading-9 text-[#3f4c53] sm:text-[1.7rem] sm:leading-[1.55]">
            “Rugs and carpets trap dust, dirt, allergens, and bacteria that can
            affect the cleanliness of your space. At 286 Hygiene, we provide
            professional rug and carpet cleaning services to restore freshness
            and improve hygiene. Our cleaning process removes deep-seated dirt
            while preserving the quality of your carpets and rugs.”
          </p>
        </div>
      </section>

      <section className="bg-[#f3f5f5] px-4 py-18 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black text-[#253038] sm:text-5xl">
              Our Rug &amp; Carpet Cleaning Includes
            </h2>
            <div className="mt-6 h-1 w-24 rounded-full bg-[#0b8768]" />
          </div>

          <div className="mt-14 space-y-8">
            {serviceItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="grid gap-6 md:grid-cols-[10rem_1fr] md:items-center lg:grid-cols-[11rem_1fr]"
                >
                  <div
                    className={`relative flex min-h-[8.5rem] items-center justify-center overflow-hidden rounded-[1.4rem] ${item.iconTint}`}
                  >
                    <div className="absolute left-0 top-0 h-20 w-20 rounded-br-[2.4rem] bg-[rgba(191,204,209,0.26)]" />
                    <div
                      className={`relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_16px_30px_rgba(20,71,86,0.16)] ${item.iconColor}`}
                    >
                      <Icon className="h-6 w-6" strokeWidth={2.2} aria-hidden="true" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold leading-tight text-[#253038]">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-[#5d6f77] sm:text-base">
                      {item.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

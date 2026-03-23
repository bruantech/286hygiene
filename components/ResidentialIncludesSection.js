import {
  Bath,
  BedDouble,
  Building,
  CookingPot,
  DoorOpen,
  Layers3,
  LogOut
} from "lucide-react";

const serviceItems = [
  {
    title: "Apartment cleaning",
    text: "Precision cleaning for urban living spaces of all sizes.",
    icon: Building
  },
  {
    title: "Deep cleaning",
    text: "Intensive restoration focusing on neglected surfaces.",
    icon: BedDouble
  },
  {
    title: "Move-in cleaning",
    text: "Setting up your new home for a fresh, clean start.",
    icon: DoorOpen
  },
  {
    title: "Move-out cleaning",
    text: "Ensuring your previous residence is left in pristine condition.",
    icon: LogOut
  },
  {
    title: "Kitchen cleaning",
    text: "Medical-grade sanitization for culinary environments.",
    icon: CookingPot
  },
  {
    title: "Bathroom cleaning",
    text: "Eliminating bacteria and limescale with precision.",
    icon: Bath
  },
  {
    title: "Floor cleaning",
    text: "Surface-specific treatment for wood, tile, and stone.",
    icon: Layers3
  }
];

export default function ResidentialIncludesSection() {
  return (
    <section className="bg-[#f2f4f4] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className=" text-center w-full">
          <h2 className="text-3xl font-black text-[#17222b]">
            Our Residential Services Include
          </h2>
          <p className="mt-5 text-base leading-7 text-[#697e87]">
            Tailored hygiene solutions designed to exceed the specific
            requirements of your home environment.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {serviceItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[1.5rem] bg-white px-6 py-6 shadow-[0_18px_36px_rgba(97,129,141,0.1)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef7f5] text-[#0b8768]">
                  <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-extrabold leading-tight text-[#17222b]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#697e87]">
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

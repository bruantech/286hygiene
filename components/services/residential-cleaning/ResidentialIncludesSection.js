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
    <section className="relative overflow-hidden bg-[#f2f7f7] px-4 py-18 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(97,210,233,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(214,245,222,0.55),transparent_22%),linear-gradient(180deg,#f6fbfb_0%,#edf4f4_100%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0b8768]">
              Home Care Coverage
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-black leading-tight text-[#17222b] sm:text-5xl">
              Our Residential Services Include
            </h2>
          </div>

          <div className="lg:pl-10">
            <p className="max-w-2xl text-base leading-8 text-[#627981] sm:text-lg">
              Tailored hygiene solutions designed around real living spaces,
              from daily comfort zones to the high-touch areas that need deeper
              precision and care.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {serviceItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[1.7rem] border border-white/70 bg-white/92 px-6 py-6 shadow-[0_18px_36px_rgba(97,129,141,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(61,117,130,0.14)]"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[2.5rem] bg-[linear-gradient(180deg,rgba(231,246,242,0.75)_0%,rgba(231,246,242,0)_100%)]" />

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#edf8f5_0%,#e1f3ed_100%)] text-[#0b8768] shadow-[0_12px_24px_rgba(11,135,104,0.12)] transition group-hover:bg-[#0b8768] group-hover:text-white">
                  <Icon
                    className="h-6 w-6"
                    strokeWidth={2.2}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="relative mt-7 text-xl font-extrabold leading-tight text-[#17222b]">
                  {item.title}
                </h3>

                <p className="relative mt-4 text-sm leading-7 text-[#697e87]">
                  {item.text}
                </p>

                <div className="relative mt-6 h-px w-full bg-[#e3eded]" />

                <p className="relative mt-4 text-xs font-bold uppercase tracking-[0.2em] text-[#0b8768] cursor-pointer hover:text-[#2DA6C8] ">
                  book service
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

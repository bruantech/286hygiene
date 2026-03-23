import {
  Bug,
  Building2,
  Mouse,
  ShieldAlert,
  Squircle
} from "lucide-react";

const pestItems = [
  {
    number: "01",
    title: "Mosquitoes",
    text: "Advanced barrier treatments for indoor and outdoor safety.",
    icon: ShieldAlert
  },
  {
    number: "02",
    title: "Cockroaches",
    text: "Targeted gel baiting and residual sprays for deep-nest elimination.",
    icon: Bug
  },
  {
    number: "03",
    title: "Rodents",
    text: "Humane exclusion and professional monitoring systems.",
    icon: Mouse
  },
  {
    number: "04",
    title: "Bed bugs",
    text: "Thermal and chemical treatments to restore your sleep sanctuary.",
    icon: Squircle
  },
  {
    number: "05",
    title: "Termites",
    text: "Structural protection and pre-construction soil treatment.",
    icon: Building2
  }
];

export default function FumigationEliminatesSection() {
  return (
    <section className="bg-[linear-gradient(180deg,_#31a6c9_0%,_#2fa9cf_100%)] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-black uppercase ">
          Our Fumigation Service Eliminates
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden  bg-white/15 md:grid-cols-2 xl:grid-cols-5">
          {pestItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="relative bg-[#127a58]/95 px-6 pb-8 pt-7"
              >
                <div className="absolute right-5 top-3 text-4xl font-black text-white/12">
                  {item.number}
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-2xl font-extrabold leading-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/80">
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

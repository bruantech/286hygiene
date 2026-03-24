import {
  BadgeCheck,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users
} from "lucide-react";

const values = [
  {
    number: "01",
    title: "Professionalism",
    text: "Our team is trained to the highest standards to ensure respectful and expert service.",
    icon: BadgeCheck
  },
  {
    number: "02",
    title: "Quality",
    text: "Our quality control ensures excellent results every time.",
    icon: Sparkles
  },
  {
    number: "03",
    title: "Reliability",
    text: "You can count on us to deliver on time, every time.",
    icon: ShieldCheck
  },
  {
    number: "04",
    title: "Health / Safety",
    text: "We use eco-friendly products and methods to protect our planet and people.",
    icon: Stethoscope
  },
  {
    number: "05",
    title: "Customer Satisfaction",
    text: "We are committed to the wellbeing of the customers we serve.",
    icon: Users
  }
];

export default function CoreValuesSection() {
  return (
    <section className="mt-12 bg-[linear-gradient(180deg,#32a7ca_0%,#29add3_100%)] px-4 py-18 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-black uppercase sm:text-5xl">
          Our Core Values
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden  bg-white/20 md:grid-cols-2 xl:grid-cols-5">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.number}
                className="relative bg-[#0f7b5c]/92 px-6 pb-7 pt-6"
              >
                <div className="absolute right-5 top-4 text-4xl font-black text-white/12">
                  {value.number}
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-bold">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/78">
                  {value.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

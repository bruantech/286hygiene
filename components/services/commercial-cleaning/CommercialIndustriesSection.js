import {
  Building2,
  GraduationCap,
  Hospital,
  Hotel,
  Landmark,
  Store,
  UtensilsCrossed
} from "lucide-react";

const industries = [
  { title: "Offices", icon: Building2 },
  { title: "Retail Stores", icon: Store },
  { title: "Schools", icon: GraduationCap },
  { title: "Hotels", icon: Hotel },
  { title: "Banks", icon: Landmark },
  { title: "Hospitals", icon: Hospital },
  { title: "Restaurants", icon: UtensilsCrossed }
];

export default function CommercialIndustriesSection() {
  return (
    <section className="relative overflow-hidden px-4 py-22 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(97,210,233,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(214,245,222,0.5),transparent_24%),linear-gradient(180deg,#f8fcfc_0%,#eef5f5_100%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-left sm:text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0b8768]">
            Industries We Support
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-[#17222b] ">
            Commercial cleaning services for modern business environments
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <article
                key={industry.title}
                className="group rounded-[1.6rem] border border-white/75 bg-white/90 px-4 py-6 text-center shadow-[0_16px_34px_rgba(97,129,141,0.09)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(61,117,130,0.14)]"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#edf8f5_0%,#e0f2ec_100%)] text-[#0b8768] shadow-[0_12px_24px_rgba(11,135,104,0.12)] transition group-hover:bg-[#0b8768] group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={2.1} aria-hidden="true" />
                </div>
                <p className="mt-5 text-sm font-bold uppercase tracking-[0.08em] text-[#17222b]">
                  {industry.title}
                </p>
                
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

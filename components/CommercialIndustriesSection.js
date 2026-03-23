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
    <section className="px-4 py-40 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl py-6 font-black text-[#17222b] ">
          Commercial Cleaning Services for
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-7">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div key={industry.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#ddeceb] bg-[#f5fbfa] text-[#0b8768] shadow-[0_12px_24px_rgba(112,166,156,0.08)]">
                  <Icon className="h-6 w-6" strokeWidth={2.1} aria-hidden="true" />
                </div>
                <p className="mt-4 text-sm font-medium text-[#17222b]">
                  {industry.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

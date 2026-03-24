import Image from "next/image";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Projects Done" },
  { value: "100%", label: "Quality Assurance" }
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-8 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-18 lg:hidden"
        style={{ backgroundImage: "url('/images/team.png')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(244,251,251,0.9)_0%,_rgba(239,249,247,0.88)_48%,_rgba(245,251,247,0.92)_100%)] lg:hidden" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(97,210,233,0.23),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(214,245,222,0.9),_transparent_28%),linear-gradient(180deg,_#effbff_0%,_#eaf8f6_100%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="max-w-xl pt-4 lg:pt-10">
          <h1 className="max-w-lg text-3xl font-black uppercase leading-[0.95] tracking-tight text-[#27a8c9] sm:text-5xl lg:text-4xl">
            Professional cleaning &amp; hygiene services in Nigeria
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-[#4d6771]">
            The Spark to Your Sparkle. 286 Hygiene provides professional
            cleaning, sanitation, and fumigation services for homes and
            businesses. Our mission is simple: to create clean, safe, and
            healthy environments for our clients.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#27acd0] px-7 py-4 text-sm font-semibold !text-white shadow-[0_14px_30px_rgba(39,172,208,0.35)] transition hover:bg-[#1499bc]"
            >
              Book Now
              <span className="text-base !text-white">→</span>
            </a>
          </div>

          <div className="mt-10 flex justify-center sm:justify-start gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[18px] border border-white/75 bg-white/85 px-5 py-4 shadow-[0_16px_40px_rgba(44,146,178,0.12)]"
              >
                <div className="text-xl sm:text-2xl font-extrabold text-[#22a9cb]">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-[#7d949b]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto hidden w-full max-w-[30rem] lg:block">
          <div className="absolute -bottom-8 -right-4 h-24 w-24 rounded-full bg-[#f6d8d5]" />
          <div className="absolute -left-8 top-6 h-32 w-32 rounded-full bg-[#dff6fb]/80 blur-xl" />

          <div className="relative overflow-hidden rounded-[2.8rem] bg-white/55 p-3 shadow-[0_30px_70px_rgba(54,134,159,0.22)]">
            <Image
              src="/images/heroimg.png"
              alt="Cleaning professional wiping a surface"
              width={500}
              height={620}
              className="h-auto w-full rounded-[2.2rem] rounded-tr-none object-cover rotate-2"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

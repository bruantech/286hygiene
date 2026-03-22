const features = [
  {
    title: "Professional Cleaning Team",
    text: "Trained specialists delivering consistent, high-quality hygiene solutions."
  },
  {
    title: "Reliable & Trusted",
    text: "Dependable service built around safety, discretion, and client satisfaction."
  },
  {
    title: "Flexible Scheduling",
    text: "Convenient appointment times for homes, businesses, and industrial sites."
  },
  {
    title: "Modern Equipment",
    text: "Efficient tools and materials designed for deep cleaning and sanitization."
  }
];

function FeatureIcon() {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10">
      <span className="h-4 w-4 rounded-full border-2 border-white/90" />
    </span>
  );
}

export default function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,_#34add0_0%,_#2298c1_100%)] px-4 py-18 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,_rgba(255,255,255,0.12),_transparent_40%)]" />
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white/75">
            Why choose 286 hygiene
          </p>
          <h2 className="mt-4 max-w-md text-4xl font-black uppercase leading-tight sm:text-5xl">
            Why choose 286 hygiene
          </h2>

          <div className="mt-10 space-y-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <FeatureIcon />
                <div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-1 max-w-md text-sm leading-6 text-white/80">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-[27rem]">
          <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(180deg,_rgba(243,241,209,0.98)_0%,_rgba(201,229,191,0.94)_100%)] p-5 shadow-[0_30px_65px_rgba(4,71,96,0.32)]">
            <div className="relative h-[25rem] rounded-[1.6rem] bg-[linear-gradient(180deg,_rgba(255,255,255,0.28)_0%,_rgba(127,197,172,0.2)_100%)]">
              <div className="absolute left-8 top-10 text-[3rem] font-light uppercase tracking-[0.08em] text-[#87a899]">
                Team
              </div>
              <div className="absolute bottom-0 left-4 h-36 w-16 rounded-t-full bg-[#5cad7c]" />
              <div className="absolute bottom-0 right-10 h-40 w-20 rounded-t-full bg-[#4da26f]" />
              <div className="absolute left-1/2 top-[34%] h-14 w-14 -translate-x-1/2 rounded-full bg-[#d7b28a]" />
              <div className="absolute left-1/2 top-[47%] h-32 w-24 -translate-x-1/2 rounded-t-[2.5rem] rounded-b-[1.6rem] bg-[#88c49c]" />
              <div className="absolute left-[37%] top-[63%] h-20 w-8 -rotate-[12deg] rounded-full bg-[#88c49c]" />
              <div className="absolute right-[34%] top-[62%] h-22 w-8 rotate-[18deg] rounded-full bg-[#88c49c]" />
              <div className="absolute bottom-16 left-1/2 h-6 w-36 -translate-x-1/2 rounded-full bg-[#3a5f61]/20 blur-sm" />
              <div className="absolute bottom-12 left-1/2 h-6 w-40 -translate-x-1/2 rounded-[1rem] bg-[#4f6e74]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


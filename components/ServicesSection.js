const services = [
  {
    title: "Residential",
    text: "Complete cleaning solutions for homes, apartments, and private residences.",
    scene: "living"
  },
  {
    title: "Commercial",
    text: "Tailored hygiene support for offices, workspaces, and large facilities.",
    scene: "industrial"
  },
  {
    title: "Post Construction",
    text: "Detailed dust removal and finishing cleanup for newly completed sites.",
    scene: "plant"
  }
];

function ServiceArt({ scene }) {
  const shared =
    "relative h-56 overflow-hidden rounded-[1.8rem] bg-[#d7edf3] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]";

  if (scene === "living") {
    return (
      <div className={shared}>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_#d4edf4_0%,_#b7d8df_100%)]" />
        <div className="absolute left-5 top-5 h-28 w-36 rounded-2xl bg-[linear-gradient(180deg,_#1b3350_0%,_#1b86af_100%)] shadow-lg" />
        <div className="absolute right-5 top-4 h-18 w-18 rounded-full border-[10px] border-white/75" />
        <div className="absolute bottom-6 left-5 h-14 w-28 rounded-t-[2rem] rounded-b-xl bg-[#825f43]" />
        <div className="absolute bottom-4 right-6 h-24 w-14 rounded-t-[1rem] bg-[#f5f1ea]" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[linear-gradient(180deg,_#e0dfd6_0%,_#cac6ba_100%)]" />
      </div>
    );
  }

  if (scene === "industrial") {
    return (
      <div className={shared}>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_#8dc3ef_0%,_#d9c9b2_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-[#aa8968]" />
        <div className="absolute bottom-16 left-4 right-4 h-3 bg-[#695744]" />
        <div className="absolute bottom-19 left-7 h-28 w-5 bg-[#715f4d]" />
        <div className="absolute bottom-19 left-16 h-32 w-5 bg-[#715f4d]" />
        <div className="absolute bottom-19 left-24 h-24 w-5 bg-[#715f4d]" />
        <div className="absolute bottom-19 right-20 h-34 w-4 bg-[#756250]" />
        <div className="absolute bottom-19 right-10 h-38 w-4 bg-[#756250]" />
      </div>
    );
  }

  return (
    <div className={shared}>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_#d8edf9_0%,_#f2f6fa_100%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-[#f5f7fb]" />
      <div className="absolute bottom-12 left-8 h-36 w-12 rounded-t-[1.2rem] bg-[#9aa5b3]" />
      <div className="absolute bottom-12 left-24 h-44 w-14 rounded-t-[1.2rem] bg-[#8d99aa]" />
      <div className="absolute bottom-12 left-16 h-7 w-24 bg-[#aeb8c5]" />
      <div className="absolute bottom-12 right-8 h-40 w-16 rounded-t-[1.2rem] bg-[#7d8aa0]" />
      <div className="absolute bottom-12 right-20 h-8 w-18 bg-[#a7b4c6]" />
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(97,210,233,0.23),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(214,245,222,0.9),_transparent_28%),linear-gradient(180deg,_#effbff_0%,_#eaf8f6_100%)]" />
      <div className="relative mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.34em] text-[#7da3a8]">
          Our services
        </p>
        <div className="mt-4 flex items-end justify-between gap-6">
          <h2 className="max-w-xl text-4xl font-medium leading-tight text-[#17232b] sm:text-5xl">
            Elevated Hygiene For Every Space
          </h2>
          <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-[#23a8cb] text-2xl text-white shadow-[0_16px_30px_rgba(35,168,203,0.28)] md:flex">
            →
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[2rem] border border-white/80 bg-white/78 p-4 shadow-[0_22px_45px_rgba(53,127,155,0.12)] backdrop-blur"
            >
              <ServiceArt scene={service.scene} />
              <div className="px-2 pb-3 pt-5">
                <h3 className="text-xl font-semibold text-[#19232a]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#728891]">
                  {service.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

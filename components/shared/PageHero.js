import Image from "next/image";

export default function PageHero({
  title,
  backgroundImage,
  overlayClassName,
  alt = "286 Hygiene page hero",
  sectionClassName = "px-4 pb-12 pt-8 sm:px-6 lg:px-8",
  imageClassName = "h-[17rem] w-full object-cover sm:h-[21rem] lg:h-[25rem]",
  contentClassName = "absolute inset-y-0 left-0 flex max-w-[34rem] items-center px-6 sm:px-10",
  titleClassName = "text-3xl font-black uppercase leading-[1.15] text-white",
  extraText,
}) {
  return (
    <section className={`relative ${sectionClassName} hidden sm:block`}>
      <div className="pointer-events-none absolute left-8 top-6 h-28 w-28 rounded-full bg-[#cbeff6]/60 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-12 h-32 w-32 rounded-full bg-[#dff4e7]/70 blur-3xl" />

      <div className="mx-auto max-w-6xl rounded-[2.4rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.88)_0%,rgba(205,238,244,0.84)_50%,rgba(223,244,231,0.88)_100%)] p-px shadow-[0_28px_70px_rgba(55,124,147,0.14)]">
        <div className="relative overflow-hidden rounded-[1.2rem] border border-white/70 bg-white/80 backdrop-blur">
          <Image
            src={backgroundImage}
            alt={alt}
            width={1600}
            height={900}
            className={imageClassName}
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,30,42,0.08)_0%,rgba(9,30,42,0.22)_100%)]" />
          <div className={`absolute inset-0 ${overlayClassName}`} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.28),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.16),transparent_26%)]" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(8,20,24,0)_0%,rgba(8,20,24,0.18)_100%)]" />

          <div className={contentClassName}>
            <div className="max-w-2xl rounded-[1.8rem] border border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.08)_100%)] p-5 shadow-[0_20px_45px_rgba(8,35,44,0.16)] backdrop-blur-md sm:p-6">
              <div className="inline-flex rounded-full border border-white/24 bg-white/14 px-3 py-1 text-[0.7rem] font-extrabold uppercase tracking-[0.24em] text-white/90">
                286 Hygiene
              </div>
              <h1 className={`mt-4 ${titleClassName}`}>{title}</h1>
              <p className="text-white mt-2">{extraText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

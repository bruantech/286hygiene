import Image from "next/image";

export default function PageHero({
  title,
  backgroundImage,
  overlayClassName,
  alt = "286 Hygiene page hero",
  sectionClassName = "px-4 pb-12 pt-8 sm:px-6 lg:px-8",
  imageClassName = "h-[16rem] w-full object-cover sm:h-[20rem] lg:h-[24rem]",
  contentClassName = "absolute inset-y-0 left-0 flex max-w-[34rem] items-center px-6 sm:px-10",
  titleClassName = "text-3xl font-black uppercase leading-[1.15] text-white"
}) {
  return (
    <section className={sectionClassName}>
      <div className="mx-auto max-w-6xl rounded-[2.2rem] bg-white shadow-[0_24px_60px_rgba(55,124,147,0.1)]">
        <div className="relative overflow-hidden rounded-[1.8rem]">
          <Image
            src={backgroundImage}
            alt={alt}
            width={1600}
            height={900}
            className={imageClassName}
            priority
          />
          <div className={`absolute inset-0 ${overlayClassName}`} />

          <div className={contentClassName}>
            <h1 className={titleClassName}>{title}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

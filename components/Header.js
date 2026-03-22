import Image from "next/image";
const navItems = ["Home", "Services", "About", "Contact"];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center]">
            <Image
              src="/images/logo.png"
              alt="Cleaning professional wiping a surface"
              width={500}
              height={620}
              className="h-auto w-full rounded-[2.2rem] rounded-tr-none object-cover rotate-2"
              priority
            />
           
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#607984] md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition hover:text-[#0a8199]"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-[#0b8768] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(11,135,104,0.28)] transition hover:bg-[#0a7a5f]"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}

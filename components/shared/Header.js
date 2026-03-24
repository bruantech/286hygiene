"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { primaryNavItems } from "../../lib/siteData";

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Cleaning professional wiping a surface"
              width={500}
              height={620}
              className="h-auto w-full rounded-[2.2rem] rounded-tr-none object-cover rotate-2"
              priority
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#607984] md:flex">
          {primaryNavItems.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-2 transition hover:text-[#0a8199]"
                >
                  {item.label}
                  <span className="text-xs text-[#8ba0a4]">+</span>
                </Link>
                <div className="invisible absolute left-0 top-full z-20 mt-3 w-72 translate-y-2 rounded-[1.5rem] border border-[#dbeceb] bg-white p-3 opacity-0 shadow-[0_24px_60px_rgba(18,32,43,0.12)] transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="grid gap-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="rounded-2xl px-4 py-3 text-sm text-[#607984] transition hover:bg-[#f3f9f7] hover:text-[#0b8768]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="transition hover:text-[#0a8199]"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-[#0b8768] px-5 py-3 text-sm font-semibold !text-white shadow-[0_14px_28px_rgba(11,135,104,0.28)] transition hover:bg-[#0a7a5f] md:inline-flex"
          >
            Get Started
          </Link>

          <button
            type="button"
            aria-expanded={isMobileNavOpen}
            aria-controls="mobile-nav"
            aria-label={isMobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMobileNavOpen((open) => !open)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#dbeceb] bg-white text-[#17222b] shadow-[0_14px_28px_rgba(18,34,43,0.08)] transition hover:border-[#c8e4df] hover:text-[#0b8768] md:hidden"
          >
            {isMobileNavOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={[
          "border-t border-[#eef5f3] px-4 py-3 md:hidden sm:px-6",
          isMobileNavOpen ? "block" : "hidden"
        ].join(" ")}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-2 text-sm font-medium text-[#607984]">
          {primaryNavItems.map((item) =>
            item.children ? (
              <details
                key={item.label}
                className="rounded-[1.25rem] border border-[#dbeceb] bg-[#fbfdfc] px-4 py-3"
              >
                <summary className="cursor-pointer list-none text-[#17222b]">
                  {item.label}
                </summary>
                <div className="mt-3 grid gap-2 border-t border-[#e6efed] pt-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setIsMobileNavOpen(false)}
                      className="rounded-xl px-3 py-2 transition hover:bg-[#f3f9f7] hover:text-[#0b8768]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </details>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileNavOpen(false)}
                className="rounded-[1.25rem] border border-[#dbeceb] bg-[#fbfdfc] px-4 py-3 transition hover:text-[#0a8199]"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            onClick={() => setIsMobileNavOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-[1.25rem] bg-[#0b8768] px-4 py-3 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(11,135,104,0.2)] transition hover:bg-[#0a7a5f]"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}

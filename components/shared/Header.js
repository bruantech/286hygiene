"use client";

import Image from "next/image";
import Link from "next/link";
import { primaryNavItems, siteConfig } from "../../lib/siteData";
import StaggeredMenu from "./StaggeredMenu";

export default function Header() {
  const mobileMenuItems = primaryNavItems.flatMap((item) => {
    if (!item.children) {
      return [
        {
          label: item.label,
          ariaLabel: `Go to ${item.label}`,
          link: item.href
        }
      ];
    }

    const [parentLink, ...childLinks] = item.children;

    return [
      {
        label: parentLink?.label || item.label,
        ariaLabel: `Go to ${parentLink?.label || item.label}`,
        link: parentLink?.href || item.href,
        children: childLinks.map((child) => ({
          label: child.label,
          ariaLabel: `Go to ${child.label}`,
          link: child.href
        }))
      }
    ];
  });

  const mobileQuickLinks = [
    {
      label: "Call",
      link: `tel:${siteConfig.phone}`
    },
    {
      label: "Email",
      link: `mailto:${siteConfig.email}`
    },
    {
      label: "Contact",
      link: "/contact"
    }
  ];

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

        <nav className="hidden uppercase items-center gap-8 text-sm font-medium text-[#607984] md:flex">
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

          <div className="md:hidden">
            <StaggeredMenu
              items={mobileMenuItems}
              socialItems={mobileQuickLinks}
              displaySocials
              displayItemNumbering
              position="right"
              colors={["#dff4ef", "#9bd7c8", "#0b8768"]}
              menuButtonColor="#17222b"
              openMenuButtonColor="#17222b"
              changeMenuColorOnOpen={false}
              logoUrl={siteConfig.logo}
              showLogo={false}
              accentColor="#0b8768"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

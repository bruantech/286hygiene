"use client";

import { useLayoutEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function scrollToTop() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export default function ScrollManager() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    scrollToTop();

    const handlePageShow = () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      scrollToTop();
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, [pathname, search]);

  return null;
}

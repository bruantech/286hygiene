"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

function isExternalLink(link = "") {
  return /^https?:\/\//i.test(link) || link.startsWith("mailto:") || link.startsWith("tel:");
}

function MenuItemLink({ item, className, onClick, children }) {
  if (isExternalLink(item.link)) {
    return (
      <a
        href={item.link}
        onClick={onClick}
        className={className}
        aria-label={item.ariaLabel}
        target={item.link.startsWith("http") ? "_blank" : undefined}
        rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={item.link}
      scroll={false}
      onClick={onClick}
      className={className}
      aria-label={item.ariaLabel}
    >
      {children}
    </Link>
  );
}

export default function StaggeredMenu({
  position = "right",
  colors = ["#d9f1eb", "#0b8768"],
  items = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  className,
  logoUrl = "/images/logo.png",
  showLogo = true,
  menuButtonColor = "#17222b",
  openMenuButtonColor = "#17222b",
  changeMenuColorOnOpen = true,
  isFixed = true,
  accentColor = "#0b8768",
  closeOnClickAway = true,
  onMenuOpen,
  onMenuClose
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  const isActivePath = useCallback(
    (href) => {
      if (!href) return false;
      if (href === "/") return pathname === "/";
      return pathname === href || pathname.startsWith(`${href}/`);
    },
    [pathname]
  );

  const openRef = useRef(false);
  const panelRef = useRef(null);
  const preLayersRef = useRef(null);
  const preLayerElsRef = useRef([]);
  const toggleBtnRef = useRef(null);

  const openTlRef = useRef(null);
  const closeTweenRef = useRef(null);
  const colorTweenRef = useRef(null);
  const busyRef = useRef(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const preContainer = preLayersRef.current;

      if (!panel) return;

      const preLayers = preContainer
        ? Array.from(preContainer.querySelectorAll(".sm-prelayer"))
        : [];

      preLayerElsRef.current = preLayers;

      const offscreen = position === "left" ? -100 : 100;
      gsap.set([panel, ...preLayers], { xPercent: offscreen });

      if (toggleBtnRef.current) {
        gsap.set(toggleBtnRef.current, { color: menuButtonColor });
      }

      setIsReady(true);
    });

    return () => {
      setIsReady(false);
      ctx.revert();
    };
  }, [menuButtonColor, position]);

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;

    if (!panel) return null;

    openTlRef.current?.kill();
    closeTweenRef.current?.kill();

    const itemEls = Array.from(panel.querySelectorAll(".sm-panel-itemLabel"));
    const numberEls = Array.from(
      panel.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item")
    );
    const socialTitle = panel.querySelector(".sm-socials-title");
    const socialLinks = Array.from(panel.querySelectorAll(".sm-socials-link"));

    const layerStates = layers.map((el) => ({
      el,
      start: Number(gsap.getProperty(el, "xPercent"))
    }));
    const panelStart = Number(gsap.getProperty(panel, "xPercent"));

    if (itemEls.length) {
      gsap.set(itemEls, { yPercent: 140, rotate: 10 });
    }
    if (numberEls.length) {
      gsap.set(numberEls, { "--sm-num-opacity": 0 });
    }
    if (socialTitle) {
      gsap.set(socialTitle, { opacity: 0 });
    }
    if (socialLinks.length) {
      gsap.set(socialLinks, { y: 25, opacity: 0 });
    }

    const tl = gsap.timeline({ paused: true });

    layerStates.forEach((layerState, index) => {
      tl.fromTo(
        layerState.el,
        { xPercent: layerState.start },
        { xPercent: 0, duration: 0.5, ease: "power4.out" },
        index * 0.07
      );
    });

    const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0;
    const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
    const panelDuration = 0.65;

    tl.fromTo(
      panel,
      { xPercent: panelStart },
      { xPercent: 0, duration: panelDuration, ease: "power4.out" },
      panelInsertTime
    );

    if (itemEls.length) {
      const itemsStart = panelInsertTime + panelDuration * 0.15;

      tl.to(
        itemEls,
        {
          yPercent: 0,
          rotate: 0,
          duration: 1,
          ease: "power4.out",
          stagger: { each: 0.1, from: "start" }
        },
        itemsStart
      );

      if (numberEls.length) {
        tl.to(
          numberEls,
          {
            duration: 0.6,
            ease: "power2.out",
            "--sm-num-opacity": 1,
            stagger: { each: 0.08, from: "start" }
          },
          itemsStart + 0.1
        );
      }
    }

    if (socialTitle || socialLinks.length) {
      const socialsStart = panelInsertTime + panelDuration * 0.4;

      if (socialTitle) {
        tl.to(
          socialTitle,
          { opacity: 1, duration: 0.5, ease: "power2.out" },
          socialsStart
        );
      }

      if (socialLinks.length) {
        tl.to(
          socialLinks,
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: "power3.out",
            stagger: { each: 0.08, from: "start" },
            onComplete: () => gsap.set(socialLinks, { clearProps: "opacity" })
          },
          socialsStart + 0.04
        );
      }
    }

    openTlRef.current = tl;
    return tl;
  }, []);

  const playOpen = useCallback(() => {
    if (busyRef.current) return;

    busyRef.current = true;
    const tl = buildOpenTimeline();

    if (!tl) {
      busyRef.current = false;
      return;
    }

    tl.eventCallback("onComplete", () => {
      busyRef.current = false;
    });
    tl.play(0);
  }, [buildOpenTimeline]);

  const playClose = useCallback(() => {
    openTlRef.current?.kill();
    openTlRef.current = null;

    const panel = panelRef.current;
    const layers = preLayerElsRef.current;

    if (!panel) return;

    const offscreen = position === "left" ? -100 : 100;
    closeTweenRef.current?.kill();

    closeTweenRef.current = gsap.to([...layers, panel], {
      xPercent: offscreen,
      duration: 0.32,
      ease: "power3.in",
      overwrite: "auto",
      onComplete: () => {
        const itemEls = Array.from(panel.querySelectorAll(".sm-panel-itemLabel"));
        const numberEls = Array.from(
          panel.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item")
        );
        const socialTitle = panel.querySelector(".sm-socials-title");
        const socialLinks = Array.from(panel.querySelectorAll(".sm-socials-link"));

        if (itemEls.length) {
          gsap.set(itemEls, { yPercent: 140, rotate: 10 });
        }
        if (numberEls.length) {
          gsap.set(numberEls, { "--sm-num-opacity": 0 });
        }
        if (socialTitle) {
          gsap.set(socialTitle, { opacity: 0 });
        }
        if (socialLinks.length) {
          gsap.set(socialLinks, { y: 25, opacity: 0 });
        }

        busyRef.current = false;
      }
    });
  }, [position]);

  const animateColor = useCallback(
    (opening) => {
      const button = toggleBtnRef.current;
      if (!button) return;

      colorTweenRef.current?.kill();

      if (!changeMenuColorOnOpen) {
        gsap.set(button, { color: menuButtonColor });
        return;
      }

      colorTweenRef.current = gsap.to(button, {
        color: opening ? openMenuButtonColor : menuButtonColor,
        delay: 0.18,
        duration: 0.3,
        ease: "power2.out"
      });
    },
    [changeMenuColorOnOpen, menuButtonColor, openMenuButtonColor]
  );

  const closeMenu = useCallback(() => {
    if (!openRef.current) return;

    openRef.current = false;
    setOpen(false);
    setExpandedItems({});
    onMenuClose?.();
    playClose();
    animateColor(false);
  }, [animateColor, onMenuClose, playClose]);

  const toggleMenu = useCallback(() => {
    const target = !openRef.current;
    openRef.current = target;
    setOpen(target);

    if (target) {
      onMenuOpen?.();
      playOpen();
    } else {
      onMenuClose?.();
      playClose();
    }

    animateColor(target);
  }, [animateColor, onMenuClose, onMenuOpen, playClose, playOpen]);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (!closeOnClickAway || !open) return undefined;

    const handleClickOutside = (event) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeMenu, closeOnClickAway, open]);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeMenu, open]);

  const toggleExpandedItem = useCallback((key) => {
    setExpandedItems((current) => ({
      ...current,
      [key]: !current[key]
    }));
  }, []);

  return (
    <div
      className={`sm-scope ${className || ""} ${
        isFixed ? "fixed inset-0 h-screen w-screen overflow-hidden" : "h-full w-full"
      }`}
      data-position={position}
    >
      <div
        className="staggered-menu-wrapper pointer-events-none relative h-full w-full"
        style={accentColor ? { "--sm-accent": accentColor } : undefined}
        data-open={open || undefined}
        data-ready={isReady || undefined}
      >
        <div
          ref={preLayersRef}
          className="sm-prelayers absolute bottom-0 top-0 z-[55] pointer-events-none"
          aria-hidden="true"
        >
          {(colors.length ? colors.slice(0, 4) : ["#d9f1eb", "#0b8768"]).map((color, index) => (
            <div
              key={`${color}-${index}`}
              className="sm-prelayer absolute bottom-0 top-0 h-full w-full"
              style={{ background: color }}
            />
          ))}
        </div>

        <header
          className="staggered-menu-header absolute left-0 top-0 z-[60] flex w-full items-center justify-between p-4 pointer-events-none sm:p-6"
          aria-label="Mobile navigation controls"
        >
          {showLogo ? (
            <div className="sm-logo flex items-center select-none pointer-events-auto">
              <img
                src={logoUrl}
                alt="Logo"
                className="sm-logo-img block h-10 w-auto object-contain"
                draggable={false}
                width={110}
                height={40}
              />
            </div>
          ) : (
            <div aria-hidden="true" />
          )}

          <button
            ref={toggleBtnRef}
            className="sm-toggle pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#dbeceb] bg-white/90 text-sm font-semibold shadow-[0_14px_28px_rgba(18,34,43,0.08)] backdrop-blur"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="staggered-menu-panel"
            onClick={toggleMenu}
            type="button"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </header>

        <aside
          id="staggered-menu-panel"
          ref={panelRef}
          className="staggered-menu-panel absolute bottom-0 top-0 z-[58] flex h-full flex-col overflow-y-auto bg-white px-6 pb-8 pt-28 pointer-events-auto sm:px-8"
          style={{ WebkitBackdropFilter: "blur(12px)" }}
          aria-hidden={!open}
        >
          <div className="sm-panel-inner flex flex-1 flex-col gap-6">
            <ul
              className="sm-panel-list m-0 flex list-none flex-col gap-3 p-0"
              role="list"
              data-numbering={displayItemNumbering || undefined}
            >
              {items.length ? (
                items.map((item, index) => (
                  <li className="sm-panel-itemWrap relative overflow-hidden leading-none" key={`${item.label}-${index}`}>
                    <div className="sm-panel-itemRow flex items-center gap-3">
                      <MenuItemLink
                        item={item}
                        onClick={closeMenu}
                        className={`sm-panel-item relative inline-block flex-1 text-4xl font-semibold uppercase leading-none tracking-[-0.04em] no-underline transition-colors duration-150 ease-linear py-2 ${
                          isActivePath(item.link) ? "is-active text-[var(--sm-accent)]" : "text-[#17222b]"
                        }`}
                        aria-current={isActivePath(item.link) ? "page" : undefined}
                      >
                        <span
                          className={`sm-panel-itemLabel inline-block ${
                            isActivePath(item.link) ? "text-[var(--sm-accent)]" : ""
                          }`}
                        >
                          {item.label}
                        </span>
                      </MenuItemLink>

                      {item.children?.length ? (
                        <button
                          type="button"
                          className="sm-panel-toggle inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#dbeceb] text-[#17222b] transition-colors duration-150 ease-linear hover:text-[var(--sm-accent)]"
                          aria-label={`${expandedItems[`${item.label}-${index}`] ? "Hide" : "Show"} ${item.label} sub-services`}
                          aria-expanded={expandedItems[`${item.label}-${index}`] || false}
                          onClick={() => toggleExpandedItem(`${item.label}-${index}`)}
                        >
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-200 ${
                              expandedItems[`${item.label}-${index}`] ? "rotate-180" : ""
                            }`}
                            aria-hidden="true"
                          />
                        </button>
                      ) : null}
                    </div>

                    {item.children?.length && expandedItems[`${item.label}-${index}`] ? (
                      <ul className="sm-submenu m-0 list-none pl-0 pt-2" role="list">
                        {item.children.map((child, childIndex) => (
                          <li key={`${child.label}-${childIndex}`} className="sm-submenu-item">
                            <MenuItemLink
                              item={child}
                              onClick={closeMenu}
                              className={`sm-submenu-link inline-block py-2 text-base font-medium no-underline transition-colors duration-150 ease-linear ${
                                isActivePath(child.link) ? "is-active text-[var(--sm-accent)]" : "text-[#4b6670]"
                              }`}
                              aria-current={isActivePath(child.link) ? "page" : undefined}
                            >
                              <span
                                className={isActivePath(child.link) ? "text-[var(--sm-accent)]" : undefined}
                              >
                                {child.label}
                              </span>
                            </MenuItemLink>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))
              ) : (
                <li className="sm-panel-itemWrap relative overflow-hidden leading-none" aria-hidden="true">
                  <span className="sm-panel-item relative inline-block pr-[1.5em] text-[clamp(1.6rem,6vw,3.2rem)] font-semibold uppercase leading-none tracking-[-0.04em] text-[#17222b]">
                    <span className="sm-panel-itemLabel inline-block">No items</span>
                  </span>
                </li>
              )}
            </ul>

            {displaySocials && socialItems.length > 0 ? (
              <div className="sm-socials mt-auto flex flex-col gap-3 border-t border-[#e7efed] pt-8">
                <h3 className="sm-socials-title m-0 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--sm-accent)]">
                  Quick Links
                </h3>
                <ul className="sm-socials-list m-0 flex list-none flex-wrap items-center gap-4 p-0" role="list">
                  {socialItems.map((item, index) => (
                    <li key={`${item.label}-${index}`} className="sm-socials-item">
                      <MenuItemLink
                        item={item}
                        onClick={closeMenu}
                        className="sm-socials-link inline-block py-[2px] text-base font-medium text-[#4b6670] no-underline transition-[color,opacity] duration-300 ease-linear"
                      >
                        {item.label}
                      </MenuItemLink>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </aside>
      </div>

      <style jsx>{`
        .sm-scope {
          pointer-events: none;
          z-index: 80;
        }

        .sm-scope[data-position="left"] .staggered-menu-panel,
        .sm-scope[data-position="left"] .sm-prelayers {
          left: 0;
          right: auto;
        }

        .sm-prelayers,
        .staggered-menu-panel {
          right: 0;
          width: min(100vw, 28rem);
          visibility: hidden;
        }

        .staggered-menu-wrapper[data-ready] .sm-prelayers,
        .staggered-menu-wrapper[data-ready] .staggered-menu-panel {
          visibility: visible;
        }

        .sm-scope .sm-prelayer {
          transform: translateX(0);
        }

        .sm-scope .sm-logo-img {
          filter: saturate(1.05);
        }

        .sm-scope .sm-toggle:focus-visible,
        .sm-scope .sm-panel-item:focus-visible,
        .sm-scope .sm-panel-toggle:focus-visible,
        .sm-scope .sm-submenu-link:focus-visible,
        .sm-scope .sm-socials-link:focus-visible {
          outline: 2px solid var(--sm-accent);
          outline-offset: 4px;
        }

        .sm-scope .sm-panel-itemLabel {
          will-change: transform;
          transform-origin: 50% 50%;
        }

        .sm-scope .sm-panel-item:hover,
        .sm-scope .sm-panel-toggle:hover,
        .sm-scope .sm-submenu-link:hover,
        .sm-scope .sm-socials-link:hover {
          color: var(--sm-accent);
        }

        .sm-scope .sm-panel-list[data-numbering] {
          counter-reset: smItem;
        }

        .sm-scope .sm-panel-list[data-numbering] .sm-panel-item::after {
          counter-increment: smItem;
          content: counter(smItem, decimal-leading-zero);
          position: absolute;
          top: 0.18em;
          right: 0;
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          color: var(--sm-accent);
          opacity: var(--sm-num-opacity, 0);
        }

        .sm-scope .sm-panel-item.is-active::before,
        .sm-scope .sm-submenu-link.is-active::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          height: 0.55rem;
          width: 0.55rem;
          border-radius: 9999px;
          background: var(--sm-accent);
          transform: translate(-1rem, -50%);
        }

        .sm-scope .sm-submenu {
          display: grid;
          gap: 0.15rem;
          padding-left: 0.35rem;
        }

        .sm-scope .sm-submenu-link {
          padding-left: 0.8rem;
        }

        .sm-scope .sm-socials-list:hover .sm-socials-link:not(:hover),
        .sm-scope .sm-socials-list:focus-within .sm-socials-link:not(:focus-visible) {
          opacity: 0.4;
        }

        @media (max-width: 767px) {
          .sm-prelayers,
          .staggered-menu-panel {
            width: 100vw;
          }
        }
      `}</style>
    </div>
  );
}

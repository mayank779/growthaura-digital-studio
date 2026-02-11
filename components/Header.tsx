"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { aiAutomationNavItems, designNavItems, navItems, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/BrandLogo";
import { PrimaryLink } from "@/components/ui/PrimaryLink";

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopDesignOpen, setIsDesktopDesignOpen] = useState(false);
  const [isDesktopAIOpen, setIsDesktopAIOpen] = useState(false);
  const [isMobileDesignOpen, setIsMobileDesignOpen] = useState(false);
  const [isMobileAIOpen, setIsMobileAIOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const isLinkActive = (href: string) => {
    const path = href.split("?")[0] ?? href;
    return path === "/" ? pathname === "/" : pathname === path || pathname.startsWith(`${path}/`);
  };

  const isDesignDropdownActive = designNavItems.some((item) => isLinkActive(item.href));
  const isAIDropdownActive = aiAutomationNavItems.some((item) => isLinkActive(item.href));

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsDesktopDesignOpen(false);
    setIsDesktopAIOpen(false);
    setIsMobileDesignOpen(false);
    setIsMobileAIOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all",
        hasScrolled
          ? "border-b border-slate-700/80 bg-ink-900/95 backdrop-blur-md"
          : "bg-ink-900/80 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label={`${siteConfig.shortBrand} home`} className="shrink-0">
          <BrandLogo />
        </Link>

        <nav className="hidden items-center gap-4 lg:flex">
          {navItems.slice(0, 2).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "text-sm font-medium transition",
                isLinkActive(item.href) ? "text-white" : "text-slate-300 hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}

          <div
            className={cn("relative", isDesktopDesignOpen && "z-50")}
            onMouseEnter={() => setIsDesktopDesignOpen(true)}
            onMouseLeave={() => setIsDesktopDesignOpen(false)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setIsDesktopDesignOpen(false);
              }
            }}
          >
            <button
              type="button"
              onClick={() => setIsDesktopDesignOpen((prev) => !prev)}
              className={cn(
                "inline-flex items-center gap-1.5 text-sm font-medium transition",
                isDesignDropdownActive || isDesktopDesignOpen ? "text-white" : "text-slate-300 hover:text-white"
              )}
              aria-haspopup="menu"
              aria-expanded={isDesktopDesignOpen}
              aria-label="Open Design Services menu"
            >
              Design Services
              <ChevronDown className={cn("h-4 w-4 transition", isDesktopDesignOpen && "rotate-180")} />
            </button>

            <div
              className={cn(
                "absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-2 transition",
                isDesktopDesignOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
              )}
            >
              <div role="menu" className="rounded-2xl border border-slate-700 bg-ink-900/95 p-2 shadow-xl backdrop-blur-md">
                <p className="px-2 pb-2 pt-1 text-[11px] font-semibold uppercase tracking-[0.11em] text-slate-400">
                  Design Solutions
                </p>
                <div className="grid gap-1">
                  {designNavItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      role="menuitem"
                      onClick={() => setIsDesktopDesignOpen(false)}
                      className={cn(
                        "rounded-xl px-3 py-2.5 text-sm transition",
                        isLinkActive(item.href)
                          ? "bg-slate-800 text-white"
                          : "text-slate-300 hover:bg-slate-800/80 hover:text-white"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className={cn("relative", isDesktopAIOpen && "z-50")}
            onMouseEnter={() => setIsDesktopAIOpen(true)}
            onMouseLeave={() => setIsDesktopAIOpen(false)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setIsDesktopAIOpen(false);
              }
            }}
          >
            <button
              type="button"
              onClick={() => setIsDesktopAIOpen((prev) => !prev)}
              className={cn(
                "inline-flex items-center gap-1.5 text-sm font-medium transition",
                isAIDropdownActive || isDesktopAIOpen ? "text-white" : "text-slate-300 hover:text-white"
              )}
              aria-haspopup="menu"
              aria-expanded={isDesktopAIOpen}
              aria-label="Open AI Automation menu"
            >
              AI Automation
              <ChevronDown className={cn("h-4 w-4 transition", isDesktopAIOpen && "rotate-180")} />
            </button>

            <div
              className={cn(
                "absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-2 transition",
                isDesktopAIOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
              )}
            >
              <div role="menu" className="rounded-2xl border border-slate-700 bg-ink-900/95 p-2 shadow-xl backdrop-blur-md">
                <p className="px-2 pb-2 pt-1 text-[11px] font-semibold uppercase tracking-[0.11em] text-slate-400">
                  AI Solutions
                </p>
                <div className="grid gap-1">
                  {aiAutomationNavItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      role="menuitem"
                      onClick={() => setIsDesktopAIOpen(false)}
                      className={cn(
                        "rounded-xl px-3 py-2.5 text-sm transition",
                        isLinkActive(item.href)
                          ? "bg-slate-800 text-white"
                          : "text-slate-300 hover:bg-slate-800/80 hover:text-white"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {navItems.slice(2).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "text-sm font-medium transition",
                isLinkActive(item.href) ? "text-white" : "text-slate-300 hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <PrimaryLink href="/contact">Get Free Growth Plan</PrimaryLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-600 text-slate-100 lg:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMenuOpen ? (
        <div className="lg:hidden">
          <div className="border-t border-slate-700 bg-ink-900 px-4 pb-6 pt-4 sm:px-6">
            <nav className="grid gap-2">
              {navItems.slice(0, 2).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-medium transition",
                    isLinkActive(item.href)
                      ? "bg-slate-800 text-white"
                      : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              ))}

              <div className="rounded-xl border border-slate-700/80 bg-slate-900/60">
                <button
                  type="button"
                  onClick={() => setIsMobileDesignOpen((prev) => !prev)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition",
                    isDesignDropdownActive || isMobileDesignOpen
                      ? "bg-slate-800 text-white"
                      : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
                  )}
                  aria-expanded={isMobileDesignOpen}
                  aria-label="Toggle Design Services links"
                >
                  <span>Design Services</span>
                  <ChevronDown className={cn("h-4 w-4 transition", isMobileDesignOpen && "rotate-180")} />
                </button>
                <div className={cn("grid transition-all", isMobileDesignOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                  <div className="overflow-hidden">
                    <div className="grid gap-1 px-2 pb-2">
                      {designNavItems.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsMobileDesignOpen(false);
                          }}
                          className={cn(
                            "rounded-lg px-3 py-2 text-sm transition",
                            isLinkActive(item.href)
                              ? "bg-slate-800 text-white"
                              : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
                          )}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-700/80 bg-slate-900/60">
                <button
                  type="button"
                  onClick={() => setIsMobileAIOpen((prev) => !prev)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition",
                    isAIDropdownActive || isMobileAIOpen
                      ? "bg-slate-800 text-white"
                      : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
                  )}
                  aria-expanded={isMobileAIOpen}
                  aria-label="Toggle AI Automation links"
                >
                  <span>AI Automation</span>
                  <ChevronDown className={cn("h-4 w-4 transition", isMobileAIOpen && "rotate-180")} />
                </button>
                <div className={cn("grid transition-all", isMobileAIOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                  <div className="overflow-hidden">
                    <div className="grid gap-1 px-2 pb-2">
                      {aiAutomationNavItems.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsMobileAIOpen(false);
                          }}
                          className={cn(
                            "rounded-lg px-3 py-2 text-sm transition",
                            isLinkActive(item.href)
                              ? "bg-slate-800 text-white"
                              : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
                          )}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {navItems.slice(2).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-medium transition",
                    isLinkActive(item.href)
                      ? "bg-slate-800 text-white"
                      : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <PrimaryLink href="/contact" className="mt-4 w-full">
              Get Free Growth Plan
            </PrimaryLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}

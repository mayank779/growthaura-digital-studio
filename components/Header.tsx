"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { navItems, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/BrandLogo";
import { PrimaryLink } from "@/components/ui/PrimaryLink";

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
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

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition",
                  active ? "text-white" : "text-slate-300 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
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

      <div
        className={cn(
          "lg:hidden",
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="border-t border-slate-700 bg-ink-900 px-4 pb-6 pt-4 sm:px-6">
          <nav className="grid gap-2">
            {navItems.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-medium transition",
                    active
                      ? "bg-slate-800 text-white"
                      : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <PrimaryLink href="/contact" className="mt-4 w-full">
            Get Free Growth Plan
          </PrimaryLink>
        </div>
      </div>
    </header>
  );
}

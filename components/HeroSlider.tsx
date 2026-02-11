"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { heroSlides } from "@/data/home";
import { cn } from "@/lib/utils";

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rounded-3xl border border-slate-700/60 bg-slate-900/70 p-5 shadow-soft backdrop-blur sm:p-6 md:p-7">
      <div className="relative min-h-[220px] sm:min-h-[235px]">
        {heroSlides.map((slide, index) => (
          <article
            key={slide.title}
            className={cn(
              "absolute inset-0 transition-all duration-500",
              current === index ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
            )}
          >
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">{slide.title}</h3>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-300 sm:text-base">{slide.subtitle}</p>
            <Link
              href={slide.href}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-200 transition hover:text-white"
            >
              Learn more <ChevronRight size={16} />
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => setCurrent(index)}
            className={cn(
              "h-2.5 rounded-full transition-all",
              current === index ? "w-9 bg-brand-400" : "w-2.5 bg-slate-500 hover:bg-slate-400"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative mt-5 h-44 overflow-hidden rounded-2xl border border-slate-700/60 sm:h-52 md:h-56">
        {heroSlides.map((slide, index) => (
          <Image
            key={`${slide.title}-image`}
            src={slide.image}
            alt={slide.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 42vw"
            quality={72}
            className={cn(
              "object-cover transition duration-700",
              current === index ? "scale-100 opacity-100" : "pointer-events-none scale-105 opacity-0"
            )}
          />
        ))}
      </div>
    </div>
  );
}

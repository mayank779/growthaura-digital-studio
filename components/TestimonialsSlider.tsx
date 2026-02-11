"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

type TestimonialsSliderProps = {
  compact?: boolean;
};

export function TestimonialsSlider({ compact = false }: TestimonialsSliderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const visible = compact
    ? [testimonials[current]]
    : [testimonials[current], testimonials[(current + 1) % testimonials.length]];

  return (
    <div>
      <div className={cn("grid gap-6", compact ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2")}>
        {visible.map((item, index) => {
          const initials = item.name
            .split(" ")
            .map((part) => part[0])
            .join("")
            .slice(0, 2)
            .toUpperCase();
          const tone =
            index % 2 === 0
              ? {
                  border: "border-brand-200/80",
                  surface: "from-white via-brand-50/75 to-blue-50/70",
                  badge: "bg-brand-100/80 text-brand-700"
                }
              : {
                  border: "border-cyan-200/75",
                  surface: "from-white via-cyan-50/70 to-sky-50/60",
                  badge: "bg-cyan-100/80 text-cyan-700"
                };

          return (
            <article
              key={`${item.name}-${index}`}
              className={cn(
                "relative overflow-hidden rounded-3xl border bg-gradient-to-br p-6 shadow-[0_12px_34px_rgba(15,27,55,0.1)] transition hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(15,27,55,0.14)] sm:p-7",
                tone.border,
                tone.surface
              )}
            >
              <div className="pointer-events-none absolute -right-8 -top-10 h-24 w-24 rounded-full bg-white/70 blur-2xl" />
              <div className="mb-5 flex items-center justify-between gap-3">
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, starIndex) => (
                    <Star key={starIndex} size={16} fill="currentColor" />
                  ))}
                </div>
                <span
                  className={cn(
                    "rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em]",
                    tone.badge
                  )}
                >
                  Verified Client
                </span>
              </div>

              <Quote className="mb-3 h-5 w-5 text-brand-500/75" />
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">{`"${item.quote}"`}</p>

              <div className="mt-6 flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-violet-600 text-sm font-semibold text-white shadow-md">
                  {initials}
                </span>
                <div>
                  <p className="font-semibold text-ink-900">{item.name}</p>
                  <p className="text-sm text-slate-600">
                    {item.role}, {item.company}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-6 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white/70 text-slate-700 transition hover:border-brand-400 hover:text-brand-600"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white/70 text-slate-700 transition hover:border-brand-400 hover:text-brand-600"
          aria-label="Next testimonial"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

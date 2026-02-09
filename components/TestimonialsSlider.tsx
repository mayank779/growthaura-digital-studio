"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
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
        {visible.map((item, index) => (
          <article key={`${item.name}-${index}`} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex gap-1 text-amber-400">
              {Array.from({ length: item.rating }).map((_, starIndex) => (
                <Star key={starIndex} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">“{item.quote}”</p>
            <div className="mt-4">
              <p className="font-semibold text-ink-900">{item.name}</p>
              <p className="text-sm text-slate-600">
                {item.role}, {item.company}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-brand-400 hover:text-brand-600"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-brand-400 hover:text-brand-600"
          aria-label="Next testimonial"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/lib/types";
import { cn } from "@/lib/utils";

type FAQAccordionProps = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <article key={item.question} className="rounded-2xl border border-slate-200 bg-white">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={open}
            >
              <h3 className="text-base font-semibold text-ink-900 sm:text-lg">{item.question}</h3>
              <ChevronDown className={cn("h-5 w-5 shrink-0 text-slate-500 transition", open && "rotate-180")} />
            </button>
            <div className={cn("grid transition-all", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
              <div className="overflow-hidden">
                <p className="px-5 pb-4 text-sm leading-relaxed text-slate-600 sm:text-base">{item.answer}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

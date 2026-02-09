"use client";

import { useState } from "react";
import { pricingSections } from "@/data/pricing";
import { cn } from "@/lib/utils";
import { PricingCard } from "@/components/PricingCard";

export function PricingTabs() {
  const [active, setActive] = useState(pricingSections[0]?.id ?? "website-packages");
  const activeSection = pricingSections.find((section) => section.id === active) ?? pricingSections[0];

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {pricingSections.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => setActive(section.id)}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition",
              active === section.id
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 text-slate-600 hover:border-brand-300 hover:text-brand-700"
            )}
          >
            {section.label}
          </button>
        ))}
      </div>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
        <h2 className="text-2xl font-semibold text-ink-900">{activeSection.label}</h2>
        <p className="mt-2 text-sm text-slate-600">{activeSection.description}</p>
        <div className="mt-7 grid gap-5 lg:grid-cols-3">
          {activeSection.plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
        {activeSection.note ? <p className="mt-5 text-sm text-slate-500">{activeSection.note}</p> : null}
      </section>
    </div>
  );
}

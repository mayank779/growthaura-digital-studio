"use client";

import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { pricingSections } from "@/data/pricing";
import { cn } from "@/lib/utils";
import { PricingCard } from "@/components/PricingCard";

export function PricingTabs() {
  const searchParams = useSearchParams();
  const [active, setActive] = useState(pricingSections[0]?.id ?? "website-packages");
  const activeSection = pricingSections.find((section) => section.id === active) ?? pricingSections[0];

  useEffect(() => {
    const category = searchParams.get("category");
    if (!category) return;
    const exists = pricingSections.some((section) => section.id === category);
    if (exists) setActive(category);
  }, [searchParams]);

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
        <div className="mt-5 grid gap-2 sm:grid-cols-3">
          {[
            "Free discovery call before onboarding",
            "No hidden fees with clear milestone billing",
            "Priority execution support after kickoff"
          ].map(
            (point) => (
              <div
                key={point}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-xs font-medium text-slate-600"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-brand-600" />
                {point}
              </div>
            )
          )}
        </div>
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

import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { PricingPlan } from "@/lib/types";
import { cn } from "@/lib/utils";

type PricingCardProps = {
  plan: PricingPlan;
  href?: string;
};

export function PricingCard({ plan, href = "/contact" }: PricingCardProps) {
  return (
    <article
      className={cn(
        "rounded-2xl border p-6 transition md:p-7",
        plan.featured
          ? "border-brand-400 bg-brand-50/40 shadow-soft"
          : "border-slate-200 bg-white hover:-translate-y-1 hover:border-brand-300 hover:shadow-soft"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold text-ink-900">{plan.name}</h3>
          <p className="mt-1 text-sm text-slate-600">{plan.audience}</p>
        </div>
        {plan.featured ? (
          <span className="rounded-full bg-gradient-to-r from-brand-500 to-violet-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
            Most Popular
          </span>
        ) : null}
      </div>
      <p className="mt-5 text-2xl font-semibold text-ink-900">{plan.price}</p>
      {plan.timeline ? <p className="mt-1 text-sm text-slate-500">{plan.timeline}</p> : null}
      <ul className="mt-5 space-y-2 text-sm text-slate-600">
        {plan.points.map((point) => (
          <li key={point} className="flex gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className={cn(
          "mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition",
          plan.featured
            ? "bg-ink-900 text-white hover:bg-ink-800"
            : "border border-slate-200 text-slate-800 hover:border-brand-400 hover:text-brand-700"
        )}
      >
        {plan.cta}
      </Link>
    </article>
  );
}

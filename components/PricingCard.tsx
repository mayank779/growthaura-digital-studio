import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { PricingPlan } from "@/lib/types";
import { cn } from "@/lib/utils";

type PricingCardProps = {
  plan: PricingPlan;
  href?: string;
};

export function PricingCard({ plan, href = "/contact" }: PricingCardProps) {
  const isFeatured = Boolean(plan.featured);

  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-2xl border p-6 transition md:p-7",
        isFeatured
          ? "border-brand-400/70 bg-gradient-to-br from-brand-50 via-white to-violet-100/80 shadow-[0_20px_45px_rgba(56,93,247,0.18)] hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(56,93,247,0.24)]"
          : "border-slate-200 bg-white hover:-translate-y-1 hover:border-brand-300 hover:shadow-soft"
      )}
    >
      {isFeatured ? (
        <>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 via-blue-500 to-violet-500" />
          <div className="pointer-events-none absolute -right-12 -top-14 h-36 w-36 rounded-full bg-brand-300/35 blur-3xl" />
        </>
      ) : null}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold text-ink-900">{plan.name}</h3>
          <p className="mt-1 text-sm text-slate-600">{plan.audience}</p>
        </div>
        {isFeatured ? (
          <span className="rounded-full bg-gradient-to-r from-brand-600 to-violet-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-sm">
            Most Popular
          </span>
        ) : null}
      </div>
      <p className="mt-5 text-2xl font-semibold text-ink-900">{plan.price}</p>
      {plan.timeline ? <p className="mt-1 text-sm text-slate-500">{plan.timeline}</p> : null}
      <ul className="mt-5 space-y-2 text-sm text-slate-600">
        {plan.points.map((point) => (
          <li key={point} className="flex gap-2">
            <CheckCircle2 className={cn("mt-0.5 h-4 w-4 shrink-0", isFeatured ? "text-brand-700" : "text-brand-600")} />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className={cn(
          "mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition",
          isFeatured
            ? "bg-gradient-to-r from-brand-600 to-violet-600 text-white shadow-[0_10px_25px_rgba(56,93,247,0.32)] hover:from-brand-700 hover:to-violet-700"
            : "border border-slate-200 text-slate-800 hover:border-brand-400 hover:text-brand-700"
        )}
      >
        {plan.cta}
      </Link>
    </article>
  );
}

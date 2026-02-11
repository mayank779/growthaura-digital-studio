import { ArrowRight, CheckCircle2, Clock3, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { PricingPlan } from "@/lib/types";
import { PriceText } from "@/components/currency/PriceText";
import { cn } from "@/lib/utils";

type PricingCardProps = {
  plan: PricingPlan;
  href?: string;
};

const planThemes = [
  {
    surface: "from-white via-brand-50/80 to-blue-50/70",
    border: "border-brand-200/80",
    glow: "bg-brand-300/35",
    accent: "from-brand-500 via-blue-500 to-cyan-500",
    chip: "border-brand-200/80 bg-white/80 text-brand-700",
    icon: "text-brand-700"
  },
  {
    surface: "from-white via-amber-50/80 to-orange-50/70",
    border: "border-amber-200/70",
    glow: "bg-amber-300/35",
    accent: "from-amber-500 via-orange-500 to-rose-500",
    chip: "border-amber-200/80 bg-white/80 text-amber-700",
    icon: "text-amber-700"
  },
  {
    surface: "from-white via-emerald-50/75 to-cyan-50/75",
    border: "border-emerald-200/80",
    glow: "bg-emerald-300/35",
    accent: "from-emerald-500 via-cyan-500 to-sky-500",
    chip: "border-emerald-200/80 bg-white/80 text-emerald-700",
    icon: "text-emerald-700"
  }
];

function getPlanTheme(planName: string) {
  const seed = Array.from(planName).reduce((total, char) => total + char.charCodeAt(0), 0);
  return planThemes[seed % planThemes.length];
}

export function PricingCard({ plan, href = "/contact" }: PricingCardProps) {
  const isFeatured = Boolean(plan.featured);
  const theme = getPlanTheme(plan.name);
  const priceText = plan.price.toLowerCase();
  const isMonthly = priceText.includes("/month");
  const isCustom = priceText.includes("custom") || plan.name.toLowerCase().includes("partner");
  const urgencyText = isFeatured
    ? "Most booked package. Limited onboarding slots this month."
    : isCustom
      ? "Reserved for committed brands. Apply for an executive roadmap."
      : "Limited monthly onboarding to maintain premium delivery quality.";
  const commitmentText = isCustom
    ? "Executive growth partnership"
    : isMonthly
      ? "Monthly growth retainer"
      : "One-time launch package";
  const ctaLabel = isCustom
    ? "Request Custom Proposal"
    : isFeatured
      ? "Book Priority Strategy Call"
      : plan.cta === "View Full Pricing & Inclusions"
        ? "Compare Plans & Inclusions"
        : plan.cta;
  const ctaSupportText = isCustom
    ? "Custom plan recommendation within 48 hours"
    : "Free strategy call before finalizing scope";

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[28px] border p-6 transition duration-300 md:p-7",
        isFeatured
          ? "border-brand-400/75 bg-gradient-to-br from-brand-50 via-white to-violet-100/85 shadow-[0_18px_48px_rgba(56,93,247,0.2)] hover:-translate-y-1.5 hover:shadow-[0_24px_58px_rgba(56,93,247,0.28)]"
          : `${theme.border} bg-gradient-to-br ${theme.surface} shadow-[0_14px_38px_rgba(15,27,55,0.1)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(15,27,55,0.16)]`
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r",
          isFeatured ? "from-brand-500 via-violet-500 to-blue-500" : theme.accent
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute -right-12 -top-14 h-36 w-36 rounded-full blur-3xl",
          isFeatured ? "bg-brand-300/40" : theme.glow
        )}
      />
      <div className="pointer-events-none absolute -bottom-12 -left-8 h-28 w-28 rounded-full bg-white/60 blur-2xl" />

      <div className="flex items-start justify-between gap-3">
        <div>
          <span
            className={cn(
              "inline-flex rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]",
              isFeatured ? "border-brand-200 bg-white/90 text-brand-700" : theme.chip
            )}
          >
            Plan
          </span>
          <h3 className="mt-3 text-xl font-semibold text-ink-900">{plan.name}</h3>
          <p className="mt-1 text-sm text-slate-600">{plan.audience}</p>
          <p className="mt-1 text-xs font-medium text-brand-700/90">
            {isFeatured ? "Chosen by fast-scaling brands" : "Built for measurable business outcomes"}
          </p>
        </div>
        {isFeatured ? (
          <span className="rounded-full bg-gradient-to-r from-brand-600 to-violet-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-sm">
            Most Popular
          </span>
        ) : null}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1 rounded-full border border-slate-200/80 bg-white/80 px-2.5 py-1 text-[11px] font-medium text-slate-600">
          <Sparkles className="h-3.5 w-3.5 text-brand-600" />
          {commitmentText}
        </span>
        <span className="inline-flex rounded-full border border-slate-200/80 bg-white/80 px-2.5 py-1 text-[11px] font-medium text-slate-600">
          Conversion-focused scope
        </span>
      </div>

      <p className="mt-5 text-2xl font-semibold text-ink-900">
        <PriceText value={plan.price} />
      </p>
      {plan.timeline ? (
        <p className="mt-1 text-sm text-slate-500">
          <PriceText value={plan.timeline} />
        </p>
      ) : null}

      <div
        className={cn(
          "mt-3 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium",
          isFeatured ? "border-brand-200 bg-brand-50/80 text-brand-700" : "border-amber-200 bg-amber-50/80 text-amber-700"
        )}
      >
        <Clock3 className="h-3.5 w-3.5" />
        {urgencyText}
      </div>

      <ul className="mt-5 space-y-2.5 text-sm text-slate-700">
        {plan.points.map((point) => (
          <li key={point} className="flex items-start gap-2.5">
            <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/80 shadow-sm">
              <CheckCircle2
                className={cn("h-4 w-4 shrink-0", isFeatured ? "text-brand-700" : theme.icon)}
              />
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className={cn(
          "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition",
          isFeatured
            ? "bg-gradient-to-r from-brand-600 to-violet-600 text-white shadow-[0_10px_25px_rgba(56,93,247,0.32)] hover:from-brand-700 hover:to-violet-700"
            : "border border-white/80 bg-white/75 text-slate-800 shadow-sm hover:border-brand-300 hover:bg-white hover:text-brand-700"
        )}
      >
        {ctaLabel}
        <ArrowRight className="h-4 w-4" />
      </Link>

      <p className="mt-2 text-center text-xs text-slate-500">{ctaSupportText}</p>

      <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] text-slate-600 sm:grid-cols-3">
        <span className="inline-flex items-center gap-1 rounded-lg border border-slate-200/80 bg-white/70 px-2 py-1">
          <ShieldCheck className="h-3.5 w-3.5 text-brand-600" />
          No hidden fees
        </span>
        <span className="inline-flex items-center gap-1 rounded-lg border border-slate-200/80 bg-white/70 px-2 py-1">
          <CheckCircle2 className={cn("h-3.5 w-3.5", isFeatured ? "text-brand-700" : theme.icon)} />
          Clear scope
        </span>
        <span className="inline-flex items-center gap-1 rounded-lg border border-slate-200/80 bg-white/70 px-2 py-1">
          <Clock3 className="h-3.5 w-3.5 text-brand-600" />
          Priority onboarding
        </span>
      </div>
    </article>
  );
}

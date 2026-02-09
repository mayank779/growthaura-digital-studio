import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Service } from "@/lib/types";
import { IconResolver } from "@/components/IconResolver";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-soft">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
        <IconResolver name={service.icon} className="h-5 w-5" />
      </span>
      <h3 className="mt-4 text-xl font-semibold text-ink-900">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.shortDescription}</p>
      <p className="mt-4 text-sm font-medium text-slate-700">{service.outcome}</p>
      <Link
        href={`/services#${service.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition group-hover:text-brand-700"
      >
        View Details <ArrowUpRight size={16} />
      </Link>
    </article>
  );
}

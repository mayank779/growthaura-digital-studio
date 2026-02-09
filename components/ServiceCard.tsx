import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Service } from "@/lib/types";
import { IconResolver } from "@/components/IconResolver";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  service: Service;
  index?: number;
};

const gradientThemes = [
  {
    card: "from-[#05070f] via-[#0c1428] to-[#162a4d]",
    icon: "from-brand-400 to-blue-500",
    border: "border-brand-300/30",
    glow: "bg-brand-500/35"
  },
  {
    card: "from-[#06080f] via-[#151325] to-[#2a2150]",
    icon: "from-violet-400 to-fuchsia-500",
    border: "border-violet-300/30",
    glow: "bg-violet-500/35"
  },
  {
    card: "from-[#05090f] via-[#0f1c29] to-[#16404a]",
    icon: "from-cyan-400 to-teal-500",
    border: "border-cyan-300/30",
    glow: "bg-cyan-500/35"
  },
  {
    card: "from-[#090608] via-[#1d1420] to-[#3f1f3b]",
    icon: "from-rose-400 to-pink-500",
    border: "border-pink-300/30",
    glow: "bg-pink-500/35"
  },
  {
    card: "from-[#080706] via-[#211a12] to-[#4a2a1b]",
    icon: "from-amber-400 to-orange-500",
    border: "border-amber-300/30",
    glow: "bg-amber-500/35"
  },
  {
    card: "from-[#05070b] via-[#121a34] to-[#263e7c]",
    icon: "from-blue-400 to-indigo-500",
    border: "border-blue-300/30",
    glow: "bg-blue-500/35"
  }
];

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const theme = gradientThemes[index % gradientThemes.length];

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-3xl border bg-gradient-to-br p-6 text-white shadow-[0_14px_35px_rgba(15,23,42,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(8,15,30,0.45)]",
        theme.card,
        theme.border
      )}
    >
      <div className={cn("pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full blur-3xl", theme.glow)} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-white/0 via-white/80 to-white/0" />

      <span className={cn("inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg", theme.icon)}>
        <IconResolver name={service.icon} className="h-5 w-5 text-white" />
      </span>
      <h3 className="mt-4 text-xl font-semibold text-white">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-200">{service.shortDescription}</p>
      <p className="mt-4 text-sm font-medium text-slate-100">{service.outcome}</p>
      <Link
        href={`/services#${service.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 transition group-hover:text-white"
      >
        View Details <ArrowUpRight size={16} />
      </Link>
    </article>
  );
}

import { cn } from "@/lib/utils";

type BrandLogoProps = {
  compact?: boolean;
  className?: string;
};

export function BrandLogo({ compact = false, className }: BrandLogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 via-blue-500 to-violet-500 text-sm font-bold text-white shadow-glow">
        GA
      </span>
      {!compact ? (
        <span className="font-semibold tracking-tight text-slate-100">
          GrowthAura <span className="hidden text-slate-300 md:inline">Digital Studio</span>
        </span>
      ) : null}
    </div>
  );
}

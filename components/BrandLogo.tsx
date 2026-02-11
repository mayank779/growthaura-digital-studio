import Image from "next/image";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  compact?: boolean;
  className?: string;
};

export function BrandLogo({ compact = false, className }: BrandLogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl shadow-glow">
        <Image
          src="/mayank-digital-labs-logo.svg"
          alt={`${siteConfig.brandName} logo`}
          fill
          sizes="40px"
          className="object-cover"
          priority
        />
      </span>
      {!compact ? (
        <span className="font-heading text-base font-semibold tracking-tight text-slate-100 sm:text-lg">
          {siteConfig.brandName}
        </span>
      ) : null}
    </div>
  );
}

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
        <>
          <span className="text-base font-semibold tracking-tight text-slate-100 md:hidden">Mayank</span>
          <Image
            src="/mayank-digital-labs-wordmark.svg"
            alt={siteConfig.brandName}
            width={320}
            height={48}
            className="hidden h-8 w-auto md:block"
            priority
          />
        </>
      ) : null}
    </div>
  );
}

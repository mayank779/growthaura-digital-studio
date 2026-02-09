import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  className
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={cn("mb-10 space-y-4", centered ? "text-center" : "text-left", className)}>
      {eyebrow ? (
        <p className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">{title}</h2>
      {description ? (
        <p
          className={cn(
            "max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg",
            centered ? "mx-auto" : undefined
          )}
        >
          {description}
        </p>
      ) : null}
      {action}
    </div>
  );
}

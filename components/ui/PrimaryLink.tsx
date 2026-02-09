import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PrimaryLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function PrimaryLink({ href, children, className }: PrimaryLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02] hover:from-brand-400 hover:to-violet-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
        className
      )}
    >
      {children}
    </Link>
  );
}

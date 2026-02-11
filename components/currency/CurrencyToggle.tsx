"use client";

import { cn } from "@/lib/utils";
import { CurrencyMode } from "@/lib/currency";
import { useCurrencyMode } from "@/components/currency/CurrencyModeProvider";

type ToggleOption = {
  label: string;
  value: CurrencyMode;
};

const options: ToggleOption[] = [
  { label: "USD", value: "usd" },
  { label: "INR", value: "inr" }
];

type CurrencyToggleProps = {
  className?: string;
};

export function CurrencyToggle({ className }: CurrencyToggleProps) {
  const { mode, setMode } = useCurrencyMode();

  return (
    <div className={cn("inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 shadow-sm", className)}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => setMode(option.value)}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] transition",
            mode === option.value
              ? "bg-ink-900 text-white"
              : "text-slate-600 hover:bg-slate-100 hover:text-slate-800"
          )}
          aria-pressed={mode === option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

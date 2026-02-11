"use client";

import { formatPriceByMode } from "@/lib/currency";
import { useCurrencyMode } from "@/components/currency/CurrencyModeProvider";

type PriceTextProps = {
  value: string;
  className?: string;
};

export function PriceText({ value, className }: PriceTextProps) {
  const { mode } = useCurrencyMode();
  const text = formatPriceByMode(value, mode);

  return <span className={className}>{text}</span>;
}


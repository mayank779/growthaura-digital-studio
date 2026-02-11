"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { CurrencyMode } from "@/lib/currency";

type CurrencyModeContextValue = {
  mode: CurrencyMode;
  setMode: (next: CurrencyMode) => void;
};

const STORAGE_KEY = "mdl-currency-mode";

const CurrencyModeContext = createContext<CurrencyModeContextValue | null>(null);

function detectCurrencyByLocale(): CurrencyMode {
  const locales = [navigator.language, ...(navigator.languages ?? [])].filter(Boolean);

  for (const locale of locales) {
    try {
      const region = new Intl.Locale(locale).region;
      if (region?.toUpperCase() === "IN") return "inr";
    } catch {
      const match = locale.match(/-([a-z]{2})$/i);
      if (match?.[1]?.toUpperCase() === "IN") return "inr";
    }
  }

  return "usd";
}

export function CurrencyModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<CurrencyMode>("usd");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "usd" || saved === "inr" || saved === "both") {
      setMode(saved);
      return;
    }

    setMode(detectCurrencyByLocale());
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  const value = useMemo(() => ({ mode, setMode }), [mode]);

  return <CurrencyModeContext.Provider value={value}>{children}</CurrencyModeContext.Provider>;
}

export function useCurrencyMode() {
  const context = useContext(CurrencyModeContext);
  if (!context) {
    throw new Error("useCurrencyMode must be used inside CurrencyModeProvider");
  }
  return context;
}

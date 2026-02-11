export type CurrencyMode = "both" | "usd" | "inr";

function normalizePiece(piece: string) {
  return piece.replace(/\s+/g, " ").trim();
}

export function formatPriceByMode(value: string, mode: CurrencyMode): string {
  if (mode === "both") return normalizePiece(value);

  const pieces = value.split("|").map((part) => part.trim()).filter(Boolean);
  if (!pieces.length) return normalizePiece(value);

  const target = mode === "usd" ? "usd" : "inr";
  const matched = pieces.find((part) => part.toLowerCase().includes(target));

  return normalizePiece(matched ?? value);
}


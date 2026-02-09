import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for GrowthAura Digital Studio."
};

export default function TermsPage() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <h1 className="font-heading text-4xl font-semibold text-ink-900">Terms & Conditions</h1>
        <p className="mt-3 text-sm text-slate-600">
          This is a placeholder terms page. Replace this section with your legal terms covering scope, payment,
          revisions, timelines, intellectual property, and liabilities.
        </p>
      </Container>
    </section>
  );
}

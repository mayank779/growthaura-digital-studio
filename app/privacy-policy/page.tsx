import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Mayank Digital Labs."
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <h1 className="font-heading text-4xl font-semibold text-ink-900">Privacy Policy</h1>
        <p className="mt-3 text-sm text-slate-600">
          This is a placeholder privacy policy. Replace this content with your legal privacy policy text,
          including data collection, storage, contact, and consent details.
        </p>
      </Container>
    </section>
  );
}


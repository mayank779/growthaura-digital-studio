import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Blog",
  description: "Mayank Digital Labs blog placeholder page for future SEO, ads, and digital growth content."
};

export default function BlogPage() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
        <h1 className="font-heading text-4xl font-semibold text-ink-900">Blog Coming Soon</h1>
        <p className="mt-3 text-sm text-slate-600 sm:text-base">
          We are preparing practical content on SEO, paid ads, web conversion, and growth strategy.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-800"
        >
          Request Topic Suggestions
        </Link>
      </Container>
    </section>
  );
}


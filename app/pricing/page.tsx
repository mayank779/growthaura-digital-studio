import type { Metadata } from "next";
import { PricingTabs } from "@/components/PricingTabs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PrimaryLink } from "@/components/ui/PrimaryLink";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent INR pricing for website development, SEO retainers, social media management, Google and Meta ads management, and email marketing in India."
};

export default function PricingPage() {
  return (
    <div>
      <section className="bg-ink-900 pb-16 pt-20 text-white sm:pt-24">
        <Container className="max-w-4xl">
          <p className="mb-4 inline-flex rounded-full border border-brand-300/30 bg-brand-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-200">
            Pricing Plans
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl">
            Transparent digital marketing pricing in INR for Indian businesses
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-200 sm:text-lg">
            Choose a package by growth stage or request a custom quote. Every plan includes clear deliverables,
            communication rhythm, and actionable reporting.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Packages"
            title="Select a service category to view pricing and inclusions"
            description="Pricing reflects realistic 2026 Indian market ranges for high-quality agency work."
          />
          <PricingTabs />
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-8 rounded-3xl border border-slate-200 bg-mist-100 p-8 shadow-sm sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <h2 className="font-heading text-3xl font-semibold text-ink-900 sm:text-4xl">
              Not sure which plan is right for you?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Get a custom bundle based on your goals, category competition, and team bandwidth. We will map the
              right channel mix and recommend a practical monthly budget.
            </p>
          </div>
          <div className="flex justify-start lg:justify-end">
            <PrimaryLink href="/contact#lead-form">Get Custom Package</PrimaryLink>
          </div>
        </Container>
      </section>
    </div>
  );
}

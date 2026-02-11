import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { CurrencyToggle } from "@/components/currency/CurrencyToggle";
import { PricingTabs } from "@/components/PricingTabs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PrimaryLink } from "@/components/ui/PrimaryLink";
import { pricingSections } from "@/data/pricing";
import { internalLinkGroups, seoKeywords } from "@/data/seo";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent dual-currency pricing (USD + INR) for website development, SEO retainers, social media management, Google and Meta ads management, email marketing, and AI agent automation worldwide.",
  keywords: [...seoKeywords.pricing],
  alternates: {
    canonical: "/pricing"
  },
  openGraph: {
    title: "Pricing | Mayank Digital Labs",
    description:
      "Explore website, SEO, ads, email, and AI agent automation pricing packages with clear deliverables and support ranges.",
    url: `${siteConfig.domain}/pricing`,
    type: "website",
    images: [
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "Mayank Digital Labs pricing"
      }
    ]
  }
};

const pricingCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Mayank Digital Labs Pricing Catalog",
  itemListElement: pricingSections.map((section, sectionIndex) => ({
    "@type": "OfferCatalog",
    name: section.label,
    position: sectionIndex + 1,
    itemListElement: section.plans.map((plan, planIndex) => ({
      "@type": "ListItem",
      position: planIndex + 1,
      name: plan.name,
      description: `${plan.price}. ${plan.audience}`
    }))
  }))
};

export default function PricingPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingCatalogSchema) }}
      />

      <section className="bg-ink-900 pb-16 pt-20 text-white sm:pt-24">
        <Container className="max-w-4xl">
          <p className="mb-4 inline-flex rounded-full border border-brand-300/30 bg-brand-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-200">
            Pricing Plans
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl">
            Transparent digital marketing pricing for global businesses
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-200 sm:text-lg">
            Choose a package by growth stage or request a custom quote. Every plan includes clear deliverables,
            communication rhythm, actionable reporting, and optional AI automation extensions.
          </p>
          <p className="mt-2 text-sm text-slate-300">
            Plans are listed in USD + INR. Final invoicing is available in your preferred billing currency.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Packages"
            title="Select a service category to view pricing and inclusions"
            description="Pricing reflects realistic 2026 market ranges for high-quality agency work, including AI automation, graphic design, and UI/UX systems."
          />
          <div className="mb-5">
            <CurrencyToggle />
            <p className="mt-2 text-xs text-slate-500">Switch currency view: USD or INR.</p>
          </div>
          <div className="mb-6 flex flex-wrap gap-2">
            {seoKeywords.pricing.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full border border-slate-200 bg-slate-50/80 px-3 py-1 text-xs font-medium text-slate-600"
              >
                {keyword}
              </span>
            ))}
          </div>
          <Suspense
            fallback={
              <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-500 shadow-soft sm:p-8">
                Loading pricing categories...
              </div>
            }
          >
            <PricingTabs />
          </Suspense>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="text-lg font-semibold text-ink-900">Related internal pages</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {internalLinkGroups.pricing.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
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

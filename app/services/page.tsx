import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { detailedServices } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PrimaryLink } from "@/components/ui/PrimaryLink";
import { IconResolver } from "@/components/IconResolver";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development, SEO, social media marketing, Google Ads, Meta Ads, email marketing, and branding services for Indian businesses."
};

const serviceImages = [
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=1400&q=80"
];

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-ink-900 pb-16 pt-20 text-white sm:pt-24">
        <Container className="max-w-4xl">
          <p className="mb-4 inline-flex rounded-full border border-brand-300/30 bg-brand-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-200">
            Services
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl">
            Mayank Digital Labs services built to generate leads, revenue, and brand authority
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-200 sm:text-lg">
            We combine web development, SEO, social media, performance ads, email marketing, and creative
            execution to build predictable growth systems for Indian businesses.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="space-y-12">
          <div id="performance-ads" className="relative -top-24 h-0" />
          {detailedServices.map((service, index) => (
            <article
              key={service.slug}
              id={service.slug}
              className="grid items-center gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-2"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <IconResolver name={service.icon} className="h-5 w-5" />
                </span>
                <h2 className="mt-4 font-heading text-3xl font-semibold text-ink-900">{service.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{service.shortDescription}</p>
                <p className="mt-4 text-base font-semibold text-brand-700">{service.pricingNote}</p>
                <ul className="mt-5 space-y-2 text-sm text-slate-600">
                  {service.includeList.map((point) => (
                    <li key={point} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <PrimaryLink href="/contact#lead-form">Get Custom Proposal</PrimaryLink>
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <Image
                  src={serviceImages[index % serviceImages.length]}
                  alt={`${service.title} service illustration`}
                  width={1400}
                  height={1000}
                  className="h-full w-full rounded-2xl border border-slate-200 object-cover"
                />
              </div>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container className="rounded-3xl border border-slate-200 bg-mist-100 p-8 text-center sm:p-10">
          <h2 className="font-heading text-3xl font-semibold text-ink-900 sm:text-4xl">
            Need a custom bundle across multiple services?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            We can combine website, SEO, social, ads, and email into one integrated strategy aligned to your
            growth stage and budget.
          </p>
          <div className="mt-6">
            <Link
              href="/contact#lead-form"
              className="inline-flex items-center justify-center rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-800"
            >
              Talk to Mayank Digital Labs
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}


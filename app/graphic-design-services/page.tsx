import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers3, Palette, PenTool, Sparkles, Workflow } from "lucide-react";
import { CurrencyToggle } from "@/components/currency/CurrencyToggle";
import { PriceText } from "@/components/currency/PriceText";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Container } from "@/components/ui/Container";
import { PrimaryLink } from "@/components/ui/PrimaryLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Graphic Design Services Worldwide",
  description:
    "Graphic design services for global brands: identity systems, social media creatives, campaign visuals, and ad design with transparent pricing.",
  keywords: [
    "graphic design services",
    "brand identity design agency",
    "social media creative design",
    "ad creative design services",
    "graphic design pricing packages"
  ],
  alternates: {
    canonical: "/graphic-design-services"
  },
  openGraph: {
    title: "Graphic Design Services | Mayank Digital Labs",
    description:
      "Build stronger brand recall with identity systems, campaign creatives, and performance-focused design assets.",
    url: `${siteConfig.domain}/graphic-design-services`,
    type: "website"
  }
};

const capabilityCards = [
  {
    icon: Palette,
    title: "Brand Identity Direction",
    description: "Visual language, color systems, and typography choices aligned to your positioning."
  },
  {
    icon: PenTool,
    title: "Campaign Creative Production",
    description: "Ad banners, social creatives, and launch assets designed for stronger CTR and recall."
  },
  {
    icon: Layers3,
    title: "Channel-Ready Adaptations",
    description: "One concept adapted cleanly across Instagram, LinkedIn, paid ads, and website placements."
  },
  {
    icon: Workflow,
    title: "Creative System Workflow",
    description: "Organized handoff with templates, editable files, and repeatable design guidelines."
  }
];

const plans = [
  {
    badge: "Starter",
    name: "Creative Starter Pack",
    price: "USD $180 - $360 | INR 14,999 - 29,999",
    timeline: "Timeline: 5-10 working days",
    points: [
      "Logo refinement and visual direction",
      "10 branded social design templates",
      "2 paid ad creative sets",
      "Basic brand guideline sheet"
    ]
  },
  {
    badge: "Most Popular",
    name: "Brand + Social Design Suite",
    price: "USD $420 - $965/month | INR 34,999 - 79,999/month",
    timeline: "Timeline: Monthly retainer",
    featured: true,
    points: [
      "Monthly social and campaign creative production",
      "Brand guideline refresh and extension",
      "Ad creative testing variants",
      "Bi-weekly creative review call"
    ]
  },
  {
    badge: "Scale",
    name: "Campaign Creative Partner",
    price: "USD $1,085+/month | INR 89,999+/month",
    timeline: "Timeline: Ongoing monthly partnership",
    points: [
      "High-volume multi-campaign creative pipeline",
      "Priority turnaround with QA checks",
      "Cross-channel brand consistency governance",
      "Dedicated creative lead"
    ]
  }
];

const processSteps = [
  {
    step: "01",
    title: "Creative Strategy Intake",
    detail: "We map positioning, audience, campaign goals, and style direction before production starts."
  },
  {
    step: "02",
    title: "Design System + Production",
    detail: "We build a reusable visual system and produce assets across required channels and formats."
  },
  {
    step: "03",
    title: "Optimization and Iteration",
    detail: "Winning visual concepts are scaled through structured revisions and campaign insights."
  }
];

const faqs = [
  {
    question: "Can you design for social media and paid ads together?",
    answer:
      "Yes. We create one consistent visual system and adapt it for social and ad placements to keep brand consistency high."
  },
  {
    question: "Do you provide editable source files?",
    answer:
      "Yes. Final delivery includes source files and practical handoff notes so your team can reuse assets correctly."
  },
  {
    question: "Is this service available globally?",
    answer:
      "Yes. We deliver graphic design services for clients worldwide with async and scheduled collaboration options."
  },
  {
    question: "Can this be bundled with ads or social management?",
    answer:
      "Yes. Graphic design can be bundled with social media management, paid ads, and website work for better consistency."
  }
];

const relatedLinks = [
  {
    label: "UI/UX Design Services",
    href: "/ui-ux-design-services",
    description: "Explore UX flow and interface design services for websites and products."
  },
  {
    label: "Graphic Design Pricing",
    href: "/pricing?category=graphic-design",
    description: "Compare design package tiers and deliverables."
  },
  {
    label: "Services Overview",
    href: "/services#graphic-design",
    description: "See how design integrates with growth channels."
  },
  {
    label: "Book Creative Consultation",
    href: "/contact#lead-form",
    description: "Get custom scope and timeline recommendations."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Graphic Design Services",
  serviceType: "Brand identity and campaign creative design",
  provider: {
    "@type": "Organization",
    name: siteConfig.brandName,
    url: siteConfig.domain
  },
  areaServed: "Worldwide",
  offers: plans.map((plan) => ({
    "@type": "Offer",
    name: plan.name,
    description: `${plan.price}. ${plan.timeline}`
  }))
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
};

export default function GraphicDesignServicesPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative overflow-hidden bg-ink-900 pb-16 pt-20 text-white sm:pt-24">
        <div className="absolute inset-0 bg-hero-grid opacity-90" />
        <div className="pointer-events-none absolute -right-20 top-6 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
        <Container className="relative max-w-5xl">
          <p className="mb-4 inline-flex rounded-full border border-brand-300/30 bg-brand-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-200">
            Graphic Design Services
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl">
            Creative design systems that make your brand impossible to ignore
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
            We craft visual identity, campaign creatives, and channel-ready design assets that improve trust,
            engagement, and ad performance for global brands.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryLink href="/contact#lead-form">Book Design Consultation</PrimaryLink>
            <Link
              href="/pricing?category=graphic-design"
              className="inline-flex items-center justify-center rounded-full border border-slate-500 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white hover:bg-white/5"
            >
              View Design Pricing
            </Link>
          </div>
          <ul className="mt-7 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
            {[
              "Branding, ads, social, and website design support",
              "Creative systems built for consistent growth execution",
              "Editable assets and clean handoff process",
              "Global service delivery across time zones"
            ].map((point) => (
              <li key={point} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-300" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Design Scope"
            title="What is included in our graphic design services"
            description="From identity direction to campaign assets, every output is mapped to conversion and brand consistency goals."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {capabilityCards.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-4 text-xl font-semibold text-ink-900">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{item.description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Pricing"
            title="Graphic design pricing aligned to output volume and complexity"
            description="Switch between USD and INR to compare package options."
          />
          <div className="mb-5">
            <CurrencyToggle />
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-3xl border bg-white p-6 shadow-sm ${
                  plan.featured ? "border-brand-300 ring-1 ring-brand-200" : "border-slate-200"
                }`}
              >
                <p className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-700">
                  {plan.badge}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-ink-900">{plan.name}</h3>
                <p className="mt-4 text-base font-semibold text-brand-700">
                  <PriceText value={plan.price} />
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">{plan.timeline}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {plan.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Process"
            title="Creative workflow for consistent quality and speed"
            description="A process designed to keep design quality high while supporting fast campaign cycles."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {processSteps.map((item) => (
              <article key={item.step} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">Step {item.step}</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{item.detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions about graphic design services"
            description="Answers to common pre-project questions."
          />
          <FAQAccordion items={faqs} />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Related Pages"
            title="Explore connected design and growth pages"
            description="Use these links to compare pricing and aligned services."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {relatedLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-300"
              >
                <p className="flex items-center justify-between gap-3 text-base font-semibold text-ink-900">
                  {item.label}
                  <ArrowRight className="h-4 w-4 text-brand-600" />
                </p>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

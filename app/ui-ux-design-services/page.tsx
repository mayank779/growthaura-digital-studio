import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Compass, LayoutGrid, Sparkles, TestTube2, Workflow } from "lucide-react";
import { CurrencyToggle } from "@/components/currency/CurrencyToggle";
import { PriceText } from "@/components/currency/PriceText";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Container } from "@/components/ui/Container";
import { PrimaryLink } from "@/components/ui/PrimaryLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "UI/UX Design Services Worldwide",
  description:
    "UI/UX design services for websites, funnels, and digital products. Improve user journeys, conversion flow, and product usability with transparent pricing.",
  keywords: [
    "ui ux design services",
    "website ui ux design agency",
    "conversion-focused ux design",
    "wireframe and product interface design",
    "ui ux design pricing"
  ],
  alternates: {
    canonical: "/ui-ux-design-services"
  },
  openGraph: {
    title: "UI/UX Design Services | Mayank Digital Labs",
    description:
      "User-focused UI/UX design for better conversion paths, cleaner experiences, and stronger product clarity.",
    url: `${siteConfig.domain}/ui-ux-design-services`,
    type: "website"
  }
};

const capabilityCards = [
  {
    icon: Compass,
    title: "UX Strategy and Flow Mapping",
    description: "User journeys, content hierarchy, and friction analysis to improve completion rates."
  },
  {
    icon: LayoutGrid,
    title: "Interface Design Systems",
    description: "Clean UI systems built for consistency across desktop, tablet, and mobile experiences."
  },
  {
    icon: Workflow,
    title: "Wireframe to Prototype Workflow",
    description: "Structured handoff from low-fidelity concept to interactive high-fidelity design."
  },
  {
    icon: TestTube2,
    title: "UX Optimization Iterations",
    description: "Continuous design updates based on behavior data and conversion bottlenecks."
  }
];

const plans = [
  {
    badge: "Starter",
    name: "UX Audit + Wireframe Sprint",
    price: "USD $300 - $720 | INR 24,999 - 59,999",
    timeline: "Timeline: 1-2 weeks",
    points: [
      "Journey and friction-point audit",
      "Key funnel/page wireframe redesign",
      "CTA and form interaction improvements",
      "Priority implementation recommendations"
    ]
  },
  {
    badge: "Most Popular",
    name: "UI/UX Product Design",
    price: "USD $965 - $2,410 | INR 79,999 - 1,99,999",
    timeline: "Timeline: 3-6 weeks",
    featured: true,
    points: [
      "Information architecture and flow blueprint",
      "High-fidelity interface design and prototypes",
      "Responsive components and design system",
      "Developer-ready handoff and specs"
    ]
  },
  {
    badge: "Scale",
    name: "UI/UX Growth Partner",
    price: "USD $1,450+/month | INR 1,20,000+/month",
    timeline: "Timeline: Ongoing monthly optimization",
    points: [
      "Conversion funnel UX iteration cycles",
      "Landing page experimentation support",
      "Design system expansion and QA",
      "Monthly UX impact reviews"
    ]
  }
];

const processSteps = [
  {
    step: "01",
    title: "Research + UX Blueprint",
    detail: "We map your users, goals, and conversion flow to create a practical UX direction."
  },
  {
    step: "02",
    title: "UI Design + Prototyping",
    detail: "Wireframes evolve into polished interface systems with clear hierarchy and interactions."
  },
  {
    step: "03",
    title: "Handoff + Optimization",
    detail: "Design handoff includes specs and optimization recommendations for continuous performance improvement."
  }
];

const faqs = [
  {
    question: "Do you design for web and mobile together?",
    answer:
      "Yes. We build responsive UI/UX systems so your experience stays consistent across desktop, tablet, and mobile."
  },
  {
    question: "Can you redesign only specific pages or flows?",
    answer:
      "Yes. We often start with high-impact pages or funnel stages and expand scope based on performance results."
  },
  {
    question: "Is this service available internationally?",
    answer:
      "Yes. We provide UI/UX design services worldwide with async collaboration and milestone-based delivery."
  },
  {
    question: "Can UI/UX be bundled with development and marketing?",
    answer:
      "Yes. UI/UX can be combined with website development, SEO, ads, and creative services for full growth execution."
  }
];

const relatedLinks = [
  {
    label: "Graphic Design Services",
    href: "/graphic-design-services",
    description: "Explore brand visuals, campaign creatives, and design production plans."
  },
  {
    label: "UI/UX Pricing Category",
    href: "/pricing?category=ui-ux-design",
    description: "Compare UI/UX pricing and package deliverables."
  },
  {
    label: "Services Overview",
    href: "/services#ui-ux-design",
    description: "See how UI/UX fits into your full growth stack."
  },
  {
    label: "Book UX Strategy Call",
    href: "/contact#lead-form",
    description: "Get a tailored UX roadmap for your current product or website."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "UI/UX Design Services",
  serviceType: "UX strategy and interface design services",
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

export default function UIUXDesignServicesPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative overflow-hidden bg-ink-900 pb-16 pt-20 text-white sm:pt-24">
        <div className="absolute inset-0 bg-hero-grid opacity-90" />
        <div className="pointer-events-none absolute -left-20 top-8 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <Container className="relative max-w-5xl">
          <p className="mb-4 inline-flex rounded-full border border-brand-300/30 bg-brand-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-200">
            UI/UX Design Services
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl">
            UI/UX design that reduces friction and improves conversion outcomes
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
            We design user journeys, wireframes, and interfaces for websites and products so users move faster,
            understand your value quickly, and complete high-intent actions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryLink href="/contact#lead-form">Book UI/UX Consultation</PrimaryLink>
            <Link
              href="/pricing?category=ui-ux-design"
              className="inline-flex items-center justify-center rounded-full border border-slate-500 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white hover:bg-white/5"
            >
              View UI/UX Pricing
            </Link>
          </div>
          <ul className="mt-7 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
            {[
              "UX strategy, wireframes, and high-fidelity UI",
              "Responsive-first design for desktop, tablet, and mobile",
              "Funnel and conversion-driven UX optimization",
              "Global collaboration with milestone-based delivery"
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
            eyebrow="UX Scope"
            title="What our UI/UX design services cover"
            description="From user-flow strategy to polished interfaces, every output is tied to user actions and business goals."
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
            title="UI/UX pricing based on scope, flow depth, and optimization needs"
            description="Switch between USD and INR for package comparison."
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
            title="How UI/UX work moves from strategy to implementation"
            description="A practical process designed to ship clarity quickly and improve conversion performance over time."
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
            title="Questions about UI/UX design services"
            description="Common questions teams ask before starting UX work."
          />
          <FAQAccordion items={faqs} />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Related Pages"
            title="Explore connected UI/UX and design pages"
            description="Move through these pages to compare service scope and pricing fit."
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

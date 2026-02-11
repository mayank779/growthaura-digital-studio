import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, Gauge, ListChecks, MessageCircleMore, PhoneCall, Workflow } from "lucide-react";
import { CurrencyToggle } from "@/components/currency/CurrencyToggle";
import { PriceText } from "@/components/currency/PriceText";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Container } from "@/components/ui/Container";
import { PrimaryLink } from "@/components/ui/PrimaryLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "AI Lead Qualification and Follow-Up Automation",
  description:
    "Automate lead scoring, qualification, and follow-up workflows with AI. Improve response speed, meeting bookings, and conversion quality for global teams.",
  keywords: [
    "ai lead qualification automation",
    "ai follow up automation services",
    "sales pipeline automation with ai",
    "lead scoring workflow automation",
    "ai appointment booking automation"
  ],
  alternates: {
    canonical: "/ai-lead-qualification-follow-up-automation"
  },
  openGraph: {
    title: "AI Lead Qualification + Follow-Up Automation | Mayank Digital Labs",
    description:
      "Deploy AI systems that score leads, trigger personalized follow-ups, and reduce response lag across your sales funnel.",
    url: `${siteConfig.domain}/ai-lead-qualification-follow-up-automation`,
    type: "website"
  }
};

const outcomes = [
  {
    icon: Gauge,
    title: "Faster First Response",
    description: "Respond to inbound leads immediately with contextual questions and intent capture."
  },
  {
    icon: ListChecks,
    title: "Structured Qualification",
    description: "Score and segment leads automatically using business-fit and readiness signals."
  },
  {
    icon: MessageCircleMore,
    title: "Personalized Follow-Up",
    description: "Trigger message paths by source, lifecycle stage, and engagement behavior."
  },
  {
    icon: Workflow,
    title: "Reliable Pipeline Movement",
    description: "Keep CRM stages updated so sales teams focus only on high-intent opportunities."
  }
];

const pricingPlans = [
  {
    badge: "Starter",
    name: "Lead Qualification Workflow",
    setup: "Setup: USD $720 - $1,680 | INR 59,999 - 1,40,000",
    support: "Support: USD $210 - $420/month | INR 17,999 - 34,999/month",
    timeline: "Timeline: 2-4 weeks",
    points: [
      "Lead capture + qualification score logic",
      "Basic follow-up reminder automation",
      "CRM stage update and owner assignment",
      "Weekly quality check and prompt refinements"
    ]
  },
  {
    badge: "Most Popular",
    name: "Pipeline Follow-Up Automation Pro",
    setup: "Setup: USD $1,950 - $4,250 | INR 1,60,000 - 3,50,000",
    support: "Support: USD $480 - $1,020/month | INR 39,999 - 84,999/month",
    timeline: "Timeline: 4-8 weeks",
    featured: true,
    points: [
      "Multi-step lead scoring and routing model",
      "Automated WhatsApp + email follow-up tracks",
      "Booking, reminder, and no-show recovery flows",
      "Monthly conversion diagnosis and tuning"
    ]
  },
  {
    badge: "Enterprise",
    name: "Revenue Workflow Automation Suite",
    setup: "Setup: USD $4,800 - $11,800+ | INR 4,00,000 - 9,80,000+",
    support: "Support: USD $1,250 - $3,250/month | INR 1,05,000 - 2,70,000/month",
    timeline: "Timeline: 8-14 weeks",
    points: [
      "Advanced scoring with custom lead intelligence",
      "Cross-channel nurture and escalation logic",
      "Sales-assist summaries for every qualified lead",
      "Dedicated optimization pod with weekly reviews"
    ]
  }
];

const executionModel = [
  {
    step: "01",
    title: "Qualification Framework",
    detail: "Define lead quality criteria, readiness signals, and routing thresholds."
  },
  {
    step: "02",
    title: "Follow-Up Orchestration",
    detail: "Build adaptive sequences for reminders, booking nudges, and no-response handling."
  },
  {
    step: "03",
    title: "Conversion Optimization",
    detail: "Track reply rates, meeting rates, and conversion quality to improve automation logic."
  }
];

const faqs = [
  {
    question: "Can this work with both inbound forms and paid ads leads?",
    answer:
      "Yes. We can ingest leads from website forms, paid campaign sources, social DMs, and messaging channels and apply consistent qualification logic."
  },
  {
    question: "Will AI replace my sales team?",
    answer:
      "No. The system is designed to remove repetitive follow-up and triage, so your sales team spends more time on high-intent conversations."
  },
  {
    question: "Can we keep manual control for sensitive prospects?",
    answer:
      "Yes. We configure priority rules and handoff conditions so high-value or sensitive leads are moved to human owners immediately."
  },
  {
    question: "Do you support international markets?",
    answer:
      "Yes. This service is available globally and can be adapted for different regions, messaging styles, and working hours."
  }
];

const relatedLinks = [
  {
    label: "AI Agent Automation Services",
    href: "/ai-agent-automation-services",
    description: "Explore the broader AI automation service stack and package tiers."
  },
  {
    label: "AI Chatbot + CRM Automation",
    href: "/ai-chatbot-crm-automation",
    description: "See chatbot-led CRM integration plans for sales pipeline teams."
  },
  {
    label: "AI Pricing Category",
    href: "/pricing?category=ai-agent-automation",
    description: "Compare AI setup and support pricing against other growth services."
  },
  {
    label: "Book Automation Strategy Call",
    href: "/contact#lead-form",
    description: "Get a lead qualification automation roadmap for your current funnel."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Lead Qualification and Follow-Up Automation",
  serviceType: "Lead scoring, routing, and follow-up automation",
  provider: {
    "@type": "Organization",
    name: siteConfig.brandName,
    url: siteConfig.domain
  },
  areaServed: "Worldwide",
  offers: pricingPlans.map((plan) => ({
    "@type": "Offer",
    name: plan.name,
    description: `${plan.setup}. ${plan.support}`
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

export default function AILeadQualificationFollowUpAutomationPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative overflow-hidden bg-ink-900 pb-16 pt-20 text-white sm:pt-24">
        <div className="absolute inset-0 bg-hero-grid opacity-90" />
        <div className="pointer-events-none absolute -left-16 top-16 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
        <Container className="relative max-w-5xl">
          <p className="mb-4 inline-flex rounded-full border border-brand-300/30 bg-brand-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-200">
            AI Lead Qualification + Follow-Up Automation
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl">
            Qualify leads faster and automate follow-up sequences that improve meeting rates
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
            We build AI-driven lead qualification and follow-up systems that improve response speed, reduce manual
            effort, and help sales teams focus on high-intent opportunities.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryLink href="/contact#lead-form">Get Lead Automation Plan</PrimaryLink>
            <Link
              href="/pricing?category=ai-agent-automation"
              className="inline-flex items-center justify-center rounded-full border border-slate-500 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white hover:bg-white/5"
            >
              View AI Pricing
            </Link>
          </div>
          <ul className="mt-7 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
            {[
              "Lead scoring and funnel-stage routing",
              "Automated reminders and nurture workflows",
              "No-show recovery and reactivation logic",
              "Global support across regions and time zones"
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
            eyebrow="Business Outcomes"
            title="What this automation improves in your pipeline"
            description="Built to improve lead quality, reduce lag, and increase sales-team efficiency."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {outcomes.map((item) => {
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
            title="Lead qualification and follow-up automation pricing"
            description="Current agency-aligned ranges for implementation and managed optimization support."
          />
          <div className="mb-5">
            <CurrencyToggle />
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
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
                  <PriceText value={plan.setup} />
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  <PriceText value={plan.support} />
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
          <p className="mt-4 text-xs text-slate-500">
            Pricing changes based on scoring logic depth, channels, CRM complexity, and reporting requirements.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Execution Model"
            title="How we implement qualification and follow-up workflows"
            description="A rollout process built for measurable lead-to-meeting improvements."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {executionModel.map((item) => (
              <article key={item.step} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">Step {item.step}</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{item.detail}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
              <Clock3 className="h-4 w-4 shrink-0 text-brand-600" />
              Early performance signals usually appear within 2-6 weeks.
            </div>
            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
              <PhoneCall className="h-4 w-4 shrink-0 text-brand-600" />
              Teams keep manual control for high-priority lead escalation.
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions about lead qualification automation"
            description="What teams usually ask before deployment."
          />
          <FAQAccordion items={faqs} />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Related Pages"
            title="Compare related AI automation pages"
            description="Use these links to evaluate adjacent services and pricing paths."
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

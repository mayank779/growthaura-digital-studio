import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Clock3,
  Layers3,
  ShieldCheck,
  Workflow
} from "lucide-react";
import { CurrencyToggle } from "@/components/currency/CurrencyToggle";
import { PriceText } from "@/components/currency/PriceText";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Container } from "@/components/ui/Container";
import { PrimaryLink } from "@/components/ui/PrimaryLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "AI Agent Automation Services Worldwide",
  description:
    "AI agent automation services for global businesses: lead capture, CRM updates, support workflows, and follow-up systems with transparent setup and support pricing.",
  keywords: [
    "ai agent automation services",
    "ai automation agency pricing",
    "business workflow ai automation",
    "crm and ai agent integration",
    "ai lead capture automation"
  ],
  alternates: {
    canonical: "/ai-agent-automation-services"
  },
  openGraph: {
    title: "AI Agent Automation Services | Mayank Digital Labs",
    description:
      "Deploy AI agents for lead handling, support, and CRM automation with market-aligned pricing and clear implementation milestones.",
    url: `${siteConfig.domain}/ai-agent-automation-services`,
    type: "website"
  }
};

const automationUseCases = [
  {
    icon: Bot,
    title: "Lead Capture AI Agents",
    description: "Engage visitors 24/7, qualify intent, and route leads to the right team instantly."
  },
  {
    icon: Workflow,
    title: "Workflow Orchestration",
    description: "Trigger email, WhatsApp, and CRM actions based on lead score, source, or funnel stage."
  },
  {
    icon: Layers3,
    title: "Knowledge-Backed Responses",
    description: "Connect policies, FAQs, and offer data so agents answer with accurate business context."
  },
  {
    icon: ShieldCheck,
    title: "Human Handoff + QA",
    description: "Fallback rules, escalation workflows, and transcript QA to maintain brand-safe replies."
  }
];

const packages = [
  {
    badge: "Starter",
    name: "Lead Capture Agent Setup",
    setup: "Setup: USD $600 - $1,450 | INR 49,999 - 1,20,000",
    support: "Support: USD $180 - $360/month | INR 14,999 - 29,999/month",
    timeline: "Timeline: 2-4 weeks",
    points: [
      "Website or WhatsApp assistant setup",
      "Lead qualification and routing rules",
      "Basic CRM sync and handoff flows",
      "Transcript review and tuning cycle"
    ]
  },
  {
    badge: "Most Popular",
    name: "Sales + Support Automation",
    setup: "Setup: USD $1,500 - $3,375 | INR 1,25,000 - 2,80,000",
    support: "Support: USD $420 - $965/month | INR 34,999 - 79,999/month",
    timeline: "Timeline: 4-7 weeks",
    featured: true,
    points: [
      "Multi-channel assistant (web + WhatsApp + email)",
      "Appointment booking and follow-up automations",
      "CRM lifecycle updates and alerts",
      "Monthly optimization sprint with performance review"
    ]
  },
  {
    badge: "Enterprise",
    name: "Revenue Ops Agent System",
    setup: "Setup: USD $4,220 - $10,250+ | INR 3,50,000 - 8,50,000+",
    support: "Support: USD $1,085 - $3,010/month | INR 89,999 - 2,49,999/month",
    timeline: "Timeline: 8-14 weeks",
    points: [
      "Multi-agent architecture for sales and support teams",
      "Approval gates, fallback logic, and audit controls",
      "Deep CRM/helpdesk integrations and dashboards",
      "Dedicated pod with weekly optimization loops"
    ]
  }
];

const implementationSteps = [
  {
    step: "01",
    title: "Automation Blueprint",
    detail: "We map use-cases, required channels, integration points, and guardrails."
  },
  {
    step: "02",
    title: "Agent Build + Integration",
    detail: "Prompt systems, APIs, and CRM workflows are implemented in a staged rollout."
  },
  {
    step: "03",
    title: "QA and Optimization",
    detail: "We monitor response quality, lead outcomes, and conversion impact before scaling."
  }
];

const faqs = [
  {
    question: "Can AI agents work with our current CRM and forms?",
    answer:
      "Yes. We typically connect AI workflows with common CRMs, forms, and communication channels through APIs or middleware automation layers."
  },
  {
    question: "How long does deployment usually take?",
    answer:
      "Most starter systems launch in 2 to 4 weeks. More complex multi-agent and multi-channel systems usually take 6 to 14 weeks."
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. Ongoing support includes prompt tuning, monitoring, QA, and monthly optimization based on conversion and response metrics."
  },
  {
    question: "Is this service available globally?",
    answer:
      "Yes. We deliver AI automation services worldwide and support teams across different regions and time zones."
  }
];

const relatedLinks = [
  {
    label: "AI Chatbot + CRM Automation",
    href: "/ai-chatbot-crm-automation",
    description: "See chatbot-first CRM automation packages and integration scope."
  },
  {
    label: "Lead Qualification + Follow-Up Automation",
    href: "/ai-lead-qualification-follow-up-automation",
    description: "Review lead scoring, follow-up, and nurture system pricing."
  },
  {
    label: "Full AI Pricing Category",
    href: "/pricing?category=ai-agent-automation",
    description: "Compare all AI plans alongside other marketing service categories."
  },
  {
    label: "Contact for Custom Scope",
    href: "/contact#lead-form",
    description: "Get a custom roadmap based on your sales workflow and tech stack."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Agent Automation Services",
  serviceType: "AI workflow automation, lead handling, and CRM automation",
  provider: {
    "@type": "Organization",
    name: siteConfig.brandName,
    url: siteConfig.domain
  },
  areaServed: "Worldwide",
  offers: packages.map((plan) => ({
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

export default function AIAgentAutomationServicesPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative overflow-hidden bg-ink-900 pb-16 pt-20 text-white sm:pt-24">
        <div className="absolute inset-0 bg-hero-grid opacity-90" />
        <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
        <Container className="relative max-w-5xl">
          <p className="mb-4 inline-flex rounded-full border border-brand-300/30 bg-brand-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-200">
            AI Agent Automation Services
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl">
            Build AI agents that capture leads, automate follow-ups, and scale operations
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
            We design and deploy AI agents for global businesses that need faster response times, cleaner CRM data,
            and better conversion from every inbound lead.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryLink href="/contact#lead-form">Book AI Automation Call</PrimaryLink>
            <Link
              href="/pricing?category=ai-agent-automation"
              className="inline-flex items-center justify-center rounded-full border border-slate-500 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white hover:bg-white/5"
            >
              View AI Pricing
            </Link>
          </div>
          <ul className="mt-7 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
            {[
              "Global implementation for service and product businesses",
              "Modern 2026 market pricing benchmarks",
              "CRM, WhatsApp, and email automation support",
              "Human-handoff safeguards and QA controls"
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
            eyebrow="Automation Scope"
            title="What we automate in real business workflows"
            description="Deploy use-case specific agents instead of generic chatbots to improve lead quality and response speed."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {automationUseCases.map((item) => {
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
            title="AI automation packages aligned to current agency ranges"
            description="Switch between USD, INR, or both to compare setup and support options."
          />
          <div className="mb-5">
            <CurrencyToggle />
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {packages.map((plan) => (
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
            Pricing varies by integrations, data complexity, channel count, and QA/compliance requirements.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Implementation"
            title="How we deliver AI systems without breaking your existing flow"
            description="A staged process focused on speed, reliability, and measurable conversion improvement."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {implementationSteps.map((item) => (
              <article key={item.step} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">Step {item.step}</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{item.detail}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <Clock3 className="h-4 w-4 shrink-0 text-brand-600" />
            Typical first-value window: 14 to 45 days depending on stack readiness.
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions about AI automation services"
            description="Quick answers before you shortlist your implementation partner."
          />
          <FAQAccordion items={faqs} />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Related Pages"
            title="Continue exploring AI automation options"
            description="Use these internal links to compare AI use-cases, packages, and implementation pathways."
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

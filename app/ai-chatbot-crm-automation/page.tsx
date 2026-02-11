import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, Database, GitBranch, MessageSquare, ShieldCheck, Workflow } from "lucide-react";
import { CurrencyToggle } from "@/components/currency/CurrencyToggle";
import { PriceText } from "@/components/currency/PriceText";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Container } from "@/components/ui/Container";
import { PrimaryLink } from "@/components/ui/PrimaryLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "AI Chatbot CRM Automation Services Worldwide",
  description:
    "AI chatbot and CRM automation services for businesses worldwide. Automate lead capture, CRM updates, appointment booking, and customer follow-up with transparent pricing.",
  keywords: [
    "ai chatbot crm automation",
    "chatbot crm integration services",
    "ai sales assistant automation",
    "crm workflow automation agency",
    "whatsapp chatbot crm sync"
  ],
  alternates: {
    canonical: "/ai-chatbot-crm-automation"
  },
  openGraph: {
    title: "AI Chatbot + CRM Automation | Mayank Digital Labs",
    description:
      "Build chatbot workflows that sync directly with your CRM, automate follow-ups, and improve lead-to-meeting conversion.",
    url: `${siteConfig.domain}/ai-chatbot-crm-automation`,
    type: "website"
  }
};

const capabilities = [
  {
    icon: MessageSquare,
    title: "Conversational Lead Capture",
    description: "Capture inbound leads from website and WhatsApp with intent-based question flows."
  },
  {
    icon: Database,
    title: "CRM Data Sync",
    description: "Auto-create and update contacts, pipeline stages, tags, and activity logs in real time."
  },
  {
    icon: Workflow,
    title: "Smart Follow-Up Sequences",
    description: "Trigger reminders, nurture messages, and call tasks based on lead behavior and status."
  },
  {
    icon: ShieldCheck,
    title: "Compliance and Controls",
    description: "Set escalation logic, response rules, and approval checks for sensitive queries."
  }
];

const plans = [
  {
    badge: "Starter",
    name: "Chatbot + CRM Sync Setup",
    setup: "Setup: USD $950 - $1,850 | INR 79,999 - 1,55,000",
    support: "Support: USD $240 - $480/month | INR 19,999 - 39,999/month",
    timeline: "Timeline: 2-5 weeks",
    points: [
      "One chatbot flow with qualification prompts",
      "One CRM integration with lead creation",
      "Basic follow-up sequence automation",
      "Response and routing QA checklist"
    ]
  },
  {
    badge: "Most Popular",
    name: "Sales Pipeline Automation",
    setup: "Setup: USD $2,100 - $4,800 | INR 1,75,000 - 3,99,999",
    support: "Support: USD $540 - $1,085/month | INR 44,999 - 89,999/month",
    timeline: "Timeline: 5-9 weeks",
    featured: true,
    points: [
      "Multi-intent chatbot decision trees",
      "Pipeline stage automation with SLA reminders",
      "Lead scoring and appointment booking flows",
      "Monthly conversion and funnel optimization"
    ]
  },
  {
    badge: "Enterprise",
    name: "Omnichannel CRM Agent System",
    setup: "Setup: USD $5,500 - $12,500+ | INR 4,60,000 - 10,50,000+",
    support: "Support: USD $1,450 - $3,500/month | INR 1,20,000 - 2,90,000/month",
    timeline: "Timeline: 9-16 weeks",
    points: [
      "Web, WhatsApp, email, and support inbox routing",
      "Custom CRM object mapping and lifecycle logic",
      "Cross-channel context memory and handoff",
      "Executive dashboard + weekly optimization pod"
    ]
  }
];

const stackSteps = [
  {
    step: "01",
    title: "Conversation Design",
    detail: "Define intents, qualification questions, escalation points, and handoff rules."
  },
  {
    step: "02",
    title: "CRM Mapping",
    detail: "Map fields, stages, ownership logic, and follow-up triggers to your CRM process."
  },
  {
    step: "03",
    title: "Automation Launch",
    detail: "Deploy, monitor lead quality, and tune conversation-to-conversion pathways."
  }
];

const faqs = [
  {
    question: "Which CRM platforms can you integrate with?",
    answer:
      "We support major CRMs and custom API-capable systems. During discovery we confirm exact object, field, and workflow compatibility."
  },
  {
    question: "Can chatbot messages trigger email and WhatsApp follow-ups?",
    answer:
      "Yes. We can trigger follow-up sequences based on intent, lead score, booking status, or inactivity conditions."
  },
  {
    question: "Do you handle multilingual chatbot deployment?",
    answer:
      "Yes. We can configure multilingual conversation flows and region-specific response tone where needed."
  },
  {
    question: "Is this only for India-based businesses?",
    answer:
      "No. This service is delivered globally for companies operating in different markets and time zones."
  }
];

const relatedLinks = [
  {
    label: "AI Agent Automation Services",
    href: "/ai-agent-automation-services",
    description: "See complete AI service scope across sales, support, and operations."
  },
  {
    label: "Lead Qualification + Follow-Up Automation",
    href: "/ai-lead-qualification-follow-up-automation",
    description: "Explore lead scoring, nurture automation, and response speed systems."
  },
  {
    label: "Compare AI Pricing Plans",
    href: "/pricing?category=ai-agent-automation",
    description: "Review all AI package tiers and monthly support ranges."
  },
  {
    label: "Talk to Automation Team",
    href: "/contact#lead-form",
    description: "Get a custom CRM automation blueprint for your business."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Chatbot CRM Automation Services",
  serviceType: "AI chatbot integration and CRM workflow automation",
  provider: {
    "@type": "Organization",
    name: siteConfig.brandName,
    url: siteConfig.domain
  },
  areaServed: "Worldwide",
  offers: plans.map((plan) => ({
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

export default function AIChatbotCRMAutomationPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative overflow-hidden bg-ink-900 pb-16 pt-20 text-white sm:pt-24">
        <div className="absolute inset-0 bg-hero-grid opacity-90" />
        <div className="pointer-events-none absolute -right-16 top-12 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <Container className="relative max-w-5xl">
          <p className="mb-4 inline-flex rounded-full border border-brand-300/30 bg-brand-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-200">
            AI Chatbot + CRM Automation
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl">
            Connect chatbot conversations directly to your CRM and sales pipeline
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
            Replace disconnected chat replies with a CRM-integrated AI system that captures context, updates your
            pipeline, and triggers the right next action automatically.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryLink href="/contact#lead-form">Request CRM Automation Plan</PrimaryLink>
            <Link
              href="/pricing?category=ai-agent-automation"
              className="inline-flex items-center justify-center rounded-full border border-slate-500 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white hover:bg-white/5"
            >
              View AI Pricing
            </Link>
          </div>
          <ul className="mt-7 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
            {[
              "Lead-to-CRM sync with stage and owner mapping",
              "Conversation-driven appointment workflows",
              "Smart follow-up orchestration by intent",
              "Global deployment for sales and support teams"
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
            eyebrow="Capabilities"
            title="Core chatbot + CRM automation capabilities"
            description="Each implementation is mapped to your actual funnel, sales process, and response SLA."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {capabilities.map((item) => {
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
            title="Chatbot + CRM automation package pricing"
            description="Based on current agency market ranges for production-grade setups and managed optimization."
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
            Final price depends on CRM complexity, channel scope, conversation depth, and QA requirements.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Build Process"
            title="How chatbot workflows become CRM actions"
            description="A practical process designed to improve conversion while keeping operations reliable."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {stackSteps.map((item) => (
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
              First workflow launch usually in 2-5 weeks.
            </div>
            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
              <GitBranch className="h-4 w-4 shrink-0 text-brand-600" />
              Phased rollout reduces risk and protects live pipeline operations.
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions about chatbot CRM automation"
            description="Decision support for marketing, sales, and operations teams."
          />
          <FAQAccordion items={faqs} />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Related Pages"
            title="Explore related AI automation pages"
            description="Move across these pages to compare packages and implementation depth."
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

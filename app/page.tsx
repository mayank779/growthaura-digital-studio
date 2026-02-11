import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow
} from "lucide-react";
import { HeroSlider } from "@/components/HeroSlider";
import { ServiceCard } from "@/components/ServiceCard";
import { PricingCard } from "@/components/PricingCard";
import { ProjectCard } from "@/components/ProjectCard";
import { TestimonialsSlider } from "@/components/TestimonialsSlider";
import { FAQAccordion } from "@/components/FAQAccordion";
import { LeadForm } from "@/components/forms/LeadForm";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { CurrencyToggle } from "@/components/currency/CurrencyToggle";
import { PriceText } from "@/components/currency/PriceText";
import { Container } from "@/components/ui/Container";
import { PrimaryLink } from "@/components/ui/PrimaryLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeFaqs } from "@/data/faqs";
import { homeAiAutomationPlans, homePricingSummary } from "@/data/home";
import { pricingSections } from "@/data/pricing";
import { projects } from "@/data/projects";
import { internalLinkGroups, seoKeywords } from "@/data/seo";
import { highlightCards, services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Digital Marketing Agency Worldwide | Websites, SEO, Ads, AI Agents",
  description:
    "Mayank Digital Labs builds conversion-focused websites, SEO, social media, ads, email funnels, and AI agent automation systems for businesses worldwide.",
  alternates: {
    canonical: "/"
  },
  keywords: [...seoKeywords.home],
  openGraph: {
    title: "Mayank Digital Labs | Websites, SEO, Ads, AI Agents",
    description:
      "Conversion-focused websites, SEO, paid media, and AI agent automation built for measurable business growth.",
    url: siteConfig.domain,
    type: "website",
    images: [
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "Mayank Digital Labs"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayank Digital Labs | Growth + AI Automation",
    description:
      "Scale with conversion-first websites, SEO, ads, and AI workflow automation built for global businesses.",
    images: ["/icon-512.png"]
  }
};

const highlightDesigns = [
  {
    icon: BarChart3,
    label: "ROI Focus",
    metric: "Metrics-first execution",
    card: "from-brand-100/70 via-white to-blue-50/80",
    iconWrap: "from-brand-500 to-blue-500",
    glow: "bg-brand-300/45"
  },
  {
    icon: Target,
    label: "Conversion First",
    metric: "Funnels engineered to convert",
    card: "from-violet-100/70 via-white to-brand-50/70",
    iconWrap: "from-violet-500 to-brand-500",
    glow: "bg-violet-300/45"
  },
  {
    icon: ShieldCheck,
    label: "Clarity & Trust",
    metric: "Transparent reporting cadence",
    card: "from-emerald-100/60 via-white to-cyan-50/70",
    iconWrap: "from-emerald-500 to-cyan-500",
    glow: "bg-emerald-300/45"
  },
  {
    icon: Rocket,
    label: "Growth Partner",
    metric: "Built for global growth teams",
    card: "from-amber-100/70 via-white to-orange-50/70",
    iconWrap: "from-amber-500 to-orange-500",
    glow: "bg-amber-300/45"
  }
];

const aiPlanDesigns = [
  {
    icon: Bot,
    surface: "from-slate-900 via-[#0b1f47] to-[#12255f]",
    ring: "ring-brand-300/40",
    iconWrap: "from-brand-500 to-blue-500"
  },
  {
    icon: Workflow,
    surface: "from-slate-900 via-[#16234a] to-[#23356a]",
    ring: "ring-cyan-300/45",
    iconWrap: "from-cyan-500 to-blue-500"
  },
  {
    icon: Sparkles,
    surface: "from-slate-900 via-[#231f51] to-[#2e2b73]",
    ring: "ring-violet-300/45",
    iconWrap: "from-violet-500 to-brand-500"
  }
];

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

const homeOfferCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Growth and AI Agent Automation Services",
  serviceType: "Website development, performance marketing, and AI automation",
  provider: {
    "@type": "Organization",
    name: siteConfig.brandName,
    url: siteConfig.domain
  },
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Growth and AI service packages",
    itemListElement: [...homePricingSummary.map((plan) => plan.name), ...homeAiAutomationPlans.map((plan) => plan.name)].map(
      (name, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name
      })
    )
  }
};

const designPricingSections = pricingSections.filter(
  (section) => section.id === "graphic-design" || section.id === "ui-ux-design"
);

export default function HomePage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeOfferCatalogSchema) }}
      />

      <section className="relative overflow-hidden bg-ink-900 text-white">
        <div className="absolute inset-0 bg-hero-grid" />
        <Container className="relative grid gap-10 pb-20 pt-20 lg:grid-cols-2 lg:items-center lg:pb-28 lg:pt-24">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-brand-300/30 bg-brand-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-200">
              Premium Digital Growth Partner
            </p>
            <h1 className="font-heading text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Growth-Focused Websites & Ads for Ambitious Brands
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
              We help businesses worldwide scale with website development, SEO, Instagram & LinkedIn marketing,
              Google & Meta ads, and lifecycle email campaigns.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryLink href="/contact">Book Free Strategy Call</PrimaryLink>
              <Link
                href="#portfolio-teaser"
                className="inline-flex items-center justify-center rounded-full border border-slate-500 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white hover:bg-white/5"
              >
                View Our Work
              </Link>
            </div>
            <ul className="mt-8 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
              {[
                "Conversion-led website architecture",
                "Performance-focused paid media",
                "Transparent weekly updates",
                "Specialized for startups and SMEs worldwide"
              ].map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-300" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <HeroSlider />
        </Container>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-brand-100/35 to-transparent" />
        <Container className="relative">
          <SectionHeading
            eyebrow="Why Mayank Digital Labs"
            title="Built for results, not vanity metrics"
            description="Every engagement is designed to move business outcomes: quality leads, stronger conversion rates, and profitable growth."
            align="center"
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {highlightCards.map((item, index) => {
              const design = highlightDesigns[index % highlightDesigns.length];
              const Icon = design.icon;

              return (
                <article
                  key={item.title}
                  className={`group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br ${design.card} p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(31,45,88,0.18)]`}
                >
                  <div className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full blur-3xl ${design.glow}`} />
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 via-blue-500 to-violet-500" />

                  <div className="relative">
                    <p className="mb-4 inline-flex rounded-full border border-white/60 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-700">
                      {design.label}
                    </p>
                    <div className="mb-5 flex items-center gap-4">
                      <span
                        className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg ${design.iconWrap}`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <p className="text-xs font-semibold uppercase tracking-[0.11em] text-slate-500">
                        {design.metric}
                      </p>
                    </div>
                    <h3 className="text-xl font-semibold leading-snug text-ink-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Full-stack digital growth services"
            description="Choose individual services or combine them into one growth engine tailored to your business goals."
            align="center"
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-brand-100/40 to-transparent" />
        <div className="pointer-events-none absolute -right-24 top-28 h-64 w-64 rounded-full bg-cyan-200/35 blur-3xl" />
        <Container className="relative">
          <SectionHeading
            eyebrow="Pricing Overview"
            title="Plans for every stage of growth"
            description="Transparent pricing with clear deliverables. Multi-currency billing options are available."
            align="center"
          />
          <div className="mb-5 flex justify-center">
            <div className="text-center">
              <CurrencyToggle />
              <p className="mt-2 text-xs text-slate-500">Switch pricing view: USD or INR.</p>
            </div>
          </div>
          <div className="mb-8 grid gap-3 sm:grid-cols-3">
            {["Free strategy consultation", "No hidden charges", "Outcome-driven deliverables"].map(
              (point) => (
                <div
                  key={point}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
                >
                  <CheckCircle2 className="h-4 w-4 text-brand-600" />
                  {point}
                </div>
              )
            )}
          </div>
          <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {homePricingSummary.map((plan) => (
              <PricingCard
                key={plan.name}
                plan={{
                  ...plan,
                  cta: "View Full Pricing & Inclusions"
                }}
                href="/pricing"
              />
            ))}
          </div>
        </Container>
      </section>

      <section id="ai-agent-automation" className="relative overflow-hidden bg-ink-900 py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-hero-grid opacity-80" />
        <div className="pointer-events-none absolute -left-16 top-10 h-60 w-60 rounded-full bg-brand-500/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

        <Container className="relative">
          <p className="mb-4 inline-flex rounded-full border border-brand-300/35 bg-brand-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-200">
            AI Agent Automation
          </p>
          <h2 className="font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Modern AI Agent Packages for sales, support, and operations
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-200 sm:text-base">
            Benchmark-aligned with current agency pricing ranges in 2026. Build AI agents that qualify leads,
            automate follow-ups, sync CRM workflows, and improve team response speed.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {homeAiAutomationPlans.map((plan, index) => {
              const design = aiPlanDesigns[index % aiPlanDesigns.length];
              const Icon = design.icon;

              return (
                <article
                  key={plan.name}
                  className={`relative overflow-hidden rounded-3xl border border-slate-700/80 bg-gradient-to-br ${design.surface} p-6 shadow-[0_14px_40px_rgba(5,9,24,0.4)] ring-1 ${design.ring} backdrop-blur`}
                >
                  <div className="pointer-events-none absolute -right-8 -top-10 h-24 w-24 rounded-full bg-white/10 blur-2xl" />

                  <div className="relative">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-white">
                        {plan.badge}
                      </span>
                      <span
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br text-white ${design.iconWrap}`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                    <p className="mt-2 text-sm text-slate-200">{plan.audience}</p>
                    <p className="mt-4 text-base font-semibold text-white">
                      <PriceText value={plan.setup} />
                    </p>
                    <p className="mt-1 text-sm text-brand-100">
                      <PriceText value={plan.support} />
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.08em] text-slate-300">{plan.timeline}</p>
                    <ul className="mt-4 space-y-2 text-sm text-slate-200">
                      {plan.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                label: "AI Agent Automation Services",
                href: "/ai-agent-automation-services",
                description: "Full AI service scope, deliverables, and implementation steps."
              },
              {
                label: "AI Chatbot + CRM Automation",
                href: "/ai-chatbot-crm-automation",
                description: "Chatbot workflows connected to CRM pipeline automation."
              },
              {
                label: "AI Lead Follow-Up Automation",
                href: "/ai-lead-qualification-follow-up-automation",
                description: "Lead scoring, nurture sequences, and conversion-focused follow-ups."
              }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-slate-700/80 bg-slate-900/60 p-4 shadow-sm transition hover:border-brand-300/70 hover:bg-slate-900"
              >
                <p className="text-sm font-semibold text-white">{item.label}</p>
                <p className="mt-1 text-sm text-slate-300">{item.description}</p>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-700/70 bg-slate-900/55 p-4">
            <p className="text-sm text-slate-200">
              Need a custom AI scope? We will map stack, integrations, and QA model before final pricing.
            </p>
            <PrimaryLink href="/pricing?category=ai-agent-automation">View Full AI Pricing</PrimaryLink>
          </div>
        </Container>
      </section>

      <section id="design-pricing" className="relative overflow-hidden bg-white py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-violet-100/35 to-transparent" />
        <Container className="relative">
          <SectionHeading
            eyebrow="Design + UX"
            title="Graphic Design and UI/UX Design with complete pricing details"
            description="Everything below includes package-wise pricing, delivery timeline, and included scope for design services."
            align="center"
          />
          <div className="mb-6 flex justify-center">
            <div className="text-center">
              <CurrencyToggle />
              <p className="mt-2 text-xs text-slate-500">Switch pricing view: USD or INR.</p>
            </div>
          </div>

          <div className="space-y-8">
            {designPricingSections.map((section) => (
              <article key={section.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
                <h3 className="font-heading text-2xl font-semibold text-ink-900 sm:text-3xl">{section.label}</h3>
                <p className="mt-2 text-sm text-slate-600 sm:text-base">{section.description}</p>

                <div className="mt-6 grid gap-5 lg:grid-cols-3">
                  {section.plans.map((plan) => (
                    <article
                      key={plan.name}
                      className={cn(
                        "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm",
                        plan.featured && "border-brand-300 ring-1 ring-brand-200"
                      )}
                    >
                      {plan.featured ? (
                        <p className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-700">
                          Most Popular
                        </p>
                      ) : null}
                      <h4 className="mt-3 text-xl font-semibold text-ink-900">{plan.name}</h4>
                      <p className="mt-1 text-sm text-slate-600">{plan.audience}</p>
                      <p className="mt-3 text-base font-semibold text-brand-700">
                        <PriceText value={plan.price} />
                      </p>
                      {plan.timeline ? (
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">{plan.timeline}</p>
                      ) : null}
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

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm text-slate-600">{section.note ?? "Custom scope pricing available based on goals and complexity."}</p>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href={section.id === "graphic-design" ? "/graphic-design-services" : "/ui-ux-design-services"}
                      className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
                    >
                      View Service Page
                    </Link>
                    <PrimaryLink href={`/pricing?category=${section.id}`} className="px-4 py-2">
                      View Full Pricing
                    </PrimaryLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="SEO Navigation"
            title="Explore core growth paths"
            description="These internal links are grouped to help visitors and search engines discover your key commercial pages."
          />
          <div className="mb-5 flex flex-wrap gap-2">
            {seoKeywords.home.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full border border-slate-200 bg-slate-50/80 px-3 py-1 text-xs font-medium text-slate-600"
              >
                {keyword}
              </span>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {internalLinkGroups.home.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
              >
                <p className="text-sm font-semibold text-ink-900">{item.label}</p>
                <p className="mt-1 text-sm text-slate-600">{item.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section id="portfolio-teaser" className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Featured Projects"
            title="Campaigns and websites that generated measurable growth"
            description="A snapshot of projects across real estate, e-commerce, coaching, and local service businesses."
            action={
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition hover:text-brand-700"
              >
                View All Projects <ArrowRight size={16} />
              </Link>
            }
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.slice(0, 6).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <section id="testimonials" className="relative overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-brand-50/35 to-white/10" />
        <div className="pointer-events-none absolute left-12 top-12 h-52 w-52 rounded-full bg-brand-200/30 blur-3xl" />
        <Container className="relative">
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by founders and growth teams"
            description="Real feedback from clients who scaled leads, conversions, and revenue with Mayank Digital Labs."
          />
          <TestimonialsSlider />
        </Container>
      </section>

      <section id="lead-form" className="bg-white py-16 sm:py-20">
        <Container className="grid gap-10 xl:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SectionHeading
              eyebrow="Book Consultation"
              title="Get your free growth plan"
              description="Tell us your business goals and current challenges. We will send a practical growth roadmap with channel priorities."
            />
            <LeadForm />
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
              <h3 className="font-heading text-2xl font-semibold text-ink-900">What happens next?</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li>1. We review your website, market, and current funnel.</li>
                <li>2. You receive a custom strategy with channel priorities.</li>
                <li>3. We align scope, timeline, and next milestones.</li>
              </ul>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1200&q=80"
              alt="Growth strategy discussion"
              width={1200}
              height={900}
              sizes="(max-width: 1280px) 100vw, 40vw"
              quality={72}
              className="h-auto w-full rounded-3xl border border-slate-200 object-cover shadow-sm"
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="space-y-6">
          <SectionHeading
            eyebrow="Newsletter"
            title="Growth tips delivered every week"
            description="Join founders and marketers receiving practical SEO insights, ad strategy updates, and conversion optimization playbooks."
          />
          <NewsletterForm />
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions before getting started?"
            description="Quick answers about timelines, pricing, contracts, and communication."
          />
          <FAQAccordion items={homeFaqs} />
        </Container>
      </section>
    </div>
  );
}


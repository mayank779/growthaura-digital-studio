import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { HeroSlider } from "@/components/HeroSlider";
import { ServiceCard } from "@/components/ServiceCard";
import { PricingCard } from "@/components/PricingCard";
import { ProjectCard } from "@/components/ProjectCard";
import { TestimonialsSlider } from "@/components/TestimonialsSlider";
import { FAQAccordion } from "@/components/FAQAccordion";
import { LeadForm } from "@/components/forms/LeadForm";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { Container } from "@/components/ui/Container";
import { PrimaryLink } from "@/components/ui/PrimaryLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeFaqs } from "@/data/faqs";
import { homePricingSummary } from "@/data/home";
import { projects } from "@/data/projects";
import { highlightCards, services } from "@/data/services";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in India | Websites, SEO, Ads, Social",
  description:
    "GrowthAura Digital Studio builds conversion-focused websites and ROI-driven SEO, social media, Google Ads, Meta Ads, and email marketing systems for Indian businesses."
};

export default function HomePage() {
  return (
    <div>
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
              We help Indian businesses scale with website development, SEO, Instagram & LinkedIn marketing,
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
                "Specialized for Indian startups and SMEs"
              ].map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-300" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <HeroSlider />
            <div className="relative h-56 overflow-hidden rounded-3xl border border-slate-700/60">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
                alt="GrowthAura digital strategy workspace"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Why GrowthAura"
            title="Built for results, not vanity metrics"
            description="Every engagement is designed to move business outcomes: quality leads, stronger conversion rates, and profitable growth."
            align="center"
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {highlightCards.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </article>
            ))}
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
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Pricing Overview"
            title="Plans for every stage of growth"
            description="Transparent INR pricing with clear deliverables. Customize any plan based on your goals."
            align="center"
          />
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

      <section id="testimonials" className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by founders and growth teams"
            description="Real feedback from clients who scaled leads, conversions, and revenue with GrowthAura."
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

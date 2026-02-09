import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PrimaryLink } from "@/components/ui/PrimaryLink";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about GrowthAura Digital Studio, our growth-focused process, core values, and expertise in websites, SEO, and paid ads."
};

const processSteps = [
  {
    title: "Discovery & Audit",
    text: "We audit your current website, channels, market, and conversion journey to identify growth gaps."
  },
  {
    title: "Strategy & Roadmap",
    text: "A custom roadmap aligns channels, priorities, timelines, and measurable performance goals."
  },
  {
    title: "Design & Build / Campaign Setup",
    text: "We execute website design, SEO implementation, and campaign architecture with conversion clarity."
  },
  {
    title: "Launch & Optimize",
    text: "We launch, monitor performance, and iterate rapidly based on user and channel data."
  },
  {
    title: "Reporting & Growth",
    text: "Structured reporting and monthly strategy reviews keep momentum focused on revenue outcomes."
  }
];

const values = [
  {
    title: "Transparency",
    text: "Clear communication, honest expectations, and reports that are easy to understand."
  },
  { title: "ROI Focus", text: "Every activity is mapped to outcomes that matter to your business growth." },
  { title: "Learning", text: "Continuous testing and market feedback shape every strategy cycle." },
  { title: "Speed", text: "Fast execution with tight feedback loops helps you adapt quickly." },
  { title: "Ownership", text: "We treat your goals as our own and stay accountable through every milestone." }
];

const team = [
  {
    name: "Aarav Mehta",
    role: "Founder, Web Development & Growth Strategy",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Neha Iyer",
    role: "SEO & Content Lead",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Vikram Rao",
    role: "Performance Marketing Lead",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Ria Kapoor",
    role: "Branding & Social Creative Lead",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80"
  }
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-ink-900 pb-16 pt-20 text-white sm:pt-24">
        <Container className="max-w-4xl">
          <p className="mb-4 inline-flex rounded-full border border-brand-300/30 bg-brand-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-200">
            About GrowthAura
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl">
            We build digital growth engines for ambitious Indian brands
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-200 sm:text-lg">
            GrowthAura Digital Studio was founded by a web developer, SEO strategist, and ads specialist with
            6+ years of experience helping startups, coaches, local businesses, and growth-stage brands scale.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="From projects to predictable growth partnerships"
              description="We started by fixing underperforming websites. Over time, clients needed full-funnel support: SEO, social, paid ads, and lifecycle marketing. Today, GrowthAura combines all of these into one connected execution model."
            />
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Our focus is simple: help businesses grow with strong digital foundations, data-backed decision
              making, and execution that keeps improving month after month.
            </p>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80"
            alt="GrowthAura team workshop"
            width={1400}
            height={1000}
            className="h-full w-full rounded-3xl border border-slate-200 object-cover"
          />
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Our Process"
            title="A structured framework for consistent growth"
            description="A repeatable five-step system keeps projects clear, fast, and accountable."
          />
          <div className="grid gap-4 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">Step {index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold text-ink-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Values"
            title="How we work with clients"
            description="Our values shape every strategy, recommendation, and delivery sprint."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {values.map((value) => (
              <article key={value.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-ink-900">{value.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{value.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Team"
            title="People behind GrowthAura"
            description="A focused team covering web, SEO, performance marketing, and creative execution."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <article key={member.name} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="relative h-60 overflow-hidden rounded-xl">
                  <Image src={member.image} alt={member.name} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink-900">{member.name}</h3>
                <p className="text-sm text-slate-600">{member.role}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="rounded-3xl border border-slate-200 bg-mist-100 p-8 text-center sm:p-10">
          <h2 className="font-heading text-3xl font-semibold text-ink-900 sm:text-4xl">
            Ready to work with GrowthAura?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Let&apos;s build a growth roadmap for your brand and align channels that drive compounding results.
          </p>
          <div className="mt-6">
            <PrimaryLink href="/contact#lead-form">Get Your Free Growth Plan</PrimaryLink>
          </div>
        </Container>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import { TestimonialsSlider } from "@/components/TestimonialsSlider";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PrimaryLink } from "@/components/ui/PrimaryLink";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read client testimonials and success stories from businesses that scaled with Mayank Digital Labs websites, SEO, and paid ads services."
};

export default function TestimonialsPage() {
  return (
    <div>
      <section className="bg-ink-900 pb-16 pt-20 text-white sm:pt-24">
        <Container className="max-w-4xl">
          <p className="mb-4 inline-flex rounded-full border border-brand-300/30 bg-brand-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-200">
            Testimonials
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl">
            What clients say about working with Mayank Digital Labs
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-200 sm:text-lg">
            Specific feedback from founders and teams across real estate, e-commerce, education, and local
            services.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Client Reviews"
            title={`${testimonials.length}+ trust-building testimonials from growth-focused brands`}
            description="We prioritize measurable outcomes, responsive communication, and long-term partnerships."
          />
          <TestimonialsSlider compact />
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container className="rounded-3xl border border-slate-200 bg-mist-100 p-8 text-center sm:p-10">
          <h2 className="font-heading text-3xl font-semibold text-ink-900 sm:text-4xl">
            Ready to become our next success story?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Let&apos;s discuss your goals and map the right strategy.
          </p>
          <div className="mt-6">
            <PrimaryLink href="/contact#lead-form">Book Free Strategy Call</PrimaryLink>
          </div>
        </Container>
      </section>
    </div>
  );
}



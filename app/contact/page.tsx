import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { LeadForm } from "@/components/forms/LeadForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactFaqs } from "@/data/faqs";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Mayank Digital Labs to discuss website development, SEO, social media, Google Ads, Meta Ads, and custom digital growth plans."
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-ink-900 pb-16 pt-20 text-white sm:pt-24">
        <Container className="max-w-4xl">
          <p className="mb-4 inline-flex rounded-full border border-brand-300/30 bg-brand-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-200">
            Contact
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl">
            Let&apos;s Build Your Next Growth Engine
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-200 sm:text-lg">
            Share your goals, current marketing challenges, and growth targets. We&apos;ll respond with a practical
            roadmap tailored to your business.
          </p>
        </Container>
      </section>

      <section id="lead-form" className="py-16 sm:py-20">
        <Container className="grid gap-10 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="order-2 xl:order-1">
            <LeadForm />
          </div>
          <aside className="order-1 space-y-6 xl:order-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
              <SectionHeading
                eyebrow="Contact Details"
                title="Primary contact information"
                description="Reach us through phone, email, or form submission."
              />
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  <span>{siteConfig.address}</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="hover:text-brand-700">
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-700">
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  <span>{siteConfig.workingHours}</span>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
              <iframe
                title="Mayank Digital Labs Office Map Placeholder"
                src="https://maps.google.com/maps?q=koramangala%20bengaluru&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-72 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Quick FAQ"
            title="Common questions before we begin"
            description="If you need more details, include your question in the form above."
          />
          <FAQAccordion items={contactFaqs} />
        </Container>
      </section>
    </div>
  );
}


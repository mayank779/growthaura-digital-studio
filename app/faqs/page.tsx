import type { Metadata } from "next";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently asked questions about GrowthAura services, pricing, delivery timelines, and support."
};

export default function FAQsPage() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="FAQs"
          title="Frequently asked questions"
          description="Answers to common questions about process, pricing, communication, and deliverables."
        />
        <FAQAccordion items={homeFaqs} />
      </Container>
    </section>
  );
}

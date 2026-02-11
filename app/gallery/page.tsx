import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse Mayank Digital Labs gallery showcasing website designs, social media creatives, ad campaign snapshots, and branding assets."
};

export default function GalleryPage() {
  return (
    <div>
      <section className="bg-ink-900 pb-16 pt-20 text-white sm:pt-24">
        <Container className="max-w-4xl">
          <p className="mb-4 inline-flex rounded-full border border-brand-300/30 bg-brand-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-200">
            Gallery
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl">
            Creative assets and growth campaign snapshots
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-200 sm:text-lg">
            Explore website concepts, social media visuals, ad screenshots, and branding systems built by
            Mayank Digital Labs for modern digital brands.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Visual Work"
            title="Filter by category and open any image in lightbox view"
            description="All images are placeholders and can be replaced easily from the gallery data file."
          />
          <GalleryGrid />
        </Container>
      </section>
    </div>
  );
}


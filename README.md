# Mayank Digital Labs Website

Production-ready multi-page digital agency website built with Next.js App Router, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Pages

- `/` Home
- `/services`
- `/pricing`
- `/portfolio`
- `/portfolio/[slug]`
- `/about`
- `/gallery`
- `/testimonials`
- `/contact`

Also included: `/blog`, `/faqs`, `/privacy-policy`, `/terms`, and `sitemap.xml`.

## Where to edit key content

- Pricing data: `data/pricing.ts`
- Services content: `data/services.ts`
- Testimonials: `data/testimonials.ts`
- Portfolio projects/case studies: `data/projects.ts`
- Gallery items: `data/gallery.ts`
- Contact details (phone/email/address/social): `data/site.ts`
- Home hero/pricing summary: `data/home.ts`
- FAQ content: `data/faqs.ts`

## Reusable components

- Header: `components/Header.tsx`
- Footer: `components/Footer.tsx`
- Hero slider: `components/HeroSlider.tsx`
- Service cards: `components/ServiceCard.tsx`
- Pricing tables/cards: `components/PricingTabs.tsx`, `components/PricingCard.tsx`
- Testimonials slider: `components/TestimonialsSlider.tsx`
- Lead form: `components/forms/LeadForm.tsx`
- Newsletter form: `components/forms/NewsletterForm.tsx`
- Portfolio cards: `components/ProjectCard.tsx`
- Gallery grid + lightbox: `components/GalleryGrid.tsx`
- FAQ accordion: `components/FAQAccordion.tsx`

## Notes

- All images currently use Unsplash placeholder URLs.
- Replace `siteConfig.domain` in `data/site.ts` with your real domain.
- Forms use client-side validation and mock success responses (no backend connected yet).


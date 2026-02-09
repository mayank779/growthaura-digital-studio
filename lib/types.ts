export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  outcome: string;
  icon: string;
  startingPrice: string;
  pricingNote: string;
  includeList: string[];
};

export type PricingPlan = {
  name: string;
  audience: string;
  price: string;
  timeline?: string;
  featured?: boolean;
  points: string[];
  cta: string;
};

export type PricingSection = {
  id: string;
  label: string;
  description: string;
  plans: PricingPlan[];
  note?: string;
};

export type Project = {
  slug: string;
  name: string;
  industry: string;
  services: string[];
  result: string;
  thumbnail: string;
  overview: string;
  background: string;
  challenges: string[];
  strategy: string[];
  metrics: string[];
  gallery: string[];
};

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type GalleryItem = {
  id: string;
  title: string;
  category: "Websites" | "Social Media Creatives" | "Ad Screenshots" | "Branding";
  image: string;
  description: string;
};

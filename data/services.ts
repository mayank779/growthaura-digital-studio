import { Service } from "@/lib/types";

// Edit services content, inclusions, and pricing hints here.
export const services: Service[] = [
  {
    slug: "website-design-development",
    title: "Website Design & Development",
    shortDescription:
      "High-performance websites built to turn visitors into qualified leads and sales conversations.",
    outcome: "Faster pages, stronger trust, and better lead conversion rates.",
    icon: "Laptop",
    startingPrice: "USD $300 | INR 24,999",
    pricingNote: "Starting at USD $300/project | INR 24,999/project",
    includeList: [
      "UI/UX wireframes and custom visual design",
      "Responsive development for desktop, tablet, and mobile",
      "Lead forms, WhatsApp click-to-chat, and CTA mapping",
      "Core Web Vitals speed optimization",
      "Basic on-page SEO setup and analytics integration"
    ]
  },
  {
    slug: "seo-services",
    title: "SEO Services",
    shortDescription:
      "End-to-end SEO covering technical fixes, on-page optimization, content planning, and authority building.",
    outcome: "Sustainable organic traffic and higher-intent inbound leads.",
    icon: "LineChart",
    startingPrice: "USD $120/month | INR 9,999/month",
    pricingNote: "Starting at USD $120/month | INR 9,999/month",
    includeList: [
      "Keyword research and keyword-to-page mapping",
      "On-page SEO for service pages and blogs",
      "Technical SEO audits and implementation guidance",
      "Off-page link building with quality outreach",
      "Monthly ranking and performance reports"
    ]
  },
  {
    slug: "social-media-marketing",
    title: "Instagram & LinkedIn Management",
    shortDescription:
      "Brand-led social media strategy, content calendars, and post execution designed for reach and engagement.",
    outcome: "Stronger brand authority and consistent audience growth.",
    icon: "Megaphone",
    startingPrice: "USD $95/month | INR 7,999/month",
    pricingNote: "Starting at USD $95/month | INR 7,999/month",
    includeList: [
      "Monthly content themes and publishing plan",
      "Reels/carousel strategy with branded creatives",
      "Caption writing, hashtag research, and posting",
      "Comment and DM handling playbook",
      "Performance dashboard with monthly strategy call"
    ]
  },
  {
    slug: "performance-ads",
    title: "Google & Meta Ads Management",
    shortDescription:
      "Performance marketing campaigns optimized for lower CPA, stronger ROAS, and predictable lead flow.",
    outcome: "Faster pipeline growth using data-backed campaign optimization.",
    icon: "Target",
    startingPrice: "USD $120/month | INR 9,999/month",
    pricingNote: "Management fee starts at USD $120/month | INR 9,999/month",
    includeList: [
      "Campaign architecture and pixel/tracking setup",
      "Keyword and audience research",
      "Ad copy and creative direction with A/B testing",
      "Bid and budget optimization",
      "Weekly optimization notes + monthly reporting"
    ]
  },
  {
    slug: "email-marketing",
    title: "Email Marketing & Automation",
    shortDescription:
      "Lifecycle email systems that nurture leads, re-activate dormant users, and improve repeat purchases.",
    outcome: "Higher customer retention and measurable revenue from email.",
    icon: "Mail",
    startingPrice: "USD $85/month | INR 6,999/month",
    pricingNote: "Starting at USD $85/month | INR 6,999/month",
    includeList: [
      "Campaign calendar and segmented list strategy",
      "Template design and persuasive copywriting",
      "Welcome, follow-up, and re-engagement automations",
      "A/B subject line testing",
      "Open/click/conversion reporting"
    ]
  },
  {
    slug: "branding-creatives",
    title: "Branding & Creatives",
    shortDescription:
      "Cohesive brand identity and creative assets that make your business memorable across platforms.",
    outcome: "Premium visual consistency that improves trust and recall.",
    icon: "Palette",
    startingPrice: "USD $180/project | INR 14,999/project",
    pricingNote: "Starting at USD $180/project | INR 14,999/project",
    includeList: [
      "Logo refinement and brand direction",
      "Color, typography, and visual guidelines",
      "Social media templates and ad creative kits",
      "Website graphics and campaign assets",
      "Editable source files and usage guidance"
    ]
  }
];

// Use this list for the Services page where Google Ads and Meta Ads are shown as separate offerings.
export const detailedServices: Service[] = [
  services[0],
  services[1],
  services[2],
  {
    slug: "google-ads-management",
    title: "Google Ads Management",
    shortDescription:
      "Intent-driven search campaigns optimized to capture demand and convert clicks into qualified leads.",
    outcome: "Lower CPL and higher lead intent from search traffic.",
    icon: "Target",
    startingPrice: "USD $120/month | INR 9,999/month",
    pricingNote: "Management fee starts at USD $120/month | INR 9,999/month",
    includeList: [
      "Keyword and search intent research",
      "Campaign/ad group architecture setup",
      "Ad copy testing and extension optimization",
      "Conversion tracking and GA4 integration",
      "Weekly optimization and monthly report"
    ]
  },
  {
    slug: "meta-ads-management",
    title: "Meta (Facebook/Instagram) Ads Management",
    shortDescription:
      "Audience-first Meta campaigns for awareness, retargeting, and lead/sales performance.",
    outcome: "Stronger funnel performance with creative-led testing.",
    icon: "Target",
    startingPrice: "USD $120/month | INR 9,999/month",
    pricingNote: "Management fee starts at USD $120/month | INR 9,999/month",
    includeList: [
      "Audience research and funnel mapping",
      "Campaign setup across placements and objectives",
      "Creative direction and messaging variations",
      "Retargeting sequences and budget scaling",
      "Performance dashboard with optimization notes"
    ]
  },
  services[4],
  {
    slug: "branding-creative-design",
    title: "Branding & Creative Design",
    shortDescription:
      "Cohesive brand direction and campaign creative systems that improve trust and brand recall.",
    outcome: "Premium visual consistency that drives stronger perception and response.",
    icon: "Palette",
    startingPrice: "USD $180/project | INR 14,999/project",
    pricingNote: "Starting at USD $180/project | INR 14,999/project",
    includeList: services[5].includeList
  }
];

export const highlightCards = [
  {
    title: "ROI-Driven Digital Marketing",
    description:
      "Every campaign is tied to business metrics like qualified leads, conversion rate, and acquisition cost."
  },
  {
    title: "Conversion-Focused Web Design",
    description:
      "We architect user journeys with clear CTAs, friction-free forms, and trust signals that convert."
  },
  {
    title: "Transparent Reporting & Communication",
    description:
      "You receive structured weekly updates and plain-language monthly reports with clear next steps."
  },
  {
    title: "Specialized in Global Startups & Growth Teams",
    description:
      "Our strategy blends market-specific insight with global best practices for sustainable growth."
  }
];

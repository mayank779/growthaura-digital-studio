import { NavItem } from "@/lib/types";

// Edit brand details, links, and contact information here.
export const siteConfig = {
  brandName: "Mayank Digital Labs",
  shortBrand: "Mayank Digital Labs",
  domain: "https://mayank-digital-labs.vercel.app",
  tagline: "Growth-focused websites, SEO, and ads for ambitious Indian brands.",
  address: "4th Floor, Koramangala 5th Block, Bengaluru, Karnataka 560095",
  phone: "+91 98765 43210",
  email: "hello@mayankdigitallabs.in",
  workingHours: "Mon - Sat: 10:00 AM to 7:00 PM IST",
  socialLinks: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "YouTube", href: "https://youtube.com" }
  ],
  trustPoints: ["No spam", "Response within 24 hours", "100% confidential strategy call"]
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" }
];

export const footerResources = [
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Sitemap", href: "/sitemap.xml" }
];


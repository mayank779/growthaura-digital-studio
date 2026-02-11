export const seoKeywords = {
  home: [
    "digital marketing agency worldwide",
    "website development and SEO services",
    "Google Ads and Meta Ads management",
    "AI agent automation services",
    "conversion-focused growth partner"
  ],
  services: [
    "website design and development services",
    "technical SEO and content strategy",
    "social media management services",
    "performance marketing agency",
    "email marketing automation services"
  ],
  pricing: [
    "digital marketing pricing packages",
    "AI agent automation pricing",
    "SEO and ads management cost",
    "website development package pricing",
    "global agency pricing plans"
  ],
  about: [
    "about digital growth agency",
    "performance marketing specialists",
    "SEO and web development team",
    "AI automation consulting team"
  ],
  aiAutomation: [
    "ai agent automation services worldwide",
    "ai chatbot crm automation agency",
    "ai lead qualification automation pricing",
    "business ai workflow automation services",
    "sales follow-up automation with ai"
  ]
} as const;

export const internalLinkGroups = {
  home: [
    { label: "Explore Services", href: "/services", description: "See full delivery scope across web, SEO, ads, and automation." },
    { label: "Compare Pricing Plans", href: "/pricing", description: "Review package tiers, inclusions, and support options." },
    {
      label: "AI Agent Pricing",
      href: "/pricing?category=ai-agent-automation",
      description: "View setup and support ranges for AI agents and workflows."
    },
    {
      label: "AI Agent Automation Services",
      href: "/ai-agent-automation-services",
      description: "Explore full AI automation implementation scope and packages."
    },
    {
      label: "AI Chatbot + CRM Automation",
      href: "/ai-chatbot-crm-automation",
      description: "Review chatbot integration workflows for CRM and pipeline teams."
    },
    {
      label: "AI Lead Follow-Up Automation",
      href: "/ai-lead-qualification-follow-up-automation",
      description: "Compare lead qualification and nurture automation systems."
    },
    { label: "See Portfolio", href: "/portfolio", description: "Browse projects and measurable growth outcomes." },
    { label: "Read Testimonials", href: "/testimonials", description: "Hear client feedback from multiple industries." },
    { label: "Book Strategy Call", href: "/contact#lead-form", description: "Request a custom growth roadmap for your goals." }
  ],
  pricing: [
    { label: "Website Services", href: "/services#website-design-development" },
    { label: "SEO Services", href: "/services#seo-services" },
    { label: "AI Automation Section", href: "/#ai-agent-automation" },
    { label: "AI Agent Services", href: "/ai-agent-automation-services" },
    { label: "AI Chatbot CRM Automation", href: "/ai-chatbot-crm-automation" },
    { label: "AI Lead Follow-Up Automation", href: "/ai-lead-qualification-follow-up-automation" },
    { label: "Portfolio Proof", href: "/portfolio" },
    { label: "Contact Team", href: "/contact#lead-form" }
  ],
  services: [
    { label: "Explore Full Pricing", href: "/pricing" },
    { label: "AI Agent Automation Pricing", href: "/pricing?category=ai-agent-automation" },
    { label: "AI Agent Services", href: "/ai-agent-automation-services" },
    { label: "AI Chatbot CRM Automation", href: "/ai-chatbot-crm-automation" },
    { label: "AI Lead Follow-Up Automation", href: "/ai-lead-qualification-follow-up-automation" },
    { label: "View Portfolio Case Studies", href: "/portfolio" },
    { label: "Read Client Testimonials", href: "/testimonials" },
    { label: "Book Free Strategy Call", href: "/contact#lead-form" }
  ]
} as const;

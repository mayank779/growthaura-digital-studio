import { PricingSection } from "@/lib/types";

// Edit pricing plans and inclusions here.
export const pricingSections: PricingSection[] = [
  {
    id: "website-packages",
    label: "Website Packages",
    description: "Launch-ready websites built for trust, speed, and lead generation.",
    plans: [
      {
        name: "Starter Landing Page",
        audience: "Ideal for founders validating offers",
        price: "USD $95 - $180 | INR 7,999 - 14,999",
        timeline: "Timeline: 5-8 working days",
        points: [
          "Single conversion-focused page",
          "Responsive layout and basic SEO setup",
          "1 lead form + WhatsApp click-to-chat",
          "Basic analytics integration",
          "Deployment support"
        ],
        cta: "Start with this plan"
      },
      {
        name: "Business Website (5-7 pages)",
        audience: "For service businesses and growing brands",
        price: "USD $300 - $480 | INR 24,999 - 39,999",
        timeline: "Timeline: 2-4 weeks",
        featured: true,
        points: [
          "Custom UI and page structure",
          "Home, service, about, contact, and blog setup",
          "Copy guidance and lead forms",
          "Speed optimization and on-page SEO basics",
          "Training handover session"
        ],
        cta: "Most popular choice"
      },
      {
        name: "E-Commerce Website",
        audience: "For brands ready to sell online",
        price: "Starting from USD $720+ | INR 59,999+",
        timeline: "Timeline: 4-8 weeks",
        points: [
          "Product catalog with category architecture",
          "Cart, checkout, and payment gateway integration",
          "Product SEO basics and schema setup",
          "Email capture and conversion prompts",
          "Admin workflow training"
        ],
        cta: "Book a build consultation"
      }
    ],
    note: "Exact pricing depends on content readiness, custom functionality, and integrations."
  },
  {
    id: "seo-retainers",
    label: "SEO Retainers",
    description: "Monthly SEO systems for ranking, authority, and lead consistency.",
    plans: [
      {
        name: "SEO Starter",
        audience: "Local and small businesses",
        price: "USD $120/month | INR 9,999/month",
        points: [
          "SEO audit + implementation checklist",
          "5-10 priority keyword tracking",
          "On-page optimization for key pages",
          "Google Business Profile support",
          "Monthly report and action plan"
        ],
        cta: "Start SEO Starter"
      },
      {
        name: "SEO Growth",
        audience: "Brands scaling organic acquisition",
        price: "USD $240/month | INR 19,999/month",
        featured: true,
        points: [
          "Everything in Starter",
          "Expanded keyword set and content briefs",
          "Technical SEO fixes coordination",
          "Off-page authority building",
          "Bi-weekly progress review"
        ],
        cta: "Choose SEO Growth"
      },
      {
        name: "SEO Domination",
        audience: "Competitive industries and multi-location businesses",
        price: "USD $420+/month | INR 34,999+/month",
        points: [
          "Aggressive strategy for competitive terms",
          "Advanced technical SEO and site structure",
          "Editorial calendar and content supervision",
          "Digital PR and higher-volume link outreach",
          "Custom dashboards and monthly strategy call"
        ],
        cta: "Request a custom SEO roadmap"
      }
    ]
  },
  {
    id: "social-media",
    label: "Social Media (Instagram & LinkedIn)",
    description: "Consistent content + positioning strategy for visibility and demand generation.",
    plans: [
      {
        name: "Basic",
        audience: "Instagram only or LinkedIn only",
        price: "USD $95/month | INR 7,999/month",
        points: [
          "8-10 posts per month",
          "Basic creative templates and captions",
          "Hashtag support and publishing",
          "Monthly performance snapshot",
          "Platform option: Instagram or LinkedIn"
        ],
        cta: "Start Basic plan"
      },
      {
        name: "Growth",
        audience: "Businesses building stronger brand presence",
        price: "USD $180/month | INR 14,999/month",
        featured: true,
        points: [
          "12-16 posts + stories/reels guidance",
          "Content pillars and monthly calendar",
          "Community engagement support",
          "Dual-platform option available",
          "Detailed analytics + strategy review"
        ],
        cta: "Choose Growth plan"
      },
      {
        name: "Scale",
        audience: "High-activity brands and founders",
        price: "USD $300+/month | INR 24,999+/month",
        points: [
          "Advanced content production workflow",
          "Growth experiments and ad support alignment",
          "Weekly optimization feedback loop",
          "Creator/collab ideation support",
          "Instagram + LinkedIn bundle discount"
        ],
        cta: "Book Scale planning call"
      }
    ],
    note: "Bundle discount: save up to 15% when combining Instagram and LinkedIn management."
  },
  {
    id: "ads-management",
    label: "Google & Meta Ads Management",
    description: "Performance campaign management fee plus ad spend, optimized for ROI.",
    plans: [
      {
        name: "Starter Ads Management",
        audience: "Ad spend up to USD $480/month | INR 40,000/month",
        price: "Management fee: USD $120/month | INR 9,999/month",
        points: [
          "Campaign setup and conversion tracking",
          "Keyword/audience research",
          "Ad copy + creative guidance",
          "A/B tests and weekly optimization",
          "Monthly report with insights"
        ],
        cta: "Launch starter ads"
      },
      {
        name: "Growth Ads Management",
        audience: "Ad spend up to USD $1,200/month | INR 1,00,000/month",
        price: "Management fee: USD $240/month | INR 19,999/month",
        featured: true,
        points: [
          "Multi-campaign structure across Google/Meta",
          "Landing page feedback for conversion lift",
          "Bid strategy and budget reallocation",
          "Retargeting funnel buildout",
          "Monthly optimization call"
        ],
        cta: "Scale with Growth ads"
      },
      {
        name: "Performance Partner",
        audience: "Higher spends and multi-offer businesses",
        price: "Management fee: USD $360+/month | INR 29,999+/month",
        points: [
          "Full-funnel performance planning",
          "Advanced attribution and tracking stack",
          "High-frequency optimization cycles",
          "Creative testing matrix with briefs",
          "Custom SLA and leadership reporting"
        ],
        cta: "Get custom performance pricing"
      }
    ],
    note: "Ad spend is billed directly to your ad account and is separate from management fees."
  },
  {
    id: "email-marketing",
    label: "Email Marketing",
    description: "Campaign and automation retainers that increase repeat conversions.",
    plans: [
      {
        name: "Email Starter",
        audience: "Early-stage email setup",
        price: "USD $85/month | INR 6,999/month",
        points: [
          "2 campaigns/month",
          "Template design refresh",
          "Welcome automation setup",
          "Basic segmentation",
          "Monthly analytics summary"
        ],
        cta: "Activate Email Starter"
      },
      {
        name: "Email Growth",
        audience: "Growing D2C and service businesses",
        price: "USD $160/month | INR 12,999/month",
        featured: true,
        points: [
          "4 campaigns/month",
          "Welcome + cart abandonment flows",
          "Offer and copy testing",
          "List hygiene and segmentation logic",
          "Performance insights with next-step plan"
        ],
        cta: "Choose Email Growth"
      },
      {
        name: "Email Scale",
        audience: "High-LTV brands",
        price: "USD $240+/month | INR 19,999+/month",
        points: [
          "6+ campaigns/month",
          "Re-engagement and win-back automation",
          "Advanced customer journey mapping",
          "Revenue attribution reporting",
          "Ongoing optimization workshops"
        ],
        cta: "Discuss scale strategy"
      }
    ]
  },
  {
    id: "ai-agent-automation",
    label: "AI Agent Automation",
    description:
      "AI agents and workflow automations for lead qualification, follow-ups, support, and sales ops.",
    plans: [
      {
        name: "AI Lead Capture Starter",
        audience: "Early-stage businesses testing AI-assisted lead handling",
        price: "Setup: USD $600 - $1,450 | INR 49,999 - 1,20,000",
        timeline: "Support: USD $180 - $360/month | INR 14,999 - 29,999/month",
        points: [
          "Website or WhatsApp AI assistant setup",
          "Lead qualification rules and human handoff",
          "Basic CRM integration and routing",
          "Prompt tuning + weekly transcript reviews",
          "Monthly performance snapshot"
        ],
        cta: "Launch AI Starter"
      },
      {
        name: "AI Growth Automation",
        audience: "Growing brands needing appointment and follow-up automation",
        price: "Setup: USD $1,500 - $3,375 | INR 1,25,000 - 2,80,000",
        timeline: "Support: USD $420 - $965/month | INR 34,999 - 79,999/month",
        featured: true,
        points: [
          "Multi-channel assistant (web + WhatsApp + email)",
          "Sales qualification logic with booking workflows",
          "CRM updates, reminders, and escalation rules",
          "Knowledge base integration and versioning",
          "Monthly strategy sprint + optimization roadmap"
        ],
        cta: "Choose AI Growth"
      },
      {
        name: "AI Revenue Ops Partner",
        audience: "Scale-ready teams requiring custom multi-agent systems",
        price: "Setup: USD $4,220 - $10,250+ | INR 3,50,000 - 8,50,000+",
        timeline: "Support: USD $1,085 - $3,010/month | INR 89,999 - 2,49,999/month",
        points: [
          "Custom multi-agent architecture for sales and support",
          "Approval controls, fallback logic, and QA monitoring",
          "Advanced analytics, attribution, and executive dashboards",
          "Deep integrations with CRM, helpdesk, and internal tools",
          "Dedicated pod with weekly optimization cycles"
        ],
        cta: "Request Enterprise AI Plan"
      }
    ],
    note:
      "Pricing ranges are benchmarked to current 2026 agency market quotes and vary by integrations, channels, data complexity, and QA requirements."
  }
];

import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/services",
    "/pricing",
    "/ai-agent-automation-services",
    "/ai-chatbot-crm-automation",
    "/ai-lead-qualification-follow-up-automation",
    "/portfolio",
    "/about",
    "/gallery",
    "/testimonials",
    "/contact",
    "/faqs",
    "/privacy-policy",
    "/terms",
    "/blog"
  ].map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "/" ? 1 : route === "/pricing" || route === "/services" ? 0.9 : 0.7
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.domain}/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75
  }));

  return [...staticRoutes, ...projectRoutes];
}

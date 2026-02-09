import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/services",
    "/pricing",
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
    lastModified: new Date()
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.domain}/portfolio/${project.slug}`,
    lastModified: new Date()
  }));

  return [...staticRoutes, ...projectRoutes];
}

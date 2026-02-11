import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      }
    ],
    host: siteConfig.domain,
    sitemap: `${siteConfig.domain}/sitemap.xml`
  };
}

import Link from "next/link";
import { Instagram, Linkedin, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { footerResources, siteConfig } from "@/data/site";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { BrandLogo } from "@/components/BrandLogo";

const socialIconMap = {
  Instagram,
  LinkedIn: Linkedin,
  Facebook,
  YouTube: Youtube
};

export function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-white">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <BrandLogo compact className="mb-4" />
            <h3 className="text-lg font-semibold text-ink-900">About GrowthAura</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              GrowthAura Digital Studio helps Indian startups and SMEs scale with conversion-focused websites,
              SEO, social media, ads, and lifecycle marketing.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-ink-900">Services</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link className="transition hover:text-brand-600" href={`/services#${service.slug}`}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-ink-900">Resources</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {footerResources.map((resource) => (
                <li key={resource.label}>
                  <Link className="transition hover:text-brand-600" href={resource.href}>
                    {resource.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-ink-900">Contact</h3>
            <ul className="mt-3 space-y-3 text-sm text-slate-600">
              <li className="flex gap-2">
                <MapPin size={16} className="mt-1 shrink-0 text-brand-600" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-brand-600" />
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="transition hover:text-brand-600">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-brand-600" />
                <a href={`mailto:${siteConfig.email}`} className="transition hover:text-brand-600">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-2">
              {siteConfig.socialLinks.map((link) => {
                const Icon = socialIconMap[link.label as keyof typeof socialIconMap];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-brand-300 hover:text-brand-600"
                  >
                    {Icon ? <Icon size={16} /> : link.label.slice(0, 1)}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} GrowthAura Digital Studio. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

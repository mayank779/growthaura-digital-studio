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
    <footer className="relative overflow-hidden border-t border-slate-800 bg-gradient-to-b from-ink-900 via-[#0d1633] to-[#0a122a] text-slate-200">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-brand-500/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <Container className="relative py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <BrandLogo compact className="mb-4" />
            <h3 className="text-lg font-semibold text-white">About Mayank Digital Labs</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Mayank Digital Labs helps startups and growth teams worldwide scale with conversion-focused
              websites, SEO, social media, ads, and lifecycle marketing.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link className="transition hover:text-brand-200" href={`/services#${service.slug}`}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Resources</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {footerResources.map((resource) => (
                <li key={resource.label}>
                  <Link className="transition hover:text-brand-200" href={resource.href}>
                    {resource.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="mt-3 space-y-3 text-sm text-slate-300">
              <li className="flex gap-2">
                <MapPin size={16} className="mt-1 shrink-0 text-brand-300" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-brand-300" />
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="transition hover:text-brand-200">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-brand-300" />
                <a href={`mailto:${siteConfig.email}`} className="transition hover:text-brand-200">
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
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-500/70 bg-white/5 text-slate-200 transition hover:border-brand-300 hover:text-brand-200"
                  >
                    {Icon ? <Icon size={16} /> : link.label.slice(0, 1)}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-700 pt-6 text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Mayank Digital Labs. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}



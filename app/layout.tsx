import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { siteConfig } from "@/data/site";

const heading = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap"
});

const body = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "GrowthAura Digital Studio | Website Development & Marketing Agency in India",
    template: "%s | GrowthAura Digital Studio"
  },
  description:
    "GrowthAura is a digital marketing agency in India specializing in website development, SEO, Google Ads, Meta Ads, social media, and email marketing.",
  keywords: [
    "website development agency in India",
    "SEO and Google Ads expert",
    "digital marketing agency India",
    "Instagram LinkedIn marketing agency",
    "Meta ads management India"
  ],
  openGraph: {
    title: "GrowthAura Digital Studio",
    description: siteConfig.tagline,
    url: siteConfig.domain,
    siteName: "GrowthAura Digital Studio",
    type: "website",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowthAura Digital Studio",
    description: siteConfig.tagline
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.brandName,
  url: siteConfig.domain,
  image: `${siteConfig.domain}/og-image.jpg`,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Koramangala 5th Block",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560095",
    addressCountry: "IN"
  },
  sameAs: siteConfig.socialLinks.map((item) => item.href)
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} font-body`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <div className="relative min-h-screen">
          <Header />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { CurrencyModeProvider } from "@/components/currency/CurrencyModeProvider";
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
  alternates: {
    canonical: "/"
  },
  title: {
    default: "Mayank Digital Labs | Website Development & Marketing Agency Worldwide",
    template: "%s | Mayank Digital Labs"
  },
  description:
    "Mayank Digital Labs is a digital marketing agency serving businesses worldwide with website development, SEO, Google Ads, Meta Ads, social media, email marketing, and AI agent automation.",
  keywords: [
    "website development agency worldwide",
    "SEO and Google Ads expert",
    "digital marketing agency global",
    "Instagram LinkedIn marketing agency",
    "Meta ads management services",
    "AI agent automation agency"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"]
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Mayank Digital Labs",
    description: siteConfig.tagline,
    url: siteConfig.domain,
    siteName: "Mayank Digital Labs",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "Mayank Digital Labs"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayank Digital Labs",
    description: siteConfig.tagline,
    images: ["/icon-512.png"]
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  name: siteConfig.brandName,
  url: siteConfig.domain,
  image: `${siteConfig.domain}/icon-512.png`,
  logo: `${siteConfig.domain}/icon-512.png`,
  description: siteConfig.tagline,
  areaServed: "Worldwide",
  priceRange: "USD",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00"
    }
  ],
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

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.brandName,
  url: siteConfig.domain,
  inLanguage: "en"
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <CurrencyModeProvider>
          <div className="relative min-h-screen">
            <Header />
            <main>{children}</main>
            <Footer />
            <BackToTop />
          </div>
        </CurrencyModeProvider>
      </body>
    </html>
  );
}


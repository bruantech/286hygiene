import "./globals.css";
import { Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ScrollManager from "../components/shared/ScrollManager";
import {
  getLocalBusinessJsonLd,
  getPageMetadata,
  getWebsiteJsonLd,
  siteConfig
} from "../lib/siteData";

export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "286 Hygiene | Professional Cleaning Services in Lagos",
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  referrer: "origin-when-cross-origin",
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Cleaning Services",
  alternates: {
    canonical: siteConfig.siteUrl
  },
  other: {
    "geo.region": "NG-LA",
    "geo.placename": siteConfig.addressLocality,
    "geo.position": "Lagos;Nigeria"
  },
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
  openGraph: getPageMetadata({}).openGraph,
  twitter: getPageMetadata({}).twitter,
  icons: {
    icon: siteConfig.logo,
    shortcut: siteConfig.logo,
    apple: siteConfig.logo
  }
};

export default function RootLayout({ children }) {
  const localBusinessJsonLd = getLocalBusinessJsonLd();
  const websiteJsonLd = getWebsiteJsonLd();

  return (
    <html lang="en">
      <body>
        <ScrollManager />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}


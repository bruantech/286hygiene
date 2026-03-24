export const siteConfig = {
  name: "286 Hygiene",
  legalName: "286 Hygiene",
  description:
    "286 Hygiene provides professional cleaning, fumigation, and hygiene services for homes, offices, commercial facilities, and post-construction sites in Lagos, Nigeria.",
  shortDescription:
    "Professional cleaning and hygiene services in Lagos, Nigeria.",
  siteUrl: "https://286hygiene.com",
  email: "info@286hygiene.com",
  phone: "+234 800 000 2860",
  phoneDisplay: "+234 800 000 2860",
  addressLocality: "Lagos",
  addressRegion: "Lagos",
  addressCountry: "NG",
  areaServed: ["Lagos", "Nigeria"],
  mapQuery: "Lagos, Nigeria",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Lagos%2C%20Nigeria",
  socialImage: "/images/heroimg.png",
  logo: "/images/logo.png",
  keywords: [
    "cleaning services Lagos",
    "professional cleaning Nigeria",
    "commercial cleaning Lagos",
    "residential cleaning Lagos",
    "fumigation services Lagos",
    "pest control Lagos",
    "post-construction cleaning Lagos",
    "mattress cleaning Lagos",
    "rug cleaning Lagos",
    "upholstery cleaning Lagos",
    "pressure washing Lagos",
    "286 Hygiene"
  ],
  services: [
    "Residential Cleaning",
    "Commercial Cleaning",
    "Fumigation & Pest Control",
    "Post-Construction Cleaning",
    "Pressure Washing",
    "Mattress Cleaning",
    "Rug & Carpet Cleaning",
    "Upholstery Cleaning"
  ]
};

export function getAbsoluteUrl(path = "") {
  return `${siteConfig.siteUrl}${path}`;
}

export function getPageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  image = siteConfig.socialImage
}) {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | Professional Cleaning Services in Lagos`;
  const resolvedDescription = description || siteConfig.description;
  const url = getAbsoluteUrl(path);

  return {
    title,
    description: resolvedDescription,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical: url
    },
    openGraph: {
      title: fullTitle,
      description: resolvedDescription,
      url,
      siteName: siteConfig.name,
      locale: "en_NG",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: resolvedDescription,
      images: [image]
    }
  };
}

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService", "CleaningService"],
    "@id": `${siteConfig.siteUrl}/#business`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.siteUrl,
    image: getAbsoluteUrl(siteConfig.socialImage),
    logo: getAbsoluteUrl(siteConfig.logo),
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.addressLocality,
      addressRegion: siteConfig.addressRegion,
      addressCountry: siteConfig.addressCountry
    },
    areaServed: siteConfig.areaServed.map((name) => ({
      "@type": "AdministrativeArea",
      name
    })),
    hasMap: siteConfig.mapUrl,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      areaServed: "NG",
      availableLanguage: ["English"]
    },
    sameAs: [siteConfig.mapUrl],
    knowsAbout: siteConfig.services
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.siteUrl}/#website`,
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    inLanguage: "en-NG",
    publisher: {
      "@id": `${siteConfig.siteUrl}/#business`
    }
  };
}

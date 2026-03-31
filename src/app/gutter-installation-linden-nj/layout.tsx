import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Gutter Installation Linden, NJ | Seamless Gutter Installers",

  description:
    "Top-rated gutter installation in Linden, NJ. Specialized in seamless gutters, downspout replacement, and residential drainage. Get a free estimate today!",

  keywords: [
    "gutter installation Linden NJ",
    "gutter installer near me",
    "seamless gutter installation",
    "professional gutter installation Linden",
    "affordable gutter installers",
  ],

  authors: [{ name: "AG Restorations" }],

  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },

  alternates: {
    canonical: "https://www.agrestorations.com/gutter-installation-linden-nj",
  },

  openGraph: {
    type: "website",
    title: "Best Gutter Installation Company in Linden, NJ | AG Restorations",
    description:
      "Protect your foundation with expert seamless gutter installation and replacement services. Serving Linden and all of Union County.",
    url: "https://www.agrestorations.com/gutter-installation-linden-nj",
    siteName: "AG Restorations",
    images: [
      {
        url: "https://www.agrestorations.com/images/gutter-installation-linden.jpg",
        width: 1200,
        height: 630,
        alt: "Gutter Installation Linden NJ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Seamless Gutter Installation Experts in Linden, NJ",
    description:
      "Affordable gutter installation and downspout services. Protect your home from water damage today.",
    images: [
      "https://www.agrestorations.com/images/gutter-installation-linden.jpg",
    ],
  },

  referrer: "strict-origin-when-cross-origin",
};

export default function GutterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      {/* SCHEMA */}
      <Script
        id="gutter-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            name: "AG Restorations",
            url: "https://www.agrestorations.com/gutter-installation-linden-nj",
            telephone: "+1-973-342-4134",

            address: {
              "@type": "PostalAddress",
              streetAddress: "117 Grant St",
              addressLocality: "Linden",
              addressRegion: "NJ",
              postalCode: "07036",
              addressCountry: "US",
            },

            geo: {
              "@type": "GeoCoordinates",
              latitude: 40.6385,
              longitude: -74.2443,
            },

            description:
              "Expert seamless gutter installation and replacement services in Linden, NJ. We specialize in residential gutter systems and downspout installation.",

            image: "https://www.agrestorations.com/logo.png",

            priceRange: "$$",

            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "08:00",
                closes: "18:00",
              },
            ],
          }),
        }}
      />
    </>
  );
}

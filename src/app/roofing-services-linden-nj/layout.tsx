import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Expert Roofing Services in Linden, NJ | AG Restorations",

  description:
    "Top-rated roofing company in Linden, NJ. Licensed contractors for roof replacement, emergency leak repair, and flat roof maintenance. Get a free estimate today!",

  keywords: [
    "roof repair Linden NJ",
    "roofing contractors in Linden NJ",
    "roof replacement Linden NJ",
    "roofers near Linden NJ",
    "emergency roof leak repair",
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
    canonical: "https://www.agrestorations.com/roofing-services-linden-nj",
  },

  themeColor: "#ffffff",

  openGraph: {
    type: "website",
    title: "Expert Roofing Services in Linden, NJ | AG Restorations",
    description:
      "Protect your property with the best roofing company for roof replacement and repairs in Linden. Licensed, insured, and locally trusted.",
    url: "https://www.agrestorations.com/roofing-services-linden-nj",
    siteName: "AG Restorations",
    images: [
      {
        url: "https://www.agrestorations.com/images/roofing-linden-nj.jpg",
        width: 1200,
        height: 630,
        alt: "Roofing Services Linden NJ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Top Roofing Contractors in Linden, NJ",
    description:
      "Licensed residential and commercial roofing services. From leak repairs to full replacements in Linden and Union County.",
    images: ["https://www.agrestorations.com/images/roofing-linden-nj.jpg"],
    site: "@agrestorations",
  },

  referrer: "strict-origin-when-cross-origin",

  // extra mobile support
  appleWebApp: {
    capable: true,
    title: "AG Restorations",
    statusBarStyle: "black",
  },
};

export default function RoofingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      {/* SCHEMA */}
      <Script
        id="roofing-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RoofingContractor",
            name: "AG Restorations",
            url: "https://www.agrestorations.com/roofing-services-linden-nj",
            telephone: "+1-973-342-4134",
            priceRange: "$$",

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

            areaServed: [
              "Linden",
              "Elizabeth",
              "Rahway",
              "Westfield",
              "Union County",
            ],

            description:
              "Professional roofing services in Linden, NJ. We specialize in roof replacement, emergency leak repair, and flat roof maintenance for residential and commercial properties.",

            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://www.agrestorations.com/roofing-services-linden-nj",
            },
          }),
        }}
      />
    </>
  );
}

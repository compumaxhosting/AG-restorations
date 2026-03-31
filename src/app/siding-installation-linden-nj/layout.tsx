import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Siding Installation Linden, NJ | Licensed Siding Contractors",

  description:
    "Looking for the best siding installation services in Linden, NJ? AG Restorations offers vinyl and fiber cement siding, energy-efficient upgrades, and expert repairs.",

  keywords: [
    "siding installation Linden NJ",
    "siding contractors in Linden NJ",
    "vinyl siding installation",
    "fiber cement siding contractor Linden",
  ],

  alternates: {
    canonical: "https://www.agrestorations.com/siding-installation-linden-nj",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    title: "Siding Installation Linden, NJ | Licensed Siding Contractors",
    description:
      "Looking for the best siding installation services in Linden, NJ? AG Restorations offers vinyl and fiber cement siding, energy-efficient upgrades, and expert repairs.",
    url: "https://www.agrestorations.com/siding-installation-linden-nj",
    siteName: "AG Restorations",
    images: [
      {
        url: "https://www.agrestorations.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Siding Installation Linden NJ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Siding Installation Linden, NJ",
    description:
      "Expert vinyl and fiber cement siding installation and repair services in Linden, NJ.",
    images: ["https://www.agrestorations.com/logo.png"],
  },
};

export default function SidingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      {/* SCHEMA */}
      <Script
        id="siding-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            name: "AG Restorations",
            url: "https://www.agrestorations.com/siding-installation-linden-nj",
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
              "Professional siding contractors in Linden, NJ, specializing in vinyl and fiber cement installation and repair.",

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

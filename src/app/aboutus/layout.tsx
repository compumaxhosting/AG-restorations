import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "About AG Restorations | Trusted Restoration & Construction Experts",
  description:
    "Learn about AG Restorations, a trusted team specializing in restoration, construction, and property improvement services. Discover our story, values, and commitment to quality.",
  keywords: [
    "AG Restorations",
    "about AG Restorations",
    "restoration services",
    "construction company",
    "property restoration experts",
    "home improvement services",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.agrestorations.com/aboutus",
  },
  openGraph: {
    title: "About AG Restorations | Restoration & Construction Experts",
    description:
      "Get to know AG Restorations—our mission, experience, and dedication to delivering high-quality restoration and construction services.",
    url: "https://www.agrestorations.com/aboutus",
    type: "website",
    images: [
      {
        url: "https://www.agrestorations.com/images/about-banner.jpg",
        width: 1200,
        height: 630,
        alt: "About AG Restorations",
      },
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      {/* SCHEMA */}
      <Script
        id="about-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RoofingContractor",
            name: "AG Restorations",
            url: "https://www.agrestorations.com/aboutus",
            "@id": "https://www.agrestorations.com/aboutus",
            logo: "https://www.agrestorations.com/logo.jpg",
            image: "https://www.agrestorations.com/logo.jpg",

            description:
              "AG Restorations is a trusted roofing and exterior services company based in Linden, NJ, specializing in roofing, siding, and gutter installation and repair.",

            telephone: "+1-XXX-XXX-XXXX",

            address: {
              "@type": "PostalAddress",
              streetAddress: "YOUR REAL STREET ADDRESS",
              addressLocality: "Linden",
              addressRegion: "NJ",
              postalCode: "YOUR ZIP CODE",
              addressCountry: "US",
            },

            geo: {
              "@type": "GeoCoordinates",
              latitude: 40.6332,
              longitude: -74.2463,
            },

            areaServed: [
              { "@type": "City", name: "Linden" },
              { "@type": "City", name: "Elizabeth" },
              { "@type": "City", name: "Rahway" },
              { "@type": "AdministrativeArea", name: "Union County" },
            ],

            sameAs: [
              "https://www.facebook.com/",
              "https://www.instagram.com/",
              "https://www.linkedin.com/",
            ],
          }),
        }}
      />
    </>
  );
}

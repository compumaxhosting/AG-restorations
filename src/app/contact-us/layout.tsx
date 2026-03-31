import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact AG Restorations | Free Roofing Estimate in Linden NJ",

  description:
    "Contact AG Restorations for roof repair, siding installation, and gutter services in Linden, NJ. Call now or request a free estimate from our expert team.",

  keywords: [
    "contact roofing contractor linden nj",
    "roof estimate linden nj",
    "siding contractor contact",
    "gutter installation estimate nj",
    "AG Restorations phone number",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.agrestorations.com/contact",
  },

  openGraph: {
    type: "website",
    title: "Contact AG Restorations | Free Estimate",
    description:
      "Get in touch with AG Restorations for roofing, siding, and gutter services in Linden NJ.",
    url: "https://www.agrestorations.com/contact",
    siteName: "AG Restorations",
    images: [
      {
        url: "https://www.agrestorations.com/images/contact-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Contact AG Restorations",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact AG Restorations",
    description:
      "Call or message AG Restorations for expert roofing and exterior services in NJ.",
    images: ["https://www.agrestorations.com/images/contact-banner.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      {/* Contact Page Schema */}
      <Script
        id="contact-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact AG Restorations",
            url: "https://www.agrestorations.com/contact",
            description:
              "Reach out to AG Restorations for roofing, siding, and gutter services in Linden NJ.",

            mainEntity: {
              "@type": "LocalBusiness",
              name: "AG Restorations",
              telephone: "+1-973-342-4134",
              email: "info@agrestorations.com",
              areaServed: "Linden NJ, Union County NJ",
            },
          }),
        }}
      />
    </>
  );
}

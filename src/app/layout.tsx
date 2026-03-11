import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Be_Vietnam_Pro } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
});

const bevietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-bevietnam",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agrestorations.com"),

  title: {
    default:
      "Roofing, Siding & Gutter Contractor in Linden NJ | AG Restorations",
    template: "%s | AG Restorations",
  },

  description:
    "AG Restorations is a trusted roofing contractor in Linden, New Jersey specializing in roof repair, roof replacement, siding installation, and gutter services. Call 973-342-4134 for a free estimate.",

  keywords: [
    "roofing contractor linden nj",
    "roof repair linden nj",
    "roof replacement linden nj",
    "roof installation linden nj",
    "siding contractor linden nj",
    "siding installation linden nj",
    "gutter installation linden nj",
    "union county roofing contractor",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://agrestorations.com",
  },

  openGraph: {
    title: "Roofing, Siding & Gutter Contractor in Linden NJ | AG Restorations",
    description:
      "Professional roofing, siding and gutter services in Linden NJ. Roof repair, roof replacement and seamless gutters for residential and commercial properties.",
    url: "https://agrestorations.com",
    siteName: "AG Restorations",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AG Restorations Roofing, Siding and Gutter Services in Linden NJ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Roofing, Siding & Gutter Contractor in Linden NJ | AG Restorations",
    description:
      "Trusted roofing contractor in Linden NJ providing roof repair, roof replacement, siding installation and gutter services.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${bevietnam.variable}`}>
      <body className={`${inter.variable} ${bevietnam.variable}`}>
        {children}

        <Script
          id="schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "RoofingContractor",
                name: "AG Restorations",
                url: "https://agrestorations.com",
                telephone: "+1-973-342-4134",
                email: "info@agrestorations.com",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Linden",
                  addressRegion: "NJ",
                  addressCountry: "US",
                },
                areaServed: [
                  "Linden NJ",
                  "Elizabeth NJ",
                  "Rahway NJ",
                  "Plainfield NJ",
                  "Westfield NJ",
                  "Union County NJ",
                ],
                serviceType: [
                  "Roof Repair",
                  "Roof Replacement",
                  "Roof Installation",
                  "Siding Installation",
                  "Siding Repair",
                  "Gutter Installation",
                  "Gutter Repair",
                ],
              },
            ]),
          }}
        />
      </body>
    </html>
  );
}

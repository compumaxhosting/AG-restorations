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
      "Roofing & Gutter Contractor in Linden NJ | Roof Repair & Gutter Installation | AG Restorations",
    template: "%s | AG Restorations",
  },

  description:
    "AG Restorations provides professional roofing, gutter installation, masonry, and exterior remodeling in Linden NJ. Residential & commercial roofing and gutter experts. Call 973-342-4134 for a free estimate.",

  keywords: [
    "roofing contractor linden nj",
    "roof repair linden nj",
    "roof replacement linden nj",
    "gutter installation linden nj",
    "gutter repair linden nj",
    "seamless gutters linden nj",
    "masonry contractor linden nj",
    "flat roofing nj",
    "metal roof repair nj",
    "residential roofing nj",
    "commercial roofing nj",
    "roofing company union county nj",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://agrestorations.com",
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
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Linden",
                  addressRegion: "NJ",
                  addressCountry: "US",
                },
              },
            ]),
          }}
        />
      </body>
    </html>
  );
}

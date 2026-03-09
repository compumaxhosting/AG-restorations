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
      "Roofing Contractor in Linden NJ | Roof Repair & Waterproofing | AG Restorations",
    template: "%s | AG Restorations",
  },

  description:
    "AG Restorations provides professional roofing, waterproofing, masonry, and exterior remodeling in Linden NJ. Residential & commercial roofing experts. Call 973-342-4134 for a free estimate.",

  keywords: [
    "roofing contractor linden nj",
    "roof repair linden nj",
    "roof replacement linden nj",
    "waterproofing contractor nj",
    "masonry contractor linden nj",
    "flat roofing nj",
    "metal roof repair nj",
    "residential roofing nj",
    "commercial roofing nj",
    "roofing company union county nj",
  ],

  authors: [{ name: "AG Restorations" }],
  creator: "AG Restorations",

  openGraph: {
    title:
      "Roofing Contractor in Linden NJ | Roof Repair & Waterproofing | AG Restorations",
    description:
      "Professional roofing, waterproofing, masonry and exterior remodeling services in Linden NJ.",
    url: "https://agrestorations.com",
    siteName: "AG Restorations",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Roofing Contractor in Linden NJ | Roof Repair & Waterproofing | AG Restorations",
    description: "Trusted roofing contractor serving Linden NJ.",
  },

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
      <head />

      <body className={`${inter.variable} ${bevietnam.variable}`}>
        {/* Google Translate Button */}
        <div className="fixed top-4 right-4 z-50 bg-white p-2 rounded shadow">
          <div id="google_translate_element"></div>
        </div>

        {children}

        {/* Google Translate Script */}
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />

        {/* Google Translate Init */}
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                {
                  pageLanguage: 'en',
                  autoDisplay: true,
                  includedLanguages: 'en,es'
                },
                'google_translate_element'
              );
            }
          `}
        </Script>

        {/* SEO Structured Data */}
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
                image: "https://agrestorations.com/Navbar/Logo-AG.png",
                description:
                  "Professional roofing, waterproofing, masonry and exterior remodeling services in Linden NJ.",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Linden",
                  addressRegion: "NJ",
                  addressCountry: "US",
                },
                areaServed: {
                  "@type": "AdministrativeArea",
                  name: "Union County NJ",
                },
                priceRange: "$$",
                sameAs: [
                  "https://www.facebook.com/share/18KcQSnH8d/",
                  "https://www.instagram.com/ag.restorationslinden",
                  "https://www.tiktok.com/@ag.roofing.siding",
                ],
              },
            ]),
          }}
        />
      </body>
    </html>
  );
}
  
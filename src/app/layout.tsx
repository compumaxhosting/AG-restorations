import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Be_Vietnam_Pro } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
  display: "swap",
});

const bevietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-bevietnam",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agrestorations.com"),
  title: {
    default:
      "Roofing, Siding & Gutter Contractor in Linden NJ | AG Restorations",
    template: "%s | AG Restorations",
  },
  description:
    "AG Restorations is a trusted roofing contractor in Linden, New Jersey specializing in roof repair, roof replacement, siding installation, and gutter services.",
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
  verification: {
    google: "q2XHSPZ7u7GImYWMR2Bi8HtkkEr9i4KpLmutYhKZM90",
  },
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
      "Professional roofing, siding and gutter services in Linden NJ.",
    url: "https://agrestorations.com",
    siteName: "AG Restorations",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AG Restorations Roofing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roofing Contractor Linden NJ | AG Restorations",
    description: "Roof repair, replacement, siding & gutters in Linden NJ.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${bevietnam.variable}`}>
      <body className={`${inter.variable} ${bevietnam.variable}`}>
        {/* GTM noscript (keep for SEO/tracking fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TCSLWCWZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}

        {/* 🚀 Ultra-delayed GTM (better than lazyOnload) */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            window.addEventListener('load', function() {
              setTimeout(function(){
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-TCSLWCWZ');
              }, 3000); // delay 3s
            });
          `}
        </Script>

        {/* ❌ REMOVE separate gtag.js (GTM already handles it) */}

        {/* ✅ Schema (lightweight, keep it) */}
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
              },
            ]),
          }}
        />
      </body>
    </html>
  );
}

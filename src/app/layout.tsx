import "./globals.css";
import { Inter, Be_Vietnam_Pro } from "next/font/google";
import type { Metadata } from "next";

// ✅ Fonts
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

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "Roofing Contractor Linden NJ | Roof Repair & Replacement Experts",

  description:
    "Trusted roofing contractor in Linden NJ offering roof repair, replacement, siding, and gutter installation. Serving Union County NJ with reliable residential & commercial roofing services. Get a free estimate today.",

  keywords: [
    "roofing contractor Linden NJ",
    "roof repair Linden NJ",
    "roof replacement Linden NJ",
    "roofing company Union County NJ",
    "emergency roof repair NJ",
    "flat roof repair Linden NJ",
    "siding installation Linden NJ",
    "gutter installation Linden NJ",
    "seamless gutters NJ",
  ],

  authors: [{ name: "AG Restorations" }],

  metadataBase: new URL("https://www.agrestorations.com"),

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    title: "Roofing Contractor Linden NJ | Roof Repair & Replacement Experts",
    description:
      "Professional roofing, siding, and gutter services in Linden NJ. Reliable, affordable, and trusted across Union County.",
    url: "https://www.agrestorations.com/",
    siteName: "AG Restorations",
    images: [
      {
        url: "https://www.agrestorations.com/about-roofing.webp",
        width: 1200,
        height: 630,
        alt: "AG Restorations Roofing Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Roofing Contractor Linden NJ | Roof Repair Experts",
    description:
      "Need roof repair or replacement in Linden NJ? Contact trusted local roofing experts today.",
    images: ["https://www.agrestorations.com/about-roofing.webp"],
    site: "@yourhandle",
  },

  referrer: "strict-origin-when-cross-origin",
};

// ✅ Structured Data (Schema)
const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "AG Restorations",
  url: "https://www.agrestorations.com/",
  telephone: "+1 973 342 4134",
  email: "info@agrestorations.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "837 Kennedy Blvd",
    addressLocality: "Bayonne",
    addressRegion: "NJ",
    postalCode: "07002",
    addressCountry: "US",
  },
  areaServed: [
    "Linden, NJ",
    "Elizabeth, NJ",
    "Plainfield, NJ",
    "Rahway, NJ",
    "Westfield, NJ",
    "Fanwood, NJ",
    "Garwood, NJ",
    "Kenilworth, NJ",
    "Mountainside, NJ",
    "New Providence, NJ",
    "Roselle, NJ",
    "Roselle Park, NJ",
    "Union County, New Jersey",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bevietnam.variable}`}>
      <body>
        {children}

        {/* ✅ JSON-LD Schema (non-blocking, best placement) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdSchema),
          }}
        />
      </body>
    </html>
  );
}

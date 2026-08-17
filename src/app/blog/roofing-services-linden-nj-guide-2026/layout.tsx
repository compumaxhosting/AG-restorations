import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roofing Services Linden NJ: Roof Repair & Replacement Guide 2026",

  description:
    "Explore roofing services in Linden NJ, including roof repair, roof replacement, inspections, maintenance, and hiring the best roofing contractor.",

  keywords: [
    "roofing services linden nj",
    "roofing contractor linden nj",
    "roof repair linden nj",
    "roof replacement linden nj",
    "residential roofing linden nj",
    "commercial roofing linden nj",
    "emergency roof repair linden nj",
    "roof installation linden nj",
    "local roofers linden nj",
    "roofing company linden nj",
    "affordable roofing linden nj",
    "licensed roofing contractor linden nj",
    "roof leak repair linden nj",
    "storm damage roof repair linden nj",
    "asphalt shingle roofing linden nj",
    "flat roofing linden nj",
    "roof inspection linden nj",
    "roof maintenance linden nj",
    "roofing experts linden nj",
    "best roofing company linden nj",
    "roof restoration linden nj",
    "union county roofing contractor",
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
    canonical: "https://www.agrestorations.com/blog/roofing-services-linden-nj-guide-2026",
  },

  openGraph: {
    type: "website",
    title: "Roofing Services Linden NJ: Complete Roofing Guide 2026",
    description:
      "Learn about roof repair, roof replacement, inspections, maintenance, and choosing a trusted roofing contractor in Linden NJ.",
    url: "https://www.agrestorations.com/blog/roofing-services-linden-nj-guide-2026",
    siteName: "AG Restorations",
    images: [
      {
        url: "https://www.agrestorations.com/blog/roofing-services-linden-nj-2026.webp",
        width: 1200,
        height: 630,
        alt: "Roofing Services Linden NJ - Roof Repair and Roof Replacement Guide",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Roofing Services Linden NJ: Roof Repair & Replacement Guide 2026",
    description:
      "Discover expert roofing services in Linden NJ, including repairs, replacements, inspections, and emergency roofing solutions.",
    images: ["https://www.agrestorations.com/blog/roofing-services-linden-nj-2026.webp"],
    site: "@AGrestorationss",
  },

  referrer: "strict-origin-when-cross-origin",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
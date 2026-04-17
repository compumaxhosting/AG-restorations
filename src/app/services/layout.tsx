import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Linden, NJ Roofing, Siding & Gutters | AG Restorations",

  description:
    "Explore professional roofing, siding, and gutter services by AG Restorations in New Jersey. We offer roof repair, replacement, installation, siding services, and seamless gutter solutions for residential and commercial properties.",

  keywords: [
    "roofing services NJ",
    "roof repair services New Jersey",
    "roof replacement NJ",
    "siding services NJ",
    "gutter installation NJ",
    "exterior home improvement NJ",
    "roofing contractor services",
    "residential roofing services NJ",
    "commercial roofing NJ",
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
    canonical: "https://www.agrestorations.com/services",
  },

  themeColor: "#ffffff",

  openGraph: {
    type: "website",
    title: "Linden, NJ Roofing, Siding & Gutters | AG Restorations",
    description:
      "Professional roofing, siding, and gutter services in New Jersey. Trusted exterior restoration experts for residential and commercial properties.",
    url: "https://www.agrestorations.com/services",
    siteName: "AG Restorations",
    images: [
      {
        url: "https://www.agrestorations.com/Services-Slider/services5.webp",
        width: 1200,
        height: 630,
        alt: "Roofing, Siding & Gutter Services NJ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Services | AG Restorations NJ",
    description:
      "Roofing, siding, and gutter services in New Jersey. Reliable exterior home improvement experts.",
    images: ["https://www.agrestorations.com/Services-Slider/services5.webp"],
    site: "@agrestorations",
  },

  referrer: "strict-origin-when-cross-origin",

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
    </>
  );
}

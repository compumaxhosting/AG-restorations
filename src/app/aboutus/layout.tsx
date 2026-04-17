import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NJ Roofing, Siding & Gutter Experts | AG Restorations",

  description:
    "Learn about AG Restorations, a trusted roofing, siding, and gutter company serving New Jersey. We specialize in roof repair, replacement, and exterior restoration with quality workmanship and reliable service.",

  keywords: [
    "AG Restorations",
    "roofing company New Jersey",
    "about roofing contractor NJ",
    "roof repair company",
    "siding contractor NJ",
    "gutter installation company NJ",
  ],

  authors: [{ name: "AG Restorations" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.agrestorations.com/aboutus",
  },

  openGraph: {
    type: "website",
    title: "NJ Roofing, Siding & Gutter Experts | AG Restorations",
    description:
      "Discover AG Restorations, a trusted NJ roofing and exterior services company specializing in roof repair, replacement, siding, and gutters.",
    url: "https://www.agrestorations.com/aboutus",
    siteName: "AG Restorations",
    images: [
      {
        url: "https://www.agrestorations.com/about-roofing.webp",
        width: 1200,
        height: 630,
        alt: "About AG Restorations",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About Us | AG Restorations",
    description:
      "Trusted roofing, siding, and gutter experts in New Jersey. Learn more about AG Restorations.",
    images: ["https://www.agrestorations.com/about-roofing.webp"],
    site: "@agrestorations",
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

      
    </>
  );
}

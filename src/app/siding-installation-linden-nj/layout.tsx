import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Siding Installation in Linden NJ | Vinyl & Exterior Siding Services | AG Restorations",

  description:
    "Professional siding installation in Linden NJ by AG Restorations. We offer vinyl siding installation, siding repair, and exterior home improvement services across Union County. Improve your home's protection and curb appeal with expert workmanship.",

  keywords: [
    "siding installation Linden NJ",
    "siding contractor Linden NJ",
    "vinyl siding Linden NJ",
    "siding repair New Jersey",
    "exterior siding replacement NJ",
    "siding services Linden NJ",
    "siding company Union County NJ",
    "house siding installation NJ",
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
    canonical: "https://www.agrestorations.com/siding-installation-linden-nj",
  },

  themeColor: "#ffffff",

  openGraph: {
    type: "website",
    title: "Siding Installation in Linden NJ | AG Restorations",
    description:
      "Expert siding installation and repair in Linden NJ. High-quality vinyl siding and exterior home improvement services for lasting protection.",
    url: "https://www.agrestorations.com/siding-installation-linden-nj",
    siteName: "AG Restorations",
    images: [
      {
        url: "https://www.agrestorations.com/gutter-installation.webp",
        width: 1200,
        height: 630,
        alt: "Siding Installation Linden NJ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Siding Installation Linden NJ | AG Restorations",
    description:
      "Professional siding installation and repair in Linden NJ. Improve your home’s exterior with trusted local experts.",
    images: ["https://www.agrestorations.com/gutter-installation.webp"],
    site: "@agrestorations",
  },
};

export default function SidingLayout({
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

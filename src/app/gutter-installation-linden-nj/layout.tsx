import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Gutter Installation in Linden NJ | Seamless Gutters & Repair | AG Restorations",

  description:
    "Professional gutter installation in Linden NJ by AG Restorations. We offer seamless gutter installation, gutter repair, and replacement services to protect your home from water damage. Serving residential and commercial properties across Union County NJ. Get a free estimate today.",

  keywords: [
    "gutter installation Linden NJ",
    "seamless gutters Linden NJ",
    "gutter repair Linden NJ",
    "gutter replacement NJ",
    "gutter contractor Linden NJ",
    "rain gutter installation NJ",
    "gutter services Union County NJ",
    "residential gutter installation NJ",
    "commercial gutters NJ",
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
    canonical: "https://www.agrestorations.com/gutter-installation-linden-nj",
  },

  themeColor: "#ffffff",

  openGraph: {
    type: "website",
    title: "Gutter Installation in Linden NJ | AG Restorations",
    description:
      "Reliable gutter installation and repair in Linden NJ. Seamless gutters designed to protect your home from leaks, water damage, and foundation issues.",
    url: "https://www.agrestorations.com/gutter-installation-linden-nj",
    siteName: "AG Restorations",
    images: [
      {
        url: "https://www.agrestorations.com/gutter-installation.webp",
        width: 1200,
        height: 630,
        alt: "Gutter Installation Linden NJ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gutter Installation Linden NJ | AG Restorations",
    description:
      "Expert seamless gutter installation and repair in Linden NJ. Protect your home with trusted local contractors.",
    images: ["https://www.agrestorations.com/Gutter Installation.webp"],
    site: "@agrestorations",
  },
};

export default function GutterLayout({
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

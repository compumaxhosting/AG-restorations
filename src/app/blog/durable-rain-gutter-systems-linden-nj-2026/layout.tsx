import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Linden NJ Gutter Installation | 2026 Durable Rain Gutter Guide",
  description:
    "Learn about Linden NJ gutter installation, seamless gutter systems, water management, and expert tips to protect your home in 2026.",
  keywords: [
    "Linden NJ gutter installation",
    "Professional gutter installers Linden",
    "Seamless gutter systems",
    "Residential rain gutters",
    "Commercial gutter services",
    "Foundation water protection",
    "Rainwater drainage solutions",
    "Aluminum gutter replacement",
    "Custom seamless gutters",
    "Downspout installation services",
    "Leaf guard systems",
    "Gutter repair experts",
    "Stormwater management",
    "Roof drainage solutions",
    "Home exterior protection",
    "Water damage prevention",
    "Fascia and soffit services",
    "Gutter maintenance contractors",
    "New gutter installation",
    "Durable rain gutter systems",
    "Overflow prevention solutions",
    "Property drainage improvement",
    "Moisture control systems",
    "Basement flooding prevention",
    "Exterior water management",
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
    canonical: "https://www.agrestorations.com/durable-rain-gutter-systems-linden-nj-2026",
  },
  openGraph: {
    type: "website",
    title: "Linden NJ Gutter Installation | 2026 Durable Rain Gutter Guide",
    description:
      "Discover expert Linden NJ gutter installation, seamless gutters, and exterior water management solutions to protect your property in 2026.",
    url: "https://www.agrestorations.com/durable-rain-gutter-systems-linden-nj-2026",
    siteName: "AG Restorations",
    images: [
      {
        url: "https://www.agrestorations.com/blog/gutter-installation-linden-nj.webp",
        width: 1200,
        height: 630,
        alt: "Professional seamless gutter installation in Linden NJ by AG Restorations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Linden NJ Gutter Installation | 2026 Durable Rain Gutter Guide",
    description:
      "Explore expert gutter installation, seamless gutters, and water management solutions for homes and businesses in Linden, NJ.",
    images: ["https://www.agrestorations.com/blog/gutter-installation-linden-nj.webp"],
    site: "@AGrestorationss",
  },
  referrer: "strict-origin-when-cross-origin",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

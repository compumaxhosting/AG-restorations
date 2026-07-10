import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Gutter Installation in Union County, NJ: Homeowner's Complete Guide | AG Restoration",

  description:
    "Learn everything about gutter installation in Union County, NJ, including signs you need new gutters, material options, installation process, costs, and maintenance tips from AG Restoration.",

  keywords: [
    "gutter installation Union County NJ",
    "seamless gutters",
    "gutter replacement",
    "rain gutters",
    "gutter contractors Union County",
    "gutter installation guide",
    "home gutters",
    "AG Restoration",
  ],

  authors: [
    {
      name: "AG Restoration",
    },
  ],

  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },

  alternates: {
    canonical:
      "https://www.agrestorations.com/blog/gutter-installation-union-county-guide",
  },

  openGraph: {
    type: "article",
    title:
      "Gutter Installation in Union County, NJ: Homeowner's Complete Guide",
    description:
      "Discover how to choose the right gutters, understand installation costs, and protect your home with this complete gutter installation guide for Union County homeowners.",
    url: "https://www.agrestorations.com/blog/gutter-installation-union-county-guide",
    siteName: "AG Restoration",
    images: [
      {
        url: "https://www.agrestorations.com/blog/blog-3.webp",
        width: 1200,
        height: 630,
        alt: "Professional gutter installation on a home in Union County, NJ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Gutter Installation in Union County, NJ: Homeowner's Complete Guide",
    description:
      "Everything Union County homeowners need to know about gutter installation, materials, costs, and maintenance.",
    images: ["https://www.agrestorations.com/blog/blog-3.webp"],
    site: "@AGrestorationss",
  },

  referrer: "strict-origin-when-cross-origin",

  themeColor: "#ffffff",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

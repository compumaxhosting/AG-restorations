import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Roofing Blog | Tips, Guides & Home Improvement Insights | AG Restorations NJ",

  description:
    "Read expert roofing, siding, and gutter blogs by AG Restorations. Get tips on roof repair, replacement, maintenance, and exterior home improvement in New Jersey. Stay informed with professional advice and industry insights.",

  keywords: [
    "roofing blog NJ",
    "roof repair tips New Jersey",
    "siding installation guide",
    "gutter maintenance tips NJ",
    "roofing advice Linden NJ",
    "home improvement blog NJ",
    "roof replacement guide",
    "exterior home care tips",
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
    canonical: "https://www.agrestorations.com/blog",
  },

  openGraph: {
    type: "website",
    title: "Roofing Blog | AG Restorations NJ",
    description:
      "Expert roofing, siding, and gutter tips and guides for New Jersey homeowners. Learn how to maintain and protect your home exterior.",
    url: "https://www.agrestorations.com/blog",
    siteName: "AG Restorations",
    images: [
      {
        url: "https://www.agrestorations.com/blog/blog-1.webp",
        width: 1200,
        height: 630,
        alt: "AG Restorations Blog",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Roofing Blog | AG Restorations NJ",
    description:
      "Roofing, siding, and gutter tips for homeowners in New Jersey. Expert advice and maintenance guides.",
    images: ["https://www.agrestorations.com/blog/blog-1.webp"],
    site: "@agrestorations",
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

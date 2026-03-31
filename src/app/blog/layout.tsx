import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Linden Home Improvement Blog | Roofing & Siding Tips | AG Restorations",

  description:
    "Expert advice on roofing, siding, and gutter maintenance for Linden, NJ homeowners. Read our latest tips on protecting your home from New Jersey weather.",

  keywords: [
    "roofing tips Linden NJ",
    "home maintenance blog Union County",
    "siding advice NJ",
    "gutter cleaning tips",
    "NJ roofing blog",
    "exterior home improvement news",
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
    title: "Linden Home Improvement & Exterior Maintenance Blog",
    description:
      "From roof leak prevention to choosing the right siding—get expert insights from the pros at AG Restorations.",
    url: "https://www.agrestorations.com/blog",
    siteName: "AG Restorations",
    images: [
      {
        url: "https://www.agrestorations.com/images/blog-banner.jpg",
        width: 1200,
        height: 630,
        alt: "AG Restorations Blog",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Expert Exterior Tips for NJ Homeowners",
    description:
      "Stay informed with the latest roofing and siding guides from your local Linden experts.",
    images: ["https://www.agrestorations.com/images/blog-banner.jpg"],
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

      {/* Optional: Blog Schema (helps SEO more than meta tags 👇) */}
      <Script
        id="blog-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "AG Restorations Blog",
            url: "https://www.agrestorations.com/blog",
            description:
              "Expert roofing, siding, and gutter tips for homeowners in Linden, NJ and Union County.",
            publisher: {
              "@type": "Organization",
              name: "AG Restorations",
              logo: {
                "@type": "ImageObject",
                url: "https://www.agrestorations.com/logo.jpg",
              },
            },
          }),
        }}
      />
    </>
  );
}

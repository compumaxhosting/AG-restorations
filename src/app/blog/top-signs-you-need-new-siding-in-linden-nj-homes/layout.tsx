import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Signs You Need New Siding in Linden, NJ Homes | AG Restoration",

  description:
    "Learn the top signs you need new siding in your Linden, NJ home. Discover how damaged siding affects energy efficiency, curb appeal, and protection from New Jersey weather.",

  keywords: [
    "new siding Linden NJ",
    "siding replacement Linden NJ",
    "signs you need new siding",
    "vinyl siding replacement",
    "siding contractors Linden NJ",
    "home siding repair",
    "AG Restoration",
  ],

  authors: [{ name: "AG Restoration" }],

  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },

  alternates: {
    canonical:
      "https://www.agrestorations.com/blog/top-signs-you-need-new-siding-in-linden-nj-homes",
  },

  openGraph: {
    type: "article",
    title: "Top Signs You Need New Siding in Linden, NJ Homes",
    description:
      "Cracked, warped, or faded siding? Learn the warning signs that it's time to replace your home's siding and protect your Linden, NJ property from weather damage.",
    url: "https://www.agrestorations.com/blog/top-signs-you-need-new-siding-in-linden-nj-homes",
    siteName: "AG Restoration",
    images: [
      {
        url: "https://www.agrestorations.com/blog/blog-2.webp",
        width: 1200,
        height: 630,
        alt: "Home with newly installed siding in Linden, New Jersey",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Top Signs You Need New Siding in Linden, NJ Homes",
    description:
      "Discover the most common signs your Linden, NJ home needs new siding, from visible damage to rising energy bills and moisture problems.",
    images: ["https://www.agrestorations.com/blog/blog-2.webp"],
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

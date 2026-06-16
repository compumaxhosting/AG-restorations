import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "How to Choose the Best Roofing Contractor in Linden, NJ | Expert Hiring Guide",

  description:
    "Learn how to choose the best roofing contractor in Linden, NJ. Discover tips on licensing, reviews, pricing, warranties, and hiring trusted professionals for roof repair or replacement.",

  keywords: [
    "best roofing contractor Linden NJ",
    "how to choose roofing contractor NJ",
    "roof repair contractor Linden NJ",
    "roof replacement Linden New Jersey",
    "licensed roofing contractor NJ",
    "roofing company Linden NJ reviews",
    "local roofing contractor Linden NJ",
    "residential roofing services NJ",
    "commercial roofing contractor NJ",
    "roofing estimates Linden NJ",
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
    canonical:
      "https://www.agrestorations.com/blog/best-roofing-contractor-linden-nj",
  },

  openGraph: {
    type: "website",
    title:
      "How to Choose the Best Roofing Contractor in Linden, NJ | Expert Hiring Guide",
    description:
      "Learn how to choose the best roofing contractor in Linden, NJ. Discover tips on licensing, reviews, pricing, warranties, and hiring trusted professionals for roof repair or replacement.",
    url: "https://www.agrestorations.com/blog/best-roofing-contractor-linden-nj",
    siteName: "AG Restorations",
    images: [
      {
        url: "https://www.agrestorations.com/blog/best-roofing-contractor-linden-nj/blog-1.webp",
        width: 1200,
        height: 630,
        alt: "AG Restorations Blog",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "How to Choose the Best Roofing Contractor in Linden, NJ | Expert Hiring Guide",
    description:
      "Learn how to choose the best roofing contractor in Linden, NJ. Discover tips on licensing, reviews, pricing, warranties, and hiring trusted professionals for roof repair or replacement.",
    images: [
      "https://www.agrestorations.com/blog/best-roofing-contractor-linden-nj/blog-1.webp",
    ],
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

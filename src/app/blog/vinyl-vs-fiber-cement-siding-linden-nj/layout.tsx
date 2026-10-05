import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Vinyl Siding Linden NJ: Vinyl vs. Fiber Cement",
  description:
    "Compare vinyl siding in Linden, NJ with fiber cement siding. Explore costs, durability, maintenance, and the best siding for New Jersey homes.",
  keywords: [
    "vinyl siding Linden NJ",
    "fiber cement siding Linden NJ",
    "siding installation Linden NJ",
    "siding replacement Linden NJ",
    "vinyl vs fiber cement siding",
    "best siding for homes in Linden NJ",
    "vinyl siding installation Linden NJ",
    "fiber cement siding installation Linden NJ",
    "best siding material for New Jersey homes",
  ],
  authors: [
    {
      name: "A.G. Restorations",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://www.agrestorations.com/blog/vinyl-vs-fiber-cement-siding-linden-nj",
  },
  openGraph: {
    type: "website",
    title: "Vinyl Siding Linden NJ: Vinyl vs. Fiber Cement",
    description:
      "Compare vinyl siding in Linden, NJ with fiber cement siding, including cost, durability, maintenance, energy efficiency, and installation considerations.",
    url: "https://www.agrestorations.com/blog/vinyl-vs-fiber-cement-siding-linden-nj",
    siteName: "A.G. Restorations",
    images: [
      {
        url: "https://www.agrestorations.com/images/vinyl-vs-fiber-cement-siding-linden-nj.jpg",
        alt: "Vinyl vs. fiber cement siding comparison for homes in Linden, NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinyl Siding Linden NJ: Vinyl vs. Fiber Cement",
    description:
      "Compare vinyl and fiber cement siding in Linden, NJ, including cost, durability, maintenance, and installation considerations.",
    images: [
      "https://www.agrestorations.com/images/vinyl-vs-fiber-cement-siding-linden-nj.jpg",
    ],
  },
  referrer: "strict-origin-when-cross-origin",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": "https://www.agrestorations.com/blog/vinyl-vs-fiber-cement-siding-linden-nj#article",
        "url": "https://www.agrestorations.com/blog/vinyl-vs-fiber-cement-siding-linden-nj",
        "headline": "Vinyl vs. Fiber Cement Siding in Linden, NJ: Which Is Better for Your Home?",
        "description": "Compare vinyl and fiber cement siding in Linden, NJ, including durability, maintenance, energy efficiency, costs, and installation considerations.",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.agrestorations.com/blog/vinyl-vs-fiber-cement-siding-linden-nj"
        },
        "author": {
          "@type": "Organization",
          "@id": "https://www.agrestorations.com/#organization",
          "name": "A.G. Restorations",
          "url": "https://www.agrestorations.com/"
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://www.agrestorations.com/#organization",
          "name": "A.G. Restorations",
          "url": "https://www.agrestorations.com/"
        },
        "datePublished": "2026-10-05",
        "dateModified": "2026-10-05",
        "inLanguage": "en-US",
        "keywords": [
          "vinyl siding Linden NJ",
          "fiber cement siding Linden NJ",
          "siding installation Linden NJ",
          "siding replacement Linden NJ",
          "vinyl vs fiber cement siding",
          "best siding for homes in Linden NJ",
          "vinyl siding installation Linden NJ",
          "fiber cement siding installation Linden NJ",
          "best siding material for New Jersey homes"
        ],
        "about": [
          {
            "@type": "Thing",
            "name": "Vinyl siding"
          },
          {
            "@type": "Thing",
            "name": "Fiber cement siding"
          },
          {
            "@type": "Thing",
            "name": "Siding installation"
          },
          {
            "@type": "Place",
            "name": "Linden, New Jersey",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Linden",
              "addressRegion": "NJ",
              "addressCountry": "US"
            }
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.agrestorations.com/blog/vinyl-vs-fiber-cement-siding-linden-nj",
        "url": "https://www.agrestorations.com/blog/vinyl-vs-fiber-cement-siding-linden-nj",
        "name": "Vinyl vs. Fiber Cement Siding in Linden, NJ: Which Is Better for Your Home?",
        "description": "Compare vinyl and fiber cement siding in Linden, NJ, including durability, maintenance, energy efficiency, costs, and installation considerations.",
        "isPartOf": {
          "@id": "https://www.agrestorations.com/#website"
        },
        "mainEntity": {
          "@id": "https://www.agrestorations.com/blog/vinyl-vs-fiber-cement-siding-linden-nj#article"
        },
        "publisher": {
          "@id": "https://www.agrestorations.com/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://www.agrestorations.com/#organization",
        "name": "A.G. Restorations",
        "url": "https://www.agrestorations.com/"
      },
      {
        "@type": "WebSite",
        "@id": "https://www.agrestorations.com/#website",
        "url": "https://www.agrestorations.com/",
        "name": "A.G. Restorations",
        "publisher": {
          "@id": "https://www.agrestorations.com/#organization"
        },
        "inLanguage": "en-US"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      {children}
    </>
  );
}

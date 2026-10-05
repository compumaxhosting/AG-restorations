import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const url = "https://www.agrestorations.com/blog/vinyl-vs-fiber-cement-siding-linden-nj";
const title = "Vinyl Siding Linden NJ: Vinyl vs. Fiber Cement | AG Restorations";
const description =
  "Compare vinyl siding in Linden, NJ with fiber cement siding. Explore costs, durability, maintenance, and the best siding for New Jersey homes.";
const imageUrl = "https://www.agrestorations.com/blog/vinyl-vs-fiber-cement-siding-linden-nj.webp";

export const metadata: Metadata = {
  title,
  description,
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
    "AG Restorations",
  ],
  authors: [{ name: "AG Restorations" }],
  creator: "AG Restorations",
  publisher: "AG Restorations",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: url,
  },
  openGraph: {
    type: "article",
    url,
    siteName: "AG Restorations",
    title,
    description,
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: "Vinyl vs. fiber cement siding comparison for homes in Linden, NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [imageUrl],
  },
  referrer: "strict-origin-when-cross-origin",
  other: {
    "theme-color": "#ffffff",
  },
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
        "@id": `${url}#article`,
        "url": url,
        "headline": "Vinyl vs. Fiber Cement Siding in Linden, NJ: Which Is Better for Your Home?",
        "description": "Compare vinyl and fiber cement siding in Linden, NJ, including durability, maintenance, energy efficiency, costs, and installation considerations.",
        "image": imageUrl,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": url
        },
        "author": {
          "@type": "Organization",
          "@id": "https://www.agrestorations.com/#organization",
          "name": "AG Restorations",
          "url": "https://www.agrestorations.com/"
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://www.agrestorations.com/#organization",
          "name": "AG Restorations",
          "url": "https://www.agrestorations.com/",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.agrestorations.com/logo.avif"
          }
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
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is vinyl or fiber cement siding better?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Neither is universally better. Vinyl is often the better choice for homeowners seeking affordability, lightweight installation, and minimal maintenance. Fiber cement may be better for homeowners who prioritize durability, premium appearance, and long-term exterior performance. The condition of the existing home, installation requirements, budget, and desired appearance should all be considered before making a final decision."
            }
          },
          {
            "@type": "Question",
            "name": "Is fiber cement siding worth the cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fiber cement can be worth the additional investment when durability, appearance, and weather resistance are important priorities. It is designed to resist moisture, pests, and demanding weather conditions. However, value depends on the individual property and installation quality. Homeowners should compare complete project estimates and expected maintenance requirements rather than looking only at the initial material price."
            }
          },
          {
            "@type": "Question",
            "name": "Is vinyl siding good for New Jersey weather?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Quality vinyl siding can be a practical choice for New Jersey homes when properly installed. Insulated vinyl can also contribute to improved wall thermal performance. Homeowners should select products appropriate for local conditions and ensure that flashing, moisture management, and installation details are handled correctly."
            }
          },
          {
            "@type": "Question",
            "name": "How long does vinyl siding last?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The lifespan of vinyl siding varies based on product quality, installation, exposure, weather, and maintenance. Rather than relying on one guaranteed number of years, homeowners should monitor for cracking, fading, loose panels, warping, and other signs of deterioration. Proper installation and routine inspection can help maximize the useful life of the siding system."
            }
          },
          {
            "@type": "Question",
            "name": "How long does fiber cement siding last?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fiber cement is recognized as a long-lasting exterior material, but actual service life depends on the manufacturer, product, installation, climate exposure, and maintenance. Some premium products carry long-term warranties, such as a 30-year limited substrate warranty on certain products."
            }
          },
          {
            "@type": "Question",
            "name": "Which siding is more energy efficient?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The siding material alone does not determine a home's overall energy efficiency. Wall insulation, air sealing, windows, and installation details all matter. Insulated vinyl siding can provide integrated continuous insulation and reduce thermal bridging. A contractor should evaluate the entire exterior wall assembly rather than comparing siding materials in isolation."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.agrestorations.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://www.agrestorations.com/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Vinyl vs. Fiber Cement Siding in Linden, NJ",
            "item": url
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": url,
        "url": url,
        "name": "Vinyl vs. Fiber Cement Siding in Linden, NJ: Which Is Better for Your Home?",
        "description": "Compare vinyl and fiber cement siding in Linden, NJ, including durability, maintenance, energy efficiency, costs, and installation considerations.",
        "isPartOf": {
          "@id": "https://www.agrestorations.com/#website"
        },
        "mainEntity": {
          "@id": `${url}#article`
        },
        "publisher": {
          "@id": "https://www.agrestorations.com/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://www.agrestorations.com/#organization",
        "name": "AG Restorations",
        "url": "https://www.agrestorations.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.agrestorations.com/logo.avif"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.agrestorations.com/#website",
        "url": "https://www.agrestorations.com/",
        "name": "AG Restorations",
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

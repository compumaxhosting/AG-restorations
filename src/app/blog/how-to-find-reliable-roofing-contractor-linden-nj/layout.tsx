import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "How to Find a Reliable Roofing Contractor in Linden, NJ",

  description:
    "Learn how to find a reliable roofing contractor in Linden, NJ. Compare roofers, verify credentials, spot red flags, and get a professional estimate.",

  keywords: [
    "how to find a reliable roofing contractor in Linden NJ",
    "roofing contractor Linden NJ",
    "reliable roofer Linden NJ",
    "local roofing contractor Linden NJ",
    "roof repair Linden NJ",
    "roof replacement Linden NJ",
  ],

  authors: [
    {
      name: "AG Restorations",
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
      "https://www.agrestorations.com/blog/how-to-find-reliable-roofing-contractor-linden-nj",
  },

  openGraph: {
    type: "website",
    title: "How to Find a Reliable Roofing Contractor in Linden, NJ",
    description:
      "Learn how to find a reliable roofing contractor in Linden, NJ. Compare roofers, verify credentials, spot red flags, and get a professional estimate.",
    url: "https://www.agrestorations.com/blog/how-to-find-reliable-roofing-contractor-linden-nj",
    siteName: "AG Restorations",
    images: [
      {
        url: "https://www.agrestorations.com/blog/how-to-find-reliable-roofing-contractor-linden-nj.webp",
        width: 1200,
        height: 630,
        alt: "Reliable roofing contractor in Linden, NJ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "How to Find a Reliable Roofing Contractor in Linden, NJ",
    description:
      "Learn how to find a reliable roofing contractor in Linden, NJ. Compare roofers, verify credentials, spot red flags, and get a professional estimate.",
    images: ["https://www.agrestorations.com/blog/how-to-find-reliable-roofing-contractor-linden-nj.webp"],
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
        "@id": "https://www.agrestorations.com/blog/how-to-find-reliable-roofing-contractor-linden-nj#blogposting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.agrestorations.com/blog/how-to-find-reliable-roofing-contractor-linden-nj"
        },
        "headline": "How to Find a Reliable Roofing Contractor in Linden, NJ",
        "description": "Learn how to find a reliable roofing contractor in Linden, NJ. Compare roofers, verify credentials, spot red flags, and get a professional estimate.",
        "url": "https://www.agrestorations.com/blog/how-to-find-reliable-roofing-contractor-linden-nj",
        "author": {
          "@type": "Organization",
          "name": "AG Restorations",
          "url": "https://www.agrestorations.com/"
        },
        "publisher": {
          "@type": "Organization",
          "name": "AG Restorations",
          "url": "https://www.agrestorations.com/",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.agrestorations.com/favicon.ico"
          }
        },
        "about": {
          "@type": "Service",
          "name": "Roofing Services in Linden, NJ",
          "serviceType": "Roofing Contractor",
          "areaServed": {
            "@type": "City",
            "name": "Linden",
            "containedInPlace": {
              "@type": "State",
              "name": "New Jersey"
            }
          },
          "provider": {
            "@type": "Organization",
            "name": "AG Restorations",
            "url": "https://www.agrestorations.com/"
          }
        },
        "keywords": [
          "how to find a reliable roofing contractor in Linden NJ",
          "roofing contractor Linden NJ",
          "reliable roofer Linden NJ",
          "local roofing contractor Linden NJ",
          "roof repair Linden NJ",
          "roof replacement Linden NJ"
        ],
        "inLanguage": "en-US"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.agrestorations.com/blog/how-to-find-reliable-roofing-contractor-linden-nj#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How many roofing estimates should I get?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Three estimates are a practical starting point for a major roofing project. Compare the proposed materials, scope of work, warranties, timeline, cleanup, payment terms, and overall value rather than choosing based on price alone."
            }
          },
          {
            "@type": "Question",
            "name": "What questions should I ask before hiring a roofer in Linden, NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ask about New Jersey registration, insurance, roofing experience, references, materials, warranties, permits, project timing, cleanup, payment schedules, and who will perform the work. Also ask how unexpected underlying damage will be handled."
            }
          },
          {
            "@type": "Question",
            "name": "How do I know if my roof needs repair or replacement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A professional inspection is the best way to determine whether repair or replacement makes sense. Common warning signs include recurring leaks, missing or damaged shingles, significant deterioration, and widespread roofing damage."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to replace a roof in New Jersey?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Many residential roof replacements can be completed in a matter of days, but the schedule varies based on roof size, complexity, weather, material availability, inspection requirements, and unexpected underlying damage."
            }
          },
          {
            "@type": "Question",
            "name": "Is it better to hire a local roofing company in Linden, NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A reputable local roofing company can offer convenient communication, familiarity with area properties and weather conditions, and easier follow-up. However, homeowners should still verify registration, insurance, experience, reputation, estimates, warranties, and contract terms."
            }
          },
          {
            "@type": "Question",
            "name": "How do I get a roofing estimate in Linden, NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Contact a qualified local roofing contractor and request an on-site inspection. The contractor should assess the roof, identify problem areas, discuss repair or replacement options, and provide a written estimate explaining the recommended work and costs."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.agrestorations.com/blog/how-to-find-reliable-roofing-contractor-linden-nj#breadcrumb",
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
            "name": "How to Find a Reliable Roofing Contractor in Linden, NJ",
            "item": "https://www.agrestorations.com/blog/how-to-find-reliable-roofing-contractor-linden-nj"
          }
        ]
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
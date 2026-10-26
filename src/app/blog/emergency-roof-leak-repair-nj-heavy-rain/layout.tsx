import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const url = "https://www.agrestorations.com/blog/emergency-roof-leak-repair-nj-heavy-rain";
const title = "Emergency Roof Leak Repair NJ | A.G. Restorations";
const description =
  "Need emergency roof leak repair NJ homeowners can trust? Learn how to handle roof leaks during heavy rain, prevent water damage, and protect your home.";
const imageUrl = "https://www.agrestorations.com/blog/emergency-roof-leak-repair-nj.webp";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "emergency roof leak repair NJ",
    "roof leak repair New Jersey",
    "roof leaking during heavy rain",
    "emergency roof repair New Jersey",
    "roof leak repair Linden NJ",
    "storm damage roof repair NJ",
    "leaking roof repair New Jersey",
    "A.G. Restorations",
  ],
  authors: [{ name: "A.G. Restorations" }],
  creator: "A.G. Restorations",
  publisher: "A.G. Restorations",
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
    siteName: "A.G. Restorations",
    title: "Emergency Roof Leak Repair NJ: What to Do During Heavy Rain",
    description:
      "Discover what to do when your roof leaks during heavy rain, how to minimize water damage, and when to call a New Jersey roofing professional.",
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: "Emergency roof leak repair for a New Jersey home during heavy rain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency Roof Leak Repair NJ | A.G. Restorations",
    description:
      "Learn how to handle a leaking roof during heavy rain, prevent water damage, and find professional roof repair services in New Jersey.",
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
        "headline": "What to Do When Your Roof Starts Leaking During Heavy Rain",
        "description":
          "Learn what to do when your roof leaks during heavy rain, how to prevent water damage, and when to contact a professional for emergency roof leak repair in New Jersey.",
        "image": imageUrl,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": url,
        },
        "author": {
          "@type": "Organization",
          "@id": "https://www.agrestorations.com/#organization",
          "name": "A.G. Restorations",
          "url": "https://www.agrestorations.com/",
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://www.agrestorations.com/#organization",
          "name": "A.G. Restorations",
          "url": "https://www.agrestorations.com/",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.agrestorations.com/logo.avif",
          },
        },
        "datePublished": "2026-10-26",
        "dateModified": "2026-10-26",
        "inLanguage": "en-US",
        "articleSection": "Roofing and Roof Repair",
        "keywords": [
          "emergency roof leak repair NJ",
          "roof leak repair New Jersey",
          "roof leaking during heavy rain",
          "emergency roof repair New Jersey",
          "roof leak repair Linden NJ",
          "storm damage roof repair NJ",
          "leaking roof repair New Jersey",
        ],
        "about": [
          {
            "@type": "Thing",
            "name": "Roof leak repair",
          },
          {
            "@type": "Thing",
            "name": "Emergency roof repair",
          },
          {
            "@type": "Thing",
            "name": "Storm damage roof repair",
          },
          {
            "@type": "Place",
            "name": "New Jersey",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "NJ",
              "addressCountry": "US",
            },
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I stop rainwater coming through the roof?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Collect dripping water in a bucket, move belongings, and keep away from electrical hazards or sagging ceilings. Do not climb onto a wet roof. Contact an emergency roofer for advice and temporary protection. Permanent repairs should address the underlying cause, such as damaged shingles, flashing, or roofing underlayment.",
            },
          },
          {
            "@type": "Question",
            "name": "Can a roof leak cause electrical hazards?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes. Water entering light fixtures, outlets, wiring, or electrical panels can create shock and fire risks. Avoid touching wet electrical equipment or standing water near electrical sources. If you can safely reach the breaker from a dry location, switch off the affected circuit; otherwise, seek qualified assistance.",
            },
          },
          {
            "@type": "Question",
            "name": "Can a roof leak get worse during heavy rain?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes. Heavy rainfall and wind-driven water can overwhelm damaged shingles, compromised flashing, and other weak points. Continued moisture may spread into insulation, ceilings, and walls. Contain interior water, document visible damage, and arrange professional storm damage roof repair NJ homeowners need as soon as it is safe.",
            },
          },
          {
            "@type": "Question",
            "name": "Does homeowners insurance cover a leaking roof after a storm?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Homeowners insurance may cover sudden roof damage caused by a covered storm event, subject to your policy, deductible, exclusions, and maintenance history. Damage resulting from wear and tear or neglected maintenance may not be covered. Photograph the damage, save receipts, and contact your insurer before authorizing non-emergency work when practical.",
            },
          },
          {
            "@type": "Question",
            "name": "Who should I call for an emergency roof leak in New Jersey?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Contact an insured, qualified roofing contractor that handles emergency leak assessments and storm-related repairs. Homeowners seeking roof leak repair Linden NJ, emergency roof repair Elizabeth NJ, or roof leak repair Rahway NJ should confirm service availability, response times, and the scope of emergency assistance before arranging a visit.",
            },
          },
          {
            "@type": "Question",
            "name": "How can I prevent roof leaks in the future?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Schedule periodic roof inspections, replace damaged shingles promptly, maintain clean gutters, and check flashing around chimneys, vents, and skylights. After severe storms, arrange an inspection if you notice missing shingles, debris impact, or water stains. Preventive maintenance can help identify minor issues before they become major leaks.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.agrestorations.com/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://www.agrestorations.com/blog",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "What to Do When Your Roof Starts Leaking During Heavy Rain",
            "item": url,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": url,
        "url": url,
        "name": "Emergency Roof Leak Repair NJ: What to Do During Heavy Rain",
        "description":
          "Practical advice for handling roof leaks during heavy rain, preventing water damage, and arranging roof repairs in New Jersey.",
        "isPartOf": {
          "@id": "https://www.agrestorations.com/#website",
        },
        "mainEntity": {
          "@id": `${url}#article`,
        },
        "publisher": {
          "@id": "https://www.agrestorations.com/#organization",
        },
        "inLanguage": "en-US",
      },
      {
        "@type": "Organization",
        "@id": "https://www.agrestorations.com/#organization",
        "name": "A.G. Restorations",
        "url": "https://www.agrestorations.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.agrestorations.com/logo.avif",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.agrestorations.com/#website",
        "url": "https://www.agrestorations.com/",
        "name": "A.G. Restorations",
        "publisher": {
          "@id": "https://www.agrestorations.com/#organization",
        },
        "inLanguage": "en-US",
      },
    ],
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

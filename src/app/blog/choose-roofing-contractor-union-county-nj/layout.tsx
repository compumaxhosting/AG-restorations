import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const url = "https://www.agrestorations.com/blog/choose-roofing-contractor-union-county-nj";
const title = "How to Choose a Roofing Contractor in Union County, NJ";
const description =
  "Learn how to choose a roofing contractor in Union County, NJ. Compare credentials, insurance, warranties, estimates, and local roofing expertise.";
const imageUrl = "https://www.agrestorations.com/blog/roofing-contractor-union-county-nj.webp";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "roofing contractor in Union County NJ",
    "roofing companies Union County NJ",
    "roof repair Linden NJ",
    "roof replacement Union County",
    "local roofing contractor",
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
    description:
      "Find the right roofing contractor in Union County, NJ. Learn how to verify credentials, compare estimates, understand warranties, and protect your home.",
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: "Professional roofing contractor inspecting a residential roof in Union County, New Jersey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Choose a reliable Union County, NJ roofing contractor with tips on credentials, insurance, written estimates, warranties, and roof quality.",
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
        "headline": "How to Choose a Roofing Contractor in Union County, NJ",
        "description": description,
        "image": imageUrl,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": url,
        },
        "author": {
          "@type": "Organization",
          "@id": "https://www.agrestorations.com/#organization",
          "name": "AG Restorations",
          "url": "https://www.agrestorations.com/",
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://www.agrestorations.com/#organization",
          "name": "AG Restorations",
          "url": "https://www.agrestorations.com/",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.agrestorations.com/logo.avif",
          },
        },
        "datePublished": "2026-11-02",
        "dateModified": "2026-11-02",
        "inLanguage": "en-US",
        "keywords": [
          "roofing contractor in Union County NJ",
          "roof repair Linden NJ",
          "roof replacement Union County NJ",
          "local roofing contractor",
        ],
        "about": [
          {
            "@type": "Thing",
            "name": "Roofing contractors",
          },
          {
            "@type": "Thing",
            "name": "Roof repair and replacement",
          },
          {
            "@type": "Place",
            "name": "Union County, New Jersey",
          },
        ],
        "articleSection": [
          "Choosing a Roofing Contractor",
          "Roofing Costs",
          "Roofing Problems",
          "Frequently Asked Questions",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I find a reliable roofing contractor in Union County, NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Start by verifying New Jersey home improvement contractor registration, requesting proof of insurance, and checking independent reviews. Compare written estimates from multiple companies and ask for references from similar local projects. Choose a contractor who explains the work clearly, provides written warranty terms, and answers questions without pressuring you to sign immediately.",
            },
          },
          {
            "@type": "Question",
            "name": "How much does roof replacement cost in Union County, NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Roof replacement costs vary with roof size, pitch, material, labor, tear-off requirements, and hidden damage. A small, straightforward roof generally costs less than a steep, complex roof requiring extensive repairs. Request an on-site assessment and itemized quote to establish an accurate budget for your property.",
            },
          },
          {
            "@type": "Question",
            "name": "Should I repair my roof or replace it?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Repair may be appropriate when damage is isolated and the remaining roof is in good condition. Replacement may make more sense when shingles are deteriorating across large areas, leaks recur, or the roof is approaching the end of its expected service life. A professional inspection can help compare immediate repair costs with longer-term replacement needs.",
            },
          },
          {
            "@type": "Question",
            "name": "Is contractor registration required for roofers in New Jersey?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "New Jersey generally requires home improvement contractor businesses performing residential roofing work to register with the Division of Consumer Affairs, subject to applicable exemptions and requirements. Homeowners can consult the state's official registration resources to verify a contractor's status before signing an agreement.",
            },
          },
          {
            "@type": "Question",
            "name": "How long does a roof replacement take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Many straightforward residential roof replacements can be completed in one to a few days, although larger or more complicated projects may take longer. Weather, material delivery, roof decking repairs, and the size of the crew can affect the schedule. Ask your contractor for an estimated timeline and how rain or other delays will be handled.",
            },
          },
          {
            "@type": "Question",
            "name": "What should a roofing estimate include?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A roofing estimate should identify the materials, labor, removal and disposal costs, underlayment, flashing, ventilation work, cleanup, and any permit-related responsibilities. It should also explain payment terms, exclusions, additional repair costs, and warranty coverage. Comparing these details helps you understand what each contractor is actually offering.",
            },
          },
          {
            "@type": "Question",
            "name": "When should I schedule a roof inspection?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Schedule an inspection if you notice missing shingles, interior water stains, damaged flashing, or signs of storm damage. Periodic inspections can also help identify developing problems before they become expensive repairs. After severe weather, arrange a professional assessment when damage is suspected, even if there is no obvious leak inside the home.",
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
            "name": "How to Choose a Roofing Contractor in Union County, NJ",
            "item": url,
          },
        ],
      },
      {
        "@type": "RoofingContractor",
        "@id": "https://www.agrestorations.com/#business",
        "name": "AG Restorations",
        "url": "https://www.agrestorations.com/",
        "description":
          "AG Restorations provides roofing services, including roof repair, roof replacement, and new roof installation in Linden, New Jersey, and nearby communities.",
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Union County, New Jersey",
          },
          {
            "@type": "City",
            "name": "Linden, New Jersey",
          },
        ],
        "knowsAbout": [
          "Roof repair",
          "Roof replacement",
          "Roof installation",
          "Roof inspections",
          "Residential roofing",
        ],
      },
      {
        "@type": "WebPage",
        "@id": url,
        "url": url,
        "name": "How to Choose a Roofing Contractor in Union County, NJ",
        "description": description,
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
        "name": "AG Restorations",
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
        "name": "AG Restorations",
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


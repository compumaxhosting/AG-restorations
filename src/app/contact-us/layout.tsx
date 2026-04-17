import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "☎ +1 973 342 4134 | Roofing, Siding & Gutter Services in New Jersey",

  description:
    "Contact AG Restorations for professional roofing, siding, and gutter services in New Jersey. Get a free estimate for roof repair, replacement, siding installation, and gutter services in Linden and surrounding areas.",

  keywords: [
    "contact AG Restorations",
    "roofing contractor NJ contact",
    "roof repair Linden NJ",
    "siding contractor New Jersey",
    "gutter installation NJ",
    "get roofing estimate NJ",
  ],

  authors: [{ name: "AG Restorations" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.agrestorations.com/contact-us",
  },

  openGraph: {
    type: "website",
    title: "Contact AG Restorations | New Jersey Roofing Experts",
    description:
      "Get in touch with AG Restorations for roofing, siding, and gutter services in New Jersey. Request your free estimate today.",
    url: "https://www.agrestorations.com/contact-us",
    siteName: "AG Restorations",
    images: [
      {
        url: "https://www.agrestorations.com/about-roofing.webp",
        width: 1200,
        height: 630,
        alt: "Contact AG Restorations",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact AG Restorations NJ",
    description:
      "Request a free estimate for roofing, siding, and gutter services in New Jersey.",
    images: ["https://www.agrestorations.com/about-roofing.webp"],
    site: "@agrestorations",
  },
};

export default function ContactLayout({
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

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Roofing Services in Linden NJ | Roof Repair & Replacement | AG Restorations",

  description:
    "Professional roofing services in Linden NJ including roof repair, roof replacement, and new roof installation. AG Restorations provides reliable residential and commercial roofing solutions in Linden and Union County. Get a free estimate today.",

  keywords: [
    "roofing services Linden NJ",
    "roof repair Linden NJ",
    "roof replacement Linden NJ",
    "roofing contractor Linden NJ",
    "emergency roof repair NJ",
    "new roof installation Linden NJ",
    "residential roofing Linden NJ",
    "commercial roofing Linden NJ",
    "roof inspection Linden NJ",
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
    canonical: "https://www.agrestorations.com/roofing-services-linden-nj",
  },

  themeColor: "#ffffff",

  openGraph: {
    type: "website",
    title: "Roofing Services in Linden NJ | AG Restorations",
    description:
      "Trusted roofing contractor in Linden NJ offering roof repair, roof replacement, and new roof installation for homes and businesses.",
    url: "https://www.agrestorations.com/roofing-services-linden-nj",
    siteName: "AG Restorations",
    images: [
      {
        url: "https://www.agrestorations.com/Roofing-Services-in-Linden,-NJ.webp",
        width: 1200,
        height: 630,
        alt: "Roofing Services Linden NJ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Roofing Services Linden NJ | AG Restorations",
    description:
      "Expert roof repair and replacement services in Linden NJ. Free estimates available.",
    images: ["https://www.agrestorations.com/Roofing-Services-in-Linden,-NJ.webp"],
    site: "@agrestorations",
  },

  referrer: "strict-origin-when-cross-origin",

  appleWebApp: {
    capable: true,
    title: "AG Restorations",
    statusBarStyle: "black",
  },
};

export default function RoofingLayout({
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

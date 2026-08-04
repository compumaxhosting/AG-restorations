import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Urgent Roofing Contractor in Linden, NJ | Emergency Roof Repair Guide",

  description:
    "Need an urgent roofing contractor in Linden, NJ? Learn emergency roof repair, storm damage solutions, costs, and trusted roofing services from AG Restorations.",

  authors: [{ name: "AG Restorations" }],

  keywords: [
    "urgent roofing contractor Linden, NJ",
    "emergency roof repair Linden, NJ",
    "residential roof restoration Linden, NJ",
    "commercial roofing specialists Linden, NJ",
    "roof repair Linden, NJ",
    "storm damage roofing Linden, NJ",
    "certified roofing experts Linden, NJ",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.agrestorations.com/roofing-services-linden-nj",
  },

  openGraph: {
    type: "article",
    title: "Urgent Roofing Contractor in Linden, NJ | Emergency Roof Repair Guide",
    description:
      "Find expert emergency roofing solutions in Linden, NJ. AG Restorations provides roof repairs, storm damage restoration, inspections, and reliable roofing services.",
    url: "https://www.agrestorations.com/roofing-services-linden-nj",
    siteName: "AG Restorations",
    images: [
      {
        url: "https://www.agrestorations.com/images/urgent-roofing-contractor-linden-nj.jpg",
        alt: "Urgent roofing contractor providing emergency roof repair services in Linden, NJ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Urgent Roofing Contractor in Linden, NJ | Emergency Roof Repair Guide",
    description:
      "Get expert emergency roof repair guidance and learn how AG Restorations helps protect homes and businesses in Linden, NJ.",
    images: [
      "https://www.agrestorations.com/images/urgent-roofing-contractor-linden-nj.jpg",
    ],
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
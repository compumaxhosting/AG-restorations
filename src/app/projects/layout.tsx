import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | Roofing, Siding & Gutter Projects in Linden, NJ",

  description:
    "Explore our portfolio of completed roofing, siding, and gutter projects in Linden, NJ, and Union County. See why AG Restorations is the trusted local choice.",

  keywords: [
    "roofing projects Linden NJ",
    "siding gallery Linden",
    "gutter installation photos",
    "AG Restorations portfolio",
    "Union County roofing contractor work",
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
    canonical: "https://www.agrestorations.com/projects",
  },

  themeColor: "#ffffff",

  openGraph: {
    type: "website",
    title: "Completed Projects Gallery | AG Restorations",
    description:
      "Take a look at our recent exterior restoration projects. High-quality roofing, siding, and gutters across Linden and surrounding NJ communities.",
    url: "https://www.agrestorations.com/projects",
    siteName: "AG Restorations",
    images: [
      {
        url: "https://www.agrestorations.com/gallery.jpg",
        width: 1200,
        height: 630,
        alt: "AG Restorations Projects",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Recent Work in Linden & Union County",
    description:
      "View our gallery of professional roofing and siding installations. Local quality you can trust.",
    images: ["https://www.agrestorations.com/gallery.jpg"],
  },

  referrer: "strict-origin-when-cross-origin",
};

export default function ProjectsLayout({
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

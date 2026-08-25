import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Siding Installation in Linden, NJ | AG Restorations",
    description:
        "Discover professional siding installation in Linden, NJ. AG Restorations provides durable, attractive siding solutions for your home.",
    keywords: [
        "siding installation Linden NJ",
        "best siding installation Linden NJ",
        "siding contractor Linden NJ",
        "siding replacement Linden NJ",
        "residential siding Linden NJ",
        "vinyl siding Linden NJ",
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
        canonical:
            "https://www.agrestorations.com/blog/best-siding-installation-linden-nj",
    },

    openGraph: {
        type: "website",
        url: "https://www.agrestorations.com/blog/best-siding-installation-linden-nj",
        siteName: "AG Restorations",
        title: "Best Siding Installation in Linden, NJ | AG Restorations",
        description:
            "Discover professional siding installation in Linden, NJ. AG Restorations provides durable, attractive siding solutions for your home.",
        images: [
            {
                url: "https://www.agrestorations.com/blog/siding-installation-linden-nj.webp",
                alt: "Professional siding installation on a residential home in Linden, NJ",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Best Siding Installation in Linden, NJ | AG Restorations",
        description:
            "Discover professional siding installation in Linden, NJ. AG Restorations provides durable, attractive siding solutions for your home.",
        images: [
            "https://www.agrestorations.com/blog/siding-installation-linden-nj.webp",
        ],
    },

    referrer: "strict-origin-when-cross-origin",

    other: {
        "theme-color": "#ffffff",
    },
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
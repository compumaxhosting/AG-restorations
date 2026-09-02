import type { Metadata } from "next";

const url = "https://www.agrestorations.com/blog/best-gutter-installation-company-linden-nj";
const title = "Best Gutter Installation Company in Linden, NJ | AG Restorations";
const description = "Looking for the best gutter installation company in Linden, NJ? Discover professional seamless gutter installation and replacement from AG Restorations.";

const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BlogPosting",
            "@id": `${url}#blogposting`,
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            headline: "What's the Best Gutter Installation Company in Linden, NJ?",
            description,
            image: "https://www.agrestorations.com/blog/gutter-installation-linden-nj.webp",
            author: { "@type": "Organization", name: "AG Restorations", url: "https://www.agrestorations.com/" },
            publisher: { "@type": "Organization", name: "AG Restorations", url: "https://www.agrestorations.com/", logo: { "@type": "ImageObject", url: "https://www.agrestorations.com/logo.avif" } },
            datePublished: "2026-09-02",
            dateModified: "2026-09-02",
            articleSection: "Gutter Installation",
            keywords: "gutter installation Linden NJ, seamless gutters Linden NJ, gutter replacement Linden NJ",
        },
        {
            "@type": "RoofingContractor",
            "@id": "https://www.agrestorations.com/#organization",
            name: "AG Restorations",
            url: "https://www.agrestorations.com/",
            telephone: "+1-973-342-4134",
            image: "https://www.agrestorations.com/logo.avif",
            areaServed: { "@type": "City", name: "Linden", containedInPlace: { "@type": "State", name: "New Jersey" } },
        },
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.agrestorations.com/" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.agrestorations.com/blog" },
                { "@type": "ListItem", position: 3, name: "Best Gutter Installation Company in Linden, NJ", item: url },
            ],
        },
    ],
};

export const metadata: Metadata = {
    title,
    description,
    keywords: ["best gutter installation company Linden NJ", "gutter installation Linden NJ", "gutter replacement Linden NJ", "seamless gutters Linden NJ", "gutter contractor Linden NJ"],
    authors: [{ name: "AG Restorations" }],
    creator: "AG Restorations",
    publisher: "AG Restorations",
    robots: { index: true, follow: true },
    alternates: { canonical: url },
    openGraph: { type: "article", url, siteName: "AG Restorations", title, description, images: [{ url: "https://www.agrestorations.com/blog/gutter-installation-linden-nj.webp", alt: "Professional gutter installation in Linden, NJ" }] },
    twitter: { card: "summary_large_image", title, description, images: ["https://www.agrestorations.com/blog/gutter-installation-linden-nj.webp"] },
    referrer: "strict-origin-when-cross-origin",
    other: { "theme-color": "#ffffff" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></>;
}
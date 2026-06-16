"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

/* ================= BLOG DATA ================= */
const blogs = [
  {
    slug: "best-roofing-contractor-linden-nj",
    title: "How to Choose the Best Roofing Contractor in Linden, NJ",
    description:
      "Choosing the best roofing contractor in Linden NJ comes down to verifying licensing, checking local experience, comparing estimates, and reviewing past work....",
    image: "/blog/blog-1.webp",
    lastUpdated: "1st May 2026",
  },
  {
    slug: "top-signs-you-need-new-siding-in-linden-nj-homes",
    title: "Top Signs You Need NewSiding in Linden, NJ Homes",
    description:
      "If your home's exterior looks worn, feels soft to the touch, or your heating and cooling bills have crept up without explanation, your siding.....",
    image: "/blog/blog-2.webp",
    lastUpdated: "24th April 2026",
  },
];

/* ================= TYPES ================= */
type BlogType = {
  slug: string;
  title: string;
  description: string;
  image: string;
  lastUpdated?: string;
};

export default function Blog() {
  const router = useRouter();

  return (
    <section
      className="mx-2 md:m-0 shadow-xl bg-[#f9f9f9] py-14 px-4 sm:px-6"
      aria-labelledby="blog-section-title"
    >
      <div className="max-w-7xl mx-auto font-inter">
        {/* ================= HEADER ================= */}
        <header className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-6 h-px bg-[#e63a27]" />

            <span className="text-sm font-bold text-[#e63a27] uppercase tracking-widest">
              Roofing News & Updates
            </span>

            <div className="w-6 h-px bg-[#e63a27]" />
          </div>

          <h2
            id="blog-section-title"
            className="text-4xl lg:text-5xl font-bold text-[#003269] leading-tight max-w-5xl mx-auto"
          >
            Roofing, Siding & Gutter Tips for Linden NJ Homeowners
          </h2>
        </header>

        {/* ================= BLOG GRID ================= */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog: BlogType, index: number) => (
            <div
              key={`${blog.slug}-${index}`}
              onClick={() => router.push(`/blog/${blog.slug}`)}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer group"
            >
              {/* IMAGE */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl text-[#3b2a1f] font-semibold line-clamp-2 group-hover:underline">
                  {blog.title}
                </h3>

                {blog.lastUpdated && (
                  <p className="mt-2 text-xs text-[#8b5428] font-medium">
                    Last updated: {blog.lastUpdated}
                  </p>
                )}

                <p className="mt-4 text-sm text-[#876C61] line-clamp-3 grow leading-relaxed">
                  {blog.description}
                </p>

                <span className="mt-5 inline-block text-sm text-[#8b5428] font-semibold group-hover:underline">
                  Read More →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

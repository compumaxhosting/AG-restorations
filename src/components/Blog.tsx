"use client";

import dynamic from "next/dynamic";
import { useRef, useEffect, useState } from "react";
import type { Swiper as SwiperType } from "swiper";

/* ✅ LOAD WITH STABLE HEIGHT */
const BlogSlider = dynamic(() => import("@/components/BlogSlider"), {
  ssr: false,
});

export default function Blog() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="mx-2 md:m-0 shadow-xl bg-[#f9f9f9] pb-8 px-4 sm:px-6"
      aria-labelledby="blog-section-title"
    >
      {/* ✅ FIX: HARD LOCK HEIGHT */}
      <div className="max-w-7xl mx-auto text-center font-inter py-10 min-h-162.5">
        {/* ================= HEADER ================= */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="w-6 h-px bg-[#e63a27]" />

            <span className="text-sm font-bold text-[#e63a27] uppercase tracking-widest">
              Roofing News & Updates
            </span>

            <div className="w-6 h-px bg-[#e63a27]" />
          </div>

          {/* ✅ FIX: PREVENT FONT SHIFT */}
          <h2
            id="blog-section-title"
            className="text-4xl lg:text-5xl font-bold text-[#003269] leading-tight min-h-30"
          >
            Roofing, Siding & Gutter Tips for Linden NJ Homeowners
          </h2>
        </header>

        {/* ================= SLIDER ================= */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Roofing blog carousel"
          className="w-full h-90 lg:h-100"
        >
          {/* ✅ FIX: RENDER ONLY AFTER MOUNT */}
          {mounted ? (
            <BlogSlider swiperRef={swiperRef} />
          ) : (
            <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg" />
          )}
        </div>
      </div>
    </section>
  );
}

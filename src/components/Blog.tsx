"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { motion, type Variants } from "framer-motion";

const BlogSlider = dynamic(() => import("@/components/BlogSlider"), {
  ssr: false,
});

const sectionAnimation: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Blog() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <motion.section
      className="mx-2 md:m-0 shadow-xl bg-[#f9f9f9] py-10 px-4 sm:px-6"
      aria-labelledby="blog-section-title"
      variants={sectionAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto text-center font-inter">
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="w-6 h-px bg-[#e63a27]" aria-hidden="true" />

            <span className="text-sm font-bold text-[#e63a27] uppercase tracking-widest">
              Roofing News & Updates
            </span>

            <div className="w-6 h-px bg-[#e63a27]" aria-hidden="true" />
          </div>

          <h2
            id="blog-section-title"
            className="text-4xl lg:text-5xl font-bold text-[#003269]"
          >
            Roofing, Siding & Gutter Tips for Linden NJ Homeowners
          </h2>
        </header>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Roofing blog carousel"
        >
          <BlogSlider swiperRef={swiperRef} />
        </div>
      </div>
    </motion.section>
  );
}

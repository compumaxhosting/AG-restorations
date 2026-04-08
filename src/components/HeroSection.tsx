"use client";

import React, { useEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// 🚀 Lazy load carousel AFTER LCP
const EmblaCarousel = dynamic(() => import("./HeroSliderEmbla"), {
  ssr: false,
});

const slidesData = [
  {
    id: 1,
    title: "Roofing Contractor in Linden NJ – Roof Repair & Replacement",
    description:
      "AG Restorations is a trusted roofing contractor in Linden, New Jersey specializing in roof repair and replacement.",
    buttonText: "View Roofing Services",
    image: "/Services-Slider/services1.webp",
    alt: "Roof repair and roof installation by AG Restorations",
  },
  {
    id: 2,
    title: "Professional Siding & Gutter Installation in Linden NJ",
    description:
      "Protect your home with expert siding installation and seamless gutter systems.",
    buttonText: "Our Exterior Services",
    image: "/Services-Slider/services5.webp",
    alt: "Siding and gutter installation",
  },
  {
    id: 3,
    title: "Roofing, Siding & Gutters With 100% Financing",
    description:
      "AG Restorations offers financing options so homeowners can improve without stress.",
    buttonText: "Our Roofing Services",
    image: "/Services-Slider/masonry.webp",
    alt: "Exterior home improvement project",
  },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const slides = useMemo(() => slidesData, []);
  const currentSlide = slides[index];

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* 🚀 FAST LCP STATIC HERO */}
      {!mounted && (
        <div className="relative w-full max-sm:h-[70vh] sm:h-screen">
          <Image
            src="/hero.webp" // ✅ dedicated optimized hero image
            alt={slides[0].alt}
            fill
            priority
            quality={40}
            sizes="100vw"
            placeholder="empty"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>
      )}

      {/* 🚀 LOAD CAROUSEL AFTER */}
      {mounted && <EmblaCarousel slides={slides} setIndex={setIndex} />}

      {/* TEXT */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-start max-sm:px-4 md:px-20 text-white">
        <div className="max-w-3xl space-y-6 pt-6 md:ml-14">
          <h1 className="max-sm:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {currentSlide.title}
          </h1>

          <p className="max-sm:text-sm sm:text-lg font-light tracking-wide">
            {currentSlide.description}
          </p>

          <Link
            href="/services"
            className="inline-block border-4 border-[#003269] p-1"
          >
            <Button className="max-sm:text-xs sm:text-base lg:text-lg px-5 py-2 uppercase">
              {currentSlide.buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

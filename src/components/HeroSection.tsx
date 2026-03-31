"use client";

import React, { useCallback, useEffect, useState, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

// 🚀 Lazy load framer-motion (performance)
const MotionDiv = dynamic(() =>
  import("framer-motion").then((mod) => mod.motion.div),
);
const MotionArticle = dynamic(() =>
  import("framer-motion").then((mod) => mod.motion.article),
);
const AnimatePresence = dynamic(() =>
  import("framer-motion").then((mod) => mod.AnimatePresence),
);

const slides = [
  {
    id: 1,
    title: "Roofing Contractor in Linden NJ – Roof Repair & Replacement",
    description:
      "AG Restorations is a trusted roofing contractor in Linden, New Jersey specializing in roof repair, roof replacement, and new roof installation for residential and commercial properties.",
    buttonText: "View Roofing Services",
    image: "/Services-Slider/services1.webp",
    alt: "Roof repair and roof installation by AG Restorations roofing contractor in Linden New Jersey",
  },
  {
    id: 2,
    title: "Professional Siding & Gutter Installation in Linden NJ",
    description:
      "Protect your home with expert siding installation and seamless gutter systems from AG Restorations.",
    buttonText: "Our Exterior Services",
    image: "/Services-Slider/services5.webp",
    alt: "Siding installation and seamless gutter system installation",
  },
  {
    id: 3,
    title: "Roofing, Siding & Gutters With 100% Financing Available",
    description:
      "AG Restorations offers 100% financing options so homeowners can complete improvements without upfront stress.",
    buttonText: "Our Roofing Services",
    image: "/Services-Slider/masonry.webp",
    alt: "New roof installation and exterior home improvement project",
  },
];

export default function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const currentSlide = useMemo(() => slides[selectedIndex], [selectedIndex]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  // autoplay (clean + non-blocking)
  useEffect(() => {
    if (!emblaApi || isHovered) return;
    const id = setInterval(() => emblaApi.scrollNext(), 6000);
    return () => clearInterval(id);
  }, [emblaApi, isHovered]);

  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      aria-label="Roofing contractor services in Linden New Jersey"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* SLIDER */}
      <MotionDiv className="embla" ref={emblaRef}>
        <ul className="flex">
          {slides.map((slide, index) => (
            <li
              key={slide.id}
              className="relative flex-[0_0_100%] w-full max-sm:h-[70vh] sm:h-screen overflow-hidden"
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                sizes="100vw"
                quality={70}
                priority={index === 0}
                fetchPriority={index === 0 ? "high" : "auto"}
                placeholder="blur"
                blurDataURL="/blur.jpg"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/50 sm:bg-black/30 z-10" />
            </li>
          ))}
        </ul>
      </MotionDiv>

      {/* TEXT CONTENT */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-start max-sm:px-4 md:px-20 text-white pointer-events-none">
        <AnimatePresence mode="wait">
          <MotionArticle
            key={selectedIndex}
            className="max-w-3xl space-y-6 pt-6 md:ml-14 pointer-events-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="max-sm:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-inter leading-tight">
              {currentSlide.title}
            </h1>

            <p className="max-sm:text-sm sm:text-lg font-light tracking-wide font-bevietnam">
              {currentSlide.description}
            </p>

            {/* ✅ FIXED BUTTON (restored design) */}
            <Link
              href="/services"
              aria-label="View professional roofing services in Linden NJ"
              className="inline-block border-4 border-[#003269] p-1"
            >
              <Button className="Hero_hover-button max-sm:text-xs sm:text-base lg:text-lg font-inter px-5 py-2 uppercase">
                {currentSlide.buttonText}
              </Button>
            </Link>
          </MotionArticle>
        </AnimatePresence>
      </div>

      {/* ARROWS */}
      <button
        onClick={scrollPrev}
        type="button"
        aria-label="Previous slide"
        className="hidden md:block absolute left-5 top-1/2 -translate-y-1/2 rounded-full p-4 z-30 bg-black/40 hover:bg-[#e63a27] transition-all"
      >
        <ChevronLeft className="text-white text-2xl" />
      </button>

      <button
        onClick={scrollNext}
        type="button"
        aria-label="Next slide"
        className="hidden md:block absolute right-5 top-1/2 -translate-y-1/2 rounded-full p-4 z-30 bg-black/40 hover:bg-[#e63a27] transition-all"
      >
        <ChevronRight className="text-white text-2xl" />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              i === selectedIndex
                ? "bg-[#e63a27]"
                : "bg-white/70 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

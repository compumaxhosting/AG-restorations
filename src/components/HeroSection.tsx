"use client";

import React, { useCallback, useEffect, useState, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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

  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => emblaApi.scrollNext(), 6000);
    return () => clearInterval(id);
  }, [emblaApi]);

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="embla" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="relative flex-[0_0_100%] w-full max-sm:h-[70vh] sm:h-screen"
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                sizes="100vw"
                quality={60} // 🔥 reduced
                priority={index === 0}
                fetchPriority={index === 0 ? "high" : "auto"}
                loading={index === 0 ? "eager" : "lazy"}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 z-10" />
            </div>
          ))}
        </div>
      </div>

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

      {/* ARROWS */}
      <button
        onClick={scrollPrev}
        className="hidden md:block absolute left-5 top-1/2 -translate-y-1/2 z-30 bg-black/40 p-4 rounded-full"
      >
        <ChevronLeft className="text-white" />
      </button>

      <button
        onClick={scrollNext}
        className="hidden md:block absolute right-5 top-1/2 -translate-y-1/2 z-30 bg-black/40 p-4 rounded-full"
      >
        <ChevronRight className="text-white" />
      </button>
    </section>
  );
}

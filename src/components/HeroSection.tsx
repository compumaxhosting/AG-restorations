"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatePresence, PanInfo, motion } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Roofing Contractor in Linden NJ – Roof Repair & Replacement",
    description:
      "AG Restorations is a trusted roofing contractor in Linden, New Jersey specializing in roof repair, roof replacement, and new roof installation for residential and commercial properties. Our experienced team delivers durable roofing systems built to withstand New Jersey weather conditions. Call 973-342-4134 for a free estimate.",
    buttonText: "View Roofing Services",
    image: "/Services-Slider/services1.jpg",
    alt: "Roof repair and roof installation by AG Restorations roofing contractor in Linden New Jersey",
  },
  {
    id: 2,
    title: "Professional Siding & Gutter Installation in Linden NJ",
    description:
      "Protect your home with expert siding installation and seamless gutter systems from AG Restorations. We provide siding replacement, gutter installation, and gutter repair services for homes and businesses throughout Linden NJ and Union County.",
    buttonText: "Our Exterior Services",
    image: "/Services-Slider/services5.jpg",
    alt: "Siding installation and seamless gutter system installation on residential home in Linden New Jersey",
  },
  {
    id: 3,
    title: "Roofing, Siding & Gutters With 100% Financing Available",
    description:
      "Need roofing, siding, or gutter work but worried about the cost? AG Restorations offers 100% financing options so homeowners in Linden NJ can complete important exterior improvements without upfront stress. Get reliable service and flexible payment solutions today.",
    buttonText: "Get A Free Quote",
    image: "/Services-Slider/masonry.jpg",
    alt: "New roof installation and exterior home improvement project completed by AG Restorations in Linden NJ",
  },
];
const swipeConfidenceThreshold = 300;
const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity;

export default function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || isHovered) return;
    const autoplay = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(autoplay);
  }, [emblaApi, isHovered]);

  const handleDragEnd = (
    e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (!emblaApi) return;
    const power = swipePower(info.offset.x, info.velocity.x);
    if (power < -swipeConfidenceThreshold) emblaApi.scrollNext();
    else if (power > swipeConfidenceThreshold) emblaApi.scrollPrev();
    else emblaApi.scrollTo(selectedIndex);
  };

  const currentSlide = slides[selectedIndex];

  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      aria-label="Roofing contractor services in Linden New Jersey"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="embla"
        ref={emblaRef}
        drag="x"
        dragElastic={0.15}
        onDragEnd={handleDragEnd}
        style={{ cursor: "grab" }}
        whileTap={{ cursor: "grabbing" }}
      >
        <ul className="flex" aria-live="polite">
          {slides.map((slide, index) => (
            <li
              key={slide.id}
              aria-label={`Slide ${index + 1} of ${slides.length}`}
              aria-hidden={index !== selectedIndex}
              className="relative flex-[0_0_100%] w-full h-122 sm:h-screen overflow-hidden"
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                sizes="100vw"
                loading={index === 0 ? "eager" : "lazy"}
                priority={index === 0}
                className="object-cover"
              />

              <div
                className="absolute inset-0 bg-black/40 sm:bg-black/30 z-10"
                aria-hidden="true"
              />
            </li>
          ))}
        </ul>
      </motion.div>

      <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-6 md:px-20 text-white pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.article
            key={selectedIndex}
            className="max-w-3xl space-y-6 pt-6 md:ml-14 xl:ml-46 pointer-events-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Main SEO Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-inter">
              {currentSlide.title}
            </h1>

            {/* Supporting SEO paragraph */}
            <p className="text-lg font-light tracking-wide font-bevietnam">
              {currentSlide.description}
            </p>

            <Link
              href="/services"
              aria-label="View professional roofing services in Linden NJ"
              className="inline-block border-4 border-[#003269] p-1"
            >
              <Button
                type="button"
                className="Hero_hover-button text-sm sm:text-base lg:text-lg font-inter"
              >
                {currentSlide.buttonText.toUpperCase()}
              </Button>
            </Link>
          </motion.article>
        </AnimatePresence>
      </div>

      <button
        onClick={scrollPrev}
        type="button"
        aria-label="Previous roofing services slide"
        className="hidden md:block absolute left-5 top-1/2 -translate-y-1/2 rounded-full p-4 z-30 bg-black/40 hover:bg-[#e63a27] focus:outline-2 focus:outline-[#e63a27] transition-all"
      >
        <ChevronLeft className="text-white text-2xl" />
      </button>

      <button
        onClick={scrollNext}
        type="button"
        aria-label="Next roofing services slide"
        className="hidden md:block absolute right-5 top-1/2 -translate-y-1/2 rounded-full p-4 z-30 bg-black/40 hover:bg-[#e63a27] focus:outline-2 focus:outline-[#e63a27] transition-all"
      >
        <ChevronRight className="text-white text-2xl" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Go to roofing slide ${i + 1}`}
            aria-current={i === selectedIndex ? "true" : undefined}
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

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import type { RefObject } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Link from "next/link";

interface Props {
  swiperRef?: RefObject<SwiperType | null>;
}

const slides = [
  {
      title: "Gutter Installation & Repair",
description:
  "Professional gutter services including gutter installation, repair, replacement, cleaning, and downspout systems to protect your home from water damage.",
image: "/Services-Slider/services5.jpg",
link: "/gutter-installation-repair",
alt: "Residential gutter installation, repair, and drainage system services",
  },
  {
    title: "Siding & Exterior Construction",
    description:
      "Expert masonry services including brickwork, bluestone, paving, cement structures, and exterior construction improvements.",
    image: "/Services-Slider/masonry.jpg",
    link: "/masonry-services-brooklyn-ny",
    alt: "Professional masonry contractor performing brick and paving work",
  },
  {
    title: "Roofing Installation & Repair",
    description:
      "Complete roofing services including roof repair, shingle installation, metal roofing, and commercial flat roof systems.",
    image: "/Services-Slider/services5.jpg",
    link: "/roofing-contractors-brooklyn",
    alt: "Residential and commercial roofing installation and repair services",
  },
];

export default function ServicesSlider({ swiperRef }: Props) {
  const swiperInstanceRef = useRef<SwiperType | null>(null);
  const autoplayTimeout = useRef<NodeJS.Timeout | null>(null);
  const [currentSlideTitle, setCurrentSlideTitle] = useState(slides[0].title);

  useEffect(() => {
    if (swiperRef) {
      swiperRef.current = swiperInstanceRef.current;
    }
  }, [swiperRef]);

  const handleManualSlide = (direction: "prev" | "next") => {
    if (!swiperInstanceRef.current) return;
    const swiper = swiperInstanceRef.current;

    swiper.autoplay?.stop();
    if (direction === "next") swiper.slideNext();
    else swiper.slidePrev();

    clearTimeout(autoplayTimeout.current!);
    autoplayTimeout.current = setTimeout(() => swiper.autoplay?.start(), 2000);
  };

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 mb-5">
      <div className="w-10/12 overflow-hidden">
        <Swiper
          loop
          speed={1000}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          allowTouchMove={false}
          modules={[Autoplay]}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 14 },
            640: { slidesPerView: 1, spaceBetween: 18 },
            768: { slidesPerView: 2, spaceBetween: 18 },
            1024: { slidesPerView: 2, spaceBetween: 26 },
            1280: { slidesPerView: 3, spaceBetween: 28 },
          }}
          onSwiper={(swiper) => {
            swiperInstanceRef.current = swiper;
            if (swiperRef) swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            const idx = swiper.realIndex % slides.length;
            setCurrentSlideTitle(slides[idx].title);
          }}
        >
          {Array.from({ length: 12 }).map((_, i) => {
            const { title, description, image, link, alt } =
              slides[i % slides.length];

            return (
              <SwiperSlide key={i}>
                <article className="group relative h-95 flex items-end overflow-hidden rounded-md">
                  {/* Background Image */}
                  <div
                    role="img"
                    aria-label={alt}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${image})` }}
                  />

                  {/* Content */}
                  <div className="relative z-10 w-full bg-[#f5f5f5] shadow-md p-5 min-h-32 flex flex-col">
                    <Link href={link} aria-label={`Learn more about ${title}`}>
                      <h3 className="text-[#003269] text-sm md:text-base lg:text-lg font-bold tracking-wide font-inter hover:underline">
                        {title}
                      </h3>
                    </Link>

                    <Link href={link}>
                      <p className="text-sm text-gray-600 mt-2 leading-snug line-clamp-3 font-bevietnam hover:text-[#003269]">
                        {description}
                      </p>
                    </Link>
                  </div>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="sr-only" aria-live="polite">
        {`Current slide: ${currentSlideTitle}`}
      </div>

      {/* Navigation */}
      <nav className="flex justify-center gap-4 pt-6">
        {["prev", "next"].map((dir) => {
          const Icon = dir === "prev" ? FiChevronLeft : FiChevronRight;
          return (
            <button
              key={dir}
              onClick={() => handleManualSlide(dir as "prev" | "next")}
              aria-label={`Go to ${dir} service`}
              className="w-10 h-10 rounded-full border-2 border-[#003269] text-[#003269] flex items-center justify-center hover:bg-gray-100 transition"
            >
              <Icon className="w-5 h-5" />
            </button>
          );
        })}
      </nav>
    </div>
  );
}

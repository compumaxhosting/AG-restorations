"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import BlogSlideCard from "./BlogSlideCard";
import type { Swiper as SwiperType } from "swiper";
import type { RefObject } from "react";

interface Props {
  swiperRef?: RefObject<SwiperType | null>;
}

const slides = [
  {
    title: "Roof Repair & Roof Replacement Services in Linden NJ",
    description:
      "Professional roofing services for homes and businesses in Linden New Jersey",
    date: "11 July",
    image: "/1.jpg",
    initialLikeCount: 70,
  },
  {
    title: "Professional Siding Installation Services in Linden NJ",
    description:
      "Quality siding installation to protect and improve your home's exterior",
    date: "25 June",
    image: "./Services-slider/masonry.jpg",
    initialLikeCount: 150,
  },
  {
    title: "Seamless Gutter Installation & Repair in Linden NJ",
    description:
      "Reliable gutter systems designed to protect homes from water damage",
    date: "10 June",
    image: "/blog/roofing-contractors.jpg",
    initialLikeCount: 200,
  },
  {
    title: "Why Homeowners in Linden NJ Choose AG Restorations for Roofing",
    description:
      "Trusted roofing contractors serving Linden and Union County communities",
    date: "29 May",
    image: "/blogImage.jpg",
    initialLikeCount: 260,
  },
];

export default function BlogSlider({ swiperRef }: Props) {
  const swiperInstanceRef = useRef<SwiperType | null>(null);
  const autoplayTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (swiperRef) {
      swiperRef.current = swiperInstanceRef.current;
    }
    return () => {
      if (autoplayTimeout.current) clearTimeout(autoplayTimeout.current);
    };
  }, [swiperRef]);

  const handleManualSlide = (direction: "prev" | "next") => {
    const swiper = swiperInstanceRef.current;
    if (!swiper) return;

    swiper.autoplay?.stop();
    if (direction === "next") {
      swiper.slideNext();
    } else {
      swiper.slidePrev();
    }

    autoplayTimeout.current = setTimeout(() => {
      swiper.autoplay?.start();
    }, 2000);
  };

  const navBtnClass =
    "w-10 h-10 rounded-full border-2 border-[#003269] text-[#003269] flex items-center justify-center transition hover:bg-[#003269] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ef4423]";

  return (
    <section
      className="w-full px-4 sm:px-6 max-w-7xl mx-auto"
      aria-label="Blog posts carousel"
    >
      <Swiper
        loop
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        modules={[Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 14 },
          640: { slidesPerView: 1, spaceBetween: 18 },
          768: { slidesPerView: 2, spaceBetween: 22 },
          1024: { slidesPerView: 2, spaceBetween: 26 },
          1280: { slidesPerView: 3, spaceBetween: 28 },
        }}
        onSwiper={(swiper) => {
          swiperInstanceRef.current = swiper;
          if (swiperRef) swiperRef.current = swiper;
        }}
        className="pb-6"
        aria-roledescription="carousel"
        aria-label="Latest blog posts"
      >
        {slides.map((slide, i) => (
          <SwiperSlide
            key={i}
            aria-label={`Slide ${i + 1} of ${slides.length}`}
          >
            <BlogSlideCard slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="flex justify-center gap-4 pt-6"
        aria-label="Slider navigation controls"
      >
        <button
          type="button"
          onClick={() => handleManualSlide("prev")}
          aria-label="Previous Slide"
          className={navBtnClass}
        >
          <FiChevronLeft className="w-5 h-5" aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={() => handleManualSlide("next")}
          aria-label="Next Slide"
          className={navBtnClass}
        >
          <FiChevronRight className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}

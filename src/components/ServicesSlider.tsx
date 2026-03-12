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
    title: "Roof Repair & Roof Replacement in Linden NJ",
    description:
      "AG Restorations provides professional roof repair, roof replacement, and new roof installation for homes and commercial properties in Linden, New Jersey. Our experienced roofing contractors deliver durable roofing systems designed to protect your property for years.",
    image: "/Services-Slider/services1.jpg",
    link: "/roofing-services-linden-nj",
    alt: "Roof repair and roof replacement services by AG Restorations roofing contractor in Linden New Jersey",
  },
  {
    title: "Siding Installation & Siding Repair Services",
    description:
      "Improve your home's protection and curb appeal with professional siding installation and siding repair in Linden NJ. AG Restorations installs high-quality siding systems that protect your property from weather damage while enhancing exterior appearance.",
    image: "/Services-Slider/masonry.jpg",
    link: "/siding-installation-linden-nj",
    alt: "Home siding installation project completed by AG Restorations siding contractor in Linden New Jersey",
  },
  {
    title: "Gutter Installation & Seamless Gutter Systems",
    description:
      "Protect your home from water damage with professional gutter installation and gutter repair services in Linden NJ. AG Restorations installs seamless gutters and drainage systems that safely direct rainwater away from your roof and foundation.",
    image: "/Services-Slider/services5.jpg",
    link: "/gutter-installation-linden-nj",
    alt: "Seamless gutter installation and gutter repair services in Linden New Jersey",
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

   // stop autoplay before manual navigation
   swiper.autoplay?.stop();

   if (direction === "next") {
     swiper.slideNext();
   } else {
     swiper.slidePrev();
   }

   // clear previous timeout safely
   if (autoplayTimeout.current) {
     clearTimeout(autoplayTimeout.current);
   }

   // restart autoplay after delay
   autoplayTimeout.current = setTimeout(() => {
     swiper.autoplay?.start();
   }, 2000);
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

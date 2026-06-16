"use client";

import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

type Slide = {
  id: number;
  image: string;
  alt: string;
};

export default function HeroSliderEmbla({
  slides,
  setIndex,
}: {
  slides: Slide[];
  setIndex: (index: number) => void;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setIndex]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

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
    <>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative min-w-full max-sm:h-[70vh] sm:h-screen"
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                sizes="100vw"
                loading="lazy"
                quality={35} // ✅ more compression
                placeholder="empty"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 z-10" />
            </div>
          ))}
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
    </>
  );
}

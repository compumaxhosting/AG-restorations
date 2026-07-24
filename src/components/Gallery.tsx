"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const images = [
  {
    src: "/image-top.webp",
    alt: "Roofing contractor installing asphalt shingles on a residential home roof",
  },
  {
    src: "/gallery1.jpg",
    alt: "New residential home construction with exterior roofing and siding installation",
  },
  {
    src: "/gallery2.jpg",
    alt: "Flat roof installation with architectural asphalt shingles on a residential property",
  },
  {
    src: "/gallery3.jpg",
    alt: "Professional roofer installing roof flashing and waterproof underlayment",
  },
  {
    src: "/gallery4.jpg",
    alt: "Plywood roof deck replacement during residential roofing renovation",
  },
  {
    src: "/gallery5.jpg",
    alt: "Roofing company service vehicles parked at a residential roofing project site",
  },
  {
    src: "/gallery6.jpg",
    alt: "Residential roof framing and structural repair in progress",
  },
  {
    src: "/gallery7.jpg",
    alt: "Residential roof prepared for shingle replacement with protective tarp covering",
  },
  {
    src: "/gallery8.jpg",
    alt: "Completed residential roofing project with durable asphalt shingle installation",
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openImage = (index: number) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const showNext = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return prev;
      return (prev + 1) % images.length;
    });
  }, []);

  const showPrev = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return prev;
      return (prev - 1 + images.length) % images.length;
    });
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") closeImage();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [selectedIndex, showNext, showPrev]);

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Gallery</h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => openImage(index)}
              className="cursor-pointer overflow-hidden rounded-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-60 object-cover hover:scale-110 transition duration-300"
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedIndex !== null && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
            {/* Close */}
            <button
              onClick={closeImage}
              className="absolute top-6 right-6 text-white text-4xl hover:scale-110"
            >
              ✕
            </button>

            {/* Previous */}
            <button
              onClick={showPrev}
              className="absolute left-6 text-white text-5xl hover:scale-110"
            >
              ‹
            </button>

            {/* Image */}
            <div className="max-w-5xl w-full px-6">
              <Image
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                width={1200}
                height={800}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>

            {/* Next */}
            <button
              onClick={showNext}
              className="absolute right-6 text-white text-5xl hover:scale-110"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

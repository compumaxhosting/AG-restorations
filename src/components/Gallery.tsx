"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
  "/gallery7.jpg",
  "/gallery8.jpg",
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
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, showNext, showPrev]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center text-[#e63a27] mb-10">
        Our Gallery
      </h2>

      {/* Gallery Grid */}
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            onClick={() => openImage(index)}
            className="cursor-pointer overflow-hidden rounded-lg"
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
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

          {/* Left */}
          <button
            onClick={showPrev}
            className="absolute left-6 text-white text-5xl hover:scale-110"
          >
            ‹
          </button>

          {/* Image */}
          <div className="max-w-5xl w-full px-6">
            <Image
              src={images[selectedIndex]}
              alt="Expanded gallery image"
              width={1200}
              height={800}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>

          {/* Right */}
          <button
            onClick={showNext}
            className="absolute right-6 text-white text-5xl hover:scale-110"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}

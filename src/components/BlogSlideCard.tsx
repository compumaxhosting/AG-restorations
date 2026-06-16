"use client";

import { useState } from "react";
import { FiHeart, FiFolder, FiShare2 } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";

interface Slide {
  title: string;
  description: string;
  date: string;
  image: string;
  initialLikeCount: number;
}

export default function BlogSlideCard({ slide }: { slide: Slide }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(slide.initialLikeCount);
  const [isSharing, setIsSharing] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  const handleShare = async () => {
    if (isSharing) return;

    if (navigator.share) {
      setIsSharing(true);
      try {
        await navigator.share({
          title: slide.title,
          text: slide.description,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      } finally {
        setIsSharing(false);
      }
    } else {
      alert("Your browser doesn't support sharing.");
    }
  };

  return (
    <article
      aria-label={`Blog post: ${slide.title}`}
      className="relative w-full h-107.5 rounded-sm shadow-md overflow-hidden flex flex-col font-inter"
    >
      {/* Image + Overlay */}
      <div className="relative flex-1 overflow-hidden group">
        <div
          className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${slide.image})` }}
          role="img"
          aria-label={`Image representing ${slide.title}`}
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-transparent" />

        {/* Text */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1 text-left text-white drop-shadow-md">
          <div className="flex items-center gap-2 text-[#e63a27] text-xs font-semibold uppercase tracking-wide">
            <FiFolder className="w-4 h-4" aria-hidden="true" />
            <span>{slide.description}</span>
          </div>

          <h2 className="font-bold text-base sm:text-lg md:text-xl leading-tight">
            {slide.title}
          </h2>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white px-4 py-3 flex justify-between items-center border border-gray-400 text-sm">
        <span className="font-bold text-[#003269]">READ MORE</span>

        <div className="flex items-center gap-4">
          {/* Like Button */}
          <button
            type="button"
            onClick={handleLike}
            aria-label={liked ? "Unlike this article" : "Like this article"}
            title={liked ? "Unlike this article" : "Like this article"}
            className="flex items-center gap-1 text-[#e63a27]"
          >
            {liked ? (
              <AiFillHeart className="w-5 h-5" aria-hidden="true" />
            ) : (
              <FiHeart
                className="w-5 h-5 hover:text-[#e63a27]"
                aria-hidden="true"
              />
            )}
            <span>{likeCount}</span>
          </button>

          {/* Share Button */}
          <button
            type="button"
            onClick={handleShare}
            disabled={isSharing}
            aria-label="Share this article"
            title="Share this article"
            className="hover:text-[#e63a27]"
          >
            <FiShare2 className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </footer>
    </article>
  );
}

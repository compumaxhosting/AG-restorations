"use client";

import React, { useState } from "react";
import { GoVideo } from "react-icons/go";
import { SiTicktick } from "react-icons/si";
import { IoClose } from "react-icons/io5";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { motion, type Variants } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";

const VideoIframe = dynamic(() => import("./VideoIframe"), { ssr: false });

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

type Props = {
  margin: number[];
};

export default function VideoSection({ margin }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <section
        className="relative w-full flex flex-col md:flex-row overflow-hidden h-137.5 bg-[#f0482f] lg:bg-[#f9f9f9] shadow-2xl"
        style={{ marginBottom: `${margin[1]}px` }}
      >
        {/* Background Image */}
        <Image
          src="/Services-Slider/masonry.jpg"
          alt="Roof installation background"
          fill
          priority
          sizes="80vw"
          className="object-cover z-0"
        />

        {/* LEFT SECTION */}
        <div className="relative md:w-[60%] w-full h-125 md:h-auto">
          {/* Shape Layer 1 */}
          <div className="absolute inset-0 bg-[#c72f1c] z-20 translate-x-6 translate-y-16">
            <div className="w-full h-full bg-[url('/VideoSec/thm-pattern-5.png')] bg-repeat" />
          </div>

          {/* Shape Layer 2 */}
          <div className="absolute inset-0 bg-[#e63a27] z-20">
            <div className="w-full h-full bg-[url('/VideoSec/thm-pattern-5.png')] bg-repeat" />
          </div>

          <div className="flex justify-center items-center h-full">
            <motion.div
              className="relative z-30 text-white p-10 md:p-16 lg:max-w-[80%] xl:max-w-[60%]"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Small Heading */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-px bg-white" />
                <h2 className="text-sm uppercase font-semibold">Video Proof</h2>
              </div>

              {/* Title */}
              <h2 className="text-3xl lg:text-5xl font-medium leading-tight mb-4">
                Have a Look <br /> At Our Video
              </h2>

              {/* List */}
              <ul className="space-y-2">
                <li>
                  <SiTicktick className="inline mr-2" />
                  Roof of the Year
                </li>
                <li>
                  <SiTicktick className="inline mr-2" />
                  Fully supported metal
                </li>
                <li>
                  <SiTicktick className="inline mr-2" />
                  Reliable & Trustworthy
                </li>
                <li>
                  <SiTicktick className="inline mr-2" />
                  Dependable
                </li>
              </ul>

              {/* Mobile Video Button */}
              <div className="mt-6 md:hidden flex flex-col items-start">
                <GoVideo
                  size={60}
                  className="cursor-pointer"
                  aria-label="Play flat roof installation video"
                  onClick={() => setIsOpen(true)}
                />
                <span className="text-sm mt-2">FLAT ROOF INSTALLATION</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] p-0 rounded-lg border-none shadow-lg backdrop-blur-xl bg-black/40">
          <VisuallyHidden>
            <DialogTitle>Flat Roof Installation Video</DialogTitle>
          </VisuallyHidden>

          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <VideoIframe />

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white text-3xl bg-black/60 rounded-full p-1"
            >
              <IoClose />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

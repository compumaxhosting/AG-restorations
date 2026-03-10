"use client";

import React, { useState } from "react";
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
        className="relative w-full flex flex-col md:flex-row overflow-hidden bg-[#f9f9f9] shadow-2xl"
        style={{ marginBottom: `${margin[1]}px` }}
      >
        {/* IMAGE SIDE */}
        <div className="relative w-full md:w-[40%] h-87.5 md:h-125">
          <Image
            src="/Services-Slider/services1.jpg"
            alt="Professional roofing installation project by AG Restorations in Linden New Jersey"
            fill
            priority
            sizes="(max-width:768px) 100vw, 40vw"
            className="object-cover"
          />
        </div>

        {/* CONTENT SIDE */}
        <div className="relative md:w-[60%] w-full bg-[#e63a27]">
          <div className="flex justify-center items-center h-full">
            <motion.div
              className="text-white p-10 md:p-16 lg:max-w-[80%]"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Small Heading */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-px bg-white" />
                <h2 className="text-sm uppercase font-semibold">
                  Our Roofing Services
                </h2>
              </div>

              {/* Title */}
              <h2 className="text-3xl lg:text-5xl font-medium leading-tight mb-4">
                Professional Roofing Services <br /> In Linden NJ
              </h2>

              {/* List */}
              <ul className="space-y-2">
                <li>
                  <SiTicktick className="inline mr-2" />
                  Roof Repair & Roof Replacement
                </li>
                <li>
                  <SiTicktick className="inline mr-2" />
                  Residential & Commercial Roofing
                </li>
                <li>
                  <SiTicktick className="inline mr-2" />
                  Siding Installation Services
                </li>
                <li>
                  <SiTicktick className="inline mr-2" />
                  Seamless Gutter Installation
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] p-0 rounded-lg border-none shadow-lg backdrop-blur-xl bg-black/40">
          <VisuallyHidden>
            <DialogTitle>Roofing Project Showcase</DialogTitle>
          </VisuallyHidden>

          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <VideoIframe />

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

"use client";

import React from "react";
import FaqSection from "@/components/FaqSection";
import HomeContactForm from "./HomeContactForm";
import { motion, type Variants } from "framer-motion";

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

export default function ServiceAndFaqSection() {
  return (
    <section
      className="relative w-full pt-10 md:pt-12 pb-24 bg-[#f9f9f9] overflow-hidden border-t border-black/20 shadow-2xl mb-10 md:mb-16"
      aria-labelledby="main-section-heading"
    >
      {/* Background split colors */}
      <div className="absolute inset-0 hidden lg:flex z-0" aria-hidden="true">
        <div className="w-[30%] bg-[#e63a27]" />
        <div className="w-[70%] bg-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-12 text-center lg:text-left">
        {/* Contact Form */}
        <HomeContactForm />

        {/* FAQ Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full max-w-xl"
        >
          <FaqSection />
        </motion.div>
      </div>
    </section>
  );
}

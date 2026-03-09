"use client";

import Image from "next/image";
import { FaHeadphonesAlt } from "react-icons/fa";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay,
    },
  }),
};

export default function FooterTopCTA() {
  return (
    <section
      className="bg-[#1c1c27] text-white px-4 py-10 sm:px-6 md:px-12"
      aria-labelledby="footer-cta-heading"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 text-center lg:text-left max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          className="min-w-25 sm:min-w-30 lg:min-w-40"
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link href="/" aria-label="Go to AG Restorations homepage">
            <Image
              src="/Navbar/Logo-AG.png"
              alt="AG Restorations roofing and remodeling company logo"
              width={160}
              height={160}
              className="object-contain border-2"
            />
          </Link>
        </motion.div>

        {/* Divider */}
        <motion.span
          className="hidden lg:block w-px h-20 bg-white/30"
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          aria-hidden="true"
        />

        {/* Text */}
        <motion.div
          className="max-w-md px-2"
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2
            id="footer-cta-heading"
            className="text-lg md:text-xl font-bold mb-1 font-inter"
          >
            Roofing Problems Can’t Wait?
          </h2>

          <p className="text-sm text-white/80 leading-snug font-inter">
            Protect your home with trusted roofing and exterior services in
            Linden, NJ. Contact AG Restorations today for a free estimate.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex gap-3 flex-wrap justify-center items-center"
          variants={fadeUp}
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link
            href="/contact"
            className="call-hover-button font-inter"
            aria-label="Get a quote from AG Restorations"
          >
            GET A QUOTE
          </Link>

          <Link
            href="tel:+19738205130"
            className="bg-[#e63a27] text-white flex items-center gap-2 px-4 py-2 font-semibold transition hover:bg-[#c52f1f] call-hover-button"
            aria-label="Call AG Restorations at 973-820-5130"
          >
            <FaHeadphonesAlt aria-hidden="true" />
            <span className="text-sm sm:text-base font-inter">
              (973) 820-5130
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

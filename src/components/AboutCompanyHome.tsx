"use client";

import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import Link from "next/link";

export default function AboutCompany() {
  return (
    <section
      className="w-full bg-[#f3f3f3] py-16 px-6 lg:px-12"
      aria-labelledby="about-company-heading"
      aria-label="About AG Restorations roofing contractor serving Linden New Jersey"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="w-full h-105 relative overflow-hidden">
          <Image
            src="/about-roofing.jpg"
            alt="Professional roofing contractors installing residential roofing system in Linden New Jersey"
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 50vw"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* Small Heading */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-red-500"></div>
            <span className="text-sm font-semibold text-red-500 uppercase tracking-wide">
              About AG Restorations
            </span>
          </div>

          {/* Main Title */}
          <h2
            id="about-company-heading"
            className="text-4xl lg:text-5xl font-bold text-[#1b2a41] leading-tight mb-6"
          >
            Trusted Roofing & Remodeling Company in Linden, New Jersey
          </h2>

          {/* Features */}
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#1b2a41]">
              <FiCheck className="text-red-500" aria-hidden="true" />
              LICENSED & RELIABLE
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-[#1b2a41]">
              <FiCheck className="text-red-500" aria-hidden="true" />
              ADVANCED INSTALLATION METHODS
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-[#1b2a41]">
              <FiCheck className="text-red-500" aria-hidden="true" />
              SKILLED PROFESSIONALS
            </div>
          </div>

          {/* Paragraph */}
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>AG Restorations</strong> is a trusted roofing contractor in
            Linden, New Jersey providing professional residential and commercial
            roofing services. Our team specializes in roof repair, roof
            replacement, shingle installation, metal roofing, flat roof systems,
            single-ply membranes, torch-down roofing, modified bitumen, and
            other advanced roofing solutions designed for durability and
            long-term protection.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            In addition to roofing, we offer complete exterior remodeling
            services including interior and exterior painting, waterproofing,
            roof insulation, power washing, sun tunnel installation, and other
            exterior improvements. Homeowners and businesses across Linden and
            surrounding Union County communities trust AG Restorations for
            reliable workmanship, high-quality materials, and long-lasting
            results.
          </p>

          {/* Button */}
          <Link
            href="/about"
            aria-label="Learn more about AG Restorations roofing company in Linden New Jersey"
            className="inline-block border-2 border-red-500 text-red-500 px-8 py-3 font-semibold tracking-wide hover:bg-red-500 hover:text-white transition"
          >
            LEARN MORE
          </Link>
        </div>
      </div>
    </section>
  );
}

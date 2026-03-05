"use client";

import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import Link from "next/link";

export default function AboutCompany() {
  return (
    <section className="w-full bg-[#f3f3f3] py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="w-full h-105 relative overflow-hidden">
          <Image
            src="/about-roofing.jpg" // replace with your image
            alt="Roofing construction project"
            fill
            className="object-cover"
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
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1b2a41] leading-tight mb-6">
            Built on Quality. Driven by Precision.
          </h2>

          {/* Features */}
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#1b2a41]">
              <FiCheck className="text-red-500" />
              LICENSED & RELIABLE
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-[#1b2a41]">
              <FiCheck className="text-red-500" />
              ADVANCED INSTALLATION METHODS
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-[#1b2a41]">
              <FiCheck className="text-red-500" />
              SKILLED PROFESSIONALS
            </div>
          </div>

          {/* Paragraph */}
          <p className="text-gray-600 leading-relaxed mb-4">
            At AG Restorations, we provide professional roofing and remodeling
            services designed to enhance your property’s durability, efficiency,
            and curb appeal. Serving Linden, New Jersey and surrounding areas,
            we specialize in residential and commercial roofing systems
            including shingle installation, metal roof repair, flat roofs,
            single ply systems, torch down, modified bitumen, and more.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            Beyond roofing, we offer general remodeling, interior and exterior
            painting, roof insulation, power washing, sun tunnels, and exterior
            improvements. Our team uses top-quality materials and proven
            techniques to deliver results that stand the test of time.
          </p>

          {/* Button */}
          <Link
            href="/about"
            className="inline-block border-2 border-red-500 text-red-500 px-8 py-3 font-semibold tracking-wide hover:bg-red-500 hover:text-white transition"
          >
            LEARN MORE
          </Link>
        </div>
      </div>
    </section>
  );
}

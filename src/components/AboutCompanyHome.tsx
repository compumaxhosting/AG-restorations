"use client";

import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import Link from "next/link";

export default function AboutCompany() {
  return (
    <section
      className="w-full bg-[#f3f3f3] py-16 px-6 lg:px-12"
      aria-labelledby="about-company-heading"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="w-full h-105 relative overflow-hidden">
          <Image
            src="/about-roofing.webp"
            alt="AG Restorations roofing contractors installing residential roof in Linden New Jersey"
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            quality={70}
            loading="lazy"
            className="object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* Small Heading */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-red-500"></div>
            <span className="text-sm sm:text-md md:text-lg font-semibold text-red-500 uppercase tracking-wide">
              About AG Restorations
            </span>
          </div>

          {/* Main Title */}
          <h2
            id="about-company-heading"
            className="text-3xl lg:text-4xl font-bold text-[#1b2a41] leading-tight mb-6"
          >
            AG Restorations: Trusted Linden Roofing & Exterior Specialists
          </h2>

          {/* Features */}
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#1b2a41]">
              <FiCheck className="text-red-500" />
              LOCAL & TRUSTED
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-[#1b2a41]">
              <FiCheck className="text-red-500" />
              EXPERIENCED TEAM
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-[#1b2a41]">
              <FiCheck className="text-red-500" />
              QUALITY MATERIALS
            </div>
          </div>

          {/* Paragraphs */}
          <p className="text-gray-600 leading-relaxed mb-2">
            Your home is your most significant investment. At AG Restorations,
            we provide the expert craftsmanship and durable materials necessary
            to protect it from New Jersey’s unpredictable elements. Based in
            Linden, New Jersey, our team specializes in high-quality roofing,
            siding, and gutter services designed to enhance your property’s curb
            appeal and structural integrity.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            Whether you are dealing with storm damage or planning a modern
            exterior upgrade, we offer a seamless, stress-free experience. Our
            local expertise in Union County ensures that every project meets
            specific regional building standards and climate demands.
          </p>

          <p className="text-2xl lg:text-3xl font-bold text-[#1b2a41] leading-tight mb-6">
            Why AG Restorations?
          </p>

          {/* FAQ Style */}
          <ul className="text-gray-600 space-y-3 mb-6">
            <li>
              • <strong>Local Expertise: </strong> Serving Linden, Elizabeth,
              and Rahway for [X] years.
            </li>
            <li>
              • <strong>Certified Quality:</strong> Fully licensed and insured
              NJ contractors.
            </li>
            <li>
              • <strong>Direct Communication: </strong>: Owner-led project
              management for total transparency.
            </li>
          </ul>
          <p className="text-2xl lg:text-3xl font-bold text-[#1b2a41] leading-tight mb-6">
            Linden Service Summary-
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            AG Restorations provides professional{" "}
            <Link href="/roofing-services-linden-nj" className="text-inherit ">
              roofing
            </Link>
            , siding, and gutter services for homeowners and businesses in
            Linden, New Jersey. Our expert team specializes in durable storm
            repairs and high-quality installations, ensuring long-lasting
            protection and enhanced curb appeal for properties throughout the
            Union County region.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>
              {" "}
              What exterior services do you offer in Linden, NJ?{" "}
            </strong>
            We provide complete roofing replacements, vinyl siding installation,
            and seamless gutter repairs tailored to Linden’s local architecture.
          </p>
          {/* CTA */}
          <p className="text-gray-600 mb-8 font-bold">
            Ready to protect your home?{" "}
          </p>

          {/* Button */}
          <Link
            href="/contact-us"
            className="inline-block border-2 border-red-500 text-red-500 px-8 py-3 font-semibold tracking-wide hover:bg-red-500 hover:text-white transition"
          >
            Schedule Your Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}

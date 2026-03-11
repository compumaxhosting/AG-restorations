"use client";

import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import Link from "next/link";

export default function AboutCompany() {
  return (
    <section
      className="w-full bg-[#f3f3f3] py-16 px-6 lg:px-12"
      aria-labelledby="about-company-heading"
      aria-label="About AG Restorations roofing siding and gutter contractor serving Linden New Jersey"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="w-full h-105 relative overflow-hidden">
          <Image
            src="/about-roofing.jpg"
            alt="AG Restorations roofing contractors installing residential roof in Linden New Jersey"
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
            Trusted Roofing, Siding & Gutter Contractor in Linden NJ
          </h2>

          {/* Features */}
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#1b2a41]">
              <FiCheck className="text-red-500" aria-hidden="true" />
              LICENSED & RELIABLE
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-[#1b2a41]">
              <FiCheck className="text-red-500" aria-hidden="true" />
              EXPERIENCED PROFESSIONALS
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-[#1b2a41]">
              <FiCheck className="text-red-500" aria-hidden="true" />
              HIGH-QUALITY MATERIALS
            </div>
          </div>

          {/* Paragraph */}
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>AG Restorations</strong> is a trusted roofing contractor in
            Linden, New Jersey specializing in professional roof repair, roof
            replacement, and new roof installation for residential and
            commercial properties. Our experienced roofing team installs durable
            roofing systems designed to protect homes and businesses from harsh
            New Jersey weather while improving long-term property value.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            In addition to roofing, AG Restorations provides professional siding
            installation and gutter services for homeowners and businesses
            throughout Linden and surrounding Union County communities. From
            seamless gutter systems to high-quality siding installation, we help
            protect your property from water damage while improving curb appeal.
            We also offer <strong>100% financing</strong> options so customers
            can complete essential exterior improvements without large upfront
            costs.
          </p>

          {/* Button */}
          <Link
            href="/aboutus"
            aria-label="Learn more about AG Restorations roofing siding and gutter contractor in Linden New Jersey"
            className="inline-block border-2 border-red-500 text-red-500 px-8 py-3 font-semibold tracking-wide hover:bg-red-500 hover:text-white transition"
          >
            LEARN MORE
          </Link>
        </div>
      </div>
    </section>
  );
}

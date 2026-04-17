"use client";

import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import Link from "next/link";

export default function GutterInstallationContent() {
  return (
    <section className="w-full bg-[#f3f3f3] py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* 🔥 TOP SECTION (HALF IMAGE + HALF CONTENT SAME HEIGHT) */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-12">
          {/* IMAGE */}
          <div className="w-full h-full">
            <div className="relative w-full h-full min-h-100 overflow-hidden rounded-lg ">
              <Image
                src="/gutter-installation.webp" // 👈 your image
                alt="Gutter installation in Linden NJ"
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                quality={70}
                className="object-contain bg-[#f3f3f3]"
              />
            </div>
          </div>

          {/* INTRO CONTENT */}
          <div className="flex flex-col justify-center">
            {/* Small Heading */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-red-500"></div>
              <span className="text-sm font-semibold text-red-500 uppercase tracking-wide">
                Gutter Installation Linden NJ
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1b2a41] leading-tight mb-6">
              Professional Gutter Installation in Linden, NJ: Protect Your
              Foundation
            </h1>

            {/* Intro */}
            <p className="text-gray-600 leading-relaxed mb-4">
              When the New Jersey rain starts coming down, your gutters are the
              only thing standing between a dry basement and a costly repair
              bill.
            </p>

            <p className="text-gray-600 leading-relaxed">
              At{" "}
              <Link href="/" className="text-inherit no-underline">
                AG Restorations
              </Link>{" "}
              we specialize in seamless gutter installation, designed to
              eliminate leaks.
            </p>
          </div>
        </div>

        {/* 🔥 REST CONTENT (FULL WIDTH SAME AS BEFORE) */}
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 leading-relaxed mb-8">
            As a top-rated gutter installation and replacement services provider
            in Linden, NJ, we treat every home like our own. Our team focuses on
            precision, ensuring proper drainage and long-lasting performance.
          </p>

          {/* Features */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#1b2a41] mb-6">
              Why Choose Our Gutter Experts?
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-700">
                <FiCheck className="text-red-500 mt-1" />
                <p>
                  <strong>Seamless Gutter Installation Experts:</strong>{" "}
                  Custom-cut gutters for leak-proof fit.
                </p>
              </div>

              <div className="flex items-start gap-3 text-gray-700">
                <FiCheck className="text-red-500 mt-1" />
                <p>
                  <strong>Affordable Gutter Installers:</strong> High-quality
                  protection within budget.
                </p>
              </div>

              <div className="flex items-start gap-3 text-gray-700">
                <FiCheck className="text-red-500 mt-1" />
                <p>
                  <strong>Comprehensive Care:</strong> Handles heavy NJ storms
                  effectively.
                </p>
              </div>

              <div className="flex items-start gap-3 text-gray-700">
                <FiCheck className="text-red-500 mt-1" />
                <p>
                  <strong>Local Reliability:</strong> Serving Linden and nearby
                  areas.
                </p>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#1b2a41] mb-4">
              Gutter Installation in Linden, NJ: Direct Answer Summary
            </h2>

            <p className="text-gray-600 leading-relaxed">
              <Link href="/" className="text-inherit no-underline">
                AG Restorations
              </Link>{" "}
              provides professional gutter installation in Linden, NJ, ensuring
              reliable water management and long-term protection.
            </p>
          </div>

          {/* FAQ */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#1b2a41] mb-6">
              FAQ: Your Gutter Questions Answered
            </h2>

            <div className="space-y-5 text-gray-600">
              <p>
                <strong>Why seamless gutters?</strong>
                <br />
                Fewer leaks, stronger structure.
              </p>

              <p>
                <strong>When to replace gutters?</strong>
                <br />
                Sagging or pooling water means replacement time.
              </p>

              <p>
                <strong>Heavy rain solutions?</strong>
                <br />
                Yes, oversized systems available.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-xl font-bold text-[#1b2a41] mb-2">
              Keep Your Home Dry
            </h3>

            <p className="text-gray-600 mb-6">
              Don’t wait for the next storm—get your system checked today.
            </p>

            <Link
              href="/contact-us"
              className="inline-block bg-red-500 text-white px-6 py-3 font-semibold hover:bg-red-600 transition"
            >
              Request Your Free Gutter Estimate Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

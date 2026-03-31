"use client";

import { FiCheck } from "react-icons/fi";
import Link from "next/link";

export default function SidingInstallationContent() {
  return (
    <section className="w-full bg-[#f3f3f3] py-16 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Small Heading */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-red-500"></div>
          <span className="text-sm font-semibold text-red-500 uppercase tracking-wide">
            Siding Installation Linden NJ
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-4xl lg:text-5xl font-bold text-[#1b2a41] leading-tight mb-6">
          Professional Siding Installation in Linden, NJ: Refresh & Protect Your
          Home
        </h1>

        {/* Intro */}
        <p className="text-gray-600 leading-relaxed mb-4">
          Your home’s siding does more than just look good—it’s the first line
          of defense against New Jersey’s shifting seasons. Whether you are
          looking to lower your utility bills with energy-efficient siding
          installation in Linden, NJ, or your current exterior has seen better
          days, finding the right siding contractors in Linden, NJ is the most
          important step in the process.
        </p>

        <p className="text-gray-600 leading-relaxed mb-8">
          At{" "}
          <Link href="/" className="text-inherit no-underline">
            AG Restorations
          </Link>{" "}
          we specialize in high-quality residential siding installation and
          repair in Linden, NJ. We know that every house has its own character,
          which is why we offer everything from classic vinyl siding
          installation to durable options from a specialized fiber cement siding
          contractor. As a local Linden, NJ siding company, we focus on
          delivering a look you’ll love with the structural integrity your home
          deserves.
        </p>

        {/* Features */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#1b2a41] mb-6">
            Why We Are the Best Choice for Your Exterior
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-3 text-gray-700">
              <FiCheck className="text-red-500 mt-1" />
              <p>
                <strong>Licensed Siding Installers Near Linden, NJ:</strong>{" "}
                Fully insured professionals who know local Union County building
                codes.
              </p>
            </div>

            <div className="flex items-start gap-3 text-gray-700">
              <FiCheck className="text-red-500 mt-1" />
              <p>
                <strong>Versatile Material Options:</strong> Expertise in vinyl,
                fiber cement, and wood-look composites.
              </p>
            </div>

            <div className="flex items-start gap-3 text-gray-700">
              <FiCheck className="text-red-500 mt-1" />
              <p>
                <strong>Affordable Home Siding Installation:</strong> Premium
                results that respect your budget.
              </p>
            </div>

            <div className="flex items-start gap-3 text-gray-700">
              <FiCheck className="text-red-500 mt-1" />
              <p>
                <strong>Enhanced Curb Appeal:</strong> Modern styles that
                instantly increase your property value.
              </p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#1b2a41] mb-4">
            Siding Installation in Linden, NJ: Direct Answer Summary
          </h2>

          <p className="text-gray-600 leading-relaxed">
            <Link href="/" className="text-inherit no-underline">
              AG Restorations
            </Link>{" "}
            provides expert siding installation in Linden, NJ, for homeowners
            seeking durable, energy-efficient exterior upgrades. Our services
            include professional vinyl and fiber cement installation and
            repairs, ensuring long-lasting protection and enhanced curb appeal.
            Trust our licensed local team for high-quality, affordable siding
            solutions today.
          </p>
        </div>

        {/* FAQ */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#1b2a41] mb-6">
            FAQ: Common Questions About Siding in Linden
          </h2>

          <div className="space-y-5 text-gray-600">
            <p>
              <strong>
                How much does siding installation cost in Linden, New Jersey?
              </strong>
              <br />
              Costs vary based on material and house size, but we provide
              affordable options without sacrificing quality.
            </p>

            <p>
              <strong>What is the best material for NJ weather?</strong>
              <br />
              Vinyl is popular for low maintenance, while fiber cement (like
              James Hardie) offers superior durability and weather resistance.
            </p>

            <p>
              <strong>Do you handle small siding repairs?</strong>
              <br />
              Yes! We provide full siding repair services, from storm damage to
              loose panels.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div>
          <h3 className="text-xl font-bold text-[#1b2a41] mb-2">
            Ready for a New Look?
          </h3>

          <p className="text-gray-600 mb-6">
            Don&apos;t settle for a worn-out exterior. Contact our team for an
            honest, pressure-free estimate.
          </p>

          <Link
            href="/contact-us"
            className="inline-block bg-red-500 text-white px-6 py-3 font-semibold hover:bg-red-600 transition"
          >
            Get Your Free Siding Quote Now
          </Link>
        </div>
      </div>
    </section>
  );
}

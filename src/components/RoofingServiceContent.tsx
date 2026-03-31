"use client";

import { FiCheck } from "react-icons/fi";
import Link from "next/link";

export default function RoofingServiceContent() {
  return (
    <section className="w-full bg-[#f3f3f3] py-16 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Small Heading */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-red-500"></div>
          <span className="text-sm font-semibold text-red-500 uppercase tracking-wide">
            Roofing Services Linden NJ
          </span>
        </div>

        {/* H1 */}  
        <h1 className="text-4xl lg:text-5xl font-bold text-[#1b2a41] leading-tight mb-6">
          Expert Roofing Services in Linden, NJ: Protect Your Home or Business
        </h1>

        {/* Intro */}
        <p className="text-gray-600 leading-relaxed mb-4">
          Your roof is the only thing standing between your property and New
          Jersey’s heavy snow, summer heat, and coastal storms. When you&apos;re
          searching for roofers near Linden, NJ, you need more than a quick
          fix—you need a licensed residential roofing contractor who understands
          local building codes and the specific demands of our climate.
        </p>

        <p className="text-gray-600 leading-relaxed mb-8">
          At{" "}
          <Link href="/" className="text-inherit no-underline">
            AG Restorations
          </Link>{" "}
          we’ve earned our reputation as one of the best roofing companies in
          Linden, NJ, by focusing on transparency and quality. Whether you are
          dealing with a minor leak or need a complete roof replacement in
          Linden, NJ, we bring the expertise and professional tools to get the
          job done right the first time.
        </p>

        {/* Services */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#1b2a41] mb-6">
            Comprehensive Roofing Solutions for Union County
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-3 text-gray-700">
              <FiCheck className="text-red-500 mt-1" />
              <p>
                <strong>Residential & Commercial Roof Installation:</strong>{" "}
                Tailored systems for family homes and local businesses.
              </p>
            </div>

            <div className="flex items-start gap-3 text-gray-700">
              <FiCheck className="text-red-500 mt-1" />
              <p>
                <strong>Emergency Roof Leak Repair in Linden, NJ:</strong> Fast
                response times to prevent interior water damage.
              </p>
            </div>

            <div className="flex items-start gap-3 text-gray-700">
              <FiCheck className="text-red-500 mt-1" />
              <p>
                <strong>Flat Roof Repair and Maintenance:</strong> Specialized
                care for commercial buildings and modern residential additions.
              </p>
            </div>

            <div className="flex items-start gap-3 text-gray-700">
              <p>
                <strong>Affordable Roof Repair Services:</strong> High-quality
                craftsmanship that fits your budget without cutting corners.
              </p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#1b2a41] mb-4">
            Roofing Services in Linden, NJ: Direct Answer Summary
          </h2>

          <p className="text-gray-600 leading-relaxed">
            <Link href="/" className="text-inherit no-underline">
              AG Restorations
            </Link>{" "}
            provides professional roofing services in Linden, NJ, specializing
            in roof replacement, emergency leak repair, and flat roof
            maintenance. Serving residential and commercial clients across Union
            County, we ensure long-lasting protection and structural integrity.
            Get expert care from a licensed Linden roofing contractor today.
          </p>
        </div>

        {/* FAQ */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#1b2a41] mb-6">
            Local Roofing FAQ: What You Need to Know
          </h2>

          <div className="space-y-5 text-gray-600">
            <p>
              <strong>
                How do I know if I need a roof repair or a full replacement?
              </strong>
              <br />
              Most roofing contractors will look for missing shingles, granule
              loss, or persistent leaks. If your roof is over 20 years old, a
              replacement is often more cost-effective than constant repairs.
            </p>

            <p>
              <strong>Do you offer emergency services for storm damage?</strong>
              <br />
              Yes, we prioritize emergency roof leak repair to secure your home
              immediately after a storm, preventing mold and structural damage.
            </p>

            <p>
              <strong>
                Is AG Restorations a licensed and insured roofing company?
              </strong>
              <br />
              Absolutely. We are fully licensed and insured, providing complete
              documentation to meet all safety standards in Linden, New Jersey.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div>
          <h3 className="text-xl font-bold text-[#1b2a41] mb-2">
            Take the Next Step
          </h3>

          <p className="text-gray-600 mb-6">
            Don&apos;t wait for a small leak to become a major headache. As your
            local roofing company in Linden, NJ, we offer honest inspections and
            clear estimates.
          </p>

          <Link
            href="/contact-us"
            className="inline-block bg-red-500 text-white px-6 py-3 font-semibold hover:bg-red-600 transition"
          >
            Schedule Your Free Roof Inspection Today
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import { FiCheck } from "react-icons/fi";
import Link from "next/link";

export default function GutterInstallationContent() {
  return (
    <section className="w-full bg-[#f3f3f3] py-16 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
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
          When the New Jersey rain starts coming down, your gutters are the only
          thing standing between a dry basement and a costly repair bill. If
          you’ve been searching for a reliable gutter installer near me, you
          know that not all systems are created equal. At AG Restorations, we
          specialize in seamless gutter installation, designed to eliminate
          leaks and move water safely away from your home’s foundation.
        </p>

        <p className="text-gray-600 leading-relaxed mb-8">
          As a top-rated gutter installation and replacement services provider
          in Linden, NJ, we treat every home like our own. Our team of
          residential gutter installation contractors focuses on precision,
          ensuring your downspouts and hangers are perfectly pitched for maximum
          drainage. Whether you need a simple upgrade or a full system overhaul,
          we provide the best gutter installation company experience in Union
          County—honest, efficient, and built to last.
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
                <strong>Seamless Gutter Installation Experts:</strong> We
                custom-cut our gutters on-site to ensure a perfect, leak-proof
                fit for your home.
              </p>
            </div>

            <div className="flex items-start gap-3 text-gray-700">
              <FiCheck className="text-red-500 mt-1" />
              <p>
                <strong>Affordable Gutter Installers:</strong>{" "}
                Professional-grade protection that won&apos;t break your budget.
              </p>
            </div>

            <div className="flex items-start gap-3 text-gray-700">
              <FiCheck className="text-red-500 mt-1" />
              <p>
                <strong>Comprehensive Care:</strong> Specialized downspout and
                gutter installation services to handle even the heaviest NJ
                storms.
              </p>
            </div>

            <div className="flex items-start gap-3 text-gray-700">
              <FiCheck className="text-red-500 mt-1" />
              <p>
                <strong>Local Reliability:</strong> Proudly serving Linden,
                Elizabeth, and Rahway with verified local expertise.
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
            provides professional gutter installation in Linden, NJ, for
            homeowners needing reliable water management. Our service includes
            custom seamless gutter installation and downspout setup, ensuring
            maximum foundation protection. Trust our affordable gutter
            installers for high-quality, long-lasting drainage solutions across
            Union County today.
          </p>
        </div>

        {/* FAQ */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#1b2a41] mb-6">
            FAQ: Your Gutter Questions Answered
          </h2>

          <div className="space-y-5 text-gray-600">
            <p>
              <strong>
                Why should I choose seamless gutters over traditional ones?
              </strong>
              <br />
              Traditional gutters have seams where leaks usually start. Seamless
              systems use a single piece, making them stronger and reducing
              leaks and clogs.
            </p>

            <p>
              <strong>How often should I replace my gutters?</strong>
              <br />
              If you notice sagging, rust, or water pooling near your
              foundation, it’s time to call a professional. Most systems last
              20+ years with proper maintenance.
            </p>

            <p>
              <strong>Do you offer different sizes for heavy rain?</strong>
              <br />
              Yes, we provide oversized downspouts and gutter systems to handle
              heavy New Jersey rainfall.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div>
          <h3 className="text-xl font-bold text-[#1b2a41] mb-2">
            Keep Your Home Dry
          </h3>

          <p className="text-gray-600 mb-6">
            Don’t wait for the next big storm to realize your gutters aren’t
            working. Contact our team for a quick and honest assessment.
          </p>

          <Link
            href="/contact-us"
            className="inline-block bg-red-500 text-white px-6 py-3 font-semibold hover:bg-red-600 transition"
          >
            Request Your Free Gutter Estimate Today
          </Link>
        </div>
      </div>
    </section>
  );
}

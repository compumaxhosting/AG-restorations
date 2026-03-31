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
            src="/about-roofing.webp" // ✅ convert to webp
            alt="AG Restorations roofing contractors installing residential roof in Linden New Jersey"
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            quality={70} // ✅ compress
            loading="lazy" // ✅ below-the-fold
            decoding="async" // ✅ faster render
            placeholder="blur"
            blurDataURL="/blur.jpg" // tiny base64 or small image
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
          <h2
            id="about-company-heading"
            className="text-4xl lg:text-5xl font-bold text-[#1b2a41] leading-tight mb-6"
          >
            About AG Restorations: Your Local Exterior Specialists
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
          <p className="text-gray-600 leading-relaxed mb-4">
            When you’re looking for someone to work on your home, you want more
            than just a contractor—you want a neighbor who knows the area.
            That’s exactly who we are. Based right here in Linden, New Jersey,
            AG Restorations is a local team dedicated to keeping homes and
            businesses throughout Union County safe, dry, and looking their
            best.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            We’ve spent years on roofs and ladders across towns like Elizabeth,
            Rahway, and Westfield. We know how tough the Jersey weather can be,
            which is why we specialize in high-quality roof installation for
            residential and commercial properties, along with expert{" "}
            <Link href="/siding-installation-linden-nj">
              siding installation
            </Link>{" "}
            and reliable gutter services. We only use materials we’d trust on
            our own homes because, for us, it’s about building a reputation for
            being honest, reliable, and easy to work with.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            <Link href="/" className="text-inherit no-underline">
              AG Restorations
            </Link>{" "}
            offers professional Roof Repair & Replacement, Gutter Installation &
            Seamless Gutter Systems, Siding Installation & Repair in Linden, New
            Jersey, for homeowners who want reliable, high-quality exterior
            care. Our service covers everything from full installations to
            precision repairs, ensuring your home stays protected. Enjoy peace
            of mind and better curb appeal with our expert local team.
          </p>

          {/* FAQ Style */}
          <ul className="text-gray-600 space-y-3 mb-6">
            <li>
              • <strong>What specific services do you provide?</strong> We
              handle full roof installations for both homes and businesses,
              professional siding setups, and complete gutter services to keep
              water away from your foundation.
            </li>
            <li>
              • <strong>Where do you work?</strong> We’re based in Linden, but
              we’re out every day serving neighbors in Rahway, Roselle,
              Elizabeth, and the rest of Union County.
            </li>
          </ul>

          {/* CTA */}
          <p className="text-gray-600 mb-8">
            Got a question about your roof, siding, or gutters?{" "}
            <Link
              href="/contact"
              className="text-red-500 font-semibold hover:underline"
            >
              Reach out for a free estimate
            </Link>{" "}
            — we’re happy to take a look and give you an honest assessment.
          </p>

          {/* Button */}
          <Link
            href="/aboutus"
            className="inline-block border-2 border-red-500 text-red-500 px-8 py-3 font-semibold tracking-wide hover:bg-red-500 hover:text-white transition"
          >
            LEARN MORE
          </Link>
        </div>
      </div>
    </section>
  );
}
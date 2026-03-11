"use client";

import Link from "next/link";
import { FaCreditCard } from "react-icons/fa";

export default function FinancingSection() {
  return (
    <section
      className="w-full bg-[#cc2a18] text-white py-4 px-6"
      aria-label="Roofing financing options available"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        {/* Text */}
        <p className="font-semibold text-base flex items-center gap-2">
          <FaCreditCard aria-hidden="true" />
          <span>
            100% Financing Available for Roofing, Siding & Gutter Projects in
            Linden NJ.
          </span>
        </p>

        {/* Button */}
        <Link
          href="/contact-us"
          className="bg-white text-[#cc2a18] font-semibold px-4 py-2 text-sm rounded hover:bg-gray-100 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Apply for roofing financing"
        >
          APPLY NOW
        </Link>
      </div>
    </section>
  );
}

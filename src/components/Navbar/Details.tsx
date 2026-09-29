"use client";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Details() {
  return (
    <section
      className="w-full bg-white border-b border-gray-200"
      aria-label="Contact and location details"
    >
      <div className="mx-auto w-full max-w-7xl px-4 pb-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm md:grid-cols-3">

          {/* Phone */}
          <a
            href="tel:+19733424134"
            aria-label="Call AG Restorations at (973) 342-4134"
            className="group flex items-center gap-4 border-b border-gray-200 px-5 py-5 transition-all duration-300 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cc2a18] focus-visible:ring-inset md:border-b-0 md:border-r sm:px-6"
          >
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#cc2a18]/10 text-[#cc2a18] transition-all duration-300 group-hover:bg-[#cc2a18] group-hover:text-white"
              aria-hidden="true"
            >
              <FaPhone className="text-lg" />
            </span>

            <span className="min-w-0">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
                Call Us
              </span>

              <span className="block truncate text-base font-bold text-gray-900 sm:text-lg">
                (973) 342-4134
              </span>

              <span className="mt-0.5 block text-sm text-gray-500">
                Speak with our team
              </span>
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:info@agrestorations.com"
            aria-label="Email AG Restorations at info@agrestorations.com"
            className="group flex items-center gap-4 border-b border-gray-200 px-5 py-5 transition-all duration-300 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cc2a18] focus-visible:ring-inset md:border-b-0 md:border-r sm:px-6"
          >
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#cc2a18]/10 text-[#cc2a18] transition-all duration-300 group-hover:bg-[#cc2a18] group-hover:text-white"
              aria-hidden="true"
            >
              <FaEnvelope className="text-lg" />
            </span>

            <span className="min-w-0">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
                Email Us
              </span>

              <span className="block truncate text-base font-bold text-gray-900 sm:text-lg">
                info@agrestorations.com
              </span>

              <span className="mt-0.5 block text-sm text-gray-500">
                Send us a message
              </span>
            </span>
          </a>

          {/* Location */}
          <a
            href="https://maps.app.goo.gl/AwatzYKytemafEPo6"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View AG Restorations location on Google Maps"
            className="group flex items-start gap-4 px-5 py-5 transition-all duration-300 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cc2a18] focus-visible:ring-inset sm:px-6"
          >
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#cc2a18]/10 text-[#cc2a18] transition-all duration-300 group-hover:bg-[#cc2a18] group-hover:text-white"
              aria-hidden="true"
            >
              <FaMapMarkerAlt className="text-lg" />
            </span>

            <span className="min-w-0 flex-1">
              <span className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
                Location
                <FaArrowUpRightFromSquare
                  className="text-[10px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>

              <span className="block text-sm font-bold leading-5 text-gray-900 sm:text-base">
                837 Kennedy Blvd, Bayonne, NJ 07002, USA
              </span>

            </span>
          </a>

        </div>
      </div>
    </section>
  );
}

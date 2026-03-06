"use client";

import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function TopBar() {
  return (
    <div
      className="bg-[#1c1c27] text-white px-6 text-[15px] h-13 font-bevietnam"
      role="banner"
    >
      <div className="flex justify-between items-center h-full">
        {/* Decorative shape left side */}
        <div
          className="w-109 h-full bg-[#e63a27] [clip-path:polygon(0_0,90%_0,100%_100%,0%_100%)]"
          aria-hidden="true"
        />

        <div className="flex items-center h-full">
          {/* Desktop Contact Info */}
          <address className="not-italic hidden xl:flex items-center pr-4 divide-x divide-white/30">
            <Link
              href="tel:+1973820-5130"
              className="flex items-center text-base gap-2 pr-4 hover:text-[#e63a27] transition-colors"
              aria-label="Call us at (973) 820-5130"
            >
              <FaPhoneAlt className="text-[#e63a27]" aria-hidden="true" />
              <span>(973) 820-5130</span>
            </Link>
            <div className="flex items-center text-base gap-2 px-4">
              <FaEnvelope className="text-[#e63a27]" aria-hidden="true" />
              <span>Linden, New Jersey</span>
            </div>
          </address>

          {/* Mobile Social Icons */}
          <div className="flex items-center pl-4 text-white text-base">
            <span className="mr-3" aria-hidden="true">
              Follow On:
            </span>
            <div className="flex items-center divide-x divide-white/30">
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page (opens in new tab)"
                className="pr-3 text-[#e63a27] transition-colors"
              >
                <FaFacebookF aria-hidden="true" />
              </Link>
              <Link
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our TikTok page (opens in new tab)"
                className="pl-3 text-[#e63a27] transition-colors"
              >
                <FaTiktok aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

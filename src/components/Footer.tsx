"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1c1c27] text-white text-sm">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 pt-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          PROFESSIONAL ROOFING & REMODELING IN LINDEN, NEW JERSEY
        </h2>
      </div>

      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-12 grid md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-2">About AG Restorations</h3>
          <div className="w-12 h-0.5 bg-[#e63a27] mb-4"></div>

          <p className="text-white/90 leading-relaxed">
            AG Restorations is a trusted roofing and remodeling company serving
            Linden and surrounding New Jersey areas. We specialize in
            residential and commercial roofing, metal roof repair, flat roofing
            systems, insulation, painting, and exterior improvements.
          </p>

          <div className="mt-6">
            <p className="font-semibold">Business Hours</p>
            <p className="text-white/80">Mon - Sat: 8:00 AM – 6:00 PM</p>
          </div>

          <Link
            href="/about"
            className="inline-block mt-6 bg-[#e63a27] px-6 py-3 font-semibold hover:bg-red-600 transition"
          >
            Learn More
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <div className="w-12 h-0.5 bg-[#e63a27] mb-4"></div>

          <ul className="space-y-3">
            <li>
              <Link href="/" className="hover:text-[#e63a27]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#e63a27]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#e63a27]">
                Services
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-[#e63a27]">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="hover:text-[#e63a27]">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#e63a27]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-2">Contact Information</h3>
          <div className="w-12 h-0.5 bg-[#e63a27] mb-4"></div>

          <p className="font-semibold">General Inquiries</p>

          <p className="mt-2">
            Phone:{" "}
            <a href="tel:+19738205130" className="hover:underline">
              +1 (973) 820-5130
            </a>
          </p>

          <p className="mt-2">Email: Contact via Website Form</p>

          <div className="mt-6">
            <p className="font-semibold">Service Area</p>
            <p className="text-white/90">Linden, New Jersey</p>
            <p className="text-white/80">Serving surrounding NJ communities.</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#00254c]">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm">
          © {new Date().getFullYear()} AG Restorations. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

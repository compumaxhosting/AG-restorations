"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import BackToTop from "./BackToTop";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-[#1c1c27] text-white text-sm border-t border-white/10"
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 pt-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          Professional Roofing, Siding & Gutters in Bayonne, New Jersey
        </h2>
      </div>

      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-12 grid md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-2">About AG Restorations</h3>
          <div className="w-12 h-0.5 bg-[#e63a27] mb-4"></div>

          <p className="text-white/90 leading-relaxed">
            AG Restorations is a trusted roofing contractor serving Bayonne and
            surrounding New Jersey communities. We specialize in residential and
            commercial roofing, siding installation, and seamless gutter
            services designed to protect homes and businesses.
          </p>

          <div className="mt-6">
            <p className="font-semibold">Business Hours</p>
            <p className="text-white/80">Mon - Sat: 8:00 AM – 6:00 PM</p>
          </div>

          <Link
            href="/aboutus"
            className="inline-block mt-6 bg-[#e63a27] px-6 py-3 font-semibold hover:bg-red-600 transition-colors duration-300"
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
              <Link
                href="/"
                className="hover:text-[#e63a27] transition-colors duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/aboutus"
                className="hover:text-[#e63a27] transition-colors duration-300"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/services"
                className="hover:text-[#e63a27] transition-colors duration-300"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                href="/projects"
                className="hover:text-[#e63a27] transition-colors duration-300"
              >
                Projects
              </Link>
            </li>

            {/* <li>
              <Link
                href="/reviews"
                className="hover:text-[#e63a27] transition-colors duration-300"
              >
                Reviews
              </Link>
            </li> */}

            <li>
              <Link
                href="/contact-us"
                className="hover:text-[#e63a27] transition-colors duration-300"
              >
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
            <a
              href="tel:+19733424134"
              className="hover:underline"
              aria-label="Call AG Restorations"
            >
              +1 973 342 4134
            </a>
          </p>

          <p className="mt-2">
            Email:{" "}
            <a
              href="mailto:info@agrestorations.com"
              aria-label="Send email to AG Restorations"
              className="text-[#e63a27] hover:underline font-medium"
            >
              info@agrestorations.com
            </a>
          </p>

          <div className="mt-6">
            <p className="font-semibold">Location</p>

            <a
              href="https://maps.google.com/?q=837+Kennedy+Blvd,+Bayonne,+NJ+07002"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:underline"
              aria-label="View AG Restorations location on Google Maps"
            >
              837 Kennedy Blvd, Bayonne, NJ 07002, USA
            </a>

            <p className="text-white/80">
              Serving Union County and surrounding NJ communities.
            </p>
          </div>

          {/* Social Media */}
          <div className="mt-6">
            <p className="font-semibold mb-3">Follow Us</p>

            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/18KcQSnH8d/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="AG Restorations Facebook"
                className="bg-[#e63a27] hover:bg-red-600 hover:scale-110 transition duration-300 rounded-full w-10 h-10 flex items-center justify-center"
              >
                <FaFacebookF className="text-white text-lg" />
              </a>

              <a
                href="https://www.instagram.com/ag.restorationslinden"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="AG Restorations Instagram"
                className="bg-[#e63a27] hover:bg-red-600 hover:scale-110 transition duration-300 rounded-full w-10 h-10 flex items-center justify-center"
              >
                <FaInstagram className="text-white text-lg" />
              </a>

              <a
                href="https://www.tiktok.com/@ag.roofing.siding"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="AG Restorations TikTok"
                className="bg-[#e63a27] hover:bg-red-600 hover:scale-110 transition duration-300 rounded-full w-10 h-10 flex items-center justify-center"
              >
                <FaTiktok className="text-white text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#00254c]">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm">
          © {new Date().getFullYear()} AG Restorations. All Rights Reserved.
        </div>
      </div>

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RoofingContractor",
            name: "AG Restorations",
            url: "https://agrestorations.com",
            telephone: "+1-973-342-4134",
            email: "info@agrestorations.com",
            areaServed: "Union County, New Jersey",
            address: {
              "@type": "PostalAddress",
              streetAddress: "837 Kennedy Blvd",
              postalCode: "07002",
              addressLocality: "Bayonne",
              addressRegion: "NJ",
              addressCountry: "US",
            },
          }),
        }}
      />

      <BackToTop />
    </footer>
  );
}

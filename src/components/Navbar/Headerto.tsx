"use client";

import { useState, useCallback } from "react";
import { Mail, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import Link from "next/link";
import GoogleTranslateWidget from "../GoogleTranslateWidget";

/* ================= CONSTANTS ================= */

const navLinks = [
  { label: "HOME", path: "/" },
  { label: "ABOUT US", path: "/aboutus" },
  { label: "SERVICES", path: "/services" },
  { label: "PROJECTS", path: "/projects" },
  { label: "BLOG", path: "/blog" },
  { label: "CONTACT US", path: "/contact-us" },
];

const services = [
  {
    label: "Roofing",
    path: "/roofing-services-linden-nj",
  },
  {
    label: "Siding",
    path: "/siding-installation-linden-nj",
  },
  {
    label: "Gutter",
    path: "/gutter-installation-linden-nj",
  },
];

export default function Headerto() {
  const [open, setOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  const openMenu = useCallback(() => setOpen(true), []);
  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <div className="relative">
      {/* ================= MOBILE HEADER ================= */}
      <div className="flex md:hidden items-center justify-between h-36 px-4 bg-[#e63a27]">
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/logo.avif"
            alt="AG Restorations Logo"
            width={160}
            height={100}
            className="h-28 w-auto object-contain cursor-pointer"
            priority
          />
        </Link>
        <button onClick={openMenu}>
          <Menu size={32} className="text-white" />
        </button>
      </div>

      {/* ================= DESKTOP LOGO ================= */}
      <div className="hidden md:block absolute left-0 top-0 h-34 w-[clamp(260px,35vw,520px)] z-50">
        <div className="w-full h-11 bg-[#e63a27] [clip-path:polygon(0_0,92%_0,100%_100%,0%_100%)]" />
        <div className="w-[75%] h-22.5 bg-[#e63a27] [clip-path:polygon(0_0,100%_0,88%_100%,0%_100%)]" />

        <div className="absolute inset-0 flex items-center pl-[clamp(10px,3vw,40px)]">
          <Link href="/" aria-label="Go to homepage">
            <Image
              src="/logo.avif"
              alt="AG Restorations Logo"
              width={260}
              height={100}
              className="h-[clamp(60px,8vw,110px)] w-auto object-contain cursor-pointer"
              priority
            />
          </Link>
        </div>
      </div>

      {/* ================= TOP BAR ================= */}
      <div className="hidden md:flex h-11 bg-[#1f2330] text-white text-[13px] pl-[clamp(260px,35vw,520px)]">
        <div className="max-w-300 mx-auto flex justify-end items-center w-full px-4 gap-24">
          <div className="flex items-center gap-6">
            <a
              href="tel:+19733424134"
              className="flex items-center gap-2 group"
              aria-label="Call 973 342 4134"
            >
              <Phone
                size={22}
                className="text-[#e5391c] group-hover:scale-110 transition"
              />
              <span className="font-medium group-hover:underline">
                973 342 4134
              </span>
            </a>

            <div className="h-4 w-px bg-white/30" />

            <a
              href="mailto:info@agrestorations.com"
              className="hidden lg:flex items-center gap-2 group"
              aria-label="Email info@agrestorations.com"
            >
              <Mail
                size={22}
                className="text-[#e5391c] group-hover:scale-110 transition"
              />
              <span className="font-medium group-hover:underline">
                info@agrestorations.com
              </span>
            </a>
          </div>

          <div className="flex items-center gap-5">
            <GoogleTranslateWidget />

            <div className="flex gap-3 items-center">
              <span className="hidden sm:block">Follow On:</span>

              <Link
                href="https://www.facebook.com/share/18KcQSnH8d/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <FaFacebookF className="icon cursor-pointer" />
              </Link>

              <div className="divider" />

              <Link
                href="https://www.instagram.com/ag.restorationslinden"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <FaInstagram className="icon cursor-pointer" />
              </Link>

              <div className="divider" />

              <Link
                href="https://www.tiktok.com/@ag.roofing.siding"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <SiTiktok className="icon cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN HEADER ================= */}
      <header className="hidden md:block bg-[#f2f2f2] pl-[clamp(260px,35vw,520px)]">
        <div className="flex items-center h-23">
          <div className="max-w-300 mx-auto flex justify-end items-center w-full px-2 lg:px-8">
            <nav className="hidden md:flex gap-8 xl:gap-12 text-[14px] font-semibold text-[#1f2d3d]">
              {navLinks.map((item) =>
                item.label === "SERVICES" ? (
                  <div key={item.path} className="relative group">
                    {/* CLICK → GO TO /services */}
                    <Link
                      href="/services"
                      className="flex items-center gap-1 cursor-pointer"
                    >
                      {item.label}
                      <span className="text-xs">▼</span>
                    </Link>

                    {/* HOVER DROPDOWN */}
                    <div className="absolute left-0 top-full mt-2 w-28 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-9999">
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          href={service.path}
                          className="block px-4 py-3 hover:bg-gray-100 text-sm"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link key={item.path} href={item.path}>
                    {item.label}
                  </Link>
                ),
              )}
            </nav>

            <Link href="/contact-us">
              <button className="hidden md:block bg-[#e5391c] text-white mx-4 xl:mx-7 px-4 h-23 font-semibold text-[14px] whitespace-nowrap">
                GET A QUOTE
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={closeMenu}
        />

        <aside
          className={`absolute top-0 right-0 w-[85%] max-w-80 h-full bg-black text-white transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button onClick={closeMenu}>
              <X size={26} />
            </button>
          </div>

          <div className="relative w-full h-20 mb-6 px-6">
            <Image
              src="/logo.avif"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>

          <div>
            {navLinks.map((item) =>
              item.label === "SERVICES" ? (
                <div key={item.path}>
                  <button
                    onClick={() => setMobileDropdown(!mobileDropdown)}
                    className="block w-full text-left border-t border-gray-700 px-6 py-4 text-lg"
                  >
                    {item.label} <span className="text-xs ml-1">▼</span>
                  </button>

                  {mobileDropdown && (
                    <div className="bg-black">
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          href={service.path}
                          onClick={closeMenu}
                          className="block px-8 py-3 text-sm border-t border-gray-800"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={closeMenu}
                  className="block border-t border-gray-700 px-6 py-4 text-lg"
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>
          <div className="px-6 py-4">
            <GoogleTranslateWidget variant="mobile" />
          </div>
        </aside>
      </div>

      {/* ================= STYLES ================= */}
      <style jsx>{`
        .icon {
          cursor: pointer;
          color: #e5391c;
        }
        .divider {
          height: 16px;
          width: 1px;
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}

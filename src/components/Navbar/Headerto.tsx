"use client";

import { useState, useCallback } from "react";
import { Mail, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import Link from "next/link";

/* ================= CONSTANTS ================= */
const navLinks = [
  { label: "HOME", path: "/" },
  { label: "ABOUT US", path: "/aboutus" },
  { label: "SERVICES", path: "/services" },
  { label: "PROJECTS", path: "/projects" },
  { label: "BLOG", path: "/blog" },
  { label: "CONTACT US", path: "/contact-us" },
];

export default function Headerto() {
  const [open, setOpen] = useState(false);

  const openMenu = useCallback(() => setOpen(true), []);
  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <div className="relative overflow-hidden">
      {/* ================= MOBILE HEADER ================= */}
      <div className="flex md:hidden items-center justify-between h-36 px-4 bg-[#e63a27]">
        <Image
          src="/logo.avif"
          alt="AG Restorations Logo"
          width={160}
          height={100}
          className="h-28 w-auto object-contain"
          priority
        />

        <button onClick={openMenu} aria-label="Open menu">
          <Menu size={32} className="text-white" />
        </button>
      </div>

      {/* ================= DESKTOP LOGO ================= */}
      <div className="hidden md:block absolute left-0 top-0 h-34 w-[clamp(260px,35vw,520px)] z-50">
        <div className="w-full h-11 bg-[#e63a27] [clip-path:polygon(0_0,92%_0,100%_100%,0%_100%)]" />
        <div className="w-[75%] h-22.5 bg-[#e63a27] [clip-path:polygon(0_0,100%_0,88%_100%,0%_100%)]" />

        <div className="absolute inset-0 flex items-center pl-[clamp(10px,3vw,40px)]">
          <Image
            src="/logo.avif"
            alt="AG Restorations Logo"
            width={260}
            height={100}
            className="h-[clamp(60px,8vw,110px)] w-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* ================= TOP BAR ================= */}
      <div className="hidden md:flex h-11 bg-[#1f2330] text-white text-[13px] pl-[clamp(260px,35vw,520px)]">
        <div className="max-w-300 mx-auto flex justify-end items-center w-full px-4 gap-24">
          {/* LEFT */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={22} className="text-[#e5391c]" />
              <span>973 342 4134</span>
            </div>

            <div className="h-4 w-px bg-white/30" />

            <div className="hidden lg:flex items-center gap-2">
              <Mail size={22} className="text-[#e5391c]" />
              <span>Bayonne, New Jersey</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-5">
            <button className="bg-black px-3 py-1.5 rounded text-xs">
              Translate
            </button>

            <div className="flex gap-3 items-center">
              <span className="hidden sm:block">Follow On:</span>

              <FaFacebookF className="icon" />
              <div className="divider" />
              <FaInstagram className="icon" />
              <div className="divider" />
              <SiTiktok className="icon" />
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN HEADER ================= */}
      <header className="hidden md:block bg-[#f2f2f2] pl-[clamp(260px,35vw,520px)]">
        <div className="flex items-center h-23">
          <div className="max-w-300 mx-auto flex justify-end items-center w-full px-2 lg:px-8">
            <nav className="hidden md:flex gap-8 xl:gap-12 text-[14px] font-semibold text-[#1f2d3d]">
              {navLinks.map((item) => (
                <Link key={item.path} href={item.path}>
                  {item.label}
                </Link>
              ))}
            </nav>

            <button className="hidden md:block bg-[#e5391c] text-white mx-4 xl:mx-7 px-4 h-23 font-semibold text-[14px] whitespace-nowrap">
              GET A QUOTE
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* OVERLAY */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={closeMenu}
        />

        {/* SIDEBAR */}
        <aside
          className={`absolute top-0 right-0 w-[85%] max-w-80 h-full bg-black text-white transform transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* CLOSE */}
          <div className="flex justify-end p-4">
            <button onClick={closeMenu} aria-label="Close menu">
              <X size={26} />
            </button>
          </div>

          {/* LOGO */}
          <div className="relative w-full h-20 mb-6 px-6">
            <Image
              src="/logo.avif"
              alt="AG Restorations Logo"
              fill
              className="object-contain"
            />
          </div>

          {/* MENU + SOCIAL */}
          <div className="flex flex-col h-[calc(100%-140px)]">
            {/* LINKS */}
            <div>
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={closeMenu}
                  className="block border-t border-gray-700 px-6 py-4 text-lg"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* SOCIAL */}
            <div className="mt-auto px-6 py-6 flex justify-center gap-4 border-t border-gray-700">
              <FaFacebookF className="social-icon" />
              <FaInstagram className="social-icon" />
              <SiTiktok className="social-icon" />
            </div>
          </div>
        </aside>
      </div>

      {/* ================= REUSABLE STYLES ================= */}
      <style jsx>{`
        .icon {
          cursor: pointer;
          color: #e5391c;
          transition: 0.2s;
        }
        .icon:hover {
          color: #ef4444;
        }
        .divider {
          height: 16px;
          width: 1px;
          background: rgba(255, 255, 255, 0.3);
        }
        .social-icon {
          font-size: 24px;
          cursor: pointer;
          transition: transform 0.2s;
        }
        .social-icon:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}

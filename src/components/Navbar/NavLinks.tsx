"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const navItems = [
  { label: "HOME", path: "/" },
  { label: "ABOUT US", path: "/aboutus" },
  { label: "SERVICES", path: "/services" },
  { label: "PROJECTS", path: "/projects" },
  { label: "BLOG", path: "/blog" },
  { label: "CONTACT US", path: "/contact-us" },
];

export default function NavLinks() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + "/");

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className="flex items-center h-full w-full justify-end"
        aria-label="Primary Navigation"
      >
        <ul className="flex gap-5 text-sm font-semibold text-[#003269] items-stretch h-full w-full justify-end">
          {navItems.map(({ label, path }) => (
            <li key={label} className="hidden md:flex items-center h-full">
              <Link
                href={path}
                className={`px-3 flex items-center hover:text-[#e63a27] transition-colors duration-200 ${
                  isActive(path) ? "text-[#e63a27]" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}

          {/* Mobile Menu Button */}
          <li className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open mobile navigation menu"
              className="border-2 border-[#e63a27] p-2 rounded"
            >
              <Image
                src="/Navbar/menu3.png"
                alt="Open menu"
                width={28}
                height={28}
                priority
              />
            </button>
          </li>

          {/* CTA Button */}
          <li className="hidden md:flex">
            <Link
              href="/contact-us"
              className="bg-[#e63a27] hover:bg-red-600 transition-colors duration-300 text-white font-semibold px-6 flex items-center h-full"
            >
              GET A QUOTE
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 flex justify-end transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="w-full bg-black/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`w-[85%] max-w-sm h-full bg-[#003269] text-white relative flex flex-col transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close mobile navigation menu"
            className="absolute top-4 right-4 bg-[#e63a27] text-white w-8 h-8 rounded-full flex items-center justify-center"
          >
            ✕
          </button>

          <Link
            href="/"
            className="flex justify-center p-6"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/Navbar/Logo-AG.png"
              alt="AG Restorations Company Logo"
              width={220}
              height={120}
              priority
            />
          </Link>

          <nav className="flex flex-col mt-4">
            {navItems.map(({ label, path }) => (
              <Link
                key={label}
                href={path}
                onClick={() => setIsOpen(false)}
                className={`border-t border-white/20 last:border-b px-6 py-4 transition-colors duration-200 ${
                  isActive(path)
                    ? "text-[#e63a27]"
                    : "hover:bg-white hover:text-black"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex justify-center gap-4 py-6">
            <Link
              href="https://www.facebook.com/share/18KcQSnH8d/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="bg-[#e63a27] hover:bg-red-600 transition rounded-full w-10 h-10 flex items-center justify-center"
            >
              <FaFacebookF className="text-white text-lg" />
            </Link>

            <Link
              href="https://www.instagram.com/ag.restorationslinden"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="bg-[#e63a27] hover:bg-red-600 transition rounded-full w-10 h-10 flex items-center justify-center"
            >
              <FaInstagram className="text-white text-lg" />
            </Link>

            <Link
              href="https://www.tiktok.com/@ag.roofing.siding"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="bg-[#e63a27] hover:bg-red-600 transition rounded-full w-10 h-10 flex items-center justify-center"
            >
              <FaTiktok className="text-white text-lg" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

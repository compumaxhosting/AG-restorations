"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { Inter } from "next/font/google";

const navItems = [
  { label: "HOME", path: "/" },
  { label: "ABOUT US", path: "/aboutus" },
  {
    label: "SERVICES",
    path: "/services",
    // subItems: [
    //   { label: "Roofing", path: "/roofing-contractors-brooklyn" },
    //   { label: "Waterproofing", path: "/waterproofing-contractors-NY" },
    //   { label: "Masonry", path: "/masonry-services-brooklyn-ny" },
    // ],
  },
  { label: "PROJECTS", path: "/projects" },
  { label: "BLOG", path: "/blog" },
  { label: "CONTACT US", path: "/contact-us" },
];

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function NavLinks() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="flex items-center h-full w-full justify-end">
        <ul
          className={`flex gap-4 text-sm font-semibold text-[#003269] items-stretch h-full w-full justify-end ${inter.className}`}
        >
          {navItems.map(({ label, path }) => {
            const isActive =
              pathname === path || pathname.startsWith(path + "/");

            return (
              <li
                key={label}
                className="hidden desktop-nav-item items-center relative h-full"
              >
                <Link
                  href={path}
                  className={`px-2 flex items-center gap-1 hover:text-[#e63a27] ${
                    isActive ? "text-[#e63a27]" : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}

          {/* Mobile menu button */}
          <li className="flex mobile-nav-item items-center gap-2">
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open mobile navigation menu"
              className="md:hidden border-2 border-white p-2"
            >
              <Image
                src="/Navbar/menu4.png"
                alt="Open menu icon"
                width={28}
                height={28}
                className="object-contain"
              />
            </button>

            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open mobile navigation menu"
              className="hidden md:block border-2 border-[#e63a27] p-2"
            >
              <Image
                src="/Navbar/menu3.png"
                alt="Open menu icon"
                width={28}
                height={28}
                className="object-contain"
              />
            </button>
          </li>

          {/* Get Quote */}
          <li>
            <Link
              href="/contact-us"
              className="bg-[#e5392c] hover:bg-[#e63a27] transition-colors text-white font-semibold px-6 flex items-center get-hover-button h-full"
            >
              GET A QUOTE
            </Link>
          </li>
        </ul>
      </nav>

      {/* Sidebar */}
      <div className="fixed inset-0 z-50 flex justify-end pointer-events-none">
        <div
          className={`w-[60%] bg-black/30 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`w-[40%] h-full bg-[#003269] text-white relative flex flex-col transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-3 right-3 bg-[#e63a27] text-white w-8 h-8 rounded-full flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>

          <Link href="/" className="flex justify-center p-6">
            <Image
              src="/Navbar/Logo.png"
              alt="Company Logo"
              width={260}
              height={130}
              className="object-contain cursor-pointer"
            />
          </Link>

          <nav className="flex flex-col mt-4">
            {navItems.map(({ label, path }) => (
              <Link
                key={label}
                href={path}
                className={`border-t border-white/20 last:border-b px-6 py-4 transition-colors ${
                  pathname === path || pathname.startsWith(path + "/")
                    ? "text-[#e63a27]"
                    : "hover:bg-white hover:text-black"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="mt-auto flex justify-center gap-4 py-6">
            <a
              href="https://www.facebook.com/share/18KcQSnH8d/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e63a27] rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Visit our Facebook page"
            >
              <FaFacebookF className="text-white text-lg" />
            </a>

            <a
              href="https://www.instagram.com/ag.restorationslinden"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e63a27] rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Visit our Instagram page"
            >
              <FaInstagram className="text-white text-lg" />
            </a>

            <a
              href="https://www.tiktok.com/@ag.roofing.siding?_r=1&_t=ZP-94RpOT4meK6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e63a27] rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Visit our TikTok page"
            >
              <FaTiktok className="text-white text-lg" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

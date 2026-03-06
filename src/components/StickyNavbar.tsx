"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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

export default function StickyNavbar() {
  const [showSticky, setShowSticky] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showSticky) return null;

  return (
    <div className="hidden desktop-nav-item fixed top-0 left-0 right-0 items-center justify-between bg-white z-50 shadow-md transition-all">
      <Link href="/" className="bg-[#003269] px-8" aria-label="Go to Home Page">
        <Image
          src="/Navbar/Logo-AG.png"
          alt="Company Logo"
          width={210}
          height={160}
        />
      </Link>

      <nav
        className="flex gap-6 font-semibold text-sm text-[#003269] pr-6"
        aria-label="Main navigation"
      >
        {navItems.map(({ label, path }) => {
          const isActive = pathname === path || pathname.startsWith(path + "/");

          return (
            <Link
              key={label}
              href={path}
              className={`px-2 ${
                isActive ? "text-[#e63a27]" : "hover:text-[#e63a27]"
              }`}
              aria-current={isActive ? "page" : undefined}
              aria-label={`Go to ${label} page`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

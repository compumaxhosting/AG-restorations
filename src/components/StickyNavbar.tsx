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
    subItems: [
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
    ],
  },
  { label: "PROJECTS", path: "/projects" },
  { label: "BLOG", path: "/blog" },
  { label: "CONTACT US", path: "/contact-us" },
];

export default function StickyNavbar() {
  const [showSticky, setShowSticky] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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
      {/* Logo */}
      <Link href="/" className="bg-[#003269] px-8" aria-label="Go to Home Page">
        <Image
          src="/Navbar/Logo-AG.png"
          alt="Company Logo"
          width={210}
          height={160}
        />
      </Link>

      {/* Nav */}
      <nav className="flex gap-6 font-semibold text-sm text-[#003269] pr-6">
        {navItems.map((item) => {
          const isActive =
            pathname === item.path || pathname.startsWith(item.path + "/");

          return (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {/* Main Link */}
              <Link
                href={item.path}
                className={`px-2 flex items-center gap-1 ${
                  isActive ? "text-[#e63a27]" : "hover:text-[#e63a27]"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
                {item.subItems && <span className="text-xs">▼</span>}
              </Link>

              {/* Dropdown */}
              {item.subItems && openDropdown === item.label && (
                <div className="absolute top-full left-0 w-20 md:w-28 bg-white shadow-lg rounded-md py-2 z-50">
                  {item.subItems.map((sub) => {
                    const isSubActive = pathname === sub.path;

                    return (
                      <Link
                        key={sub.label}
                        href={sub.path}
                        className={`block px-4 py-2 text-sm ${
                          isSubActive
                            ? "text-[#e63a27]"
                            : "text-[#003269] hover:bg-gray-100 hover:text-[#e63a27]"
                        }`}
                      >
                        {sub.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}

"use client";

import Image from "next/image";
import NavLinks from "./NavLinks";
import TopBar from "./TopBar";
import Link from "next/link";

export default function DesktopHeader() {
  return (
    <header className="relative z-50 hidden md:block">
      {/* Logo Section with clip-path */}
      <Link
        href="/"
        className="absolute left-0 top-0 h-full w-102.5 bg-[#e63a27] z-10 flex items-center justify-center [clip-path:polygon(0_0,100%_0,84%_100%,0%_100%)]"
        aria-label="Home link with company logo"
      >
        <Image
          src="/Navbar/Logo-AG.png"
          alt="Company Logo"
          width={260}
          height={120}
          className="object-contain cursor-pointer" 
          priority
        />
      </Link>

      <TopBar />

      <nav
        className="flex justify-end items-center gap-5 px-6 bg-white shadow-md h-20"
        aria-label="Main navigation"
      >
        <NavLinks />
      </nav>
    </header>
  );
}

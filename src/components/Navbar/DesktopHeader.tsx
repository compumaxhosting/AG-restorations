"use client";

import Image from "next/image";
import NavLinks from "./NavLinks";
import TopBar from "./TopBar";
import Link from "next/link";

export default function DesktopHeader() {
  return (
    <header className="relative z-50 hidden md:block" suppressHydrationWarning>
      {/* Logo Section */}
      <div className="absolute left-0 top-0 h-full z-10">
        <Link
          href="/"
          aria-label="Go to AG Restorations homepage"
          className="flex items-center justify-center h-full bg-[#e63a27] px-10
          [clip-path:polygon(0_0,100%_0,84%_100%,0%_100%)]"
        >
          <Image
            src="/Navbar/Logo-AG.png"
            alt="AG Restorations Roofing Company Logo"
            width={240}
            height={120}
            priority
            className="object-contain"
          />
        </Link>
      </div>

      {/* Top Contact Bar */}
      <TopBar />

      {/* Navigation */}
      <nav
        className="flex justify-end items-center gap-6 px-8 bg-white shadow-md h-20"
        aria-label="Primary navigation"
      >
        <NavLinks />
      </nav>
    </header>
  );
}

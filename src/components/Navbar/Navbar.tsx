"use client";

import { useState } from "react";
import DesktopHeader from "./DesktopHeader";
import SidebarOverlay from "./SidebarOverlay";
import MobileHeaderNew from "./MobileHeaderNew";
import GoogleTranslate from "../GoogleTranslate";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <MobileHeaderNew />

      {/* Desktop Header */}
      <DesktopHeader />

      {/* Google Translate */}
      <div className="w-full flex justify-center md:justify-end px-4 py-2 bg-gray-50">
        <GoogleTranslate />
      </div>

      {/* Sidebar */}
      {sidebarOpen && <SidebarOverlay onClose={() => setSidebarOpen(false)} />}
    </>
  );
}

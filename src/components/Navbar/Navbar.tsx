"use client";

import { useState, useEffect } from "react";
import DesktopHeader from "./DesktopHeader";
import SidebarOverlay from "./SidebarOverlay";
import MobileHeaderNew from "./MobileHeaderNew";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  // Detect screen size AFTER mount (prevents hydration shift)
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Prevent layout shift before detection
  if (isMobile === null) {
    return <div className="h-20" />; // reserve space
  }

  return (
    <>
      {/* ✅ Render only one */}
      {isMobile ? <MobileHeaderNew /> : <DesktopHeader />}

      {/* Sidebar */}
      {sidebarOpen && <SidebarOverlay onClose={() => setSidebarOpen(false)} />}
    </>
  );
}

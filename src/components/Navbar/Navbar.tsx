"use client";

import { useState } from "react";
import DesktopHeader from "./DesktopHeader";
import SidebarOverlay from "./SidebarOverlay";
import MobileHeaderNew from "./MobileHeaderNew";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <MobileHeaderNew />

      {/* Desktop Header */}
      <DesktopHeader />

      {/* Sidebar */}
      {sidebarOpen && <SidebarOverlay onClose={() => setSidebarOpen(false)} />}
    </>
  );
}

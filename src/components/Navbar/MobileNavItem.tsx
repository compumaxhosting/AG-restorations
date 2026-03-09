"use client";

import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface NavItem {
  name: string;
  href: string;
  subItems?: { name: string; href: string }[];
}

interface Props {
  item: NavItem;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  openDropdown: string | null;
  setOpenDropdown: Dispatch<SetStateAction<string | null>>;
  pathname: string;
}

export default function MobileNavItem({
  item,
  setIsOpen,
  openDropdown,
  setOpenDropdown,
  pathname,
}: Props) {
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const isSubItemActive = item.subItems?.some((sub) => isActive(sub.href));

  const parentActive = isActive(item.href) || isSubItemActive;

  const dropdownId = `submenu-${item.name.toLowerCase().replace(/\s+/g, "-")}`;

  const isOpenDropdown = openDropdown === item.name;

  const toggleSubmenu = () => {
    setOpenDropdown(isOpenDropdown ? null : item.name);
  };

  /* ---------- Item With Submenu ---------- */

  if (item.subItems) {
    return (
      <div className="border-t border-white/20 last:border-b" role="none">
        <div className="flex items-center">
          <Link
            href={item.href}
            onClick={() => setIsOpen(false)}
            className={`flex-1 px-6 py-4 font-semibold transition-colors ${
              parentActive
                ? "bg-white text-[#e63a27]"
                : "hover:bg-white hover:text-black"
            }`}
            aria-current={parentActive ? "page" : undefined}
          >
            {item.name}
          </Link>

          <button
            onClick={toggleSubmenu}
            className={`px-4 py-4 font-semibold transition-colors ${
              parentActive
                ? "bg-white text-[#e63a27]"
                : "hover:bg-white hover:text-black"
            }`}
            aria-expanded={isOpenDropdown}
            aria-controls={dropdownId}
            aria-label={`Toggle ${item.name} submenu`}
          >
            <span
              className={`transition-transform duration-200 ${
                isOpenDropdown ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            >
              ▼
            </span>
          </button>
        </div>

        {/* Submenu */}
        <div
          id={dropdownId}
          className={`bg-[#00244d] text-sm overflow-hidden transition-all duration-300 ${
            isOpenDropdown ? "max-h-96" : "max-h-0"
          }`}
          role="menu"
          aria-hidden={!isOpenDropdown}
        >
          {item.subItems.map((sub) => (
            <Link
              key={sub.name}
              href={sub.href}
              onClick={() => setIsOpen(false)}
              className={`block px-8 py-3 transition-colors ${
                isActive(sub.href)
                  ? "bg-white text-[#e63a27]"
                  : "hover:bg-white hover:text-black"
              }`}
              aria-current={isActive(sub.href) ? "page" : undefined}
              role="menuitem"
            >
              {sub.name}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  /* ---------- Item Without Submenu ---------- */

  return (
    <Link
      href={item.href}
      onClick={() => setIsOpen(false)}
      className={`block px-6 py-4 border-t border-white/20 last:border-b transition-colors ${
        isActive(item.href)
          ? "bg-white text-[#e63a27]"
          : "hover:bg-white hover:text-black"
      }`}
      aria-current={isActive(item.href) ? "page" : undefined}
    >
      {item.name}
    </Link>
  );
}

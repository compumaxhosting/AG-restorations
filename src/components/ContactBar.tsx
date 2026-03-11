"use client";

import { Phone, MapPin, Mail } from "lucide-react";
import Link from "next/link";

const contactItems = [
  {
    href: "tel:+19738205130",
    ariaLabel: "Call AG Restorations at +1 (973) 820-5130",
    Icon: Phone,
    text: "Call Us",
  },
  {
    href: "https://www.google.com/maps/search/?api=1&query=Linden+New+Jersey",
    ariaLabel:
      "View AG Restorations location in Linden New Jersey on Google Maps",
    Icon: MapPin,
    text: "Our Location",
    external: true,
  },
  {
    href: "/contact",
    ariaLabel: "Contact AG Restorations via website form",
    Icon: Mail,
    text: "Email Us",
  },
];

const ContactBar: React.FC = () => (
  <nav
    role="navigation"
    aria-label="Quick contact options"
    className="fixed bottom-0 left-0 right-0 z-50 md:hidden grid grid-cols-3 divide-x divide-white bg-[#0f172a] text-white text-center shadow-[0_-2px_10px_rgba(0,0,0,0.2)]"
  >
    {contactItems.map(({ href, ariaLabel, Icon, text, external }, index) => (
      <Link
        key={index}
        href={href}
        aria-label={ariaLabel}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="flex flex-col items-center justify-center py-3 hover:bg-[#b82414] transition-colors font-inter focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
      >
        <Icon size={24} aria-hidden="true" />

        <span className="text-sm font-semibold mt-1">{text}</span>
      </Link>
    ))}
  </nav>
);

export default ContactBar;

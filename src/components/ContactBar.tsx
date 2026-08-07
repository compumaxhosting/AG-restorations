"use client";

import { Phone, MapPin, Mail } from "lucide-react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
const contactItems = [
  {
    href: "tel:+19733424134",
    ariaLabel: "Call AG Restorations at +1 973 342 4134",
    Icon: Phone,
    text: "Call Us",
  },
  {
    href: "https://www.google.com/maps/search/?api=1&query=Linden+New+Jersey",
    ariaLabel:
      "View AG Restorations location in Linden, New Jersey on Google Maps",
    Icon: MapPin,
    text: "Our Location",
    external: true,
  },
  {
    href: "/contact-us",
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
        key={text}
        href={href}
        aria-label={ariaLabel}
        className="flex flex-col items-center justify-center text-white hover:text-[#e63a27] transition-colors duration-300 group"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        onClick={() => {
          if (href.startsWith("tel:")) {
            trackEvent("phone_click", "Contact Bar Phone");
          }

          if (href.startsWith("mailto:")) {
            trackEvent("email_click", "Contact Bar Email");
          }
        }}
      >
        <Icon
          size={20}
          className="group-hover:scale-110 transition-transform duration-300"
        />
        <span className="text-sm font-semibold mt-1">{text}</span>
      </Link>
    ))}
  </nav>
);

export default ContactBar;

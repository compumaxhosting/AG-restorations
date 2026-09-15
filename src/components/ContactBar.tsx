"use client";

import { useState } from "react";
import { Phone, MapPin, Mail, Briefcase, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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

const services = [
  {
    name: "Roofing",
    href: "/roofing-services-linden-nj",
  },
  {
    name: "Siding",
    href: "/siding-installation-linden-nj",
  },
  {
    name: "Gutter",
    href: "/gutter-installation-linden-nj",
  },
];

const ContactBar: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <>
      <nav
        role="navigation"
        aria-label="Quick contact options"
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden grid grid-cols-4 divide-x divide-white bg-[#0f172a] text-white text-center shadow-[0_-2px_10px_rgba(0,0,0,0.2)] py-2"
      >
        {contactItems.map(
          ({ href, ariaLabel, Icon, text, external }) => (
            <Link
              key={text}
              href={href}
              aria-label={ariaLabel}
              className="flex flex-col items-center justify-center text-white hover:text-[#e63a27] transition-colors duration-300 group"
              {...(external
                ? {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : {})}
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
          )
        )}

        {/* Our Services */}
        <button
          type="button"
          aria-label="View our services"
          onClick={() => setIsServicesOpen(true)}
          className="flex flex-col items-center justify-center text-white hover:text-[#e63a27] transition-colors duration-300 group"
        >
          <Briefcase
            size={20}
            className="group-hover:scale-110 transition-transform duration-300"
          />
          <span className="text-sm font-semibold mt-1">Our Services</span>
        </button>
      </nav>

      {/* Services Modal */}
      <AnimatePresence>
        {isServicesOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-60 bg-black/80 cursor-pointer"
              onClick={() => setIsServicesOpen(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 200, opacity: 0 }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
              className="fixed inset-0 z-70 flex items-center justify-center px-4"
            >
              <div className="relative w-full max-w-sm rounded-lg bg-white p-6 shadow-xl">
                <h2 className="mb-4 pl-2 text-xl font-bold text-black">
                  Our Services
                </h2>

                <div className="flex flex-col gap-1">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      onClick={() => setIsServicesOpen(false)}
                      className="rounded-md p-3 pl-4 text-black transition-colors duration-200 hover:bg-gray-100"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  aria-label="Close services"
                  onClick={() => setIsServicesOpen(false)}
                  className="absolute right-4 top-4 rounded-full bg-gray-200 p-2"
                >
                  <X className="h-5 w-5 text-black" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactBar;
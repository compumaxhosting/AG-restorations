"use client";

import React, { useState, KeyboardEvent } from "react";
import { FiChevronDown } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";

const accordionVariants: Variants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
  collapsed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.25,
      ease: "easeIn",
    },
  },
};

const faqs = [
  {
    question: "What roofing services do you offer in Linden NJ?",
    answer:
      "AG Restorations provides professional roof repair, roof replacement, and new roof installation for residential and commercial properties in Linden and nearby Union County communities.",
  },
  {
    question: "How do I know if my roof needs repair or replacement?",
    answer:
      "Common signs include roof leaks, missing or damaged shingles, sagging areas, and visible wear. Our team can inspect your roof and recommend the best solution for your property.",
  },
  {
    question: "Do you offer siding installation services?",
    answer:
      "Yes, AG Restorations installs durable siding systems designed to improve curb appeal and protect your home from weather damage across Linden NJ and surrounding areas.",
  },
  {
    question: "Do you provide gutter installation and repair?",
    answer:
      "We install seamless gutters and provide gutter repair services to help protect your roof, foundation, and landscaping from water damage.",
  },
  {
    question: "Do you offer financing for roofing projects?",
    answer:
      "Yes. AG Restorations offers 100% financing options so homeowners can complete roofing, siding, or gutter projects without large upfront costs.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleOpen(index);
    }
  };

  return (
    <section
      className="py-10 px-5 bg-[#f9f9f9] max-w-5xl mx-auto"
      aria-labelledby="faq-section-title"
    >
      {/* Heading */}
      <header className="mb-10 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-6 h-0.5 bg-[#e63a27]" aria-hidden="true" />
          <span className="uppercase text-sm font-bold tracking-wider text-[#e63a27]">
            Common Questions & Answers
          </span>
        </div>

        <h2
          id="faq-section-title"
          className="text-3xl md:text-4xl font-bold text-[#003269]"
        >
          Frequently Asked Questions
        </h2>
      </header>

      {/* FAQ LIST */}
      <dl className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className="border border-gray-200 rounded-md overflow-hidden bg-white shadow-sm"
            >
              <dt>
                <button
                  onClick={() => toggleOpen(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  className={`w-full flex justify-between items-center px-6 py-5 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e63a27] ${
                    isOpen
                      ? "bg-[#003269] text-white"
                      : "bg-white text-[#003269]"
                  }`}
                >
                  <span className="flex gap-3 font-semibold">
                    <span className="text-[#e63a27]" aria-hidden="true">
                      Q{index + 1}.
                    </span>
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    aria-hidden="true"
                  >
                    <FiChevronDown size={22} />
                  </motion.span>
                </button>
              </dt>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.dd
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className="px-6 pb-5 pt-3 text-gray-700 text-sm md:text-base leading-relaxed"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={accordionVariants}
                  >
                    {faq.answer}
                  </motion.dd>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </dl>
    </section>
  );
}

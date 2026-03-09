"use client";

import { useEffect, useState } from "react";

export default function LanguagePrompt() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("site-language");
    if (!saved) {
      setShow(true);
    }
  }, []);

  const setLanguage = (lang: string) => {
    localStorage.setItem("site-language", lang);

    if (lang === "es") {
      const select = document.querySelector(
        ".goog-te-combo",
      ) as HTMLSelectElement | null;

      if (select) {
        select.value = "es";
        select.dispatchEvent(new Event("change"));
      }
    }

    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-lg px-6 py-4 z-50">
      <p className="text-sm mb-3">Choose your language</p>

      <div className="flex gap-3">
        <button
          onClick={() => setLanguage("en")}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          English
        </button>

        <button
          onClick={() => setLanguage("es")}
          className="px-3 py-1 bg-blue-600 text-white rounded"
        >
          Español
        </button>
      </div>
    </div>
  );
}

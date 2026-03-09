"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google?: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            autoDisplay?: boolean;
            includedLanguages?: string;
          },
          elementId: string,
        ) => unknown;
      };
    };
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (!window.google) return;

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: true,
          includedLanguages: "en,es",
        },
        "google_translate_element",
      );
    };

    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <div className="fixed top-3 right-3 z-9999W">
      <div
        id="google_translate_element"
        className="bg-white px-3 py-2 rounded shadow text-sm"
      ></div>
    </div>
  );
}

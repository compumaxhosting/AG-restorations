"use client";

import { useState } from "react";

const TRANSLATE_SCRIPT_ID = "google-translate-script";
const TRANSLATE_CONTAINER_ID = "google_translate_element";

/* ✅ Proper types (no `any`) */
type TranslateElementOptions = {
  pageLanguage: string;
  includedLanguages?: string;
  autoDisplay: boolean;
  layout: number;
};

type TranslateElementConstructor = {
  new (options: TranslateElementOptions, elementId: string): unknown;
  InlineLayout: {
    SIMPLE: number;
  };
};

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement?: TranslateElementConstructor;
      };
    };
  }
}

export default function GoogleTranslateWidget({
  variant,
}: {
  variant?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  const loadTranslate = () => {
    if (loaded) return;

    // init function
    window.googleTranslateElementInit = () => {
      const Widget = window.google?.translate?.TranslateElement;

      if (!Widget) return;

      new Widget(
        {
          pageLanguage: "en",
          includedLanguages: "en,es,pt,it",
          autoDisplay: false,
          layout: Widget.InlineLayout.SIMPLE,
        },
        TRANSLATE_CONTAINER_ID,
      );
    };

    // inject script ONLY when needed
    if (!document.getElementById(TRANSLATE_SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = TRANSLATE_SCRIPT_ID;
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.googleTranslateElementInit?.();
    }

    setLoaded(true);
  };

  return (
    <div className="translate-widget">
      {/* ✅ Lazy trigger button */}
      {!loaded && (
        <button
          onClick={loadTranslate}
          className={`px-3 py-1 text-sm rounded ${variant === "mobile" ? "bg-white text-black" : "bg-black text-white"}`}
        >
          Translate
        </button>
      )}

      {/* Widget mounts here */}
      <div id={TRANSLATE_CONTAINER_ID} />
    </div>
  );
}

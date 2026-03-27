"use client";

import { useEffect } from "react";

const TRANSLATE_SCRIPT_ID = "google-translate-script";
const TRANSLATE_CONTAINER_ID = "google_translate_element";

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

export default function GoogleTranslateWidget() {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      const Widget = window.google?.translate?.TranslateElement;
      const mountTarget = document.getElementById(TRANSLATE_CONTAINER_ID);

      if (!Widget || !mountTarget) {
        return;
      }

      mountTarget.innerHTML = "";

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

    const existingScript = document.getElementById(TRANSLATE_SCRIPT_ID);

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = TRANSLATE_SCRIPT_ID;
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.googleTranslateElementInit?.();
    }

    return () => {
      delete window.googleTranslateElementInit;
    };
  }, []);

  return <div id={TRANSLATE_CONTAINER_ID} className="translate-widget" />;
}

import type { Metadata } from "next";
import { Inter, Be_Vietnam_Pro } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
});

const bevietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-bevietnam",
});

export const metadata: Metadata = {
  title: "AG Restorations",
  description: "AG Restorations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bevietnam.variable}`}>
      <head></head>

      <body className={`${inter.variable} ${bevietnam.variable}`}>
        {/* Google Translate Button */}
        <div
          id="google_translate_element"
          className="fixed top-4 right-4 z-50 bg-white p-2 rounded shadow"
        ></div>

        {children}

        {/* Google Translate Script */}
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />

        {/* Google Translate Init */}
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                {
                  pageLanguage: 'en',
                  autoDisplay: true,
                  includedLanguages: 'en,es'
                },
                'google_translate_element'
              );
            }
          `}
        </Script>
      </body>
    </html>
  );
}

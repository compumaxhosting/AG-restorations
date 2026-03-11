import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen flex items-center justify-center bg-[#0f172a] px-4">
        <div className="text-center max-w-xl">
          {/* Icon */}
          <div className="flex justify-center text-[#e63a27] mb-6">
            <AlertTriangle size={70} />
          </div>

          {/* 404 */}
          <h1 className="text-7xl font-bold text-white mb-4">404</h1>

          {/* Title */}
          <h2 className="text-2xl font-semibold text-white mb-4">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="text-gray-300 mb-8">
            The page you are looking for doesn’t exist or may have been moved.
          </p>

          {/* Button */}
          <Link
            href="/"
            className="bg-[#e63a27] text-white px-6 py-3 font-semibold hover:bg-orange-700 transition"
          >
            Back to Homepage
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

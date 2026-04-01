import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import StickyNavbar from "@/components/StickyNavbar";
import ContactBar from "@/components/ContactBar";
import HomeClient from "@/components/HomeClient";

export default function Home() {
  return (
    <>
      {/* FAST (SSR) */}
      <Navbar />
      <StickyNavbar />
      <ContactBar />
      <HeroSection />

      {/* LAZY (Client) */}
      <HomeClient />
    </>
  );
}

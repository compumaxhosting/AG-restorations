import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import StickyNavbar from "@/components/StickyNavbar";
import ContactBar from "@/components/ContactBar";

// ✅ Remove ssr:false
const OurServicesPage = dynamic(() => import("@/components/OurServicesPage"));
const AboutCompanyHome = dynamic(() => import("@/components/AboutCompanyHome"));
const FinancingSection = dynamic(() => import("@/components/FinancingSection"));
const Certificate = dynamic(() => import("@/components/Certificate"));
const VideoSection = dynamic(() => import("@/components/VideoSection"));
const AreasWeServe = dynamic(() => import("@/components/AreasWeServe"));
const ServiceAndFaqSection = dynamic(
  () => import("@/components/ServiceAndFaqSection"),
);
const Blog = dynamic(() => import("@/components/Blog"), {
  loading: () => null,
});
const FooterTopCTA = dynamic(() => import("@/components/FooterTopCTA"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  const mvalue = [0, 15, 0];

  return (
    <>
      <Navbar />
      <StickyNavbar />
      <ContactBar />
      <HeroSection />

      <OurServicesPage margin={mvalue} />
      <AboutCompanyHome />
      <FinancingSection />
      <Certificate />
      <VideoSection margin={mvalue} />
      <AreasWeServe />
      <ServiceAndFaqSection />
      <Blog />
      <FooterTopCTA />
      <Footer />
    </>
  );
}

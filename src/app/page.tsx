import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import StickyNavbar from "@/components/StickyNavbar";
import ContactBar from "@/components/ContactBar";
import Headerto from "@/components/Navbar/Headerto";

// 👇 ABOVE THE FOLD (keep normal)

// 👇 BELOW THE FOLD (lazy load properly)
const OurServicesPage = dynamic(() => import("@/components/OurServicesPage"), {
  loading: () => null,
});

const AboutCompanyHome = dynamic(
  () => import("@/components/AboutCompanyHome"),
  {
    loading: () => null,
  },
);

const FinancingSection = dynamic(
  () => import("@/components/FinancingSection"),
  {
    loading: () => null,
  },
);

const Certificate = dynamic(() => import("@/components/Certificate"), {
  loading: () => null,
});

const VideoSection = dynamic(() => import("@/components/VideoSection"), {
  loading: () => null,
});

const AreasWeServe = dynamic(() => import("@/components/AreasWeServe"), {
  loading: () => null,
});

const ServiceAndFaqSection = dynamic(
  () => import("@/components/ServiceAndFaqSection"),
  { loading: () => null },
);


const FooterTopCTA = dynamic(() => import("@/components/FooterTopCTA"), {
  loading: () => null,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => null,
});

export default function Home() {
  const mvalue = [0, 15, 0];

  return (
    <>
      <Headerto />
      <StickyNavbar />
      <ContactBar />
      <HeroSection />

      {/* 🚀 BELOW THE FOLD (lazy hydration) */}
      <OurServicesPage margin={mvalue} />
      <AboutCompanyHome />
      <FinancingSection />
      <Certificate />
      <VideoSection margin={mvalue} />
      <AreasWeServe />
      <ServiceAndFaqSection />
      <FooterTopCTA />
      <Footer />
    </>
  );
}

import BackToTop from "@/components/BackToTop";
import GutterInstallationContent from "@/components/blog/GutterInstallationContent";
import ContactBar from "@/components/ContactBar";
import FinancingSection from "@/components/FinancingSection";
import Footer from "@/components/Footer";
import FooterTopCTA from "@/components/FooterTopCTA";
import Headerto from "@/components/Navbar/Headerto";
import StickyNavbar from "@/components/StickyNavbar";

const page = () => {
  return (
    <>
      <Headerto />
      <StickyNavbar />
      <ContactBar />
      <GutterInstallationContent />
    
      <FinancingSection />
      <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
};

export default page;

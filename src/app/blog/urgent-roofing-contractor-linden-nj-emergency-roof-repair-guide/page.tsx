import BackToTop from "@/components/BackToTop";
import ContactBar from "@/components/ContactBar";
import FinancingSection from "@/components/FinancingSection";
import Footer from "@/components/Footer";
import FooterTopCTA from "@/components/FooterTopCTA";
import Headerto from "@/components/Navbar/Headerto";
import StickyNavbar from "@/components/StickyNavbar";
import UrgentRoofingContractorContent from "@/components/blog/UrgentRoofingContractorContent";

const page = () => {
  return (
    <>
      <Headerto />
      <StickyNavbar />
      <ContactBar />
      <UrgentRoofingContractorContent />
      <FinancingSection />
      <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
};

export default page;

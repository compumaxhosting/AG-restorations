import BackToTop from "@/components/BackToTop";
import VinylVsFiberCementSidingLindenNj from "@/components/blog/VinylVsFiberCementSidingLindenNj";
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
      <VinylVsFiberCementSidingLindenNj />
      <FinancingSection />
      <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
};

export default page;

import BackToTop from "@/components/BackToTop";
import ContactBar from "@/components/ContactBar";
import FinancingSection from "@/components/FinancingSection";
import Footer from "@/components/Footer";
import FooterTopCTA from "@/components/FooterTopCTA";
import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar/Navbar";
import StickyNavbar from "@/components/StickyNavbar";

const page = () => {
  return (
    <>
      <Navbar />
      <StickyNavbar />
      <ContactBar />
   <Gallery />
   <FinancingSection />
      <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
};

export default page;

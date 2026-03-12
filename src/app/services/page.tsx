import BackToTop from "@/components/BackToTop";
import ContactBar from "@/components/ContactBar";
import FinancingSection from "@/components/FinancingSection";
import Footer from "@/components/Footer";
import FooterTopCTA from "@/components/FooterTopCTA";
import Navbar from "@/components/Navbar/Navbar";
import OurServicesPage from "@/components/OurServicesPage";
import StickyNavbar from "@/components/StickyNavbar";

const page = () => {
   const mvalue = [0, 80];

  return (
    <>
      <Navbar />
      <StickyNavbar />
      <ContactBar />
      <OurServicesPage margin={mvalue} />
      <FinancingSection />
      <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
};

export default page;

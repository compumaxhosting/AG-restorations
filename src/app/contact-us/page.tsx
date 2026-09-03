import BackToTop from "@/components/BackToTop";
import ContactBar from "@/components/ContactBar";
import FinancingSection from "@/components/FinancingSection";
import Footer from "@/components/Footer";
import FooterTopCTA from "@/components/FooterTopCTA";
import Details from "@/components/Navbar/Details";
import Headerto from "@/components/Navbar/Headerto";
import ServiceAndFaqSection from "@/components/ServiceAndFaqSection";
import StickyNavbar from "@/components/StickyNavbar";


const page = () => {
  return (
    <>
      <Headerto />
      <StickyNavbar />
      <ContactBar />
      <ServiceAndFaqSection />
      <Details />
      <FinancingSection />
      <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
};

export default page;

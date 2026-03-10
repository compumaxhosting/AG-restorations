import BackToTop from "@/components/BackToTop";
import ContactBar from "@/components/ContactBar";
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
      <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
};

export default page;

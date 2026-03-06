import BackToTop from "@/components/BackToTop";
import Blog from "@/components/Blog";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import FooterTopCTA from "@/components/FooterTopCTA";
import Navbar from "@/components/Navbar/Navbar";
import StickyNavbar from "@/components/StickyNavbar";

const page = () => {
  return (
    <>
      <Navbar />
      <StickyNavbar />
      <ContactBar />
      <Blog />
      <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
};

export default page;

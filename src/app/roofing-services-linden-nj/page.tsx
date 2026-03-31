import BackToTop from "@/components/BackToTop";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import FooterTopCTA from "@/components/FooterTopCTA";
import Navbar from "@/components/Navbar/Navbar";
import RoofingServiceContent from "@/components/RoofingServiceContent";
import StickyNavbar from "@/components/StickyNavbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <StickyNavbar />
      <ContactBar />
     <RoofingServiceContent />
      <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
};

export default page;

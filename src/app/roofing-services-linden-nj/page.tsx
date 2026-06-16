import BackToTop from "@/components/BackToTop";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import FooterTopCTA from "@/components/FooterTopCTA";
import Headerto from "@/components/Navbar/Headerto";
import RoofingServiceContent from "@/components/RoofingServiceContent";
import StickyNavbar from "@/components/StickyNavbar";
import React from "react";

const page = () => {
  return (
    <>
      <Headerto />
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

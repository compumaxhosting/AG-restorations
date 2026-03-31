import BackToTop from "@/components/BackToTop";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import FooterTopCTA from "@/components/FooterTopCTA";
import GutterInstallationContent from "@/components/GutterInstallationContent";
import Navbar from "@/components/Navbar/Navbar";
import StickyNavbar from "@/components/StickyNavbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <StickyNavbar />
      <ContactBar />
     <GutterInstallationContent />
      <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
};

export default page;

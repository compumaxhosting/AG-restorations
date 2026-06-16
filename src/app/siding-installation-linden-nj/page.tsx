import BackToTop from "@/components/BackToTop";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import FooterTopCTA from "@/components/FooterTopCTA";
import Headerto from "@/components/Navbar/Headerto";
import SidingInstallationContent from "@/components/SidingInstallationContent";
import StickyNavbar from "@/components/StickyNavbar";
import React from "react";

const page = () => {
  return (
    <>
      <Headerto />
      <StickyNavbar />
      <ContactBar />
      <SidingInstallationContent />
      <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
};

export default page;

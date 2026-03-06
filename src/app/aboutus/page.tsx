import AboutCompany from '@/components/AboutCompanyHome';
import AreasWeServe from '@/components/AreasWeServe';
import BackToTop from '@/components/BackToTop';
import Certificate from '@/components/Certificate';
import ContactBar from '@/components/ContactBar';
import Footer from '@/components/Footer';
import FooterTopCTA from '@/components/FooterTopCTA';
import Navbar from '@/components/Navbar/Navbar'
import StickyNavbar from '@/components/StickyNavbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <StickyNavbar />
      <ContactBar />
      <AboutCompany />
      <Certificate />
      <AreasWeServe />
      <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
}

export default page
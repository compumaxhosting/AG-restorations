"use client";

import dynamic from "next/dynamic";

const OurServicesPage = dynamic(() => import("./OurServicesPage"));
const AboutCompanyHome = dynamic(() => import("./AboutCompanyHome"));
const FinancingSection = dynamic(() => import("./FinancingSection"));
const Certificate = dynamic(() => import("./Certificate"));
const VideoSection = dynamic(() => import("./VideoSection"));
const AreasWeServe = dynamic(() => import("./AreasWeServe"));
const ServiceAndFaqSection = dynamic(() => import("./ServiceAndFaqSection"));
const Blog = dynamic(() => import("./Blog"));
const FooterTopCTA = dynamic(() => import("./FooterTopCTA"));
const Footer = dynamic(() => import("./Footer"));

export default function HomeClient() {
  const mvalue = [0, 15, 0];

  return (
    <>
      <OurServicesPage margin={mvalue} />
      <AboutCompanyHome />
      <FinancingSection />
      <Certificate />
      <VideoSection margin={mvalue} />
      <AreasWeServe />
      <ServiceAndFaqSection />
      <Blog />
      <FooterTopCTA />
      <Footer />
    </>
  );
}

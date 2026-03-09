import HeroSection from "@/components/HeroSection";
import OurServicesPage from "@/components/OurServicesPage"
import VideoSection from "@/components/VideoSection"
// import OurProjects from "@/components/OurProjects";
import Navbar from "@/components/Navbar/Navbar";
import Blog from "@/components/Blog";
import StickyNavbar from "@/components/StickyNavbar";
import Footer from "@/components/Footer";
import FooterTopCTA from "@/components/FooterTopCTA";
import ServiceAndFaqSection from "@/components/ServiceAndFaqSection";
import ContactBar from "@/components/ContactBar";
import AboutCompanyHome from "@/components/AboutCompanyHome";
import Certificate from "@/components/Certificate";
import AreasWeServe from "@/components/AreasWeServe";


export default function Home() {
  const mvalue = [0,15,0];
  // const number = "1";
  return (
    <>
      <Navbar />
      
      <StickyNavbar />
      <ContactBar />
      <HeroSection />
      <OurServicesPage margin={mvalue} />
      <AboutCompanyHome />
     <Certificate />
      {/* <OurProjects gallery={number} /> */}
      <VideoSection margin={mvalue} />
      <AreasWeServe />
      <ServiceAndFaqSection />
      <Blog />
      <FooterTopCTA />
      <Footer />
    
    </>
  );
} 

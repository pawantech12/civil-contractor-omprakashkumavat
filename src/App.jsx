import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServiceSection";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const App = () => {
  // Create refs for each section
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);
  // Scroll function to scroll to a particular section
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar
        servicesRef={servicesRef}
        aboutRef={aboutRef}
        galleryRef={galleryRef}
        contactRef={contactRef}
        scrollToSection={scrollToSection}
      />
      <main>
        <HeroSection
          scrollToSection={scrollToSection}
          contactRef={contactRef}
        />
        <div ref={servicesRef}>
          <ServicesSection />
        </div>
        <div ref={aboutRef}>
          <AboutSection />
        </div>
        <div ref={galleryRef}>
          <GallerySection />
        </div>
        <div ref={contactRef}>
          <ContactForm />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default App;

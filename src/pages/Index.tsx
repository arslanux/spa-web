
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update title and meta description
    document.title = "Royal S Unisex Saloon & Spa | Luxury Spa in Bangalore";
    
    // Simple reveal animation for elements with 'reveal' class
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      for(let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;
        
        if(revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on page load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        <div className="reveal">
          <AboutSection />
        </div>
        
        <div className="reveal">
          <ServicesSection />
        </div>
        
        <div className="reveal">
          <GallerySection />
        </div>
        
        <div className="reveal">
          <ContactSection />
        </div>
        
        <div className="reveal">
          <BookingSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

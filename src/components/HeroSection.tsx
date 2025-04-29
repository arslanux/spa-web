import { Button } from "@/components/ui/button";
import { useCallback } from "react";

const BACKGROUND_IMAGE_URL = "/src/components/img/banner_section.jpg";

const HeroSection = () => {
  // Smooth scroll to booking section
  const scrollToBooking = useCallback(() => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section
      id="home"
      className="hero-pattern relative flex min-h-screen items-center"
      aria-label="Hero section with spa background and call to action"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-spa-dark/30 to-transparent" />

      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-blend-overlay"
        style={{ backgroundImage: `url('${BACKGROUND_IMAGE_URL}')` }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
            Luxury Spa Experience in Bangalore
          </h1>
          <p className="mb-8 text-lg text-white/90 md:text-xl">
            Indulge in a world of relaxation and rejuvenation at Royal S Unisex
            Salon & Spa. Where every treatment is designed to soothe your body
            and mind.
          </p>
          <Button
            onClick={scrollToBooking}
            className="border-none bg-spa-gold px-8 py-6 text-lg text-white hover:bg-opacity-90"
          >
            Book Your Experience
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

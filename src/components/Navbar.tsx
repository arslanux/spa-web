import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-2 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-playfair font-bold text-spa-gold">
            Royal S
          </h1>
          <p className="hidden md:block ml-2 text-sm text-spa-dark">
            Unisex Saloon & Spa
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection("home")} className="nav-link">
            Home
          </button>
          <button onClick={() => scrollToSection("about")} className="nav-link">
            About
          </button>
          <button onClick={() => scrollToSection("services")} className="nav-link">
            Services
          </button>
          <button onClick={() => scrollToSection("gallery")} className="nav-link">
            Gallery
          </button>
          <button onClick={() => scrollToSection("contact")} className="nav-link">
            Contact
          </button>
          <Button
            onClick={() => scrollToSection("booking")}
            className="bg-spa-gold hover:bg-opacity-90 text-white border-none"
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-spa-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection("home")} className="nav-link py-2">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="nav-link py-2">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="nav-link py-2">
              Services
            </button>
            <button onClick={() => scrollToSection("gallery")} className="nav-link py-2">
              Gallery
            </button>
            <button onClick={() => scrollToSection("contact")} className="nav-link py-2">
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("booking")}
              className="bg-spa-gold hover:bg-opacity-90 text-white border-none w-full"
            >
              Book Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

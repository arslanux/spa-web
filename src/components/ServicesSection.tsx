import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    id: 1,
    name: "Aroma Therapy",
    description: "Experience the healing power of essential oils that soothe both body and mind.",
    image: "/src/components/img/aroma_massage.jpg",
    pricing: {
      "45 min": "1200/-",
      "60 min": "1500/-",
      "90 min": "2500/-",
      "120 min": "3000/-"
    },
    longDescription: "Immerse yourself in a therapeutic journey with our Aroma Therapy massage. Using carefully selected essential oils, this treatment promotes deep relaxation, improves circulation, and helps restore both physical and emotional well-being. Choose from multiple duration options to suit your needs."
  },
  {
    id: 2,
    name: "Swedish Massage",
    description: "A classic technique using long strokes and kneading to relieve muscle tension and promote relaxation.",
    image: "/src/components/img/swedish_massage.jpg",
    pricing: {
      "45 min": "1300/-",
      "60 min": "1600/-",
      "90 min": "2800/-",
      "120 min": "3000/-"
    },
    longDescription: "Our Swedish Massage combines gentle to firm pressure with long, flowing strokes to promote total body relaxation. This classic massage technique helps improve circulation, ease muscle tension, and create a deeply calming effect."
  },
  {
    id: 3,
    name: "Deep Tissue Massage",
    description: "Targets deeper layers of muscle to address chronic pain and tension patterns.",
    image: "/src/components/img/deep_tissue_massage.jpg",
    pricing: {
      "45 min": "1500/-",
      "60 min": "1800/-",
      "90 min": "3000/-",
      "120 min": "4000/-"
    },
    longDescription: "Deep Tissue Massage focuses on realigning deeper layers of muscles and connective tissue. Perfect for chronic muscle tension, this intensive treatment helps release stubborn knots and adhesions in the muscles."
  },
  {
    id: 4,
    name: "Balinese Massage",
    description: "A full-body, deep-tissue holistic treatment combining acupressure, aromatherapy, and reflexology.",
    image: "/src/components/img/balinese_massage.jpg",
    pricing: {
      "45 min": "1500/-",
      "60 min": "1800/-",
      "90 min": "3000/-",
      "120 min": "4000/-"
    },
    longDescription: "Traditional Balinese Massage combines gentle stretches, acupressure, reflexology, and aromatherapy to stimulate circulation, ease muscular and joint pain, and bring a sense of wellbeing, calm, and deep relaxation."
  },
  {
    id: 5,
    name: "Thai Massage",
    description: "Ancient healing system combining acupressure, Indian Ayurvedic principles, and assisted yoga postures.",
    image: "/src/components/img/thai_massage.jpg",
    pricing: {
      "45 min": "1800/-",
      "60 min": "2200/-",
      "90 min": "3000/-",
      "120 min": "4500/-"
    },
    longDescription: "Experience the ancient art of Thai Massage, which combines acupressure, stretching, and assisted yoga postures. This unique therapy helps improve flexibility, reduces stress, and restores energy flow throughout the body."
  },
  {
    id: 6,
    name: "Stress Relief Therapy",
    description: "Specialized techniques to release tension and promote deep relaxation for mind and body.",
    image: "/src/components/img/stress_relief_therapy.jpg",
    pricing: { 
      "90 min": "3500/-",
      "120 min": "5000/-"
    },
    longDescription: "Our Stress Relief Therapy is specially designed to alleviate tension and anxiety. Available in 90 and 120-minute sessions, this treatment combines various massage techniques to help you achieve complete mental and physical relaxation."
  },
  {
    id: 7,
    name: "Wine Massage",
    description: "Luxurious treatment utilizing the antioxidant properties of wine extracts for skin rejuvenation.",
    image: "/src/components/img/wine_massage.jpg",
    pricing: {
      "45 min": "2000/-",
      "60 min": "2500/-",
      "90 min": "3500/-",
      "120 min": "4500/-"
    },
    longDescription: "Indulge in our exclusive Wine Massage, which harnesses the antioxidant properties of wine extracts. This luxurious treatment not only relaxes your muscles but also rejuvenates your skin, leaving you with a radiant glow."
  },
  {
    id: 8,
    name: "Chocolate Massage",
    description: "Indulgent therapy using cocoa's natural properties to nourish skin and elevate mood.",
    image: "/src/components/img/chocolate_massage.jpg",
    pricing: {
      "60 min": "2000/-",
      "90 min": "3000/-",
      "120 min": "4000/-"
    },
    longDescription: "Our Chocolate Massage is a truly indulgent experience that combines the therapeutic benefits of massage with the natural properties of cocoa. This treatment helps nourish your skin while releasing endorphins for a mood-lifting effect."
  },
  {
    id: 9,
    name: "Body Polishing",
    description: "Exfoliating treatment that removes dead skin cells, revealing soft, glowing skin.",
    image: "/src/components/img/body_polishing.jpg",
    pricing: {
      "90 min": "4000/-",
      "120 min": "5000/-"
    },
    longDescription: "Achieve silky-smooth skin with our Body Polishing treatment. This luxurious service includes full-body exfoliation to remove dead skin cells, followed by moisturizing to reveal naturally glowing, rejuvenated skin."
  },
  {
    id: 10,
    name: "Signature Massage",
    description: "Our exclusive blend of techniques customized to provide the ultimate relaxation experience.",
    image: "/src/components/img/signature_massage.jpg",
    pricing: {
      "45 min": "2000/-",
      "60 min": "2500/-",
      "90 min": "3500/-",
      "120 min": "5000/-"
    },
    longDescription: "Experience our Signature Massage, a unique blend of various massage techniques perfectly customized to your needs. This premium service combines the best elements of multiple therapies for the ultimate relaxation experience."
  },
  {
    id: 11,
    name: "Maharaja Massage",
    description: "Royal treatment inspired by ancient Indian traditions, designed for complete rejuvenation.",
    image: "/src/components/img/maharaja_massage.jpg",
    pricing: {
      "90 min": "5000/-",
      "120 min": "7000/-"
    },
    longDescription: "The Maharaja Massage is our most luxurious offering, inspired by ancient Indian royal treatments. This comprehensive therapy includes premium oils and techniques passed down through generations for complete rejuvenation."
  },
  {
    id: 12,
    name: "D Tan + Scrub + Foot Massage",
    description: "Comprehensive package to remove tan, exfoliate skin, and relieve tired feet.",
    image: "/src/components/img/dtan_scrub_foot_massage.jpg",
    pricing: {
      "45 min": "2000/-",
      "60 min": "2500/-",
      "90 min": "3000/-",
      "120 min": "3500/-"
    },
    longDescription: "Our complete D Tan package includes a specialized de-tanning treatment, full body scrub, and relaxing foot massage. This comprehensive service helps restore your natural skin tone while providing deep relaxation."
  }
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding bg-spa-light">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-spa-dark mb-4 heading-decoration">
            Our Services
          </h2>
          <p className="text-lg text-spa-dark/80 max-w-3xl mx-auto">
            Discover our wide range of treatments designed to promote wellness and relaxation.
            Each service is delivered by our expert therapists in a serene environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card 
              key={service.id}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer border-none"
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
              <CardContent className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-spa-dark mb-2">{service.name}</h3>
                <p className="text-spa-dark/70 mb-4">{service.description}</p>
                
                {activeService === service.id && (
                  <div className="mt-4 space-y-4">
                    <p className="text-spa-dark/90">{service.longDescription}</p>
                    <div className="mt-4">
                      <h4 className="font-semibold text-spa-dark mb-2">Duration & Pricing:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {Object.entries(service.pricing).map(([duration, price]) => (
                          <div key={duration} className="text-sm">
                            <span className="text-spa-dark/70">{duration}:</span>
                            <span className="font-semibold text-spa-gold ml-2">₹{price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center space-x-4 mt-4">
                  <a 
                    href="#booking" 
                    className="text-white bg-spa-gold px-4 py-2 rounded font-medium text-sm hover:bg-spa-gold-dark transition"
                  >
                    Book Now
                  </a>
                  <button 
                    className="text-spa-gold font-medium text-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveService(activeService === service.id ? null : service.id);
                    }}
                  >
                    {activeService === service.id ? 'Read Less' : 'Read More'}
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-spa-dark mb-4">Special Packages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-spa-cream rounded-lg">
              <h4 className="text-xl font-semibold text-spa-dark mb-2">Head Massage</h4>
              <p className="text-spa-dark/70">30 min session</p>
              <p className="text-spa-gold font-semibold mt-2">₹500/-</p>
            </div>
            <div className="p-6 bg-spa-cream rounded-lg">
              <h4 className="text-xl font-semibold text-spa-dark mb-2">6 Months Package</h4>
              <p className="text-spa-dark/70">6 Packages</p>
              <p className="text-spa-gold font-semibold mt-2">₹5000/-*</p>
            </div>
            <div className="p-6 bg-spa-cream rounded-lg">
              <h4 className="text-xl font-semibold text-spa-dark mb-2">12 Months Package</h4>
              <p className="text-spa-dark/70">12 Packages</p>
              <p className="text-spa-gold font-semibold mt-2">₹10000/-*</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

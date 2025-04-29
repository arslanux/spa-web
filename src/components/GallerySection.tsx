import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  {
    id: 1,
    src: "/src/components/img/aroma.jpg",
    alt: "Spa treatment room with massage table",
  },
  {
    id: 2,
    src: "/src/components/img/swedish_massage.jpg",
    alt: "Candles and hot stones for massage therapy",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=2070&auto=format&fit=crop",
    alt: "Woman enjoying facial treatment",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop",
    alt: "Spa products and flowers",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=2070&auto=format&fit=crop",
    alt: "Zen garden with pebbles and orchid",
  },
  {
    id: 6,
    src: "/src/components/img/hands_performing_massage_therapy.jpg",
    alt: "Hands performing massage therapy",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
    alt: "Feet massage treatment",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1591343395082-e120087004b4?q=80&w=2071&auto=format&fit=crop",
    alt: "Essential oils for aromatherapy",
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-spa-dark mb-4 heading-decoration">
            Our Gallery
          </h2>
          <p className="text-lg text-spa-dark/80 max-w-3xl mx-auto">
            Take a glimpse into our serene spa environment and the rejuvenating
            experiences that await you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden h-64 cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-spa-dark/0 group-hover:bg-spa-dark/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="bg-white p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-spa-gold"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
            <img
              src={selectedImage || ""}
              alt="Gallery image"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;

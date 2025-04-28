
const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop" 
              alt="Spa ambiance with candles and stones" 
              className="rounded-lg shadow-lg w-full object-cover h-[400px]"
            />
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold text-spa-dark mb-6 heading-decoration">About Royal S</h2>
            <p className="text-lg text-spa-dark/80 mb-6">
              Welcome to Royal S Unisex Saloon & Spa, a sanctuary of tranquility nestled in Nagarbhavi 2nd Stage, Bangalore. 
              For years, we have been a trusted destination for those seeking rejuvenating experiences and expert care.
            </p>
            <p className="text-lg text-spa-dark/80 mb-6">
              Our spa offers a perfect blend of ancient healing traditions and modern therapeutic techniques, 
              ensuring a holistic approach to wellness. Each treatment is customized to meet your unique needs, 
              delivered by our skilled therapists in a serene environment.
            </p>
            <p className="text-lg text-spa-dark/80">
              At Royal S, we believe in the power of touch and the healing properties of natural ingredients. 
              Step into our world and embark on a journey of relaxation, rejuvenation, and self-care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

const HeroSection = ({ scrollToSection, contactRef }) => (
  <section
    className="bg-cover bg-no-repeat py-20 h-[70vh] flex items-center justify-center px-5"
    style={{ backgroundImage: "url(/hero-bg.webp)" }}
  >
    <div className="text-center">
      <h1 className="text-4xl font-bold text-neutral-800">
        35+ Years of Excellence in Civil Contracting
      </h1>
      <p className="mt-4 text-lg">
        Delivering Quality Plumbing, Lighting, Furniture, Tile & Granite
        Services
      </p>
      <button
        onClick={() => scrollToSection(contactRef)}
        className="mt-6 px-4 py-2 text-neutral-900 font-semibold border-2 border-neutral-900 hover:bg-neutral-900 hover:text-white transition duration-300 cursor-pointer rounded-md text-lg"
      >
        Get a Free Quote
      </button>
    </div>
  </section>
);

export default HeroSection;

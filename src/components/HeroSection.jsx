const HeroSection = ({ scrollToSection, contactRef }) => (
  <section
    className="hero-section"
    style={{ backgroundImage: "url(/hero-bg.webp)" }}
  >
    <div className="hero-content">
      <h1 className="hero-title">
        35+ Years of Excellence in Civil Contracting
      </h1>
      <p className="hero-subtitle">
        Delivering Quality Plumbing, Lighting, Furniture, Tile & Granite
        Services
      </p>
      <button
        onClick={() => scrollToSection(contactRef)}
        className="hero-button"
      >
        Get a Free Quote
      </button>
    </div>
  </section>
);

export default HeroSection;

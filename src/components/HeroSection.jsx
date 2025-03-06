const HeroSection = ({ scrollToSection, contactRef }) => (
  <section
    className="hero-section"
    style={{
      backgroundImage: "url(/hero-bg.webp)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
    role="banner"
    aria-label="Civil Contracting Services - Plumbing, Lighting, Furniture, Tile & Granite"
  >
    <div className="hero-content">
      <h1 className="hero-title">
        Leading Civil Contractor with 35+ Years of Experience
      </h1>
      <h2 className="hero-subtitle">
        Expert in Plumbing, Lighting, Furniture, Tile & Granite Installation
      </h2>
      <p className="hero-description">
        Quality craftsmanship & top-rated services for residential and
        commercial projects.
      </p>
      <button
        onClick={() => scrollToSection(contactRef)}
        className="hero-button"
        aria-label="Request a Free Quote for Civil Contracting Services"
      >
        Request a Free Consultation
      </button>
    </div>
  </section>
);

export default HeroSection;

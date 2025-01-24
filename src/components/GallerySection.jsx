import { useState, useEffect } from "react";
import projectDetails from "../data/projectDetails";

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectDetails);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6); // State to track number of visible projects
  const [loading, setLoading] = useState(false);

  const categories = [
    "All",
    "Furniture",
    "POP",
    "Tiling",
    "Lighting",
    "Plumbing",
    "Granite",
  ];

  useEffect(() => {
    setIsTransitioning(true);
    const timeout = setTimeout(() => {
      const newFilteredProjects =
        activeTab === "All"
          ? projectDetails
          : projectDetails.filter((project) => project.category === activeTab);

      setFilteredProjects(newFilteredProjects);
      setVisibleCount(6); // Reset visible count when tab changes
      setIsTransitioning(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [activeTab]);

  const handleViewMore = () => {
    setLoading(true); // Start loading
    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + 3);
      setLoading(false); // End loading
    }, 500);
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="container mx-auto">
        <h2 className="gallery-section__title">Our Projects</h2>
        <p className="gallery-section__description">
          Explore our diverse range of projects, showcasing exceptional
          craftsmanship across categories like Furniture, POP, Tiling, Lighting,
          Plumbing, and Granite. Browse through our gallery to see the quality
          and creativity we bring to every project.
        </p>

        {/* Tabs */}
        <div className="tabs">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`tab-button ${activeTab === category ? "active" : ""}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className={`projects ${isTransitioning ? "transitioning" : ""}`}>
          {filteredProjects.slice(0, visibleCount).map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.img} alt="Project" className="project-img" />
            </div>
          ))}
        </div>

        {/* View More Button */}
        {visibleCount < filteredProjects.length && (
          <button
            onClick={handleViewMore}
            disabled={loading}
            className="view-more-btn"
          >
            {loading ? "Loading..." : "View More"}
          </button>
        )}
      </div>
    </section>
  );
};

export default GallerySection;

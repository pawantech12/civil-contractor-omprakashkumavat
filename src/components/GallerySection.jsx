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
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-neutral-700 mb-5">
          Our Projects
        </h2>
        <p className="text-neutral-600 mb-8 w-3/4 max-sm:w-full mx-auto px-5">
          Explore our diverse range of projects, showcasing exceptional
          craftsmanship across categories like Furniture, POP, Tiling, Lighting,
          Plumbing, and Granite. Browse through our gallery to see the quality
          and creativity we bring to every project.
        </p>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2 rounded-lg border transition duration-300 cursor-pointer ${
                activeTab === category
                  ? "bg-neutral-800 text-white border-neutral-800"
                  : "bg-white text-neutral-800 border-neutral-800 hover:bg-neutral-800 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div
          className={`grid md:grid-cols-3 gap-8 px-5 transition-opacity duration-300 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          {filteredProjects.slice(0, visibleCount).map((project, index) => (
            <div
              className="bg-white p-6 rounded-xl border border-neutral-800 transition-transform duration-300 transform hover:-translate-y-1.5 cursor-pointer"
              key={index}
            >
              <img
                src={project.img}
                alt="Project"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* View More Button */}
        {visibleCount < filteredProjects.length && (
          <button
            onClick={handleViewMore}
            disabled={loading}
            className="mt-8 px-6 py-3 bg-neutral-800 text-white font-semibold rounded-lg hover:bg-neutral-700 transition duration-300 cursor-pointer"
          >
            {loading ? "Loading..." : "View More"}
          </button>
        )}
      </div>
    </section>
  );
};

export default GallerySection;

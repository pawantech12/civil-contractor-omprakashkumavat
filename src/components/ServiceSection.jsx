const services = [
  {
    name: "Plumbing",
    image: "plumbing.webp",
    description: "Quality plumbing services for your home and business.",
  },
  {
    name: "Lighting",
    image: "lighting.webp",
    description: "Modern lighting solutions that brighten your space.",
  },
  {
    name: "Furniture",
    image: "furniture.webp",
    description: "Custom furniture made to your specifications.",
  },
  {
    name: "Tiling",
    image: "tiling.webp",
    description: "Stylish tiles for kitchens, bathrooms, and more.",
  },
  {
    name: "Granite",
    image: "granite.webp",
    description: "Durable granite countertops for your kitchen.",
  },
  {
    name: "POP",
    image: "pop.webp",
    description: "Decorative POP designs for ceilings and walls.",
  },
];

const ServicesSection = () => (
  <section id="services" aria-labelledby="services-heading">
    <div className="container">
      <h4>Our Services</h4>
      <div className="grid max-md:px-5">
        {services.map((service, index) => (
          <div key={index} className="card" aria-label={service.name}>
            <img
              src={`/${service.image}`}
              alt={`${service.name} services - Best home improvement`}
              loading="lazy"
            />
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

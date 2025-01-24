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
  <section id="services" className="py-20 bg-gray-100">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-8 text-neutral-800">
        Our Services
      </h2>
      <div className="grid md:grid-cols-3 gap-8 mt-10 max-md:px-5">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl border border-neutral-800"
          >
            <img
              src={`/${service.image}`}
              alt={service.name}
              className="w-full h-64 object-cover rounded-xl"
            />
            <h3 className="text-2xl mt-4">{service.name}</h3>
            <p className="mt-2 text-lg">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

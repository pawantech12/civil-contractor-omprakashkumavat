import { Link } from "react-router-dom";
import { CounterUp } from "./CounterUp";

const AboutSection = () => (
  <section id="about" className="about-section">
    <div className="container text-center about-container">
      <h4 className="about-title">About Us</h4>
      <p className="about-description">
        Trusted by 800+ clients, we deliver exceptional{" "}
        <strong>civil contracting services</strong> including
        <strong>
          {" "}
          plumbing, lighting, furniture, tile, and granite installations
        </strong>
        . With over 1000 projects completed, we ensure quality and durability in
        every project.
      </p>
    </div>

    <div className="about-details">
      <div className="contact-info">
        <h4 className="contact-label">Call Us for Expert Services</h4>
        <p className="contact-number">
          <Link to={"tel:+91 9820585835"}>+91 9820585835</Link>
        </p>
      </div>
      <div className="stats">
        <CounterUp end={35} label="Years Of Experience" />
        <CounterUp end={1000} label="No. of Projects" />
        <CounterUp end={800} label="Clients" />
      </div>
    </div>
  </section>
);

export default AboutSection;

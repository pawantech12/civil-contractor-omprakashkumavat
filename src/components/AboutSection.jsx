import { Link } from "react-router-dom";
import { CounterUp } from "./CounterUp";

const AboutSection = () => (
  <section id="about" className="about-section">
    <div className="container text-center about-container">
      <h2 className="about-title">About Us</h2>
      <p className="about-description">
        With 35+ years of experience and over 1000 successful projects, we
        specialize in providing top-quality civil contracting services,
        including plumbing, lighting, furniture, tile, and granite
        installations.
      </p>
    </div>

    <div className="about-details">
      <div className="contact-info">
        <h4 className="contact-label">Mobile No :</h4>
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

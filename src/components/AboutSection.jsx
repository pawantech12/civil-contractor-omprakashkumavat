import { Link } from "react-router-dom";
import { CounterUp } from "./CounterUp";

const AboutSection = () => (
  <section id="about" className="py-20 bg-white">
    <div className="container mx-auto text-center max-sm:px-5">
      <h2 className="text-3xl font-semibold text-neutral-800 mb-8">About Us</h2>
      <p className="text-lg max-w-2xl mx-auto">
        With 35+ years of experience and over 1000 successful projects, we
        specialize in providing top-quality civil contracting services,
        including plumbing, lighting, furniture, tile, and granite
        installations.
      </p>
    </div>

    <div className="w-full mt-5">
      <div className="mx-auto w-fit flex items-center gap-2">
        <h4 className="font-semibold text-lg">Mobile No :</h4>
        <p className="text-lg ">
          <Link to={"tel:+91 9820585835"}>+91 9820585835</Link>
        </p>
      </div>
      <div className="flex items-center justify-around mt-10 max-sm:flex-col max-sm:gap-8 max-sm:px-5">
        <CounterUp end={35} label="Years Of Experience" />
        <CounterUp end={1000} label="No. of Projects" />
        <CounterUp end={800} label="Clients" />
      </div>
    </div>
  </section>
);

export default AboutSection;

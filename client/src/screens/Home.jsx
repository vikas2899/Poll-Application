import React from "react";

// Custom imports
import Slider from "../components/Slider";
import ServiceCard from "../components/ServiceCard";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div>
      <Slider />
      <ServiceCard />
      <Newsletter />
    </div>
  );
};

export default Home;

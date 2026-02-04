import React from "react";
import Hero from "../Components/Hero";
import LatestCollection from "../Components/LatestCollection";
import BestSeller from "../Components/BestSeller";
import OurPolicy from "../Components/OurPolicy";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      <LatestCollection />

      <BestSeller />

      <OurPolicy />
    </div>
  );
};

export default Home;

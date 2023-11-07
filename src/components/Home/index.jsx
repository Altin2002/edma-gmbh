import React from "react";
import Hero from "./Hero";
import AboutHome from "./AboutHome";
import ServicesHome from "./ServicesHome";
import Clients from "./Clients";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutHome />
      <ServicesHome />
      <Clients />
    </div>
  );
};

export default Home;
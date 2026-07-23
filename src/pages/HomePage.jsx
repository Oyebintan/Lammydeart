import React from "react";
import Hero from "../components/Hero";
import Service from "../components/Service";
import HeroPrj from "../components/HeroPrj";
import AboutHome from "../components/AboutHome";
import Testimonial from "../components/Testimonial";
import HomeContact from "../components/HomeContact";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Service />
      <HeroPrj times={6} />
      <AboutHome />
      <Testimonial />
      <HomeContact />
    </div>
  );
};

export default HomePage;

import React from "react";
import Hero from "../components/Hero";
import Service from "../components/Service";
import HeroPrj from "../components/HeroPrj";
import Timeline from "../components/Timeline";
import Skills from "../components/Skills";
import Testimonial from "../components/Testimonial";
import HomeContact from "../components/HomeContact";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Service />
      <HeroPrj times={6} />
      <Timeline />
      <Skills />
      <Testimonial />
      <HomeContact />
    </div>
  );
};

export default HomePage;

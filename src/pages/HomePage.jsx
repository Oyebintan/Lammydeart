import Hero from "../components/home/Hero"
import Service from "../components/home/Service"
import FeaturedWork from "../components/home/FeaturedWork"
import AboutHome from "../components/home/AboutHome"
import Testimonial from "../components/home/Testimonial"
import HomeContact from "../components/home/HomeContact"

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Service />
      <FeaturedWork />
      <AboutHome />
      <Testimonial />
      <HomeContact />
    </div>
  );
};

export default HomePage;

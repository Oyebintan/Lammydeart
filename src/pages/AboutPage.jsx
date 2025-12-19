import React from "react";
import img from "../assets/hero2.JPG";;
import { FaLocationPin, FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Skills = [
  "Branding",
  "Social Media Design",
  "Flyer Design",
  "Print Design",
  "Product Design",
  "Layout Design",
];

const AboutPage = () => {
  return (
    <div className=" px-6 lg:px-12 py-10 mb-20 lg:mb-30">
      <div className="flex flex-wrap items-center justify-center  gap-14">
        <div className="flex flex-col gap-6">
          <h1 className="text-white font-bold text-xl lg:text-3xl">About Me</h1>
          <p className="text-[#c1c1c1] lg:w-182 text-lg tracking-wide">
            I’m{" "}
            <span className="text-white font-semibold">
              {" "}
              Adebiyi Abdulquawiy
            </span>
            , also known as
            <span className="text-white font-semibold"> Dominion</span>, a
            fullstack developer with 2 years of hands-on experience passionate
            about creating clean, responsive and user friendly digital
            solutions. I believe every line of code should serve a purpose and
            every interface should feel effortless to use.
          </p>
          <p className="text-[#c1c1c1] lg:w-182 text-lg tracking-wide">
            I work with <span className="text-white font-semibold">React.js</span> and <span className="text-white font-semibold">Tailwind CSS</span> for visually polished and
            accessible frontends, paired with <span className="text-white font-semibold">Django REST Framework</span> and
            <span className="text-white font-semibold"> PostgreSQL</span> for powerful and reliable backends. This combination
            allows me to deliver structured, efficient and scalable applications
            for different needs.
          </p>
          <p className="text-[#c1c1c1] lg:w-182 text-lg tracking-wide">
            My approach blends design sense with technical skill to ensure that
            every project not only works but also delivers value. I enjoy
            turning ideas into reality, exploring creative solutions and I am
            always open to collaborating on meaningful projects that inspire
            growth and make an impact.
          </p>
        </div>
        <img src={img} alt="" className=" w-[375px] mt-8 md:mt-0 rounded-b-[100px] rounded-t-3xl" loading="lazy"/>
      </div>
      <div className="flex flex-wrap mt-12 items-center gap-3">
        <h1 className="text-lg font-bold text-white">
          <FaLocationPin className="inline text-[#00A8E8] mx-2" />
          Let's Work Together!
        </h1>
        <div className=" bg-[#202020] h-[1px] w-200"></div>
        <Link
          to="/contact"
          className="bg-[#00A8E8] py-2 px-3 font-semibold rounded-2xl"
        >
          Let's Talk <FaArrowRight className="inline" />
        </Link>
      </div>
      <h3 className="mt-6 font-bold text-xl mx-2 text-white">Skills</h3>
      <div className="flex flex-wrap gap-4 mt-5 mx-2">
        {Skills.map((skill, index) => (
          <p
            key={index}
            className="text-[#c1c1c1] border-1 border-gray-500 p-2 rounded-xl"
          >
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;

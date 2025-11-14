import React from "react";
import hand from "../assets/hand.png";
import heroimg from "../assets/hero2.JPG";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Olamidé",
      "A CS Student",
      "A Graphic Designer",
      "A UI/UX Designer",
    ],
    loop: 0, // Infinite loop
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div className="flex flex-wrap justify-between lg:px-15 items-center py-18 px-7">
      <div>
        <div className="flex">
          <h1 className="text-xl lg:text-4xl text-gray-400">hi!</h1>
          <img src={hand} className="size-8" />
        </div>
        <h1 className="font-bold text-3xl lg:text-5xl text-gray-300 my-2">
          I'm{" "}
          <span className="text-[#018aBE] text-3xl lg:text-6xl">
            {text}
            <Cursor cursorStyle="|" />{" "}
          </span>
        </h1>
        <p className="lg:w-[630px] text-gray-500 text-lg my-2 font-semibold">
          A <span className="text-gray-300">Graphic Designer </span> passionate
          about crafting visually compelling, clean, and modern designs that
          communicate clearly and captivate users across both digital and print
          media.
        </p>
        <div className="flex gap-2 mt-4">
          <a
            href=""
            className="font-semibold border-1 border-purple-500 rounded-lg py-2 px-2 bg-[#018aBE] text-gray-200"
          >
            View My Work
          </a>
          <a
            href=""
            className="font-semibold border-1 rounded-lg py-2 px-3 text-gray-200"
          >
            Contact Me
          </a>
        </div>
      </div>
      <img src={heroimg} alt="" className=" w-[375px] mt-8 md:mt-0 rounded-b-[100px] rounded-t-3xl" loading="lazy"/>
    </div>
  );
};

export default Hero;

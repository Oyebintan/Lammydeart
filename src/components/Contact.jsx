import React from "react";
// import heroimage2 from "../assets/Lhero.png";
import { Link, useLocation } from "react-router-dom";
import {
  FaArrowRight,
  FaXTwitter,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";

const Contact = () => {
  const location = useLocation();

  const isContactPage = location.pathname === "/contact";

  return (
    <div className="px-4 mt-10 lg:px-12">
      {/* header */}
      <div>
        {/* <img src={heroimage2} alt="" className="h-20 rounded-[50%]" /> */}
        <p className="text-[#c1c1c1] mt-2 lg:w-160">
          <span className="text-white font-semibold"> I’m Olamide</span>, a
          graphic and UI/UX designer with 2+ years of experience creating clean,
          high-performing visuals that help brands stand out and connect.
        </p>
      </div>
      {!isContactPage && (
        <div>
          <div className="flex flex-wrap mt-12 items-center gap-4 lg:gap-2">
            <h1 className="text-2xl lg:text-4xl font-bold text-white">
              Let's Work Together!
            </h1>
            <div className=" bg-[#202020] h-[1px] w-130 md:w-92 lg:w-160"></div>
            <Link
              to="/contact"
              className="bg-[#018aBE] py-2 px-3 font-semibold rounded-2xl"
            >
              Let's Talk <FaArrowRight className="inline" />
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-between my-12 gap-4 lg:gap-2">
            <div className="flex text-white items-center gap-1">
              <a href="">
                <FaInstagram size={20} />
              </a>
              <div className="h-1 w-1 rounded-[50%] bg-[#018aBE] mx-1"></div>
              <a href="">
                <FaXTwitter size={20} />
              </a>
              <div className="h-1 w-1 rounded-[50%] bg-[#018aBE] mx-1"></div>
              <a href="">
                <FaWhatsapp size={20} />
              </a>
            </div>
            <div className=" bg-[#202020] h-[1px] w-88 lg:w-75 md:w-20"></div>
            <a href="mailto:example@gmail.com" className="text-white text-sm tracking-wide">
              <FaEnvelope className="inline text-[#c1d4c0] mx-1" />
              example.1234567@gmail.com
            </a>
            <div className=" bg-[#202020] h-[1px] w-88 lg:w-75 md:w-20"></div>
            <a
              href=""
              className="text-white text-sm tracking-wide font-semibold"
            >
              <FaPhone className="inline text-[#c1d4c0] mx-1" />
              +234 000 000 0000
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactStars from "react-stars";

const Review = [
  {
    id: 1,
    name: "Becky B.",
    message:
      "Choosing Olamide for my flyer project was a game-changer. He captured the message perfectly and delivered a bold, eye-catching design that brought the vision to life. Professional, timely, and full of creative energy",
    rating: 4.5,
    role: "Beauty brand Founder",
  },
  {
    id: 2,
    name: "Funbi O.",
    message:
      "Olamide transformed my product with thoughtful, intuitive UI/UX design. He grasped my goals quickly and crafted an experience that feels effortless and on-brand. Super professional and a pleasure to work with",
    rating: 4.5,
    role: "E-commerce Merchant",
  },
  {
    id: 3,
    name: "Bola A.",
    message:
      "Working with Olamide on my logo was the best decisions I made for my brand. He immediately understood my vision and created a mark that truly represents my identity. Clean and delivered with precision.",
    rating: 5,
    role: "Real Estate Founder",
  },
];

const Testimonial = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: true,
          arrows: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="lg:px-12 px-6 mt-20">
      {/* header */}
      <div className="flex flex-wrap items-center gap-6">
        <h1 className="text-4xl font-semibold text-white">My Clients</h1>
        <div className="w-[500px] bg-[#202020] h-[1px] lg:w-[920px]"></div>
      </div>
      {/* body */}
      <div className="my-12">
        <Slider {...settings}>
          {Review.map((item) => (
            <div key={item.id}>
              <div className="py-5 px-6 rounded-xl bg-[#121212] w-92">
                <p className="text-[#c1c1c1] font-semibold">"{item.message}"</p>
                <div className="mt-8 flex gap-2 items-center">
                  <p className="text-white">{item.name}</p>
                  <div className=" bg-[#202020] h-[1px] w-50"></div>
                </div>
                <div className="mt-8 flex justify-between items-center">
                  <p className="text-white text-sm text-[#c1c1c1]">
                    {item.role}
                  </p>
                  <ReactStars
                    count={5}
                    value={item.rating}
                    size={24}
                    color2={"#fbc800"}
                    edit={false}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;

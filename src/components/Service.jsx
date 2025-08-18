import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Offers = [
  {
    id: 1,
    title: "Logo Design",
    description:
      "I design logos that build brand presence and drive engagement. Every mark is crafted with your audience and business goals in mind, ensuring your identity is both seen and remembered.",
    list: [
      "Ensure consistent brand identity across all platforms",
      "Strengthen marketing impact with a recognizable logo",
      "Craft a memorable mark that supports engagement and conversions",
    ],
  },
  {
    id: 2,
    title: "Flyer Design",
    description:
      "I design flyers that build brand presence and drive engagement. Every layout is crafted with your audience and business goals in mind, ensuring your message is both seen and remembered.",
    list: [
      "Ensure consistent messaging across campaigns",
      "Boost visibility and marketing performance",
      "Compelling layouts that drive interest and action",
    ],
  },
  {
    id: 3,
    title: "UI & UX Design",
    description:
      "I design interfaces that build brand presence and drive engagement. Every screen is crafted with your audience and business goals in mind, ensuring your product is both seen and remembered.",
    list: [
      "Ensure consistent user experience across platforms",
      "Boost usability and product performance",
      "Intuitive layouts that drive engagement and conversion",
    ],
  },
];

const Service = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    arrows: false
  };

  return (
    <div className="md:px-12 px-6 mt-20">
      {/* service header */}
      <div className="flex flex-wrap gap-4 lg:gap-2 lg:justify-center items-center">
        <h1 className="text-4xl font-semibold text-white">My Service</h1>
        <div className="w-[350px] bg-[#202020] h-[1px] md:w-[150px] lg:w-[620px]"></div>
        <div className="text-gray-300 w-90 md:w-76 lg:w-82">
          <Slider {...settings}>
            <div className="">
              <h3 className="text-sm">Branding</h3>
            </div>
            <div className="">
              <h3 className="text-sm">Logo Design</h3>
            </div>
            <div className="">
              <h3 className="text-sm">Flyer Design</h3>
            </div>
            <div className="">
              <h3 className="text-sm">UI & UX Design</h3>
            </div>
            <div className="">
              <h3 className="text-sm">Visual Identity</h3>
            </div>
          </Slider>
        </div>
      </div>
      {/* service card */}
      <div className="mt-4">
        {Offers.map((service) => (
          <div key={service.id} className='bg-[#121212] rounded-2xl py-4 px-6 my-6'>
            <h2 className="text-xl font-bold mb-2 text-white border-b-[1px] border-[#202020] py-4"><span className='text-[#c1d4c0]'>{service.id}. </span> {service.title}</h2>
            <div className="flex flex-wrap gap-6 lg:gap-18 mt-6 px-4">
              <p className="mb-3 text-[#747474] font-semibold w-98">{service.description}</p>
              <ul className="list-disc marker:text-[#c1d4c0] marker:text-xl list-inside space-y-1 text-gray-200">
                {service.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service
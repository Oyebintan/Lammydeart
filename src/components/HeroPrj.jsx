import React from 'react'
import p1 from '../assets/projects/p1.jpg'
import p2 from '../assets/projects/p2.jpg'
import p3 from '../assets/projects/p3.jpg'
import p4 from '../assets/projects/p4.jpg'

const Designs = [
  {
    id: 1,
    name: "OBAIMOLE",
    about: "flyer",
    img: p1,
    bg: "bg-[#c8acba]",
  },
  {
    id: 2,
    name: "SUG",
    about: "flyer",
    img: p2,
    bg: "bg-[#c1d4c0]",
  },
  {
    id: 3,
    name: "SUG",
    about: "flyer",
    img: p3,
    bg: "bg-blue-700",
  },
  {
    id: 4,
    name: "OJUDE",
    about: "flyer",
    img: p4,
    bg: "bg-[#b9b7b7]",
  },]

const HeroPrj = ({times}) => {
  return (
     <div className="flex flex-wrap justify-center gap-8 mt-4">
      {Designs.slice(0, times).map((design) => (
        <div key={design.id}>
          <div
            className={`h-90 w-90 lg:h-120  lg:w-140 justify-center flex items-center rounded-xl ${design.bg}`}
          >
            <img
              src={design.img}
              alt=""
              className=" h-75 w-80 lg:h-98 lg:w-120 rounded-lg transition-all duration-300 lg:hover:h-105  lg:hover:w-127 hover:shadow-2xl  "
            />
          </div>
          <div className="flex items-center my-2 gap-1">
            <h3 className="text-gray-100 font-semibold">{design.name}</h3>
            <div className="h-2 w-2 rounded-[50%] bg-green-300 mx-1"></div>
            <p className="text-gray-300">Flyer design</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HeroPrj
import React from 'react'
import { FaXTwitter } from 'react-icons/fa6'
import { FaInstagram, FaWhatsapp} from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-4 px-12'>
      <div className='flex gap-8 items-center  '>
        <Link to="/"><img src={logo} alt="Logo" className='h-6' /></Link>
      </div>
        <div className="flex gap-6 items-center">
            <Link to="/project" className="mx-2 font-semibold text-[#D6E8EE]">Projects</Link>
            <a href="" className="mx-2 font-semibold text-[#D6E8EE]">Skills & Tools</a>
            <a href="" className="mx-2 font-semibold text-[#D6E8EE]">Contact</a>
        </div>
      <div className='flex items-center gap-2'>
        <FaXTwitter className='size-7 text-white border-1 p-1 rounded-lg'/>
        <FaInstagram   className='size-7 text-white border-1 p-1 rounded-lg'/>
        <FaWhatsapp   className='size-7 text-white border-1 p-1 rounded-lg'/>
        <div className='h-6 w-[2px] bg-gray-200'></div>
        <a href="" className='font-semibold border-1 border-gray-200 rounded-lg py-1 px-3 text-white'>Hire Me!</a>
      </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import { FaXTwitter } from 'react-icons/fa6'
import { FaInstagram, FaWhatsapp} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='px-10 py-4 mt-4'>
      <div className='flex gap-52'>
        <div>
            <h3 className='text-gray-300 font-bold'>About Me</h3>
            <p className='text-gray-100 text-sm mt-2 w-[500px]'>
                I'm Olabitan Olamide, a <span className='font-bold'>Graphic designer</span> passionate about clean, modern visuals that engage users across digital and print.
            </p>
            <div className='flex gap-4 mt-8'>
                <FaXTwitter className='size-7 text-white border-1 p-1 rounded-lg'/>
                <FaInstagram   className='size-7 text-white border-1 p-1 rounded-lg'/>
                <FaWhatsapp   className='size-7 text-white border-1 p-1 rounded-lg'/>
            </div>
        </div>
        <div>
            <h3 className='text-gray-300 font-bold'>Work</h3>
            <Link to="/project" className='text-gray-100 text-sm mt-2 block'>Projects</Link>
            <Link to="/project" className='text-gray-100 text-sm mt-2 block'>Skills & Tools</Link>
        </div>
      </div>
      <div className='mx-auto w-[100%] bg-gray-400 h-[1.5px] mt-8'></div>
      <p className='text-gray-300 text-xs mt-2'>© 2025, Onari George</p>
    </div>
  )
}

export default Footer

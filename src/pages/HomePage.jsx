import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'   
import HeroCards from '../components/HeroCards'
import gradient from '../assets/gradient.png'

const HomePage = () => {
  return (
    <div>
      <img src={gradient} alt="" className="absolute top-0 h-[70vh] w-[100vw] opacity-[0.5] z-[-1] "/>
      <div className="h-0 w-[25rem] absolute top-[20%] right-0 lbr z-[-1]"></div>
      <Hero/>
      <HeroCards/>
      <div className='flex flex-col items-center '>
        <h1></h1>

      </div>
    </div>
  )
}

export default HomePage

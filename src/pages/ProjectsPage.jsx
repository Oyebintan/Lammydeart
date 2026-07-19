import React from 'react'
import gradient from '../assets/lgradient.png'
import Projects from '../components/Projects'
import { usePageTitle } from '../hooks/usePageTitle'

const ProjectsPage = () => {
  usePageTitle("Projects")
  return (
    <div className='min-h-screen'>
      <img 
        src={gradient} 
        alt="" 
        className="absolute top-0 h-[60vh] w-full opacity-[0.5] z-[-1] object-cover" 
      />
      
      {/* Hero Section */}
      <div className='px-4 sm:px-8 pt-8 md:pt-0 md:px-12 lg:px-16'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-200 font-bold mt-12 sm:mt-16 md:mt-20 lg:mt-24'>
          Projects
        </h1>
        <p className='text-gray-500 text-base sm:text-lg md:text-xl my-3 sm:my-4 mb-4 max-w-2xl'>
          Showcase of my well designed graphics related work
        </p>
      </div>

      {/* Featured Section */}
      <div className='mt-8 sm:mt-12 md:mt-16 lg:mt-18 px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8'>
        <header className='text-[#018aBE] font-extrabold text-sm sm:text-base'>
          My work
        </header>
        <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl text-white mt-2'>
          Featured Projects
        </h1>
        <p className='text-gray-400 text-sm sm:text-base md:text-lg mt-2 max-w-2xl'>
          A showcase of creative works that blend modern aesthetics with intuitive design.
        </p>
      </div>

      {/* Projects Grid */}
      <Projects count={9} />
    </div>
  )
}

export default ProjectsPage
import React from 'react'
import gradient from '../assets/lgradient.png'
import Projects from '../components/Projects'

const ProjectsPage = () => {
  return (
    <div>
      <img src={gradient} alt="" className="absolute top-0 h-[60vh] w-[100vw] opacity-[0.5] z-[-1] "/>
      <h1 className='text-7xl text-gray-200 font-bold mt-24 mx-16'>Projects</h1>
      <p className='text-gray-500 text-xl my-4 mx-16 mb-4'>Showcase of my well designed graphics related work</p>

      <div className='mt-18 mx-16 p-8'>
        <header className='text-[#018aBE] font-extrabold'>My work</header>
        <h1 className='font-bold text-3xl text-white mt-2'>Featured Projects</h1>
        <p className='text-gray-400 w-102 mt-2'>A showcase of creative works that blend modern aesthetics with intuitive design.</p>
      </div>
      <Projects count={9} />
    </div>
  )
}

export default ProjectsPage

import React from 'react'
import ProgressBar from '@ramonak/react-progress-bar'
import { useInView } from 'react-intersection-observer';

const Skills = [
  { id: 1, name: 'Corel Draw', level: 95 },
  { id: 2, name: 'Figma', level: 85 },
  { id: 3, name: 'Photoshop', level: 40 },
]

const About = () => {

  const { ref, inView } = useInView({
    triggerOnce: true, // animate only the first time
    threshold: 0.3,     // % of element visible before triggering
  });

  return (
    <div className='flex justify-between px-10 mt-8 py-6'>
      <div>
        <h1 className='text-3xl font-bold text-gray-500 my-2'>Design</h1>
        <h2 className='text-lg text-gray-400 font-bold'>Every great design begin with even a better story</h2>
        <p className='w-152 text-gray-200 my-2 text-lg'>Over the past 3 years as a freelance designer, I’ve worked remotely with agencies, consulted for startups, 
            and helped build digital products. I'm curious, confident, and always improving—one design challenge at a 
            time.</p>
      </div>
      <div ref={ref}>
        <h1 className='text-3xl font-bold text-gray-200 my-2'>Tools</h1>
        {Skills.map((skill) => (
          <div key={skill.id}>
            <h4 className="text-white font-bold my-2 ">{skill.name}</h4>
            <ProgressBar 
              completed={inView ? skill.level : 0}
              bgColor="#018aBE"
              height="27px"
              width='500px'
              animateOnRender
              labelColor="#fff"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default About

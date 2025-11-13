import React from 'react'
import ProgressBar from '@ramonak/react-progress-bar'
import { useInView } from 'react-intersection-observer';

const Skills = [
  { id: 1, name: 'Corel Draw', level: 95 },
  { id: 2, name: 'Figma', level: 85 },
  { id: 3, name: 'Adobe Photoshop', level: 70 },
  { id: 4, name: 'Adobe Illustrator', level: 80 },
]

const About = () => {

  const { ref, inView } = useInView({
    triggerOnce: true, // animate only the first time
    threshold: 0.3,     // % of element visible before triggering
  });

  return (
    <div className='flex flex-wrap justify-between px-5 lg:px-10 mt-8 py-6'>
      <div>
        <h1 className='text-3xl font-bold text-white my-2'>Design</h1>
        <h2 className='text-lg text-gray-100 font-bold'>Every great design begin with even a better story</h2>
        <p className='lg:w-152 text-[#818181] my-2 text-md md:text-lg'>Over the past three years as a freelance designer, I’ve had the opportunity to work remotely with creative agencies, consult for early-stage startups, and contribute to the development of impactful digital products across a range of industries. My approach is rooted in curiosity and a strong belief in user-centered design. I’m confident in my ability to balance aesthetic appeal with functional clarity, and I’m constantly refining my skills solving one design challenge at a time while staying ahead of trends and technologies that shape the digital experience.</p>
      </div>
      <div ref={ref}>
        <h1 className='text-3xl font-bold text-gray-200 my-2'>Tools</h1>
        {Skills.map((skill) => (
          <div key={skill.id} className='w-[98vw] md:w-[550px]'>
            <h4 className="text-white font-bold my-2 ">{skill.name}</h4>
            <ProgressBar 
              completed={inView ? skill.level : 0}
              bgColor="#018aBE"
              height="27px"
              width='90%'
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

import React from 'react'
import p1 from '../assets/projects/p1.jpg'
import p2 from '../assets/projects/p2.jpg'
import p3 from '../assets/projects/p3.jpg'
import p4 from '../assets/projects/p4.jpg'
import p5 from '../assets/projects/p5.jpg'
import p6 from '../assets/projects/p6.jpg'
import p7 from '../assets/projects/p7.jpg'
import p8 from '../assets/projects/p8.jpg'
import p9 from '../assets/projects/p9.jpg'

const Prjs = [
    { id: 1, image: p1 },
    { id: 2, image: p2 },
    { id: 3, image: p3 },
    { id: 4, image: p4 },
    { id: 5, image: p5 },
    { id: 6, image: p6 },
    { id: 7, image: p7 },
    { id: 8, image: p8 },
    { id: 9, image: p9 },
]


const Projects = ({count}) => {
  return (
    <div className='flex flex-wrap py-10 gap-6  justify-center'>
        {
            Prjs.slice(0, count).map((prj) => (
                <div key={prj.id} className=''>
                    <img src={prj.image} alt={`Project ${prj.id}`} className='size-87'/>
                </div>
            ))
        }
    </div>
  )
}

export default Projects
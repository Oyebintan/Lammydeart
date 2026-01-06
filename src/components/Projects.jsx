import React, { useState } from 'react'
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
    { 
        id: 1, 
        image: p1, 
        title: "Brand Identity Design",
        type: "Logo Design",
        description: "Modern logo concept with clean typography and distinctive brand mark"
    },
    { 
        id: 2, 
        image: p2, 
        title: "Event Promotion",
        type: "Flyer Design",
        description: "Eye-catching promotional flyer with bold colors and dynamic layout"
    },
    { 
        id: 3, 
        image: p3, 
        title: "Corporate Branding",
        type: "Logo Design",
        description: "Professional business logo featuring minimalist design principles"
    },
    { 
        id: 4, 
        image: p4, 
        title: "Social Media Campaign",
        type: "Poster Design",
        description: "Vibrant poster design optimized for digital marketing channels"
    },
    { 
        id: 5, 
        image: p5, 
        title: "Product Launch",
        type: "Flyer Design",
        description: "Creative product showcase with emphasis on visual hierarchy"
    },
    { 
        id: 6, 
        image: p6, 
        title: "Startup Branding",
        type: "Logo Design",
        description: "Innovative logo combining modern aesthetics with brand storytelling"
    },
    { 
        id: 7, 
        image: p7, 
        title: "Concert Advertisement",
        type: "Poster Design",
        description: "Bold event poster with striking typography and color scheme"
    },
    { 
        id: 8, 
        image: p8, 
        title: "Business Promotion",
        type: "Flyer Design",
        description: "Professional marketing flyer with clear call-to-action elements"
    },
    { 
        id: 9, 
        image: p9, 
        title: "Tech Company Branding",
        type: "Logo Design",
        description: "Contemporary tech logo with geometric shapes and modern palette"
    },
]

const Projects = ({count}) => {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <div className='flex flex-wrap py-10 gap-6 justify-center px-4'>
        {
            Prjs.slice(0, count).map((prj) => (
                <div 
                    key={prj.id} 
                    className='relative group cursor-pointer overflow-hidden rounded-lg'
                    onMouseEnter={() => setHoveredId(prj.id)}
                    onMouseLeave={() => setHoveredId(null)}
                >
                    <img 
                        src={prj.image} 
                        alt={prj.title} 
                        className='size-87 object-cover transition-transform duration-300 group-hover:scale-110' 
                        loading='lazy'
                    />
                    
                    {/* Overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-300 ${hoveredId === prj.id ? 'opacity-100' : 'opacity-0'}`}>
                        <div className='absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0'>
                            <span className='inline-block px-3 py-1 bg-[#018aBE] rounded-full text-xs font-semibold mb-2'>
                                {prj.type}
                            </span>
                            <h3 className='font-bold text-xl mb-2'>{prj.title}</h3>
                            <p className='text-gray-300 text-sm'>{prj.description}</p>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Projects
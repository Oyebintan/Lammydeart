import React from 'react'
import stars from '../assets/svgs/stars.svg'
import edit from '../assets/svgs/edit.svg'
import logo from '../assets/svgs/logo.svg'

const HeroCardsData = [
    {
        'id': 1,
        'title': 'Cross-Platform Design Specialist',
        'icon': stars,
        'description': 'Crafting cohesive and visually stunning designs for print, digital, and web platforms.'
    },
    {
        'id': 2,
        'title': 'Logo Design Specialist',
        'icon': logo,
        'description': 'Creating timeless, memorable logos that capture brand identity with clarity and creativity.'
    },
    {
        'id': 3,
        'title': 'Visual Editing Expert',
        'icon': edit,
        'description': 'Enhancing images with precision—expert in photo retouching, color correction, and visual storytelling.'
    }
]

const HeroCards = () => {
  return (
    <div className='flex justify-center gap-6'>
      {HeroCardsData.map((card) => (
        <div key={card.id} className='border-1 border-gray-400 p-4 rounded-lg '>
          <h1 className='text-gray-300 font-bold bg-gray-600/30 p-1 rounded-2xl flex gap-1 items-center w-[100%] '>
            <div className='bg-brown rounded-[50%] p-1'><img src={card.icon} alt="" className='size-7' /></div>
            {card.title}
          </h1>
            <p className='text-gray-400 text-sm mt-2 w-82'>{card.description}</p>
        </div>
        ))}
    </div>
  )
}

export default HeroCards

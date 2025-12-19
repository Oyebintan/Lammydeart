import React, { useEffect, useState } from 'react'
import ProgressBar from '@ramonak/react-progress-bar'
import { useInView } from 'react-intersection-observer'
import { Sparkles } from 'lucide-react'

const Skills = [
  { id: 1, name: 'Corel Draw', level: 95 },
  { id: 2, name: 'Figma', level: 85 },
  { id: 3, name: 'Adobe Photoshop', level: 70 },
  { id: 4, name: 'Adobe Illustrator', level: 80 },
]


const Star = ({ style }) => (
  <div
    className="absolute rounded-full bg-white"
    style={style}
  />
)

const About = () => {
  const [stars, setStars] = useState([])
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  // Generate random stars
  useEffect(() => {
    const generateStars = () => {
      const newStars = []
      for (let i = 0; i < 150; i++) {
        newStars.push({
          id: i,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 2 + 0.5}px`,
          height: `${Math.random() * 2 + 0.5}px`,
          opacity: Math.random() * 0.7 + 0.3,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${Math.random() * 3 + 2}s`,
        })
      }
      setStars(newStars)
    }
    generateStars()
  }, [])

  return (
    <div className="relative overflow-hidden bg-[#0d0d0d] py-16 px-5 lg:px-10">
      {/* Starry Background */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <Star
            key={star.id}
            style={{
              left: star.left,
              top: star.top,
              width: star.width,
              height: star.height,
              opacity: star.opacity,
              animation: `twinkle ${star.animationDuration} ease-in-out infinite`,
              animationDelay: star.animationDelay,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0d0d]/50 to-[#0d0d0d]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Design Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-[#018aBE]" />
              <h1 className="text-4xl lg:text-5xl font-bold text-white">Design</h1>
            </div>
            
            <h2 className="text-xl lg:text-2xl text-gray-100 font-semibold leading-relaxed">
              Every great design begins with an even better story
            </h2>
            
            <div className="h-1 w-20 bg-gradient-to-r from-[#018aBE] to-transparent rounded-full" />
            
            <p className="text-[#a0a0a0] text-base lg:text-lg leading-relaxed">
              Over the past three years as a freelance designer, I've had the opportunity to work remotely with creative agencies, consult for early-stage startups, and contribute to the development of impactful digital products across a range of industries.
            </p>
            
            <p className="text-[#a0a0a0] text-base lg:text-lg leading-relaxed">
              My approach is rooted in curiosity and a strong belief in user-centered design. I'm confident in my ability to balance aesthetic appeal with functional clarity, and I'm constantly refining my skills—solving one design challenge at a time while staying ahead of trends and technologies that shape the digital experience.
            </p>
          </div>

          {/* Skills Section */}
          <div ref={ref} className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#018aBE] animate-pulse" />
              <h1 className="text-4xl lg:text-5xl font-bold text-white">Tools</h1>
            </div>
            
            <div className="space-y-6 pt-4">
              {Skills.map((skill, index) => (
                <div 
                  key={skill.id} 
                  className="group"
                  style={{
                    animation: inView ? `slideIn 0.6s ease-out ${index * 0.1}s both` : 'none'
                  }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-white font-semibold text-lg group-hover:text-[#018aBE] transition-colors duration-300">
                      {skill.name}
                    </h4>
                    <span className="text-[#018aBE] font-bold text-sm">{skill.level}%</span>
                  </div>
                  
                  <div className="relative">
                    <ProgressBar 
                      completed={inView ? skill.level : 0}
                      bgColor="#018aBE"
                      baseBgColor="#1a1a1a"
                      height="10px"
                      width="100%"
                      isLabelVisible={false}
                      animateOnRender
                      transitionDuration="1.5s"
                      className="rounded-full overflow-hidden shadow-lg shadow-[#018aBE]/20"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}

export default About
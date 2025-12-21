import React, { useEffect, useState } from "react"
import { FaArrowRight } from "react-icons/fa6"
import img  from "../assets/hero2.JPG"
import { Sparkles, Palette, Layout, Lightbulb } from "lucide-react"

const Skills = [
  "Branding",
  "Social Media Design",
  "Flyer Design",
  "Print Design",
  "Product Design",
  "UI & UX Design",
]

const tools = [
  { name: "Figma", icon: Layout },
  { name: "Adobe Photoshop", icon: Palette },
  { name: "Adobe Illustrator", icon: Palette },
  { name: "Corel Draw", icon: Palette },
]

const highlights = [
  { icon: Palette, text: "3+ Years Experience" },
  { icon: Layout, text: "User-Centered Design" },
  { icon: Lightbulb, text: "Creative Solutions" },
]

// Star component
const Star = ({ style }) => (
  <div className="absolute rounded-full bg-white" style={style} />
)

const AboutPage = () => {
  const [stars, setStars] = useState([])
  
  // Generate stars
  useEffect(() => {
    const generateStars = () => {
      const newStars = []
      for (let i = 0; i < 80; i++) {
        newStars.push({
          id: i,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 2 + 0.5}px`,
          height: `${Math.random() * 2 + 0.5}px`,
          opacity: Math.random() * 0.6 + 0.2,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${Math.random() * 3 + 2}s`,
        })
      }
      setStars(newStars)
    }
    generateStars()
  }, [])


  return (
    <div className="bg-[#0d0d0d] min-h-screen">
      {/* Hero Section with Stars */}
      <div className="relative overflow-hidden px-6 lg:px-12 py-16">
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/90 via-transparent to-[#0d0d0d]" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-[#018aBE]" />
                  <span className="text-[#018aBE] font-semibold tracking-wide uppercase text-sm">
                    About Me
                  </span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Olamide
                </h1>
                <p className="text-xl text-[#c1c1c1]">
                  Graphic Designer & Product Designer
                </p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-[#121212] rounded-lg p-4 border border-[#202020]"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#018aBE]/10">
                      <item.icon className="w-5 h-5 text-[#018aBE]" />
                    </div>
                    <span className="text-white text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-[#c1c1c1] text-base lg:text-lg leading-relaxed">
                  I'm a graphic and UI/UX designer with over 3 years of experience creating clean, high-performing visuals that help brands stand out and connect with their audience. I believe every design should tell a story and solve real problems.
                </p>
                <p className="text-[#c1c1c1] text-base lg:text-lg leading-relaxed">
                  Over the past three years as a freelance designer, I've had the opportunity to work remotely with creative agencies, consult for early-stage startups, and contribute to the development of impactful digital products across a range of industries.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#018aBE]/10 rounded-3xl blur-2xl" />
              <img
                src={img}
                alt="Olamide"
                className="relative w-full max-w-md mx-auto rounded-3xl rounded-b-[100px] shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="px-6 lg:px-12 py-16 max-w-7xl mx-auto">
        <div className="bg-[#121212] rounded-2xl p-8 lg:p-12 border border-[#202020]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#018aBE]" />
            <h2 className="text-2xl lg:text-3xl font-bold text-white">My Approach</h2>
          </div>
          <p className="text-[#c1c1c1] text-base lg:text-lg leading-relaxed">
            My approach is rooted in curiosity and a strong belief in user-centered design. I'm confident in my ability to balance aesthetic appeal with functional clarity, and I'm constantly refining my skills—solving one design challenge at a time while staying ahead of trends and technologies that shape the digital experience.
          </p>
        </div>
      </div>

      {/* Tools Section */}
      <div className="px-6 lg:px-12 py-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Palette className="w-6 h-6 text-[#018aBE]" />
          <h2 className="text-2xl lg:text-3xl font-bold text-white">Design Tools</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-[#121212] rounded-xl p-6 border border-[#202020] text-center"
            >
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-lg bg-[#018aBE]/10">
                <tool.icon className="w-7 h-7 text-[#018aBE]" />
              </div>
              <p className="text-white font-semibold">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="px-6 lg:px-12 py-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Sparkles className="w-6 h-6 text-[#018aBE]" />
          <h2 className="text-2xl lg:text-3xl font-bold text-white">Skills & Services</h2>
        </div>
        
        <div className="flex flex-wrap gap-4">
          {Skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#121212] border border-[#202020] px-6 py-3 rounded-xl text-[#c1c1c1]"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  )
}

export default AboutPage
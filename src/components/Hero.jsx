import React, { useEffect, useState } from "react"
import { Sparkles, Palette, PenTool, Layers } from "lucide-react"
import heroImage from "../assets/hero2.JPG";


const handEmoji = "👋"

// Typewriter effect component (simplified replacement for react-simple-typewriter)
const TypewriterText = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < word.length) {
            setCurrentText(word.slice(0, currentText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 1000)
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )
    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words])

  return (
    <>
      {currentText}
      <span className="animate-pulse">|</span>
    </>
  )
}

const HeroCardsData = [
  {
    id: 1,
    title: "Cross-Platform Design",
    icon: Layers,
    description: "Crafting cohesive and visually stunning designs for print, digital, and web platforms.",
  },
  {
    id: 2,
    title: "Logo Design Specialist",
    icon: Palette,
    description: "Creating timeless, memorable logos that capture brand identity with clarity and creativity.",
  },
  {
    id: 3,
    title: "Visual Editing Expert",
    icon: PenTool,
    description: "Precision-crafted visuals—skilled in retouching, color correction, and storytelling.",
  },
]

const Hero = () => {
  const words = ["Olamidé", "A CS Student", "A Graphic Designer", "A UI/UX Designer"]

  return (
    <div className="relative overflow-hidden bg-[#0d0d0d] pt-24 pb-16 px-6 lg:px-12">
      {/* Subtle gradient background that matches navbar */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            {/* Greeting */}
            <div className="flex items-center gap-3">
              <span className="text-3xl lg:text-4xl animate-wave inline-block origin-[70%_70%]">
                {handEmoji}
              </span>
              <h2 className="text-2xl lg:text-3xl text-[#D6E8EE] font-light">
                Hi there!
              </h2>
            </div>

            {/* Main Heading with Typewriter */}
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                I'm{" "}
                <span className="text-[#018aBE]">
                  <TypewriterText words={words} />
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-[#9a9a9a] text-base lg:text-lg leading-relaxed max-w-2xl">
              A <span className="text-white font-semibold">Graphic Designer</span> passionate
              about crafting visually compelling, clean, and modern designs that
              communicate clearly and captivate users across both digital and print
              media.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/project"
                className="group bg-[#018aBE] hover:bg-[#0156a8] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                <span>View My Work</span>
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a
                href="/contact"
                className="bg-transparent border border-gray-200 hover:border-[#018aBE] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
              >
                Contact Me
              </a>
            </div>

            {/* Stats/Tags */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-[#9a9a9a] text-sm">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Available for freelance</span>
              </div>
              <div className="w-px h-5 bg-gray-700" />
              <div className="text-[#9a9a9a] text-sm">
                <span className="text-white font-semibold">3+</span> years experience
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:ml-auto">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#018aBE]/20 to-transparent rounded-3xl blur-3xl" />
            
            {/* Image */}
            <div className="relative">
              <img
                src={heroImage}
                alt="Olamidé"
                className="w-full max-w-md mx-auto rounded-3xl rounded-b-[100px] shadow-2xl"
                loading="lazy"
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md border border-gray-700 rounded-full px-6 py-3 flex items-center gap-3 shadow-xl">
                <div className="w-3 h-3 rounded-full bg-[#018aBE] animate-pulse" />
                <span className="text-white font-semibold text-xs lg:text-base">Open to work</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave animation keyframes */}
      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          10%, 30% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
        }
        .animate-wave {
          animation: wave 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

const HeroCards = () => {
  return (
    <div className="relative bg-[#0d0d0d] px-6 lg:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HeroCardsData.map((card, index) => {
            const Icon = card.icon
            return (
              <div
                key={card.id}
                className="group bg-black/40 backdrop-blur-md border border-gray-700 hover:border-[#018aBE] rounded-lg p-6 transition-all duration-300"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#018aBE]/10 group-hover:bg-[#018aBE]/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#018aBE]" />
                  </div>
                  <h3 className="text-white font-bold text-base leading-tight">
                    {card.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[#9a9a9a] text-sm leading-relaxed">
                  {card.description}
                </p>

                {/* Bottom accent line */}
                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-[#018aBE] to-transparent group-hover:w-full transition-all duration-500" />
              </div>
            )
          })}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

// Combined export for demo
export default function HeroSection() {
  return (
    <>
      <Hero />
      <HeroCards />
    </>
  )
}

import React, { useEffect, useState } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Palette, FileText, Layout, Sparkles } from 'lucide-react'

const Offers = [
  {
    id: 1,
    title: "Logo Design",
    icon: Palette,
    description:
      "I design logos that build brand presence and drive engagement. Every mark is crafted with your audience and business goals in mind, ensuring your identity is both seen and remembered.",
    list: [
      "Ensure consistent brand identity across all platforms",
      "Strengthen marketing impact with a recognizable logo",
      "Craft a memorable mark that supports engagement and conversions",
    ],
  },
  {
    id: 2,
    title: "Flyer Design",
    icon: FileText,
    description:
      "I design flyers that build brand presence and drive engagement. Every layout is crafted with your audience and business goals in mind, ensuring your message is both seen and remembered.",
    list: [
      "Ensure consistent messaging across campaigns",
      "Boost visibility and marketing performance",
      "Compelling layouts that drive interest and action",
    ],
  },
  {
    id: 3,
    title: "UI & UX Design",
    icon: Layout,
    description:
      "I design interfaces that build brand presence and drive engagement. Every screen is crafted with your audience and business goals in mind, ensuring your product is both seen and remembered.",
    list: [
      "Ensure consistent user experience across platforms",
      "Boost usability and product performance",
      "Intuitive layouts that drive engagement and conversion",
    ],
  },
]

// Star component
const Star = ({ style }) => (
  <div className="absolute rounded-full bg-white" style={style} />
)

const Service = () => {
  const [stars, setStars] = useState([])
  
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  }

  // Generate stars
  useEffect(() => {
    const generateStars = () => {
      const newStars = []
      for (let i = 0; i < 120; i++) {
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
    <div className="relative overflow-hidden bg-[#0d0d0d] py-16 md:px-12 px-6">
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/80 via-transparent to-[#0d0d0d]/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Service Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 mb-16">
          <div className="flex items-center gap-4">
            <Sparkles className="w-8 h-8 text-[#018aBE]" />
            <h1 className="text-4xl lg:text-5xl font-bold text-white whitespace-nowrap">
              My Services
            </h1>
          </div>
          
          <div className="hidden lg:block flex-1 h-[2px] bg-gradient-to-r from-[#018aBE] via-[#202020] to-transparent" />
          
          <div className="w-full lg:w-auto text-gray-300 overflow-hidden">
            <Slider {...settings}>
              <div className="px-3">
                <span className="inline-block px-4 py-2 bg-[#1a1a1a] rounded-full text-sm font-medium hover:bg-[#018aBE] hover:text-white transition-colors duration-300 cursor-pointer">
                  Branding
                </span>
              </div>
              <div className="px-3">
                <span className="inline-block px-4 py-2 bg-[#1a1a1a] rounded-full text-sm font-medium hover:bg-[#018aBE] hover:text-white transition-colors duration-300 cursor-pointer">
                  Logo Design
                </span>
              </div>
              <div className="px-3">
                <span className="inline-block px-4 py-2 bg-[#1a1a1a] rounded-full text-sm font-medium hover:bg-[#018aBE] hover:text-white transition-colors duration-300 cursor-pointer">
                  Flyer Design
                </span>
              </div>
              <div className="px-3">
                <span className="inline-block px-4 py-2 bg-[#1a1a1a] rounded-full text-sm font-medium hover:bg-[#018aBE] hover:text-white transition-colors duration-300 cursor-pointer">
                  UI & UX Design
                </span>
              </div>
              <div className="px-3">
                <span className="inline-block px-4 py-2 bg-[#1a1a1a] rounded-full text-sm font-medium hover:bg-[#018aBE] hover:text-white transition-colors duration-300 cursor-pointer">
                  Visual Identity
                </span>
              </div>
            </Slider>
          </div>
        </div>

        {/* Service Cards */}
        <div className="space-y-8">
          {Offers.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="group relative bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-3xl p-8 border border-[#202020] hover:border-[#018aBE] transition-all duration-500 overflow-hidden"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                }}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#018aBE] rounded-full blur-[100px] opacity-20" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 pb-6 border-b border-[#202020] group-hover:border-[#018aBE]/30 transition-colors duration-300">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#018aBE] to-[#0156a8] group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold text-[#018aBE]">
                        {String(service.id).padStart(2, '0')}
                      </span>
                      <h2 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-[#018aBE] transition-colors duration-300">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="grid lg:grid-cols-2 gap-8 mt-8">
                    <div>
                      <p className="text-[#9a9a9a] text-base lg:text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      {service.list.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 group/item">
                          <div className="mt-1.5">
                            <div className="w-2 h-2 rounded-full bg-[#018aBE] group-hover/item:scale-125 transition-transform duration-300" />
                          </div>
                          <p className="text-gray-200 text-sm lg:text-base leading-relaxed group-hover/item:text-white transition-colors duration-300">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
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

        /* Custom Slick Slider Styles */
        .slick-slider {
          user-select: none;
        }
        
        .slick-track {
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  )
}

export default Service
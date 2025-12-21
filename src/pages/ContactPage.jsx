import React, { useEffect, useState } from "react"
import {
  FaXTwitter,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6"
import { Sparkles, Clock, Globe, Send } from "lucide-react"

// Star component
const Star = ({ style }) => (
  <div className="absolute rounded-full bg-white" style={style} />
)

const ContactPage = () => {
  const [stars, setStars] = useState([])

  // Generate stars
  useEffect(() => {
    const generateStars = () => {
      const newStars = []
      for (let i = 0; i < 100; i++) {
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

  const contactMethods = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "lammydeart@gmail.com",
      description: "Send me an email anytime",
      link: "mailto:lammydeart@gmail.com",
      color: "#018aBE"
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+234 701 584 8547",
      description: "Call or WhatsApp me",
      link: "tel:+2347015848547",
      color: "#018aBE"
    },
    {
      icon: FaLocationDot,
      title: "Location",
      value: "Lagos, Nigeria",
      description: "Available for remote work",
      link: null,
      color: "#018aBE"
    },
  ]

  const socialLinks = [
    {
      icon: FaInstagram,
      name: "Instagram",
      handle: "@lammyde.art",
      url: "https://www.instagram.com/lammyde.art",
      color: "#E4405F"
    },
    {
      icon: FaXTwitter,
      name: "Twitter",
      handle: "@oyebintan",
      url: "https://x.com/oyebintan?s=21",
      color: "#1DA1F2"
    },
    {
      icon: FaWhatsapp,
      name: "WhatsApp",
      handle: "+234 701 584 8547",
      url: "http://Wa.me/2347015848547",
      color: "#25D366"
    },
  ]

  const availability = [
    {
      icon: Clock,
      title: "Response Time",
      value: "24 hours",
      description: "I typically respond within a day"
    },
    {
      icon: Globe,
      title: "Availability",
      value: "Open to work",
      description: "Available for freelance projects"
    },
  ]

  return (
    <div className="bg-[#0d0d0d] min-h-screen">
      {/* Hero Section with Stars */}
      <div className="relative overflow-hidden pt-32 pb-20 px-6 lg:px-12">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0d0d0d]" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-[#9a9a9a] mb-8">
            <a href="/" className="hover:text-[#018aBE] transition-colors duration-300">
              Home
            </a>
            <span>/</span>
            <span className="text-white">Contact</span>
          </div>

          {/* Hero Content */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="flex items-center justify-center gap-3">
              <Sparkles className="w-8 h-8 text-[#018aBE]" />
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Let's Work Together
            </h1>
            
            <p className="text-[#D6E8EE] text-lg lg:text-xl leading-relaxed">
              Have a project in mind? I'd love to hear about it. Reach out and let's create something amazing together.
            </p>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md border border-gray-700 rounded-full px-6 py-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-white font-semibold">Available for new projects</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Methods Section */}
      <div className="relative px-6 lg:px-12 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group bg-black/40 backdrop-blur-md border border-gray-700 hover:border-[#018aBE] rounded-2xl p-8 transition-all duration-300"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#018aBE]/10 group-hover:bg-[#018aBE]/20 transition-colors duration-300">
                    <method.icon className="w-8 h-8 text-[#018aBE]" />
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">
                      {method.title}
                    </h3>
                    <p className="text-[#9a9a9a] text-sm mb-3">
                      {method.description}
                    </p>
                    {method.link ? (
                      <a
                        href={method.link}
                        className="text-white font-semibold hover:text-[#018aBE] transition-colors duration-300 break-all"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-white font-semibold">
                        {method.value}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="relative px-6 lg:px-12 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block">
              <h3 className="text-[#018aBE] font-bold text-sm uppercase tracking-wider mb-2">
                Social Media
              </h3>
              <div className="h-1 w-full bg-gradient-to-r from-[#018aBE] via-[#018aBE]/50 to-transparent rounded-full" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-6">
              Connect With Me
            </h2>
          </div>

          {/* Social Links */}
          <div className="grid md:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-black/40 backdrop-blur-md border border-gray-700 hover:border-[#018aBE] rounded-2xl p-8 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#018aBE]/10 group-hover:bg-[#018aBE]/20 transition-colors duration-300">
                    <social.icon className="w-7 h-7 text-[#018aBE]" />
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-lg">
                      {social.name}
                    </h3>
                    <p className="text-[#9a9a9a] text-sm">
                      {social.handle}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Availability Info */}
      <div className="relative px-6 lg:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {availability.map((item, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-md border border-gray-700 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#018aBE]/10">
                    <item.icon className="w-6 h-6 text-[#018aBE]" />
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[#018aBE] font-semibold text-xl mb-2">
                      {item.value}
                    </p>
                    <p className="text-[#9a9a9a] text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative px-6 lg:px-12 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-md border border-gray-700 rounded-2xl p-10 lg:p-16 text-center">
            <Send className="w-12 h-12 text-[#018aBE] mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Start?
            </h2>
            <p className="text-[#D6E8EE] text-lg mb-8 max-w-2xl mx-auto">
              Whether you need a logo, flyer, or complete brand identity, I'm here to help bring your vision to life.
            </p>
            <a
              href="mailto:lammydeart@gmail.com"
              className="inline-flex items-center gap-3 bg-[#018aBE] hover:bg-[#0156a8] text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-300"
            >
              <FaEnvelope />
              <span>Send Me an Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
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
      `}</style>
    </div>
  )
}

export default ContactPage
import React from "react"
import {
  FaArrowRight,
  FaXTwitter,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6"
import { Sparkles, User } from "lucide-react"

const Contact = ({ isContactPage = false }) => {
  const socialLinks = [
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/lammyde.art?igsh=MWs5b2ZjOWFjeHBvMQ%3D%3D&utm_source=qr",
      label: "Instagram",
      color: "#E4405F"
    },
    {
      icon: FaXTwitter,
      url: "https://x.com/oyebintan?s=21",
      label: "Twitter",
      color: "#1DA1F2"
    },
    {
      icon: FaWhatsapp,
      url: "http://Wa.me/2347015848547",
      label: "WhatsApp",
      color: "#25D366"
    },
  ]

  return (
    <div className="px-4 py-12 lg:px-12 max-w-7xl mx-auto">
      {/* Bio Section */}
      <div className="relative">
        <div className="flex items-start gap-6">
          {/* Avatar Placeholder */}
          <div className="hidden md:flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#018aBE] to-[#0156a8] flex-shrink-0 group hover:scale-110 transition-transform duration-300">
            <User className="w-10 h-10 text-white" />
          </div>

          {/* Bio Text */}
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#018aBE]" />
              <span className="text-sm text-[#018aBE] font-semibold tracking-wide uppercase">
                About Me
              </span>
            </div>
            
            <p className="text-[#c1c1c1] text-base lg:text-lg leading-relaxed max-w-3xl">
              <span className="text-white font-bold text-xl">I'm Olamide</span>, a
              graphic and UI/UX designer with 2+ years of experience creating clean,
              high-performing visuals that help brands stand out and connect.
            </p>
          </div>
        </div>
      </div>

      {!isContactPage && (
        <div className="mt-16 space-y-12">
          {/* CTA Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#018aBE]/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-3xl p-8 lg:p-10 border border-[#202020] group-hover:border-[#018aBE] transition-all duration-500">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                <div className="flex-1">
                  <h2 className="text-3xl lg:text-5xl font-bold text-white mb-3 leading-tight">
                    Let's Work Together!
                  </h2>
                  <p className="text-[#9a9a9a] text-base lg:text-lg">
                    Ready to bring your vision to life? Let's create something amazing.
                  </p>
                </div>
                
                <a
                  href="/contact"
                  className="group/btn bg-gradient-to-r from-[#018aBE] to-[#0156a8] hover:from-[#0156a8] hover:to-[#018aBE] py-4 px-8 font-semibold rounded-2xl text-white transition-all duration-300 flex items-center gap-3 shadow-lg shadow-[#018aBE]/30 hover:shadow-[#018aBE]/50 hover:scale-105"
                >
                  <span>Let's Talk</span>
                  <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Social Links Card */}
            <div className="bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-2xl p-6 border border-[#202020] hover:border-[#018aBE] transition-all duration-300 group">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#018aBE] animate-pulse" />
                <h3 className="text-white font-semibold text-lg">Follow Me</h3>
              </div>
              
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#1a1a1a] text-white hover:bg-[#018aBE] transition-all duration-300 hover:scale-110 hover:-translate-y-1 group/icon"
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="group-hover/icon:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-2xl p-6 border border-[#202020] hover:border-[#018aBE] transition-all duration-300 group">
              <div className="flex items-center gap-2 mb-4">
                <FaEnvelope className="text-[#018aBE]" size={20} />
                <h3 className="text-white font-semibold text-lg">Email</h3>
              </div>
              
              <a
                href="mailto:lammydeart@gmail.com"
                className="text-[#9a9a9a] hover:text-[#018aBE] transition-colors duration-300 break-all group-hover:text-white"
              >
                lammydeart@gmail.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-2xl p-6 border border-[#202020] hover:border-[#018aBE] transition-all duration-300 group md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <FaPhone className="text-[#018aBE]" size={18} />
                <h3 className="text-white font-semibold text-lg">Phone</h3>
              </div>
              
              <a
                href="tel:+2347015848547"
                className="text-[#9a9a9a] hover:text-[#018aBE] transition-colors duration-300 font-semibold tracking-wide group-hover:text-white"
              >
                +234 701 584 8547
              </a>
            </div>
          </div>

          {/* Quick Info Bar - Modified to blend with footer */}
          <div className="flex flex-wrap items-center justify-center gap-6 py-8">
            <div className="flex items-center gap-2 text-[#9a9a9a] text-sm">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Available for freelance</span>
            </div>
            <div className="w-px h-4 bg-[#202020]" />
            <div className="text-[#9a9a9a] text-sm">
              Response time: <span className="text-white font-semibold">24 hours</span>
            </div>
            <div className="w-px h-4 bg-[#202020]" />
            <div className="text-[#9a9a9a] text-sm">
              Based in <span className="text-white font-semibold">Nigeria</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Contact
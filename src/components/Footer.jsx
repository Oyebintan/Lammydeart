import React from 'react'
import { Heart, ArrowUp } from 'lucide-react'
import {
  FaXTwitter,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa6"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/lammyde.art?igsh=MWs5b2ZjOWFjeHBvMQ%3D%3D&utm_source=qr",
      label: "Instagram"
    },
    {
      icon: FaXTwitter,
      url: "https://x.com/oyebintan?s=21",
      label: "Twitter"
    },
    {
      icon: FaWhatsapp,
      url: "http://Wa.me/2347015848547",
      label: "WhatsApp"
    },
    {
      icon: FaEnvelope,
      url: "mailto:lammydeart@gmail.com",
      label: "Email"
    },
  ]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <footer className="relative mt-10 px-6 lg:px-12 pb-6">
      {/* Decorative gradient line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#018aBE] to-transparent mb-12" />

      {/* Main footer content */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Brand Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">Olamide</h3>
          <p className="text-[#9a9a9a] text-sm leading-relaxed">
            Crafting memorable designs that help brands stand out and connect with their audience.
          </p>
          <div className="flex items-center gap-2 text-[#9a9a9a] text-sm">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Available for freelance</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-lg">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-[#9a9a9a] hover:text-[#018aBE] transition-colors duration-300 text-sm flex items-center gap-2 group"
                >
                  <span className="w-0 h-[2px] bg-[#018aBE] group-hover:w-4 transition-all duration-300" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-lg">Services</h4>
          <ul className="space-y-2 text-[#9a9a9a] text-sm">
            <li>Logo Design</li>
            <li>Flyer Design</li>
            <li>UI & UX Design</li>
            <li>Branding</li>
          </ul>
        </div>

        {/* Connect */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-lg">Connect</h4>
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#1a1a1a] text-[#9a9a9a] hover:bg-[#018aBE] hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
          <a
            href="mailto:lammydeart@gmail.com"
            className="text-[#9a9a9a] hover:text-[#018aBE] transition-colors duration-300 text-sm block"
          >
            lammydeart@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#202020] pt-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-sm text-[#9a9a9a]">
            <span>© {currentYear} Olamide.</span>
            <span className="hidden md:inline">•</span>
            <span>All rights reserved</span>
          </div>

          {/* Credit */}
          <div className="flex items-center gap-2 text-sm text-[#9a9a9a]">
            <span>Designed with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>by</span>
            <a
              href="https://domstack.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-[#018aBE] transition-colors duration-300"
            >
              Dominion
            </a>
            {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#1a1a1a] text-[#9a9a9a] hover:bg-[#018aBE] hover:text-white mx-4 transition-all duration-300 hover:scale-110 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
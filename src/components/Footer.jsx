import React from "react"
import { ArrowUp } from "lucide-react"
import { Link } from "react-router-dom"
import { FaXTwitter, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa6"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    { icon: FaInstagram, url: "https://www.instagram.com/lammyde.art?igsh=MWs5b2ZjOWFjeHBvMQ%3D%3D&utm_source=qr", label: "Instagram" },
    { icon: FaXTwitter, url: "https://x.com/oyebintan?s=21", label: "Twitter" },
    { icon: FaWhatsapp, url: "http://Wa.me/2347015848547", label: "WhatsApp" },
    { icon: FaEnvelope, url: "mailto:lammydeart@gmail.com", label: "Email" },
  ]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/project" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <footer className="px-6 lg:px-14 py-7 border-t border-[rgba(147,197,253,0.1)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 flex-wrap">
        <Link to="/" className="font-display font-bold text-[15px] text-[#F3F6FB]">
          Lammy
          <span className="bg-gradient-to-br from-[#1D4ED8] to-[#7DD3FC] bg-clip-text text-transparent">
            deart
          </span>
        </Link>

        <div className="flex gap-6 flex-wrap justify-center">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-[12.5px] text-[rgba(219,234,254,0.55)] hover:text-white transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex items-center justify-center w-8 h-8 rounded-full border border-[rgba(147,197,253,0.18)] text-[rgba(219,234,254,0.6)] hover:text-white hover:border-[#60A5FA] transition-colors duration-300"
            >
              <social.icon size={13} />
            </a>
          ))}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex items-center justify-center w-8 h-8 rounded-full border border-[rgba(147,197,253,0.18)] text-[rgba(219,234,254,0.6)] hover:text-white hover:border-[#60A5FA] transition-colors duration-300"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-5 pt-4 border-t border-[rgba(147,197,253,0.08)] flex flex-col md:flex-row items-center justify-between gap-2 text-[12px] text-[rgba(219,234,254,0.35)]">
        <span>&copy; {currentYear} Lammydeart. All rights reserved.</span>
        <span>
          Designed with care by{" "}
          <a
            href="https://domstack.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[rgba(219,234,254,0.55)] hover:text-white transition-colors duration-300"
          >
            Dominion
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer

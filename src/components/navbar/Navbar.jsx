import React, { useState, useEffect, useRef } from "react"
import { FaXTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Logo = () => (
  <Link to="/" className="font-display font-bold text-[19px] text-[#F3F6FB] tracking-[0.02em] z-50">
    Lammy
    <span className="bg-gradient-to-br from-[#1D4ED8] to-[#7DD3FC] bg-clip-text text-transparent">
      deart
    </span>
  </Link>
)

const Button = () => (
  <Link
    to="/contact"
    className="hidden lg:flex items-center gap-2 px-[18px] py-[9px] rounded-full bg-gradient-to-br from-[#1D4ED8] to-[#60A5FA] text-white text-[13.5px] font-semibold transition-transform duration-300 hover:scale-105"
  >
    Let's talk <span>&#8594;</span>
  </Link>
)

const Checkbox = ({ setIsMenuVisible, checkboxRef }) => (
  <div className="lg:hidden">
    <input
      ref={checkboxRef}
      type="checkbox"
      id="menu-toggle"
      className="hidden peer"
      onChange={(e) => setIsMenuVisible(e.target.checked)}
    />
    <label
      htmlFor="menu-toggle"
      className="flex flex-col gap-1.5 cursor-pointer z-50 relative"
    >
      <span className="w-7 h-0.5 bg-white transition-all duration-300 peer-checked:rotate-45 peer-checked:translate-y-2"></span>
      <span className="w-7 h-0.5 bg-white transition-all duration-300 peer-checked:opacity-0"></span>
      <span className="w-7 h-0.5 bg-white transition-all duration-300 peer-checked:-rotate-45 peer-checked:-translate-y-2"></span>
    </label>
  </div>
)

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef(null)
  const checkboxRef = useRef(null)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuVisible &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        closeMenu()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuVisible])

  const closeMenu = () => {
    setIsMenuVisible(false)
    if (checkboxRef.current && checkboxRef.current.checked) {
      checkboxRef.current.click()
    }
  }

  const socialLinks = [
    { icon: FaXTwitter, href: "https://x.com/oyebintan?s=21", label: "Twitter" },
    { icon: FaInstagram, href: "https://www.instagram.com/lammyde.art", label: "Instagram" },
    { icon: FaWhatsapp, href: "http://Wa.me/2347015848547", label: "WhatsApp" },
  ]

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/project" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[rgba(147,197,253,0.1)] ${
          scrolled
            ? "bg-[#03050a]/95 backdrop-blur-xl shadow-lg shadow-black/20"
            : "bg-[#03050a]/75 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-4 py-2 text-[rgba(219,234,254,0.75)] hover:text-white text-[13.5px] font-medium transition-colors duration-300 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#60A5FA] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              ))}
            </div>

            {/* Desktop Right Section */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Social Icons */}
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-full border border-[rgba(147,197,253,0.2)] text-[rgba(219,234,254,0.7)] hover:bg-gradient-to-br hover:from-[#1D4ED8] hover:to-[#60A5FA] hover:text-white hover:border-transparent transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>

              {/* Divider */}
              <div className="w-px h-6 bg-[rgba(147,197,253,0.15)]"></div>

              {/* Button */}
              <Button />
            </div>

            {/* Mobile Menu Toggle */}
            <Checkbox setIsMenuVisible={setIsMenuVisible} checkboxRef={checkboxRef} />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-screen w-72 bg-[#03050a] border-l border-[rgba(147,197,253,0.12)] transform transition-transform duration-300 ease-in-out z-40 lg:hidden ${
          isMenuVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6">
          {/* Mobile Navigation Links */}
          <div className="flex flex-col gap-2 mb-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className="text-[rgba(219,234,254,0.75)] hover:text-white hover:bg-[rgba(147,197,253,0.06)] px-4 py-3 rounded-lg font-medium transition-all duration-300"
                style={{
                  animation: isMenuVisible ? `slideIn 0.3s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile CTA Button */}
          <Link
            to="/contact"
            onClick={closeMenu}
            className="bg-gradient-to-br from-[#1D4ED8] to-[#60A5FA] text-white font-semibold py-3 px-6 rounded-full text-center transition-transform duration-300 mb-8"
          >
            Let's talk
          </Link>

          {/* Mobile Social Links */}
          <div className="mt-auto pb-8">
            <p className="text-[rgba(219,234,254,0.5)] text-sm mb-4">Follow me</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-[rgba(147,197,253,0.2)] text-[rgba(219,234,254,0.7)] hover:bg-gradient-to-br hover:from-[#1D4ED8] hover:to-[#60A5FA] hover:text-white hover:border-transparent transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuVisible && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}

export default Navbar
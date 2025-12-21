import React, { useState, useEffect, useRef } from "react"
import { FaXTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6"
import logo from "../../assets/logo.png"

const Button = () => (
  <button className="hidden lg:block bg-[#018aBE] hover:bg-[#0156a8] px-4 py-2 rounded-lg font-semibold text-white transition-colors duration-300">
    Hire Me!
  </button>
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0d0d0d]/95 backdrop-blur-xl shadow-lg shadow-black/20"
            : "bg-[#0d0d0d]/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center z-50">
              <img src={logo} alt="Logo" className="h-8 lg:h-6 transition-all duration-300" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  className="relative px-4 py-2 text-[#c1c1c1] hover:text-white font-medium transition-colors duration-300 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#018aBE] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
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
                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#1a1a1a] text-[#c1c1c1] hover:bg-[#018aBE] hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>

              {/* Divider */}
              <div className="w-px h-6 bg-[#202020]"></div>

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
        className={`fixed top-0 right-0 h-screen w-72 bg-[#0d0d0d] border-l border-[#202020] transform transition-transform duration-300 ease-in-out z-40 lg:hidden ${
          isMenuVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6">
          {/* Mobile Navigation Links */}
          <div className="flex flex-col gap-2 mb-8">
            {navLinks.map((link, index) => (
              <a
                key={link.path}
                href={link.path}
                onClick={closeMenu}
                className="text-[#c1c1c1] hover:text-white hover:bg-[#1a1a1a] px-4 py-3 rounded-lg font-medium transition-all duration-300"
                style={{
                  animation: isMenuVisible ? `slideIn 0.3s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile CTA Button */}
          <a
            href="/contact"
            className="bg-[#018aBE] hover:bg-[#0156a8] text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors duration-300 mb-8"
          >
            Hire Me!
          </a>

          {/* Mobile Social Links */}
          <div className="mt-auto pb-8">
            <p className="text-[#9a9a9a] text-sm mb-4">Follow me</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#1a1a1a] text-[#c1c1c1] hover:bg-[#018aBE] hover:text-white transition-all duration-300"
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
      <style jsx>{`
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
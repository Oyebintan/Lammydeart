import React, { useState, useEffect, useRef } from "react"
import { FaXTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6"
import { ArrowRight } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

const MotionLink = motion.create(Link)

const Logo = () => (
  <Link to="/" className="font-display font-bold text-[19px] text-[#F3F6FB] tracking-[0.02em] z-50">
    Lammy
    <span className="animate-gradient bg-gradient-to-br from-[#1D4ED8] via-[#38BDF8] to-[#7DD3FC] bg-clip-text text-transparent">
      deart
    </span>
  </Link>
)

const Button = () => (
  <MotionLink
    to="/contact"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.96 }}
    transition={{ type: "spring", stiffness: 400, damping: 20 }}
    className="animate-gradient hidden lg:flex items-center gap-2 px-[18px] py-[9px] rounded-full bg-gradient-to-br from-[#1D4ED8] via-[#3B82F6] to-[#60A5FA] text-white text-[13.5px] font-semibold"
  >
    Let's talk <ArrowRight size={15} strokeWidth={2.5} />
  </MotionLink>
)

const Checkbox = ({ setIsMenuVisible, checkboxRef, toggleRef }) => (
  <div ref={toggleRef} className="lg:hidden">
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

const menuVariants = {
  hidden: { x: "100%" },
  show: { x: 0, transition: { type: "spring", stiffness: 300, damping: 32 } },
  exit: { x: "100%", transition: { duration: 0.25, ease: "easeIn" } },
}

const linkListVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
}

const linkItemVariants = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
}

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hovered, setHovered] = useState(null)
  const menuRef = useRef(null)
  const checkboxRef = useRef(null)
  const toggleRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock background scroll while the mobile menu is open
  useEffect(() => {
    if (isMenuVisible) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuVisible])

  useEffect(() => {
    const handleClickOutside = (event) => {
      // The hamburger must be excluded here. It sits outside the drawer, so
      // without this its mousedown ran closeMenu() (un-checking the box) and
      // then the label's own click re-checked it — the toggle could open the
      // menu but never close it, leaving body scroll locked.
      if (
        isMenuVisible &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !toggleRef.current?.contains(event.target)
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
        // Fully opaque, not /75–/95 as before: at those values 5–25% of the page
        // scrolled through the bar by design, which read as content bleeding
        // above the nav. Depth now comes from the border + shadow instead.
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[rgba(255,255,255,0.08)] will-change-transform bg-[#03050a] pt-[env(safe-area-inset-top,0px)] ${
          scrolled || isMenuVisible ? "shadow-lg shadow-black/30" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            <Logo />

            {/* Desktop Navigation */}
            <div
              className="hidden lg:flex items-center gap-1"
              onMouseLeave={() => setHovered(null)}
            >
              {navLinks.map((link, i) => {
                const isCurrent = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onMouseEnter={() => setHovered(i)}
                    className={`relative px-4 py-2 text-[13.5px] font-medium transition-colors duration-300 ${
                      isCurrent ? "text-white" : "text-[rgba(219,234,254,0.75)] hover:text-white"
                    }`}
                  >
                    {hovered === i && (
                      <motion.span
                        layoutId="nav-hover-pill"
                        className="absolute inset-0 rounded-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.12)]"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                    {isCurrent && (
                      <motion.span
                        layoutId="nav-active-dot"
                        className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#60A5FA]"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Desktop Right Section */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Social Icons */}
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    className="flex items-center justify-center w-9 h-9 rounded-full border border-[rgba(255,255,255,0.16)] text-[rgba(219,234,254,0.7)] hover:bg-gradient-to-br hover:from-[#1D4ED8] hover:to-[#60A5FA] hover:text-white hover:border-transparent transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>

              {/* Divider */}
              <div className="w-px h-6 bg-[rgba(255,255,255,0.12)]"></div>

              {/* Button */}
              <Button />
            </div>

            {/* Mobile Menu Toggle */}
            <Checkbox
              setIsMenuVisible={setIsMenuVisible}
              checkboxRef={checkboxRef}
              toggleRef={toggleRef}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuVisible && (
          <motion.div
            key="mobile-menu"
            ref={menuRef}
            variants={menuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed inset-y-0 right-0 w-72 bg-[#03050a] border-l border-[rgba(255,255,255,0.1)] z-40 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col h-full pt-[calc(6rem+env(safe-area-inset-top,0px))] px-6">
              <motion.div
                variants={linkListVariants}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-2 mb-8"
              >
                {navLinks.map((link) => (
                  <motion.div key={link.path} variants={linkItemVariants}>
                    <Link
                      to={link.path}
                      onClick={closeMenu}
                      className="block text-[rgba(219,234,254,0.75)] hover:text-white hover:bg-[rgba(255,255,255,0.05)] px-4 py-3 rounded-lg font-medium transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Mobile CTA Button */}
              <MotionLink
                to="/contact"
                onClick={closeMenu}
                whileTap={{ scale: 0.96 }}
                className="animate-gradient bg-gradient-to-br from-[#1D4ED8] via-[#3B82F6] to-[#60A5FA] text-white font-semibold py-3 px-6 rounded-full text-center mb-8"
              >
                Let's talk
              </MotionLink>

              {/* Mobile Social Links */}
              {/* Extra bottom room so "Follow me" clears the mobile browser's
                  bottom toolbar instead of sitting underneath it */}
              <div className="mt-auto pb-8 pb-[max(2rem,env(safe-area-inset-bottom))]">
                <p className="text-[rgba(219,234,254,0.5)] text-sm mb-4">Follow me</p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full border border-[rgba(255,255,255,0.16)] text-[rgba(219,234,254,0.7)] hover:bg-gradient-to-br hover:from-[#1D4ED8] hover:to-[#60A5FA] hover:text-white hover:border-transparent transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isMenuVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // Opaque: at /95 the remaining 5% let section headings show through
            // behind the open menu
            className="fixed inset-0 bg-[#03050a] z-30 lg:hidden"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar

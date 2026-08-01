import React, { useState, useEffect, useRef } from "react"
import { FaXTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6"
import { ArrowRight, Menu, X } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

const MotionLink = motion.create(Link)

const Logo = () => (
  <Link to="/" className="font-display font-bold text-[19px] text-[#FAFAFA] tracking-[0.02em] z-50">
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

// Real Menu/X icons on a button, replacing the hidden-checkbox + CSS-morph
// hamburger. Smaller than the old 28px bars, gives an unambiguous X to close
// with, and drops the checkbox .click() round-trip that previously let the
// toggle open the menu but never close it.
const MenuToggle = ({ isOpen, onToggle, toggleRef }) => (
  <button
    ref={toggleRef}
    type="button"
    onClick={onToggle}
    aria-label={isOpen ? "Close menu" : "Open menu"}
    aria-expanded={isOpen}
    className="lg:hidden -mr-1 w-11 h-11 flex items-center justify-center rounded-full text-[#FAFAFA] transition-colors duration-300 hover:bg-[rgba(255,255,255,0.06)] active:bg-[rgba(255,255,255,0.1)]"
  >
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={isOpen ? "close" : "open"}
        initial={{ opacity: 0, rotate: isOpen ? -90 : 90 }}
        animate={{ opacity: 1, rotate: 0 }}
        exit={{ opacity: 0, rotate: isOpen ? 90 : -90 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="flex"
      >
        {isOpen ? <X size={19} strokeWidth={2.5} /> : <Menu size={21} strokeWidth={2.5} />}
      </motion.span>
    </AnimatePresence>
  </button>
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
      // The toggle must be excluded here. It sits outside the drawer, so
      // without this its mousedown would close the menu and its own click would
      // then reopen it — the button could open but never close.
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

  const closeMenu = () => setIsMenuVisible(false)

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
        // Frosted rather than either fully opaque or plainly see-through. The
        // earlier bleed-through was the blended overlay painting above this bar,
        // not the bar's own alpha, so glass is safe again — but it needs the
        // blur to work: with no backdrop-filter this would just be a translucent
        // panel with legible content sliding under it. index.css falls back to
        // solid where backdrop-filter is unsupported.
        // 0.88 is measured, not guessed: sampling the bar's interior while the
        // page scrolls under it gives a channel spread of 12 (0 when fully
        // opaque, 26 at 0.72 where the text behind was still readable). Enough
        // for the glass to pick up what passes under it, not enough to read.
        className={`nav-glass fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.88)] backdrop-blur-xl backdrop-saturate-150 pt-[env(safe-area-inset-top,0px)] ${
          scrolled || isMenuVisible ? "shadow-lg shadow-black/30" : ""
        }`}
      >
        {/* Opaque shim pinned directly above the nav, independent of any
            safe-area reasoning. If the nav's top edge is the true top of the
            screen this sits off-screen and does nothing. If anything ever
            insets the nav downward — safe area, browser chrome, a future
            layout change — this covers the gap so page content can never
            appear above the bar. Cheap insurance for a failure mode that
            can't be reproduced outside a real device. */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-full h-60 bg-[#000000] pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-[56px] lg:h-16">
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
                      isCurrent ? "text-white" : "text-[rgba(255,255,255,0.82)] hover:text-white"
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
                    className="flex items-center justify-center w-9 h-9 rounded-full border border-[rgba(255,255,255,0.16)] text-[rgba(255,255,255,0.78)] hover:bg-gradient-to-br hover:from-[#1D4ED8] hover:to-[#60A5FA] hover:text-white hover:border-transparent transition-colors duration-300"
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
            <MenuToggle
              isOpen={isMenuVisible}
              onToggle={() => setIsMenuVisible((v) => !v)}
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
            className="fixed inset-y-0 right-0 w-72 bg-[#000000] border-l border-[rgba(255,255,255,0.1)] z-40 lg:hidden overflow-y-auto"
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
                      className="block text-[rgba(255,255,255,0.82)] hover:text-white hover:bg-[rgba(255,255,255,0.05)] px-4 py-3 rounded-lg font-medium transition-all duration-300"
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
                <p className="text-[rgba(255,255,255,0.62)] text-sm mb-4">Follow me</p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full border border-[rgba(255,255,255,0.16)] text-[rgba(255,255,255,0.78)] hover:bg-gradient-to-br hover:from-[#1D4ED8] hover:to-[#60A5FA] hover:text-white hover:border-transparent transition-all duration-300"
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
            className="fixed inset-0 bg-[#000000] z-30 lg:hidden"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar

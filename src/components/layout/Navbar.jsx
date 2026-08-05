import { useState, useEffect, useRef } from "react"
import { ArrowRight, Menu, X } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock"
import { socialLinks } from "../../data/site"
import { MotionLink, easeOut, springPress, springTap } from "../../lib/motion"

// Module scope — these were rebuilt on every render inside the component
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/project" },
  { name: "Contact", path: "/contact" },
]


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
    transition={springPress}
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

const linkListVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.06 } },
}

const linkItemVariants = {
  hidden: { opacity: 0, y: -8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28, ease: easeOut } },
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

  // Shared with the lightbox. This used to write `""` unconditionally while the
  // lightbox saved and restored the previous value, so opening and closing the
  // menu over an open lightbox destroyed the lightbox's lock.
  useBodyScrollLock(isMenuVisible)

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

  return (
    <>
      {/* Top-edge scrim. A floating pill necessarily leaves page content visible
          above and beside it — that is the look — but raw artwork scrolling
          past the screen edge reads as broken, and this is the same strip that
          caused so much trouble on iOS. This fades content out toward the top
          edge so it never appears "extremely visible" there. Deliberately NOT
          blended and sitting BELOW the nav (z-40 vs z-50): a full-viewport
          fixed layer with mix-blend-mode above the nav was the original iOS
          bug, and this must not repeat it. */}
      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 h-28 z-40 pointer-events-none bg-gradient-to-b from-black via-black/80 to-transparent"
      />

      <header className="fixed inset-x-0 top-0 z-50 px-3 sm:px-4 pt-[calc(0.6rem+env(safe-area-inset-top,0px))]">
      <nav
        // Floating capsule rather than a full-width bar. The fill stays heavy
        // (0.72 at rest, 0.9 once scrolled) with a strong blur so page content
        // passing underneath tints it but never becomes readable — the same
        // measured constraint the old sealed bar had.
        className={`nav-glass mx-auto flex h-14 w-full max-w-5xl items-center justify-between rounded-full pl-5 pr-3 transition-all duration-300 backdrop-blur-xl backdrop-saturate-150 border ${
          scrolled || isMenuVisible
            ? "bg-[rgba(0,0,0,0.9)] border-[rgba(255,255,255,0.12)] shadow-lg shadow-black/50"
            : "bg-[rgba(0,0,0,0.72)] border-[rgba(255,255,255,0.07)]"
        }`}
      >
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
                    transition={springTap}
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
      </nav>
      </header>

      {/* Mobile menu — a panel that drops out of the pill rather than a drawer
          sliding in from the edge, so it reads as part of the same floating
          object. Links stagger in on the shared ease-out curve. */}
      <AnimatePresence>
        {isMenuVisible && (
          <motion.div
            key="mobile-menu"
            ref={menuRef}
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98, transition: { duration: 0.18, ease: "easeIn" } }}
            transition={{ duration: 0.32, ease: easeOut }}
            className="fixed inset-x-3 sm:inset-x-4 top-[calc(4.4rem+env(safe-area-inset-top,0px))] z-50 lg:hidden origin-top rounded-[1.75rem] border border-[rgba(255,255,255,0.12)] bg-[rgba(0,0,0,0.94)] backdrop-blur-xl shadow-2xl shadow-black/60 overflow-hidden"
          >
            <motion.div
              variants={linkListVariants}
              initial="hidden"
              animate="show"
              className="flex flex-col p-3"
            >
              {navLinks.map((link) => {
                const isCurrent = location.pathname === link.path
                return (
                  <motion.div key={link.path} variants={linkItemVariants}>
                    <Link
                      to={link.path}
                      onClick={closeMenu}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-medium transition-colors duration-200 ${
                        isCurrent
                          ? "bg-[rgba(255,255,255,0.07)] text-white"
                          : "text-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.05)] hover:text-white"
                      }`}
                    >
                      {link.name}
                      {isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />}
                    </Link>
                  </motion.div>
                )
              })}

              <motion.div variants={linkItemVariants} className="mt-2 px-1">
                <MotionLink
                  to="/contact"
                  onClick={closeMenu}
                  whileTap={{ scale: 0.97 }}
                  className="animate-gradient block bg-gradient-to-br from-[#1D4ED8] via-[#3B82F6] to-[#60A5FA] text-white font-semibold py-3 px-6 rounded-full text-center"
                >
                  Let&apos;s talk
                </MotionLink>
              </motion.div>

              <motion.div
                variants={linkItemVariants}
                className="flex items-center justify-center gap-3 pt-4 pb-1"
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-11 h-11 rounded-full border border-[rgba(255,255,255,0.14)] text-[rgba(255,255,255,0.7)] hover:text-white hover:border-[rgba(255,255,255,0.35)] transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </motion.div>
            </motion.div>
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
            className="fixed inset-0 bg-[rgba(0,0,0,0.7)] backdrop-blur-sm z-40 lg:hidden"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar

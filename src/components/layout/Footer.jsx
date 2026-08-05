import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { Link } from "react-router-dom"
import { fadeUp, viewportOnce } from "../../lib/motion"
import { socialLinks, emailLink } from "../../data/site"

// Footer is the one place that also offers email
const footerSocials = [...socialLinks, emailLink]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/project" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <motion.footer
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="px-6 lg:px-14 pt-7 pb-[calc(1.75rem+env(safe-area-inset-bottom,0px))] border-t border-[rgba(255,255,255,0.08)]"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 flex-wrap">
        <Link to="/" className="font-display font-bold text-[15px] text-[#FAFAFA] py-1 inline-block">
          Lammy
          <span className="animate-gradient bg-gradient-to-br from-[#1D4ED8] via-[#38BDF8] to-[#7DD3FC] bg-clip-text text-transparent">
            deart
          </span>
        </Link>

        {/* -my-2 py-2 keeps the visual spacing identical while giving each link a
            44px-tall hit area; they measured 33x19 before. */}
        <div className="flex gap-6 flex-wrap justify-center -my-2">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-[12.5px] text-[rgba(255,255,255,0.65)] hover:text-white transition-colors duration-300 py-3 inline-flex items-center"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {footerSocials.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{ scale: 1.12, y: -2 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="flex items-center justify-center w-8 h-8 min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 rounded-full border border-[rgba(255,255,255,0.14)] text-[rgba(255,255,255,0.70)] hover:text-white hover:border-[#60A5FA]"
            >
              <social.icon size={13} />
            </motion.a>
          ))}
          <motion.button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            whileHover={{ scale: 1.12, y: -2 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            className="flex items-center justify-center w-8 h-8 min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 rounded-full border border-[rgba(255,255,255,0.14)] text-[rgba(255,255,255,0.70)] hover:text-white hover:border-[#60A5FA]"
          >
            <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-5 pt-4 border-t border-[rgba(255,255,255,0.06)] text-center text-[12px] text-[rgba(255,255,255,0.55)]">
        <span>&copy; {currentYear} Lammydeart. All rights reserved.</span>
      </div>
    </motion.footer>
  )
}

export default Footer

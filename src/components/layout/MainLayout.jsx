import { Outlet, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useScrollToTop } from "../../hooks/useScrollToTop"
import { easeOut } from "../../lib/motion"

const MainLayout = () => {
  const location = useLocation()
  useScrollToTop()

  return (
    <div>
      {/* Every page carries a fixed nav, so a keyboard user otherwise tabs
          through the logo, four links, three socials and a CTA before reaching
          the content — on every navigation. Visually hidden until focused. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-full focus:bg-[#FAFAFA] focus:text-[#000000] focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>
      <Navbar />
      {/* main, not div: the page had header and footer landmarks but no main,
          so "jump to main content" had nothing to jump to. tabIndex -1 lets the
          skip link move focus here, not just the scroll position. */}
      <motion.main
        id="main"
        tabIndex={-1}
        key={location.pathname}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: easeOut }}
        className="focus:outline-none"
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  )
}

export default MainLayout

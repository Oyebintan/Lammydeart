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
      <Navbar />
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: easeOut }}
      >
        <Outlet />
      </motion.div>
      <Footer />
    </div>
  )
}

export default MainLayout

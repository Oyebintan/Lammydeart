import { Outlet, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useScrollToTop } from "../../hooks/useScrollToTop"

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
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <Outlet />
      </motion.div>
      <Footer />
    </div>
  )
}

export default MainLayout

import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'

const MainLayout = () => {
  const location = useLocation()

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

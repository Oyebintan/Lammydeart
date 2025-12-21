import React from 'react'
import { Outlet } from 'react-router-dom'
// import Navbar from '../components/Navbar'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Contact isContactPage={true}/>
      <Footer />
    </div>
  )
}

export default MainLayout

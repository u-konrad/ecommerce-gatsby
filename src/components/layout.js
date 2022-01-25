import React, { useEffect } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useState } from "react"
import Sidebar from "./Sidebar"


const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

 
  const toggleSidebar = () => {
    setIsOpen(prev => !prev)
  }
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </>
  )
}

export default Layout

import React, { useEffect } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useState } from "react"
import Sidebar from "./Sidebar"
import { useSelector } from "react-redux"
import Notification from "./Notification"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const alert = useSelector(state => state.alert)

  console.log(alert)

  const toggleSidebar = () => {
    setIsOpen(prev => !prev)
  }
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Notification {...alert} />
      {children}
      <Footer />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </>
  )
}

export default Layout

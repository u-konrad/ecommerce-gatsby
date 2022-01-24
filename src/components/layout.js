import React, { useEffect } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useState } from "react"
import Sidebar from "./Sidebar"
import { onAuthStateChanged } from "firebase/auth"
import { auth, createUser } from "../firebase/firebase.utils"
import { onValue, ref } from "firebase/database"
import { userActions } from "../store/store"
import { useDispatch } from "react-redux"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, async user => {
      if (user) {
        const userRef = createUser(user)

        onValue(userRef, snapshot => {
          const data = snapshot.val()
          dispatch(userActions.setUser(data))
        })
      }
    })
  }, [])

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

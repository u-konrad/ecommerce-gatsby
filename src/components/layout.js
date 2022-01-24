import React, { useEffect } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useState } from "react"
import Sidebar from "./Sidebar"
import { onAuthStateChanged } from "firebase/auth"
import { auth, database } from "../firebase/firebase.utils"
import { onValue, ref } from "firebase/database"
import { userActions } from "../store/store"
import { useDispatch } from "react-redux"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        const uid = user.uid
        const userRef = ref(database, "users/" + uid)
        onValue(userRef, snapshot => {
          const data = snapshot.val()
          dispatch(userActions.setUser(data))
        })
      } else {
        console.log("no user")
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

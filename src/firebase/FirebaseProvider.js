import React from "react"
import { onAuthStateChanged } from "firebase/auth"
import useFirebase from "../firebase/use-firebase"
import { onValue } from "firebase/database"
import { userActions } from "../store/store"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

const FirebaseProvider = ({ children }) => {
  const dispatch = useDispatch()
  const { instance, createUser } = useFirebase()

  useEffect(() => {
    if (!instance?.auth) return;
    const unsubscribeAuthState = onAuthStateChanged(instance.auth, async user => {
      if (user) {
        const userRef = createUser(user)
        onValue(userRef, snapshot => {
          const data = snapshot.val()
          dispatch(userActions.setUser({...data}))
        })
      }
    })

    return () => {
      unsubscribeAuthState()
    }
  }, [instance, dispatch])

  return children
}

export default FirebaseProvider

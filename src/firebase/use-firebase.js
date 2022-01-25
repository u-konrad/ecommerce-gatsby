import React from "react"
import getFirebase from "./firebase"
import { getDatabase, onValue, ref, set } from "firebase/database"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useState, useEffect } from "react"

const useFirebase = () => {
  const [instance, setInstance] = useState(null)

  useEffect(() => {
    // setInstance(getFirebase())
    const firebase = getFirebase()
    const auth = getAuth(firebase)
    const database = getDatabase(firebase)
    setInstance({ auth, database })
  }, [])

  function writeUserData(userId, data) {
    set(ref(instance.database, "users/" + userId), {
      ...data,
    })
  }

  const createUser = (user, additionalData) => {
    if (!user) return
    const { uid } = user

    const userRef = ref(instance.database, "users/" + uid)

    onValue(userRef, snapShot => {
      if (!snapShot.exists()) {
        const { displayName, email } = user
        const createdAt = Date.now()
        try {
          writeUserData(uid, {
            displayName,
            email,
            createdAt,
            ...additionalData,
          })
        } catch (error) {
          console.log(error.message)
        }
      }
    })

    return userRef
  }

  const provider = new GoogleAuthProvider()
  provider.addScope("profile")
  provider.addScope("email")
  const signInWithGoogle = async () => await signInWithPopup(instance.auth, provider)

  return {
    instance,
    createUser,
    signInWithGoogle,
  }
}

export default useFirebase

import React from 'react';
import { onAuthStateChanged } from "firebase/auth"
import { auth, createUser } from "./firebase.utils"
import { onValue, ref } from "firebase/database"
import { userActions } from "../store/store"
import { useDispatch } from "react-redux"
import { useEffect } from "react"


const FirebaseProvider = ({children}) => {
    const dispatch = useDispatch()

    

    useEffect(() => {
        const unsubscribeAuthState = onAuthStateChanged(auth, async user => {
          if (user) {
            const userRef = createUser(user)
            onValue(userRef, snapshot => {
              const data = snapshot.val()
              dispatch(userActions.setUser(data))
            })
          }
        })
    
        return () => {
          console.log("unsub")
          unsubscribeAuthState()
        }
      }, [])
    
  return children;
};

export default FirebaseProvider;

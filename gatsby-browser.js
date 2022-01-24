import "bootstrap/dist/css/bootstrap.min.css"
import "./src/assets/css/utils.css"
import "./src/assets/css/global.css"
import { onAuthStateChanged } from "firebase/auth"
import { auth,database } from "./src/firebase/firebase.utils"
import {  onValue, ref, } from "firebase/database"


import wrapWithProvider from "./wrap-with-provider"
export const wrapRootElement = wrapWithProvider

export const onClientEntry = () => {
  onAuthStateChanged(auth, user => {
    if (user) {

      const uid = user.uid
      const userRef = ref(database, "users/" + uid)
      onValue(userRef, snapshot => {
        const data = snapshot.val()
        console.log(data)
      })
    } else {
        console.log('no user')

    }
  })
}

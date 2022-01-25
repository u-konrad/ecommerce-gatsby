import { initializeApp } from "firebase/app"
import { getDatabase, onValue, ref, set } from "firebase/database"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

export const firebaseConfig = {
  apiKey: "AIzaSyCV-17Yh5Q2km0nY5yXL1YXPbzTBei6T3k",
  authDomain: "clothing-ecommerce-b4c4b.firebaseapp.com",
  projectId: "clothing-ecommerce-b4c4b",
  storageBucket: "clothing-ecommerce-b4c4b.appspot.com",
  messagingSenderId: "442076322213",
  appId: "1:442076322213:web:d56253e410856a0d92704c",
  measurementId: "G-5G8VHSHK51",
  databaseURL:
    "https://clothing-ecommerce-b4c4b-default-rtdb.europe-west1.firebasedatabase.app/",
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const database = getDatabase(app)

function writeUserData(userId, data) {
  set(ref(database, "users/" + userId), {
    ...data,
  })
}

export const createUser = (user, additionalData) => {
  if (!user) return
  const { uid } = user

  const userRef = ref(database, "users/" + uid)

  onValue(userRef, snapShot => {
    if (!snapShot.exists()) {
      const { displayName, email } = user
      const createdAt = Date.now()
      try {
        writeUserData(uid, { displayName, email, createdAt,...additionalData })
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
export const signInWithGoogle = async () =>
  await signInWithPopup(auth, provider)

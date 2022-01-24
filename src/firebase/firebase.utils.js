import { initializeApp } from "firebase/app"
import { getDatabase, onValue, ref, set } from "firebase/database"
import { getAuth } from "firebase/auth"

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

async function writeUserData(userId, name, email, createdAt) {
  await set(ref(database, "users/" + userId), {
    username: name,
    email: email,
    createdAt: createdAt,
  })
}

export const createUser = async (user, name) => {
  if (!user) return
  console.log(user)
  const { email, uid } = user

  const userRef = ref(database, "users/" + uid)

  onValue(userRef, snapShot => {
    console.log(snapShot.exists())
    if (!snapShot.exists()) {
      const createdAt = Date.now()
      try {
        writeUserData(uid, name, email, createdAt)
      } catch (error) {
        console.log(error.message)
      }
    }
  })

  return userRef
}

// const provider = new auth.GoogleAuthProvider()
// provider.setCustomParameters({ prompt: "select_account" })
// export const signInWithGoogle = () => auth.signInWithPopup(provider)

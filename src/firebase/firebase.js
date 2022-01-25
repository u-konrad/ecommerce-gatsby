import { initializeApp } from "firebase/app"

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

let instance = null;

export default function getFirebase() {
  if (typeof window !== 'undefined') {
    if (instance) return instance;
    instance = initializeApp(firebaseConfig);
    return instance;
  }

  return null;
}
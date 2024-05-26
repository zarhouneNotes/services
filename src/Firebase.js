import {initializeApp} from 'firebase/app'
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'
import {  getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useEffect } from "react";
import { useState } from "react";
const firebaseConfig = {
    apiKey: "AIzaSyDzYNq1gu0vTIMtJvYO3NZHYbedVCKljmY",
    authDomain: "services-cd3d1.firebaseapp.com",
    projectId: "services-cd3d1",
    storageBucket: "services-cd3d1.appspot.com",
    messagingSenderId: "735591150726",
    appId: "1:735591150726:web:6e1e73ca8e2277df164d07",
    measurementId: "G-G6MWCH7L60"
  };


  const app = initializeApp(firebaseConfig)
  export const db = getFirestore(app)
  export const  storage = getStorage()

  const auth = getAuth()

export const login = (email , password) =>{
    return signInWithEmailAndPassword(auth , email , password)
}

export const useAuth = ()=>{
    const [currentUser , setCurrentUser] = useState(null)
    useEffect(() => {
     const unsub = onAuthStateChanged(auth , (user)=>{setCurrentUser(user)})
     return unsub ;
    })
    return currentUser ;
}

export  function Logout() {
    return signOut(auth)
}
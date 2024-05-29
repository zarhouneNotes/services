import {initializeApp} from 'firebase/app'
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'
import {  getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useEffect } from "react";
import { useState } from "react";
const firebaseConfig = {
   
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

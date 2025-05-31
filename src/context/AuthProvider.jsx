import React, { useState } from 'react'
import { AuthContext } from './Authcontext'
// import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase.config'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'

const AuthProvider = ({ children }) => {
  const [loder, setLoader] = useState(true)
   const [user, setUser] = useState(null)
  //user sineup
  const creatUser = async (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  //user login
  const loginUser = async (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  //user logout
  const logoutUser =()=>{
    setLoader(true)
    return auth.signOut(auth)
  }

  useState(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser)
      setLoader(false)
    })
    return () => unsubscribe()
  }, [])

  const authInfo = {
    creatUser,
    user,
    loder,
    loginUser,
    logoutUser,
  }
  return <AuthContext value={authInfo}>{children}</AuthContext>
}

export default AuthProvider

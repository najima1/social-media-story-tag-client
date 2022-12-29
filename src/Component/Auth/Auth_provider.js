import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'


import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/Firebase'


export const AUTH_CONTEXT_PROVIDER = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()


const Auth_context_provider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)


    // create user with email & password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //update user profile
    const updateUserProfile = (profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }

    // login user with
    //email & password
    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //sign out user
    const log_out_user = () => {
        setLoading(true)
        return signOut(auth)
    }

    // sign in with google
    // after click the button
    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // get current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])

    //provide user info from firebase
    const userInfo = {
        loading, user, setLoading, createUser, updateUserProfile, userLogin, log_out_user, loginWithGoogle
    }


    return (
        <>
            <AUTH_CONTEXT_PROVIDER.Provider value={userInfo}>
                {children}
            </AUTH_CONTEXT_PROVIDER.Provider>
        </>
    )
}

export const useAuthContext = () => {
    const context = useContext(AUTH_CONTEXT_PROVIDER)
    return context
}

export default Auth_context_provider
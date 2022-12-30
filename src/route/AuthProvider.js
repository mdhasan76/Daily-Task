import React, { createContext, useEffect, useState } from 'react';
import app from './firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"

const auth = getAuth(app)
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    //sign in with google
    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //create new user 
    function newUser(email, password) {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //Log in user
    function logInUser(email, password) {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //Update User
    const updateUser = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }

    //logout user
    const logOut = () => {
        return signOut(auth)
    }

    //obresve current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => unsubscribe();
    }, [])

    const authInfo = { user, googleLogIn, loading, setUser, newUser, logInUser, updateUser, logOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
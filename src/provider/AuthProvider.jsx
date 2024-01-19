import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
import axios from 'axios';


export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const updateUserprofile = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            // console.log(currentUser);
            // jwt get and set
            if(currentUser){
                axios.post('https://bistro-boss-server-o244c0x94-afrojamitu.vercel.app/jwt', {email: currentUser.email})
                .then(data =>{
                    // console.log(data.data.token);
                    localStorage.setItem('access-token', data.data.token)
                    setLoading(false)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
        })
        return () =>{
            return unsubscribe;
        }
    }, [])

    const AuthInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserprofile,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
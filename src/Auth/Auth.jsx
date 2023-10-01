import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import axios from 'axios';

const auth = getAuth(app);
export const UserAuth = createContext(null);
const Auth = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    const signUp = (email, password) =>{
setLoading(true);
return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email , password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUser = (loggedUser, name, photo) => {
        setLoading(true)
        return updateProfile(loggedUser, {
            displayName: name, photoURL: photo
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

            if (currentUser) { 
                axios.post("https://ena-ema-server-47ior8utm-dev-talukdar.vercel.app/jwt", {
                    email: currentUser.email
                }).then(data => { 
                    localStorage.setItem("access-token", data.data.token)
                    setLoading(false)
                })
            } else {
                setLoading(false)
                localStorage.removeItem("access-token")
            }
        })
        return () => unsubscribe();
    }, [])

    const logOut = () =>{
        return signOut(auth)
    }

    const userInfo = {
        user,
        loading,
        signUp,
        updateUser,
        signIn,
        logOut
    }

    return (
        <UserAuth.Provider value={userInfo}>
            {children}
        </UserAuth.Provider>
    );
};

export default Auth;
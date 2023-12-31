import React, { createContext, useEffect, useState } from 'react';
// import axios from 'axios';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import { app } from '../firebase.config';

export const contextProvider = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
     
    const registerUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = ()=>{
          setLoading(true);
          return signInWithPopup(auth, googleProvider)
    }
    const logoutUser = ()=>{
        setLoading(true);
        return signOut(auth);
    }
    const updateUser = (name, photo) =>{
        setLoading(true);
       return updateProfile(auth.currentUser, {
            displayName:  name, photoURL: photo
          })
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);

            // if (currentUser) {
            //     axios.post('https://language-camp-server.vercel.app/jwt', { email: currentUser.email })
            //         .then(data => {
            //             // console.log(data)
            //             localStorage.setItem('camp-access-token', data.data.token);
            //             setLoading(false)
            //         }
            //         )

            // }
            // else {
            //     localStorage.removeItem('camp-access-token')
            //     setLoading(false)
            // }
            setLoading(false)
        });
        return() =>{
               return unsubscribe();
        }
    },[])
    const infoProvider = {
        user,
        loading,
        registerUser,
        loginUser,
        googleLogin,
        logoutUser,
        updateUser,
    }
    return (
       <contextProvider.Provider value={infoProvider}>
           {children}
       </contextProvider.Provider>
    );
};

export default AuthProvider;
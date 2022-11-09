import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const UserContext = createContext();
const auth = getAuth(app);

const AuthContex = ({children}) => {
    const [loading, setloading] = useState(true);
    const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = (provider) =>{
        return signInWithPopup(auth, provider)
    }

    const logIn = (email, password) =>{
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setloading(true)
        return signOut(auth)
    }

    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log('change state', currentUser);
            setUser(currentUser);
            setloading(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])


    const authInfo = {user, createUser, loading, googleLogin, logIn, logOut  };

    return (
        <UserContext.Provider value={authInfo} >
            {children}
        </UserContext.Provider>
    );
};

export default AuthContex;
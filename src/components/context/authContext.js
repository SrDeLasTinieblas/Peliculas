import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
    onAuthStateChanged,
    signOut } from "firebase/auth";
    
import {auth} from "../../firebase";

export const authContext = createContext();

export const useAuthContext = () => {
    const context = useContext(authContext);
    if (!context) {
        throw new Error("useAuthContext must be used within a AuthProvider");
    }
    return context;
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // REGISTRA USUARIO
    const signUp = (email, password) => 
    createUserWithEmailAndPassword(auth, email, password);

    // INICIA SESION
    const login = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password);
    //const userCredentials = await signInWithEmailAndPassword(auth, email, password);
        //console.log(userCredentials);
    }
    const logout = () => signOut(auth);

    useEffect(() =>{
        //console.log("auth provider");
        onAuthStateChanged(auth, user => {
            setUser(user);
            setLoading(false);
        });
    }, [])

    return (
        <authContext.Provider value={{ signUp, login, user, logout, loading }}>{children}</authContext.Provider>
    );
}

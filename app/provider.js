'use client'
import React, { useEffect, useState, useContext } from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { AuthContext } from './_context/AuthContext'
import { useMutation } from "convex/react";
import {api} from "@/convex/_generated/api";

function Provider({children}) {
  const [user, setUser] = useState(null);
  const CreateUser = useMutation(api.users.CreateNewUser);
 
  useEffect(() => {
    const auth = getAuth(); 
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        const result = CreateUser({
          name: user.displayName,
          email: user.email,
          pictureUrl: user.photoURL
        });
        console.log("User created", result);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log("User is signed in", user);
      } else {
        // User is signed out
        console.log("User is signed out");
      }
    }
    );
    return () => {
      unsubscribe();
    }
  }
  , [])
  return (
    <div>
      <AuthContext.Provider value={{ user }}>
          <NextThemesProvider 
              attribute="class" 
              defaultTheme="dark" 
              enableSystem={true} 
              disableTransitionOnChange>
              {children}
          </NextThemesProvider>
        </AuthContext.Provider>
    </div>
  )
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
export default Provider
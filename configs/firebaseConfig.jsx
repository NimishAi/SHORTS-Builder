// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "shorts-745d0.firebaseapp.com",
  projectId: "shorts-745d0",
  storageBucket: "shorts-745d0.firebasestorage.app",
  messagingSenderId: "821841992613",
  appId: "1:821841992613:web:4af7568ff63f55532b664c",
  measurementId: "G-3NYCZFG6X2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
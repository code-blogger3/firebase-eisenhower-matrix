// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "eisenhower-matrix-196c4.firebaseapp.com",
  projectId: "eisenhower-matrix-196c4",
  storageBucket: "eisenhower-matrix-196c4.appspot.com",
  messagingSenderId: "1039428558809",
  appId: "1:1039428558809:web:7e9e1c3be6b629bdb043c8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

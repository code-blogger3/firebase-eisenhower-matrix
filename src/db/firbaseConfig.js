// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "eisenhower-matrix-5bd1c.firebaseapp.com",
  projectId: "eisenhower-matrix-5bd1c",
  storageBucket: "eisenhower-matrix-5bd1c.appspot.com",
  messagingSenderId: "529551807260",
  appId: "1:529551807260:web:d584a43edad806cf9860d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

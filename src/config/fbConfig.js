// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDETCxWpV97FZxBqx6J2bLYmh2hqHCsw9w",
  authDomain: "lenry-hs.firebaseapp.com",
  projectId: "lenry-hs",
  storageBucket: "lenry-hs.appspot.com",
  messagingSenderId: "848571336135",
  appId: "1:848571336135:web:fa34ae2fe06c10a6d5c5e2",
  measurementId: "G-KPPL57CXGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

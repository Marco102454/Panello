// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPTsqZkmV-aOedgqcAJ4VIrG2o_6f--I4",
  authDomain: "panello-utsc.firebaseapp.com",
  projectId: "panello-utsc",
  storageBucket: "panello-utsc.appspot.com",
  messagingSenderId: "744178616052",
  appId: "1:744178616052:web:28b91d1b2c6a07956ac0a1",
  measurementId: "G-NR1KFQ0GFD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app); 
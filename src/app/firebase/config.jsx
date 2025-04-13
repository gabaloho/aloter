// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGiMZxePDkP9YmfcEXQ7iGIOw0t-aLEPk",
  authDomain: "alotercomng.firebaseapp.com",
  projectId: "alotercomng",
  storageBucket: "alotercomng.firebasestorage.app",
  messagingSenderId: "701795195622",
  appId: "1:701795195622:web:2e974549bd619bb7ee7927",
  measurementId: "G-806VQ7V6MG"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// Initialize Firebase Analytics
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}


export { app, db, analytics };



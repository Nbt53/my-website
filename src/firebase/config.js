// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, } from "firebase/auth";
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJb_ZV50ZZcFYKTeG-c6hQ2y4C4IHyjXA",
    authDomain: "myportfolio-74a51.firebaseapp.com",
    projectId: "myportfolio-74a51",
    storageBucket: "myportfolio-74a51.appspot.com",
    messagingSenderId: "888290876172",
    appId: "1:888290876172:web:44fc464b18995415ac0729"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const timestamp = () => serverTimestamp();
export { db, auth, storage , timestamp}
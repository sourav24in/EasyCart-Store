// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBb8Q0-Yez-2zOimUw5-BmzTJQuFjywd3k",
    authDomain: "easycart-data.firebaseapp.com",
    projectId: "easycart-data",
    storageBucket: "easycart-data.appspot.com",
    messagingSenderId: "1008532629750",
    appId: "1:1008532629750:web:58f805bc2b766d8773a4d7"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
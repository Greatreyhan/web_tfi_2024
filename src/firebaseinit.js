// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyBwXYpbgHjGhfrOy6M5IijOP03OMSyJy3A",
    authDomain: "filtertfi2024.firebaseapp.com",
    databaseURL: "https://filtertfi2024-default-rtdb.firebaseio.com",
    projectId: "filtertfi2024",
    storageBucket: "filtertfi2024.appspot.com",
    messagingSenderId: "349423139169",
    appId: "1:349423139169:web:cdfb993268bb5854b6ed20"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getDatabase(FIREBASE_APP);
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const auth = getAuth();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhLHNY3wVYN0HlfbN9e-b0Sx4JqKkRJNo",
    authDomain: "netflixgpt-28972.firebaseapp.com",
    projectId: "netflixgpt-28972",
    storageBucket: "netflixgpt-28972.appspot.com",
    messagingSenderId: "41931242118",
    appId: "1:41931242118:web:3704dcdd376c39573c2f07",
    measurementId: "G-JLHLTTCBX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const auth = getAuth();
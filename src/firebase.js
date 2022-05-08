import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBFeCmDa9BDoX0CwrV3c6ZciWxpS-AdxQI",
    authDomain: "discord-clone-57af3.firebaseapp.com",
    projectId: "discord-clone-57af3",
    storageBucket: "discord-clone-57af3.appspot.com",
    messagingSenderId: "877147889764",
    appId: "1:877147889764:web:f3ef833196063e81977f71"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
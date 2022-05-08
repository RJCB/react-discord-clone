import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
    apiKey: process.env.REACT_APP_DISCORD_API_KEY,
    authDomain: "discord-clone-57af3.firebaseapp.com",
    projectId: "discord-clone-57af3",
    storageBucket: "discord-clone-57af3.appspot.com",
    messagingSenderId: "877147889764",
    appId: process.env.REACT_APP_DISCORD_API_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
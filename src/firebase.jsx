import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBzr1RCItDl0J36bmt2B7H9JJMWzF2Wbwc",
  authDomain: "linkedin-clone-4a436.firebaseapp.com",
  projectId: "linkedin-clone-4a436",
  storageBucket: "linkedin-clone-4a436.appspot.com",
  messagingSenderId: "746372882592",
  appId: "1:746372882592:web:f38ef5adfef264a203e9c5"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore;
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage;

export { auth, provider, storage };
export default db;
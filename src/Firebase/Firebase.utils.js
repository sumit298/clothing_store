import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqU-8v_3Khqq4pZJQdWfRUZM24t5q9IN4",
  authDomain: "clothing-store-hooks.firebaseapp.com",
  databaseURL: "https://clothing-store-hooks.firebaseio.com",
  projectId: "clothing-store-hooks",
  storageBucket: "clothing-store-hooks.appspot.com",
  messagingSenderId: "141291277521",
  appId: "1:141291277521:web:773ac3785c0b327d8049f0",
  measurementId: "G-JM11FW5T35",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


// Sign in with Google 
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const signInWithGoogle = ()=> auth.signInWithPopup(provider);


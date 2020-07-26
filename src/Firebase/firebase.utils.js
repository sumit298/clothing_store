import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBGfOH_TH8Zl1UyOTsTP7Gxt9wpCd2pmy0",
  authDomain: "clothingstore-db-f7fa2.firebaseapp.com",
  databaseURL: "https://clothingstore-db-f7fa2.firebaseio.com",
  projectId: "clothingstore-db-f7fa2",
  storageBucket: "clothingstore-db-f7fa2.appspot.com",
  messagingSenderId: "179455736677",
  appId: "1:179455736677:web:ffdf9708966f93fe5b7f8c",
  measurementId: "G-DXKMSXYC6S",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signwithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return null;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};
export default firebase;

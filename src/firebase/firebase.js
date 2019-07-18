import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBfjGFAhE38YYrFLABW6Ij0jXGb490iIxI",
  authDomain: "projetoreact-crwn-db.firebaseapp.com",
  databaseURL: "https://projetoreact-crwn-db.firebaseio.com",
  projectId: "projetoreact-crwn-db",
  storageBucket: "",
  messagingSenderId: "412738324532",
  appId: "1:412738324532:web:0df79d96a5cf1e61"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
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
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
// Auth com facebook é experimental, estou fazendo por conta própria.
const gitProvider = new firebase.auth.GithubAuthProvider();
/* Para se conectar com o Facebook, provavelmente precisarei disso:
https://projetoreact-crwn-db.firebaseapp.com/__/auth/handler
*/

googleProvider.setCustomParameters({ prompt: "select_account" });
gitProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const signInWithGit = () => auth.signInWithPopup(gitProvider);

export default firebase;

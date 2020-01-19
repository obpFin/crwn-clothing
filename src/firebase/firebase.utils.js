import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA6BwmS1cuGqThIVdZVlZANaNZP05I08UM",
  authDomain: "crwn-db-b8f78.firebaseapp.com",
  databaseURL: "https://crwn-db-b8f78.firebaseio.com",
  projectId: "crwn-db-b8f78",
  storageBucket: "crwn-db-b8f78.appspot.com",
  messagingSenderId: "753117079018",
  appId: "1:753117079018:web:0dfa9656c30776b16a7e93"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

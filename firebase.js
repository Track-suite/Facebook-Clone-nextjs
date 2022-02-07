// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAxHXaQ-hSLtBQba_i-tJ0s3UuEyA5xby4",
  authDomain: "facebook-clone-ba4fd.firebaseapp.com",
  projectId: "facebook-clone-ba4fd",
  storageBucket: "facebook-clone-ba4fd.appspot.com",
  messagingSenderId: "463764199877",
  appId: "1:463764199877:web:7f799a532bfa90654193ac",
  measurementId: "G-85E2CXBMVE",
};

// Initialize Firebase
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app(); //initializeApp(firebaseConfig);

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
// const analytics = getAnalytics(app);

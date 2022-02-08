import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";

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

const db = getFirestore();
const storageRef = getStorage();

export { db, storageRef };
// const analytics = getAnalytics(app);

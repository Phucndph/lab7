// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyCqyXV0g6pf3x-KeUEXqwvgubyR3WGWqm0",
  authDomain: "and103-project.firebaseapp.com",
  projectId: "and103-project",
  storageBucket: "and103-project.appspot.com",
  messagingSenderId: "44165852297",
  appId: "1:44165852297:web:e7b90d4d163d34bde72a58",
  measurementId: "G-EWCZJW50K3"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH=getAuth(FIREBASE_APP);
export const FIRESTORE_DB=getFirestore(FIREBASE_APP);
const analytics = getAnalytics(FIREBASE_APP);
export const STORAGE=getStorage(FIREBASE_APP);
export const DATABASE=getDatabase(FIREBASE_APP);